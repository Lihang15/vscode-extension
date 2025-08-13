package main

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/tliron/commonlog"
	"github.com/tliron/glsp"
	protocol "github.com/tliron/glsp/protocol_3_16"
	"github.com/tliron/glsp/server"
)

var workspaceRoot string

func main() {
	commonlog.Configure(2, nil)

	handler := protocol.Handler{
		Initialize: initialize,
		Initialized: initialized,
		TextDocumentDidOpen: onDidOpen,
		TextDocumentDidChange: onDidChange,
	}

	server := server.NewServer(&handler, "Go LSP Example", false)
	server.RunStdio()
}

func initialize(ctx *glsp.Context, params *protocol.InitializeParams) (any, error) {
	capabilities := handler.CreateServerCapabilities()
	// You can enable more capabilities here, e.g., completions, hovers, etc.
	return protocol.InitializeResult{
		Capabilities: *capabilities,
	}, nil
}

func initialized(ctx *glsp.Context, params *protocol.InitializedParams) error {
	if len(params.WorkspaceFolders) > 0 {
		workspaceRoot = uriToPath(params.WorkspaceFolders[0].URI)
	}
	go scanAndValidateWorkspace(ctx)
	return nil
}

func onDidOpen(ctx *glsp.Context, params *protocol.DidOpenTextDocumentParams) error {
	text := params.TextDocument.Text
	diags := validateTextContent(text)
	sendDiagnostics(ctx, params.TextDocument.URI, diags)
	return nil
}

func onDidChange(ctx *glsp.Context, params *protocol.DidChangeTextDocumentParams) error {
	if len(params.ContentChanges) > 0 {
		text := params.ContentChanges[0].Text
		diags := validateTextContent(text)
		sendDiagnostics(ctx, params.TextDocument.URI, diags)
	}
	return nil
}

func scanAndValidateWorkspace(ctx *glsp.Context) {
	fileExts := []string{".tim", ".binmap"}
	filepath.WalkDir(workspaceRoot, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return nil
		}
		if !d.IsDir() {
			for _, ext := range fileExts {
				if strings.HasSuffix(d.Name(), ext) {
					if content, err := os.ReadFile(path); err == nil {
						diags := validateTextContent(string(content))
						sendDiagnostics(ctx, pathToURI(path), diags)
					}
				}
			}
		}
		return nil
	})
}

func validateTextContent(text string) []protocol.Diagnostic {
	var diagnostics []protocol.Diagnostic

	d11 := regexp.MustCompile(`\bd11\b`)
	for _, loc := range d11.FindAllStringIndex(text, -1) {
		line, col := posFromIndex(text, loc[0])
		diagnostics = append(diagnostics, protocol.Diagnostic{
			Severity: protocol.DiagnosticSeverityInformation,
			Range: protocol.Range{
				Start: protocol.Position{Line: uint32(line), Character: uint32(col)},
				End:   protocol.Position{Line: uint32(line), Character: uint32(col + len("d11"))},
			},
			Message: "d11 matched pattern d+number.",
			Source:  "PatternCheck",
		})
	}

	bin := regexp.MustCompile(`"SoftwareBinNumber"\s*:\s*(66|88)`)
	for _, match := range bin.FindAllStringSubmatchIndex(text, -1) {
		value := text[match[2]:match[3]]
		line, col := posFromIndex(text, match[0])
		data, _ := json.Marshal(map[string]any{"error": []int{66, 88}})
		diagnostics = append(diagnostics, protocol.Diagnostic{
			Severity: protocol.DiagnosticSeverityError,
			Range: protocol.Range{
				Start: protocol.Position{Line: uint32(line), Character: uint32(col)},
				End:   protocol.Position{Line: uint32(line), Character: uint32(col + (match[1]-match[0]))},
			},
			Message: fmt.Sprintf("SoftwareBinNumber has invalid value %s. Only values other than 66 and 88 are allowed.", value),
			Source:  "BinNumberCheck",
			Data:    data,
		})
	}

	brackets := map[rune]rune{'{': '}', '[': ']', '(': ')'}
	var stack []struct{ char rune; idx int }
	for idx, r := range text {
		if closing, ok := brackets[r]; ok {
			stack = append(stack, struct{ char rune; idx int }{char: r, idx: idx})
		} else {
			for open, close := range brackets {
				if r == close {
					if len(stack) == 0 || stack[len(stack)-1].char != open {
						line, col := posFromIndex(text, idx)
						diagnostics = append(diagnostics, protocol.Diagnostic{
							Severity: protocol.DiagnosticSeverityError,
							Range: protocol.Range{
								Start: protocol.Position{Line: uint32(line), Character: uint32(col)},
								End:   protocol.Position{Line: uint32(line), Character: uint32(col + 1)},
							},
							Message: fmt.Sprintf("Unmatched closing '%c'", r),
							Source:  "BracketCheck",
						})
					} else {
						stack = stack[:len(stack)-1]
					}
				}
			}
		}
	}
	for _, unclosed := range stack {
		line, col := posFromIndex(text, unclosed.idx)
		diagnostics = append(diagnostics, protocol.Diagnostic{
			Severity: protocol.DiagnosticSeverityError,
			Range: protocol.Range{
				Start: protocol.Position{Line: uint32(line), Character: uint32(col)},
				End:   protocol.Position{Line: uint32(line), Character: uint32(col + 1)},
			},
			Message: fmt.Sprintf("Unmatched opening '%c'", unclosed.char),
			Source:  "BracketCheck",
		})
	}

	return diagnostics
}

func sendDiagnostics(ctx *glsp.Context, uri string, diags []protocol.Diagnostic) {
	ctx.Notify(protocol.ServerTextDocumentPublishDiagnostics, &protocol.PublishDiagnosticsParams{
		URI:         uri,
		Diagnostics: diags,
	})
}

func posFromIndex(text string, idx int) (line, col int) {
	lines := strings.Split(text[:idx], "\n")
	line = len(lines) - 1
	col = len(lines[len(lines)-1])
	return
}

func uriToPath(uri string) string {
	return strings.TrimPrefix(uri, "file://")
}

func pathToURI(path string) string {
	return "file://" + path
}
