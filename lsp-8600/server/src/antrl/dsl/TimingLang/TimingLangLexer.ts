// Generated from ./dsl/TimingLang/TimingLang.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class TimingLangLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly IDENT = 10;
	public static readonly NUMBER = 11;
	public static readonly WS = 12;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'Timings'", 
                                                            "'{'", "'}'", 
                                                            "'WaveformTables'", 
                                                            "'WaveformTable'", 
                                                            "'Signal'", 
                                                            "':'", "'EquationSets'", 
                                                            "'SpecificationSets'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "IDENT", "NUMBER", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"IDENT", "NUMBER", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, TimingLangLexer._ATN, TimingLangLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "TimingLang.g4"; }

	public get literalNames(): (string | null)[] { return TimingLangLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return TimingLangLexer.symbolicNames; }
	public get ruleNames(): string[] { return TimingLangLexer.ruleNames; }

	public get serializedATN(): number[] { return TimingLangLexer._serializedATN; }

	public get channelNames(): string[] { return TimingLangLexer.channelNames; }

	public get modeNames(): string[] { return TimingLangLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,12,125,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,5,9,
	109,8,9,10,9,12,9,112,9,9,1,10,4,10,115,8,10,11,10,12,10,116,1,11,4,11,
	120,8,11,11,11,12,11,121,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
	15,8,17,9,19,10,21,11,23,12,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,
	95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,127,0,1,1,0,0,0,0,3,1,0,0,0,
	0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
	0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,
	33,1,0,0,0,5,35,1,0,0,0,7,37,1,0,0,0,9,52,1,0,0,0,11,66,1,0,0,0,13,73,1,
	0,0,0,15,75,1,0,0,0,17,88,1,0,0,0,19,106,1,0,0,0,21,114,1,0,0,0,23,119,
	1,0,0,0,25,26,5,84,0,0,26,27,5,105,0,0,27,28,5,109,0,0,28,29,5,105,0,0,
	29,30,5,110,0,0,30,31,5,103,0,0,31,32,5,115,0,0,32,2,1,0,0,0,33,34,5,123,
	0,0,34,4,1,0,0,0,35,36,5,125,0,0,36,6,1,0,0,0,37,38,5,87,0,0,38,39,5,97,
	0,0,39,40,5,118,0,0,40,41,5,101,0,0,41,42,5,102,0,0,42,43,5,111,0,0,43,
	44,5,114,0,0,44,45,5,109,0,0,45,46,5,84,0,0,46,47,5,97,0,0,47,48,5,98,0,
	0,48,49,5,108,0,0,49,50,5,101,0,0,50,51,5,115,0,0,51,8,1,0,0,0,52,53,5,
	87,0,0,53,54,5,97,0,0,54,55,5,118,0,0,55,56,5,101,0,0,56,57,5,102,0,0,57,
	58,5,111,0,0,58,59,5,114,0,0,59,60,5,109,0,0,60,61,5,84,0,0,61,62,5,97,
	0,0,62,63,5,98,0,0,63,64,5,108,0,0,64,65,5,101,0,0,65,10,1,0,0,0,66,67,
	5,83,0,0,67,68,5,105,0,0,68,69,5,103,0,0,69,70,5,110,0,0,70,71,5,97,0,0,
	71,72,5,108,0,0,72,12,1,0,0,0,73,74,5,58,0,0,74,14,1,0,0,0,75,76,5,69,0,
	0,76,77,5,113,0,0,77,78,5,117,0,0,78,79,5,97,0,0,79,80,5,116,0,0,80,81,
	5,105,0,0,81,82,5,111,0,0,82,83,5,110,0,0,83,84,5,83,0,0,84,85,5,101,0,
	0,85,86,5,116,0,0,86,87,5,115,0,0,87,16,1,0,0,0,88,89,5,83,0,0,89,90,5,
	112,0,0,90,91,5,101,0,0,91,92,5,99,0,0,92,93,5,105,0,0,93,94,5,102,0,0,
	94,95,5,105,0,0,95,96,5,99,0,0,96,97,5,97,0,0,97,98,5,116,0,0,98,99,5,105,
	0,0,99,100,5,111,0,0,100,101,5,110,0,0,101,102,5,83,0,0,102,103,5,101,0,
	0,103,104,5,116,0,0,104,105,5,115,0,0,105,18,1,0,0,0,106,110,7,0,0,0,107,
	109,7,1,0,0,108,107,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,
	0,0,111,20,1,0,0,0,112,110,1,0,0,0,113,115,7,2,0,0,114,113,1,0,0,0,115,
	116,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,22,1,0,0,0,118,120,7,3,
	0,0,119,118,1,0,0,0,120,121,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,
	123,1,0,0,0,123,124,6,11,0,0,124,24,1,0,0,0,4,0,110,116,121,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TimingLangLexer.__ATN) {
			TimingLangLexer.__ATN = new ATNDeserializer().deserialize(TimingLangLexer._serializedATN);
		}

		return TimingLangLexer.__ATN;
	}


	static DecisionsToDFA = TimingLangLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}