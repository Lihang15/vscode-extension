// Generated from ./grammar/TimingBlock.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TimingBlockListener from "./TimingBlockListener.js";
import TimingBlockVisitor from "./TimingBlockVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TimingBlockParser extends Parser {
	public static readonly TIMIINGS = 1;
	public static readonly WAVEFORM_TABLES = 2;
	public static readonly WAVEFORM_TABLE = 3;
	public static readonly SIGNAL = 4;
	public static readonly BREAK = 5;
	public static readonly USED = 6;
	public static readonly UNUSED = 7;
	public static readonly MAP = 8;
	public static readonly EQUATION_SETS = 9;
	public static readonly EQUATION_SET = 10;
	public static readonly EDGE_NAME = 11;
	public static readonly VAR_TYPE = 12;
	public static readonly PERIOD = 13;
	public static readonly SPEC_VARS = 14;
	public static readonly TIMING_SETS = 15;
	public static readonly TIMING_SET = 16;
	public static readonly SPECIFICATION_SETS = 17;
	public static readonly SPECIFICATION_SET = 18;
	public static readonly PORTS = 19;
	public static readonly XMODEValue = 20;
	public static readonly SALSH = 21;
	public static readonly L_BRACE = 22;
	public static readonly R_BRACE = 23;
	public static readonly L_BRACK = 24;
	public static readonly R_BRACK = 25;
	public static readonly L_PAR = 26;
	public static readonly R_PAR = 27;
	public static readonly SEMICOLON = 28;
	public static readonly EQUAL = 29;
	public static readonly COLON = 30;
	public static readonly ADD = 31;
	public static readonly SUB = 32;
	public static readonly MUL = 33;
	public static readonly DIV = 34;
	public static readonly ARROW = 35;
	public static readonly COMMA = 36;
	public static readonly WS = 37;
	public static readonly LINE_COMMENT = 38;
	public static readonly BLOCK_COMMENT = 39;
	public static readonly IDENTIFIER = 40;
	public static readonly INT = 41;
	public static readonly DOUBLE = 42;
	public static readonly EXP = 43;
	public static readonly UNIT = 44;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_timingBlock = 0;
	public static readonly RULE_timingBlockItem = 1;
	public static readonly RULE_waveformTablesBlock = 2;
	public static readonly RULE_waveformTableBlock = 3;
	public static readonly RULE_waveformTableName = 4;
	public static readonly RULE_xmodeValue = 5;
	public static readonly RULE_waveformTableBlockItem = 6;
	public static readonly RULE_signalExpr = 7;
	public static readonly RULE_expr = 8;
	public static readonly RULE_term = 9;
	public static readonly RULE_waveformItem = 10;
	public static readonly RULE_waveformCharItem = 11;
	public static readonly RULE_wfcChar = 12;
	public static readonly RULE_eventItem = 13;
	public static readonly RULE_eventEdgeName = 14;
	public static readonly RULE_eventType = 15;
	public static readonly RULE_breakItem = 16;
	public static readonly RULE_breakWfcs = 17;
	public static readonly RULE_usedBlock = 18;
	public static readonly RULE_wfcItem = 19;
	public static readonly RULE_wfc = 20;
	public static readonly RULE_unUsedBlock = 21;
	public static readonly RULE_mapBlock = 22;
	public static readonly RULE_wfcMapItem = 23;
	public static readonly RULE_mapBeforItem = 24;
	public static readonly RULE_mapAfterItem = 25;
	public static readonly RULE_equationSetsBlock = 26;
	public static readonly RULE_equationSetBlock = 27;
	public static readonly RULE_equationSetName = 28;
	public static readonly RULE_equationSetBlockItem = 29;
	public static readonly RULE_specVarsBlock = 30;
	public static readonly RULE_declarVarItem = 31;
	public static readonly RULE_varType = 32;
	public static readonly RULE_varName = 33;
	public static readonly RULE_timingSetsBlock = 34;
	public static readonly RULE_timingSetBlock = 35;
	public static readonly RULE_timingSetName = 36;
	public static readonly RULE_timingSetBlockItem = 37;
	public static readonly RULE_edgePositionItem = 38;
	public static readonly RULE_timeValueExpr = 39;
	public static readonly RULE_addExpr = 40;
	public static readonly RULE_mulExpr = 41;
	public static readonly RULE_atom = 42;
	public static readonly RULE_specificationSetsBlock = 43;
	public static readonly RULE_specificationSetBlock = 44;
	public static readonly RULE_specificationSetName = 45;
	public static readonly RULE_specificationSetBlockItem = 46;
	public static readonly RULE_specVarValueBlock = 47;
	public static readonly RULE_specNameValueItem = 48;
	public static readonly RULE_varValue = 49;
	public static readonly RULE_portsBlock = 50;
	public static readonly RULE_portNameExpr = 51;
	public static readonly RULE_portBlock = 52;
	public static readonly RULE_portName = 53;
	public static readonly literalNames: (string | null)[] = [ null, "'Timings'", 
                                                            "'WaveformTables'", 
                                                            "'WaveformTable'", 
                                                            "'Signal'", 
                                                            "'Break'", "'Used'", 
                                                            "'Unused'", 
                                                            "'Map'", "'EquationSets'", 
                                                            "'EquationSet'", 
                                                            null, null, 
                                                            "'Period'", 
                                                            "'SpecVars'", 
                                                            "'TimingSets'", 
                                                            "'TimingSet'", 
                                                            "'SpecificationSets'", 
                                                            "'SpecificationSet'", 
                                                            "'Ports'", null, 
                                                            "'//'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'('", 
                                                            "')'", "';'", 
                                                            "'='", "':'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'=>'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TIMIINGS", 
                                                             "WAVEFORM_TABLES", 
                                                             "WAVEFORM_TABLE", 
                                                             "SIGNAL", "BREAK", 
                                                             "USED", "UNUSED", 
                                                             "MAP", "EQUATION_SETS", 
                                                             "EQUATION_SET", 
                                                             "EDGE_NAME", 
                                                             "VAR_TYPE", 
                                                             "PERIOD", "SPEC_VARS", 
                                                             "TIMING_SETS", 
                                                             "TIMING_SET", 
                                                             "SPECIFICATION_SETS", 
                                                             "SPECIFICATION_SET", 
                                                             "PORTS", "XMODEValue", 
                                                             "SALSH", "L_BRACE", 
                                                             "R_BRACE", 
                                                             "L_BRACK", 
                                                             "R_BRACK", 
                                                             "L_PAR", "R_PAR", 
                                                             "SEMICOLON", 
                                                             "EQUAL", "COLON", 
                                                             "ADD", "SUB", 
                                                             "MUL", "DIV", 
                                                             "ARROW", "COMMA", 
                                                             "WS", "LINE_COMMENT", 
                                                             "BLOCK_COMMENT", 
                                                             "IDENTIFIER", 
                                                             "INT", "DOUBLE", 
                                                             "EXP", "UNIT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"timingBlock", "timingBlockItem", "waveformTablesBlock", "waveformTableBlock", 
		"waveformTableName", "xmodeValue", "waveformTableBlockItem", "signalExpr", 
		"expr", "term", "waveformItem", "waveformCharItem", "wfcChar", "eventItem", 
		"eventEdgeName", "eventType", "breakItem", "breakWfcs", "usedBlock", "wfcItem", 
		"wfc", "unUsedBlock", "mapBlock", "wfcMapItem", "mapBeforItem", "mapAfterItem", 
		"equationSetsBlock", "equationSetBlock", "equationSetName", "equationSetBlockItem", 
		"specVarsBlock", "declarVarItem", "varType", "varName", "timingSetsBlock", 
		"timingSetBlock", "timingSetName", "timingSetBlockItem", "edgePositionItem", 
		"timeValueExpr", "addExpr", "mulExpr", "atom", "specificationSetsBlock", 
		"specificationSetBlock", "specificationSetName", "specificationSetBlockItem", 
		"specVarValueBlock", "specNameValueItem", "varValue", "portsBlock", "portNameExpr", 
		"portBlock", "portName",
	];
	public get grammarFileName(): string { return "TimingBlock.g4"; }
	public get literalNames(): (string | null)[] { return TimingBlockParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TimingBlockParser.symbolicNames; }
	public get ruleNames(): string[] { return TimingBlockParser.ruleNames; }
	public get serializedATN(): number[] { return TimingBlockParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TimingBlockParser._ATN, TimingBlockParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public timingBlock(): TimingBlockContext {
		let localctx: TimingBlockContext = new TimingBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TimingBlockParser.RULE_timingBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(TimingBlockParser.TIMIINGS);
			this.state = 109;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 131588) !== 0)) {
				{
				{
				this.state = 110;
				this.timingBlockItem();
				}
				}
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 116;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timingBlockItem(): TimingBlockItemContext {
		let localctx: TimingBlockItemContext = new TimingBlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TimingBlockParser.RULE_timingBlockItem);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 118;
				this.waveformTablesBlock();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 119;
				this.equationSetsBlock();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 120;
				this.specificationSetsBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waveformTablesBlock(): WaveformTablesBlockContext {
		let localctx: WaveformTablesBlockContext = new WaveformTablesBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TimingBlockParser.RULE_waveformTablesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.match(TimingBlockParser.WAVEFORM_TABLES);
			this.state = 124;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 125;
				this.waveformTableBlock();
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waveformTableBlock(): WaveformTableBlockContext {
		let localctx: WaveformTableBlockContext = new WaveformTableBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TimingBlockParser.RULE_waveformTableBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(TimingBlockParser.WAVEFORM_TABLE);
			this.state = 134;
			this.waveformTableName();
			this.state = 135;
			this.match(TimingBlockParser.L_BRACK);
			this.state = 136;
			this.xmodeValue();
			this.state = 137;
			this.match(TimingBlockParser.R_BRACK);
			this.state = 138;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 139;
				this.waveformTableBlockItem();
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waveformTableName(): WaveformTableNameContext {
		let localctx: WaveformTableNameContext = new WaveformTableNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TimingBlockParser.RULE_waveformTableName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xmodeValue(): XmodeValueContext {
		let localctx: XmodeValueContext = new XmodeValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TimingBlockParser.RULE_xmodeValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.match(TimingBlockParser.XMODEValue);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waveformTableBlockItem(): WaveformTableBlockItemContext {
		let localctx: WaveformTableBlockItemContext = new WaveformTableBlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TimingBlockParser.RULE_waveformTableBlockItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.match(TimingBlockParser.SIGNAL);
			this.state = 152;
			this.signalExpr();
			this.state = 153;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 480) !== 0) || _la===40) {
				{
				{
				this.state = 154;
				this.waveformItem();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signalExpr(): SignalExprContext {
		let localctx: SignalExprContext = new SignalExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TimingBlockParser.RULE_signalExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, TimingBlockParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this.term();
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 35) !== 0)) {
				{
				{
				this.state = 165;
				_la = this._input.LA(1);
				if(!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 35) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 166;
				this.term();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let localctx: TermContext = new TermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, TimingBlockParser.RULE_term);
		try {
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 172;
				this.match(TimingBlockParser.IDENTIFIER);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 173;
				this.match(TimingBlockParser.L_PAR);
				this.state = 174;
				this.expr();
				this.state = 175;
				this.match(TimingBlockParser.R_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waveformItem(): WaveformItemContext {
		let localctx: WaveformItemContext = new WaveformItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, TimingBlockParser.RULE_waveformItem);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 179;
				this.waveformCharItem();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 180;
				this.breakItem();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 181;
				this.usedBlock();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 182;
				this.unUsedBlock();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 183;
				this.mapBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public waveformCharItem(): WaveformCharItemContext {
		let localctx: WaveformCharItemContext = new WaveformCharItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, TimingBlockParser.RULE_waveformCharItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this.wfcChar();
			this.state = 187;
			this.match(TimingBlockParser.COLON);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 188;
				this.eventItem();
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===11);
			this.state = 193;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wfcChar(): WfcCharContext {
		let localctx: WfcCharContext = new WfcCharContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, TimingBlockParser.RULE_wfcChar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventItem(): EventItemContext {
		let localctx: EventItemContext = new EventItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, TimingBlockParser.RULE_eventItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.eventEdgeName();
			this.state = 198;
			this.match(TimingBlockParser.COLON);
			this.state = 199;
			this.eventType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventEdgeName(): EventEdgeNameContext {
		let localctx: EventEdgeNameContext = new EventEdgeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, TimingBlockParser.RULE_eventEdgeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(TimingBlockParser.EDGE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eventType(): EventTypeContext {
		let localctx: EventTypeContext = new EventTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, TimingBlockParser.RULE_eventType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakItem(): BreakItemContext {
		let localctx: BreakItemContext = new BreakItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, TimingBlockParser.RULE_breakItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.match(TimingBlockParser.BREAK);
			this.state = 206;
			this.match(TimingBlockParser.COLON);
			this.state = 207;
			this.breakWfcs();
			this.state = 208;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakWfcs(): BreakWfcsContext {
		let localctx: BreakWfcsContext = new BreakWfcsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, TimingBlockParser.RULE_breakWfcs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.wfcChar();
			this.state = 214;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					this.wfcChar();
					}
					}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usedBlock(): UsedBlockContext {
		let localctx: UsedBlockContext = new UsedBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, TimingBlockParser.RULE_usedBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 217;
			this.match(TimingBlockParser.USED);
			this.state = 218;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24 || _la===40) {
				{
				{
				this.state = 219;
				this.wfcItem();
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 225;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wfcItem(): WfcItemContext {
		let localctx: WfcItemContext = new WfcItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, TimingBlockParser.RULE_wfcItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 227;
				this.wfc();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===24 || _la===40);
			this.state = 232;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wfc(): WfcContext {
		let localctx: WfcContext = new WfcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, TimingBlockParser.RULE_wfc);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 234;
				this.breakWfcs();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 235;
				this.match(TimingBlockParser.L_BRACK);
				this.state = 236;
				this.breakWfcs();
				this.state = 237;
				this.match(TimingBlockParser.R_BRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unUsedBlock(): UnUsedBlockContext {
		let localctx: UnUsedBlockContext = new UnUsedBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, TimingBlockParser.RULE_unUsedBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this.match(TimingBlockParser.UNUSED);
			this.state = 242;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24 || _la===40) {
				{
				{
				this.state = 243;
				this.wfcItem();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 249;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapBlock(): MapBlockContext {
		let localctx: MapBlockContext = new MapBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, TimingBlockParser.RULE_mapBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(TimingBlockParser.MAP);
			this.state = 252;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24 || _la===40) {
				{
				{
				this.state = 253;
				this.wfcMapItem();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 259;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wfcMapItem(): WfcMapItemContext {
		let localctx: WfcMapItemContext = new WfcMapItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, TimingBlockParser.RULE_wfcMapItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 261;
				this.mapBeforItem();
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===24 || _la===40);
			this.state = 266;
			this.match(TimingBlockParser.ARROW);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 267;
				this.mapAfterItem();
				}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===40);
			this.state = 272;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapBeforItem(): MapBeforItemContext {
		let localctx: MapBeforItemContext = new MapBeforItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, TimingBlockParser.RULE_mapBeforItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 274;
				this.match(TimingBlockParser.L_BRACK);
				}
			}

			this.state = 278;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 277;
					this.match(TimingBlockParser.IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 282;
				this.match(TimingBlockParser.R_BRACK);
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapAfterItem(): MapAfterItemContext {
		let localctx: MapAfterItemContext = new MapAfterItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, TimingBlockParser.RULE_mapAfterItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equationSetsBlock(): EquationSetsBlockContext {
		let localctx: EquationSetsBlockContext = new EquationSetsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, TimingBlockParser.RULE_equationSetsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			this.match(TimingBlockParser.EQUATION_SETS);
			this.state = 288;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 289;
				this.equationSetBlock();
				}
				}
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 295;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equationSetBlock(): EquationSetBlockContext {
		let localctx: EquationSetBlockContext = new EquationSetBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, TimingBlockParser.RULE_equationSetBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(TimingBlockParser.EQUATION_SET);
			this.state = 298;
			this.equationSetName();
			this.state = 299;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14 || _la===15) {
				{
				{
				this.state = 300;
				this.equationSetBlockItem();
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 306;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equationSetName(): EquationSetNameContext {
		let localctx: EquationSetNameContext = new EquationSetNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, TimingBlockParser.RULE_equationSetName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 308;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equationSetBlockItem(): EquationSetBlockItemContext {
		let localctx: EquationSetBlockItemContext = new EquationSetBlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, TimingBlockParser.RULE_equationSetBlockItem);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 310;
				this.specVarsBlock();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 311;
				this.timingSetsBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specVarsBlock(): SpecVarsBlockContext {
		let localctx: SpecVarsBlockContext = new SpecVarsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, TimingBlockParser.RULE_specVarsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this.match(TimingBlockParser.SPEC_VARS);
			this.state = 315;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12 || _la===40) {
				{
				{
				this.state = 316;
				this.declarVarItem();
				}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 322;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarVarItem(): DeclarVarItemContext {
		let localctx: DeclarVarItemContext = new DeclarVarItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, TimingBlockParser.RULE_declarVarItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.varType();
			this.state = 325;
			this.varName();
			this.state = 326;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varType(): VarTypeContext {
		let localctx: VarTypeContext = new VarTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, TimingBlockParser.RULE_varType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===40)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varName(): VarNameContext {
		let localctx: VarNameContext = new VarNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, TimingBlockParser.RULE_varName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timingSetsBlock(): TimingSetsBlockContext {
		let localctx: TimingSetsBlockContext = new TimingSetsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, TimingBlockParser.RULE_timingSetsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
			this.match(TimingBlockParser.TIMING_SETS);
			this.state = 333;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 334;
				this.timingSetBlock();
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 340;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timingSetBlock(): TimingSetBlockContext {
		let localctx: TimingSetBlockContext = new TimingSetBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, TimingBlockParser.RULE_timingSetBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this.match(TimingBlockParser.TIMING_SET);
			this.state = 343;
			this.timingSetName();
			this.state = 344;
			this.match(TimingBlockParser.L_BRACK);
			this.state = 345;
			this.timeValueExpr();
			this.state = 346;
			this.match(TimingBlockParser.R_BRACK);
			this.state = 347;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 348;
				this.timingSetBlockItem();
				}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 354;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timingSetName(): TimingSetNameContext {
		let localctx: TimingSetNameContext = new TimingSetNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, TimingBlockParser.RULE_timingSetName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 356;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timingSetBlockItem(): TimingSetBlockItemContext {
		let localctx: TimingSetBlockItemContext = new TimingSetBlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, TimingBlockParser.RULE_timingSetBlockItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.match(TimingBlockParser.SIGNAL);
			this.state = 359;
			this.signalExpr();
			this.state = 360;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 361;
				this.edgePositionItem();
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 367;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public edgePositionItem(): EdgePositionItemContext {
		let localctx: EdgePositionItemContext = new EdgePositionItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, TimingBlockParser.RULE_edgePositionItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.eventEdgeName();
			this.state = 370;
			this.match(TimingBlockParser.EQUAL);
			this.state = 371;
			this.timeValueExpr();
			this.state = 372;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeValueExpr(): TimeValueExprContext {
		let localctx: TimeValueExprContext = new TimeValueExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, TimingBlockParser.RULE_timeValueExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.addExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addExpr(): AddExprContext {
		let localctx: AddExprContext = new AddExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, TimingBlockParser.RULE_addExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 376;
			this.mulExpr();
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31 || _la===32) {
				{
				{
				this.state = 377;
				_la = this._input.LA(1);
				if(!(_la===31 || _la===32)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 378;
				this.mulExpr();
				}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mulExpr(): MulExprContext {
		let localctx: MulExprContext = new MulExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, TimingBlockParser.RULE_mulExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 384;
			this.atom();
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33 || _la===34) {
				{
				{
				this.state = 385;
				_la = this._input.LA(1);
				if(!(_la===33 || _la===34)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 386;
				this.atom();
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, TimingBlockParser.RULE_atom);
		let _la: number;
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 392;
				this.match(TimingBlockParser.DOUBLE);
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 393;
					this.match(TimingBlockParser.UNIT);
					}
				}

				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 396;
				this.match(TimingBlockParser.IDENTIFIER);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 397;
					this.match(TimingBlockParser.UNIT);
					}
				}

				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 400;
				this.match(TimingBlockParser.L_PAR);
				this.state = 401;
				this.timeValueExpr();
				this.state = 402;
				this.match(TimingBlockParser.R_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specificationSetsBlock(): SpecificationSetsBlockContext {
		let localctx: SpecificationSetsBlockContext = new SpecificationSetsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, TimingBlockParser.RULE_specificationSetsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 406;
			this.match(TimingBlockParser.SPECIFICATION_SETS);
			this.state = 407;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 408;
				this.specificationSetBlock();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 414;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specificationSetBlock(): SpecificationSetBlockContext {
		let localctx: SpecificationSetBlockContext = new SpecificationSetBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, TimingBlockParser.RULE_specificationSetBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this.match(TimingBlockParser.SPECIFICATION_SET);
			this.state = 417;
			this.specificationSetName();
			this.state = 418;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14 || _la===19) {
				{
				{
				this.state = 419;
				this.specificationSetBlockItem();
				}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 425;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specificationSetName(): SpecificationSetNameContext {
		let localctx: SpecificationSetNameContext = new SpecificationSetNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, TimingBlockParser.RULE_specificationSetName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 427;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specificationSetBlockItem(): SpecificationSetBlockItemContext {
		let localctx: SpecificationSetBlockItemContext = new SpecificationSetBlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, TimingBlockParser.RULE_specificationSetBlockItem);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 429;
				this.specVarValueBlock();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 430;
				this.portsBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specVarValueBlock(): SpecVarValueBlockContext {
		let localctx: SpecVarValueBlockContext = new SpecVarValueBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, TimingBlockParser.RULE_specVarValueBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
			this.match(TimingBlockParser.SPEC_VARS);
			this.state = 434;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 435;
				this.specNameValueItem();
				}
				}
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 441;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public specNameValueItem(): SpecNameValueItemContext {
		let localctx: SpecNameValueItemContext = new SpecNameValueItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, TimingBlockParser.RULE_specNameValueItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			this.varName();
			this.state = 444;
			this.match(TimingBlockParser.EQUAL);
			this.state = 445;
			this.varValue();
			this.state = 446;
			this.match(TimingBlockParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varValue(): VarValueContext {
		let localctx: VarValueContext = new VarValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, TimingBlockParser.RULE_varValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this.timeValueExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public portsBlock(): PortsBlockContext {
		let localctx: PortsBlockContext = new PortsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, TimingBlockParser.RULE_portsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 450;
			this.match(TimingBlockParser.PORTS);
			this.state = 451;
			this.match(TimingBlockParser.L_BRACK);
			this.state = 452;
			this.portNameExpr();
			this.state = 453;
			this.match(TimingBlockParser.R_BRACK);
			this.state = 454;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 455;
				this.portBlock();
				}
				}
				this.state = 458;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===14);
			this.state = 460;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public portNameExpr(): PortNameExprContext {
		let localctx: PortNameExprContext = new PortNameExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, TimingBlockParser.RULE_portNameExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 462;
			this.match(TimingBlockParser.IDENTIFIER);
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 463;
				this.match(TimingBlockParser.COMMA);
				this.state = 464;
				this.match(TimingBlockParser.IDENTIFIER);
				}
				}
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public portBlock(): PortBlockContext {
		let localctx: PortBlockContext = new PortBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, TimingBlockParser.RULE_portBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			this.match(TimingBlockParser.SPEC_VARS);
			this.state = 471;
			this.portName();
			this.state = 472;
			this.match(TimingBlockParser.L_BRACK);
			this.state = 473;
			this.waveformTableName();
			this.state = 474;
			this.match(TimingBlockParser.R_BRACK);
			this.state = 475;
			this.match(TimingBlockParser.L_BRACK);
			this.state = 476;
			this.equationSetName();
			this.state = 477;
			this.match(TimingBlockParser.R_BRACK);
			this.state = 478;
			this.match(TimingBlockParser.L_BRACE);
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 479;
				this.specNameValueItem();
				}
				}
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 485;
			this.match(TimingBlockParser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public portName(): PortNameContext {
		let localctx: PortNameContext = new PortNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, TimingBlockParser.RULE_portName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 487;
			this.match(TimingBlockParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,44,490,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,1,0,1,0,1,0,5,0,112,8,0,10,0,12,0,115,9,0,1,0,1,0,1,1,1,1,1,1,3,1,122,
	8,1,1,2,1,2,1,2,5,2,127,8,2,10,2,12,2,130,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,5,3,141,8,3,10,3,12,3,144,9,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
	1,6,1,6,5,6,156,8,6,10,6,12,6,159,9,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,5,8,168,
	8,8,10,8,12,8,171,9,8,1,9,1,9,1,9,1,9,1,9,3,9,178,8,9,1,10,1,10,1,10,1,
	10,1,10,3,10,185,8,10,1,11,1,11,1,11,4,11,190,8,11,11,11,12,11,191,1,11,
	1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,
	16,1,16,1,17,1,17,5,17,213,8,17,10,17,12,17,216,9,17,1,18,1,18,1,18,5,18,
	221,8,18,10,18,12,18,224,9,18,1,18,1,18,1,19,4,19,229,8,19,11,19,12,19,
	230,1,19,1,19,1,20,1,20,1,20,1,20,1,20,3,20,240,8,20,1,21,1,21,1,21,5,21,
	245,8,21,10,21,12,21,248,9,21,1,21,1,21,1,22,1,22,1,22,5,22,255,8,22,10,
	22,12,22,258,9,22,1,22,1,22,1,23,4,23,263,8,23,11,23,12,23,264,1,23,1,23,
	4,23,269,8,23,11,23,12,23,270,1,23,1,23,1,24,3,24,276,8,24,1,24,4,24,279,
	8,24,11,24,12,24,280,1,24,3,24,284,8,24,1,25,1,25,1,26,1,26,1,26,5,26,291,
	8,26,10,26,12,26,294,9,26,1,26,1,26,1,27,1,27,1,27,1,27,5,27,302,8,27,10,
	27,12,27,305,9,27,1,27,1,27,1,28,1,28,1,29,1,29,3,29,313,8,29,1,30,1,30,
	1,30,5,30,318,8,30,10,30,12,30,321,9,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
	32,1,32,1,33,1,33,1,34,1,34,1,34,5,34,336,8,34,10,34,12,34,339,9,34,1,34,
	1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,350,8,35,10,35,12,35,353,9,
	35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,37,5,37,363,8,37,10,37,12,37,366,
	9,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,40,1,40,1,40,5,40,380,
	8,40,10,40,12,40,383,9,40,1,41,1,41,1,41,5,41,388,8,41,10,41,12,41,391,
	9,41,1,42,1,42,3,42,395,8,42,1,42,1,42,3,42,399,8,42,1,42,1,42,1,42,1,42,
	3,42,405,8,42,1,43,1,43,1,43,5,43,410,8,43,10,43,12,43,413,9,43,1,43,1,
	43,1,44,1,44,1,44,1,44,5,44,421,8,44,10,44,12,44,424,9,44,1,44,1,44,1,45,
	1,45,1,46,1,46,3,46,432,8,46,1,47,1,47,1,47,5,47,437,8,47,10,47,12,47,440,
	9,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,50,1,50,1,50,1,50,1,
	50,1,50,4,50,457,8,50,11,50,12,50,458,1,50,1,50,1,51,1,51,1,51,5,51,466,
	8,51,10,51,12,51,469,9,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
	1,52,5,52,481,8,52,10,52,12,52,484,9,52,1,52,1,52,1,53,1,53,1,53,0,0,54,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
	52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
	100,102,104,106,0,4,2,0,31,32,36,36,2,0,12,12,40,40,1,0,31,32,1,0,33,34,
	479,0,108,1,0,0,0,2,121,1,0,0,0,4,123,1,0,0,0,6,133,1,0,0,0,8,147,1,0,0,
	0,10,149,1,0,0,0,12,151,1,0,0,0,14,162,1,0,0,0,16,164,1,0,0,0,18,177,1,
	0,0,0,20,184,1,0,0,0,22,186,1,0,0,0,24,195,1,0,0,0,26,197,1,0,0,0,28,201,
	1,0,0,0,30,203,1,0,0,0,32,205,1,0,0,0,34,210,1,0,0,0,36,217,1,0,0,0,38,
	228,1,0,0,0,40,239,1,0,0,0,42,241,1,0,0,0,44,251,1,0,0,0,46,262,1,0,0,0,
	48,275,1,0,0,0,50,285,1,0,0,0,52,287,1,0,0,0,54,297,1,0,0,0,56,308,1,0,
	0,0,58,312,1,0,0,0,60,314,1,0,0,0,62,324,1,0,0,0,64,328,1,0,0,0,66,330,
	1,0,0,0,68,332,1,0,0,0,70,342,1,0,0,0,72,356,1,0,0,0,74,358,1,0,0,0,76,
	369,1,0,0,0,78,374,1,0,0,0,80,376,1,0,0,0,82,384,1,0,0,0,84,404,1,0,0,0,
	86,406,1,0,0,0,88,416,1,0,0,0,90,427,1,0,0,0,92,431,1,0,0,0,94,433,1,0,
	0,0,96,443,1,0,0,0,98,448,1,0,0,0,100,450,1,0,0,0,102,462,1,0,0,0,104,470,
	1,0,0,0,106,487,1,0,0,0,108,109,5,1,0,0,109,113,5,22,0,0,110,112,3,2,1,
	0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,116,
	1,0,0,0,115,113,1,0,0,0,116,117,5,23,0,0,117,1,1,0,0,0,118,122,3,4,2,0,
	119,122,3,52,26,0,120,122,3,86,43,0,121,118,1,0,0,0,121,119,1,0,0,0,121,
	120,1,0,0,0,122,3,1,0,0,0,123,124,5,2,0,0,124,128,5,22,0,0,125,127,3,6,
	3,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,
	131,1,0,0,0,130,128,1,0,0,0,131,132,5,23,0,0,132,5,1,0,0,0,133,134,5,3,
	0,0,134,135,3,8,4,0,135,136,5,24,0,0,136,137,3,10,5,0,137,138,5,25,0,0,
	138,142,5,22,0,0,139,141,3,12,6,0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,
	1,0,0,0,142,143,1,0,0,0,143,145,1,0,0,0,144,142,1,0,0,0,145,146,5,23,0,
	0,146,7,1,0,0,0,147,148,5,40,0,0,148,9,1,0,0,0,149,150,5,20,0,0,150,11,
	1,0,0,0,151,152,5,4,0,0,152,153,3,14,7,0,153,157,5,22,0,0,154,156,3,20,
	10,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,
	160,1,0,0,0,159,157,1,0,0,0,160,161,5,23,0,0,161,13,1,0,0,0,162,163,3,16,
	8,0,163,15,1,0,0,0,164,169,3,18,9,0,165,166,7,0,0,0,166,168,3,18,9,0,167,
	165,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,17,1,0,
	0,0,171,169,1,0,0,0,172,178,5,40,0,0,173,174,5,26,0,0,174,175,3,16,8,0,
	175,176,5,27,0,0,176,178,1,0,0,0,177,172,1,0,0,0,177,173,1,0,0,0,178,19,
	1,0,0,0,179,185,3,22,11,0,180,185,3,32,16,0,181,185,3,36,18,0,182,185,3,
	42,21,0,183,185,3,44,22,0,184,179,1,0,0,0,184,180,1,0,0,0,184,181,1,0,0,
	0,184,182,1,0,0,0,184,183,1,0,0,0,185,21,1,0,0,0,186,187,3,24,12,0,187,
	189,5,30,0,0,188,190,3,26,13,0,189,188,1,0,0,0,190,191,1,0,0,0,191,189,
	1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,5,28,0,0,194,23,1,0,0,0,
	195,196,5,40,0,0,196,25,1,0,0,0,197,198,3,28,14,0,198,199,5,30,0,0,199,
	200,3,30,15,0,200,27,1,0,0,0,201,202,5,11,0,0,202,29,1,0,0,0,203,204,5,
	40,0,0,204,31,1,0,0,0,205,206,5,5,0,0,206,207,5,30,0,0,207,208,3,34,17,
	0,208,209,5,28,0,0,209,33,1,0,0,0,210,214,3,24,12,0,211,213,3,24,12,0,212,
	211,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,35,1,0,
	0,0,216,214,1,0,0,0,217,218,5,6,0,0,218,222,5,22,0,0,219,221,3,38,19,0,
	220,219,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,225,
	1,0,0,0,224,222,1,0,0,0,225,226,5,23,0,0,226,37,1,0,0,0,227,229,3,40,20,
	0,228,227,1,0,0,0,229,230,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,232,
	1,0,0,0,232,233,5,28,0,0,233,39,1,0,0,0,234,240,3,34,17,0,235,236,5,24,
	0,0,236,237,3,34,17,0,237,238,5,25,0,0,238,240,1,0,0,0,239,234,1,0,0,0,
	239,235,1,0,0,0,240,41,1,0,0,0,241,242,5,7,0,0,242,246,5,22,0,0,243,245,
	3,38,19,0,244,243,1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,
	0,247,249,1,0,0,0,248,246,1,0,0,0,249,250,5,23,0,0,250,43,1,0,0,0,251,252,
	5,8,0,0,252,256,5,22,0,0,253,255,3,46,23,0,254,253,1,0,0,0,255,258,1,0,
	0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,259,1,0,0,0,258,256,1,0,0,0,259,
	260,5,23,0,0,260,45,1,0,0,0,261,263,3,48,24,0,262,261,1,0,0,0,263,264,1,
	0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,266,1,0,0,0,266,268,5,35,0,0,
	267,269,3,50,25,0,268,267,1,0,0,0,269,270,1,0,0,0,270,268,1,0,0,0,270,271,
	1,0,0,0,271,272,1,0,0,0,272,273,5,28,0,0,273,47,1,0,0,0,274,276,5,24,0,
	0,275,274,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,279,5,40,0,0,278,
	277,1,0,0,0,279,280,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,283,1,0,
	0,0,282,284,5,25,0,0,283,282,1,0,0,0,283,284,1,0,0,0,284,49,1,0,0,0,285,
	286,5,40,0,0,286,51,1,0,0,0,287,288,5,9,0,0,288,292,5,22,0,0,289,291,3,
	54,27,0,290,289,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,0,0,0,
	293,295,1,0,0,0,294,292,1,0,0,0,295,296,5,23,0,0,296,53,1,0,0,0,297,298,
	5,10,0,0,298,299,3,56,28,0,299,303,5,22,0,0,300,302,3,58,29,0,301,300,1,
	0,0,0,302,305,1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,
	303,1,0,0,0,306,307,5,23,0,0,307,55,1,0,0,0,308,309,5,40,0,0,309,57,1,0,
	0,0,310,313,3,60,30,0,311,313,3,68,34,0,312,310,1,0,0,0,312,311,1,0,0,0,
	313,59,1,0,0,0,314,315,5,14,0,0,315,319,5,22,0,0,316,318,3,62,31,0,317,
	316,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,322,1,0,
	0,0,321,319,1,0,0,0,322,323,5,23,0,0,323,61,1,0,0,0,324,325,3,64,32,0,325,
	326,3,66,33,0,326,327,5,28,0,0,327,63,1,0,0,0,328,329,7,1,0,0,329,65,1,
	0,0,0,330,331,5,40,0,0,331,67,1,0,0,0,332,333,5,15,0,0,333,337,5,22,0,0,
	334,336,3,70,35,0,335,334,1,0,0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,
	1,0,0,0,338,340,1,0,0,0,339,337,1,0,0,0,340,341,5,23,0,0,341,69,1,0,0,0,
	342,343,5,16,0,0,343,344,3,72,36,0,344,345,5,24,0,0,345,346,3,78,39,0,346,
	347,5,25,0,0,347,351,5,22,0,0,348,350,3,74,37,0,349,348,1,0,0,0,350,353,
	1,0,0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,0,353,351,1,0,0,0,
	354,355,5,23,0,0,355,71,1,0,0,0,356,357,5,40,0,0,357,73,1,0,0,0,358,359,
	5,4,0,0,359,360,3,14,7,0,360,364,5,22,0,0,361,363,3,76,38,0,362,361,1,0,
	0,0,363,366,1,0,0,0,364,362,1,0,0,0,364,365,1,0,0,0,365,367,1,0,0,0,366,
	364,1,0,0,0,367,368,5,23,0,0,368,75,1,0,0,0,369,370,3,28,14,0,370,371,5,
	29,0,0,371,372,3,78,39,0,372,373,5,28,0,0,373,77,1,0,0,0,374,375,3,80,40,
	0,375,79,1,0,0,0,376,381,3,82,41,0,377,378,7,2,0,0,378,380,3,82,41,0,379,
	377,1,0,0,0,380,383,1,0,0,0,381,379,1,0,0,0,381,382,1,0,0,0,382,81,1,0,
	0,0,383,381,1,0,0,0,384,389,3,84,42,0,385,386,7,3,0,0,386,388,3,84,42,0,
	387,385,1,0,0,0,388,391,1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,83,
	1,0,0,0,391,389,1,0,0,0,392,394,5,42,0,0,393,395,5,44,0,0,394,393,1,0,0,
	0,394,395,1,0,0,0,395,405,1,0,0,0,396,398,5,40,0,0,397,399,5,44,0,0,398,
	397,1,0,0,0,398,399,1,0,0,0,399,405,1,0,0,0,400,401,5,26,0,0,401,402,3,
	78,39,0,402,403,5,27,0,0,403,405,1,0,0,0,404,392,1,0,0,0,404,396,1,0,0,
	0,404,400,1,0,0,0,405,85,1,0,0,0,406,407,5,17,0,0,407,411,5,22,0,0,408,
	410,3,88,44,0,409,408,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,
	0,0,0,412,414,1,0,0,0,413,411,1,0,0,0,414,415,5,23,0,0,415,87,1,0,0,0,416,
	417,5,18,0,0,417,418,3,90,45,0,418,422,5,22,0,0,419,421,3,92,46,0,420,419,
	1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,425,1,0,0,0,
	424,422,1,0,0,0,425,426,5,23,0,0,426,89,1,0,0,0,427,428,5,40,0,0,428,91,
	1,0,0,0,429,432,3,94,47,0,430,432,3,100,50,0,431,429,1,0,0,0,431,430,1,
	0,0,0,432,93,1,0,0,0,433,434,5,14,0,0,434,438,5,22,0,0,435,437,3,96,48,
	0,436,435,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,441,
	1,0,0,0,440,438,1,0,0,0,441,442,5,23,0,0,442,95,1,0,0,0,443,444,3,66,33,
	0,444,445,5,29,0,0,445,446,3,98,49,0,446,447,5,28,0,0,447,97,1,0,0,0,448,
	449,3,78,39,0,449,99,1,0,0,0,450,451,5,19,0,0,451,452,5,24,0,0,452,453,
	3,102,51,0,453,454,5,25,0,0,454,456,5,22,0,0,455,457,3,104,52,0,456,455,
	1,0,0,0,457,458,1,0,0,0,458,456,1,0,0,0,458,459,1,0,0,0,459,460,1,0,0,0,
	460,461,5,23,0,0,461,101,1,0,0,0,462,467,5,40,0,0,463,464,5,36,0,0,464,
	466,5,40,0,0,465,463,1,0,0,0,466,469,1,0,0,0,467,465,1,0,0,0,467,468,1,
	0,0,0,468,103,1,0,0,0,469,467,1,0,0,0,470,471,5,14,0,0,471,472,3,106,53,
	0,472,473,5,24,0,0,473,474,3,8,4,0,474,475,5,25,0,0,475,476,5,24,0,0,476,
	477,3,56,28,0,477,478,5,25,0,0,478,482,5,22,0,0,479,481,3,96,48,0,480,479,
	1,0,0,0,481,484,1,0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,485,1,0,0,0,
	484,482,1,0,0,0,485,486,5,23,0,0,486,105,1,0,0,0,487,488,5,40,0,0,488,107,
	1,0,0,0,39,113,121,128,142,157,169,177,184,191,214,222,230,239,246,256,
	264,270,275,280,283,292,303,312,319,337,351,364,381,389,394,398,404,411,
	422,431,438,458,467,482];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TimingBlockParser.__ATN) {
			TimingBlockParser.__ATN = new ATNDeserializer().deserialize(TimingBlockParser._serializedATN);
		}

		return TimingBlockParser.__ATN;
	}


	static DecisionsToDFA = TimingBlockParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class TimingBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIMIINGS(): TerminalNode {
		return this.getToken(TimingBlockParser.TIMIINGS, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public timingBlockItem_list(): TimingBlockItemContext[] {
		return this.getTypedRuleContexts(TimingBlockItemContext) as TimingBlockItemContext[];
	}
	public timingBlockItem(i: number): TimingBlockItemContext {
		return this.getTypedRuleContext(TimingBlockItemContext, i) as TimingBlockItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timingBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimingBlock) {
	 		listener.enterTimingBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimingBlock) {
	 		listener.exitTimingBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimingBlock) {
			return visitor.visitTimingBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingBlockItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public waveformTablesBlock(): WaveformTablesBlockContext {
		return this.getTypedRuleContext(WaveformTablesBlockContext, 0) as WaveformTablesBlockContext;
	}
	public equationSetsBlock(): EquationSetsBlockContext {
		return this.getTypedRuleContext(EquationSetsBlockContext, 0) as EquationSetsBlockContext;
	}
	public specificationSetsBlock(): SpecificationSetsBlockContext {
		return this.getTypedRuleContext(SpecificationSetsBlockContext, 0) as SpecificationSetsBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timingBlockItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimingBlockItem) {
	 		listener.enterTimingBlockItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimingBlockItem) {
	 		listener.exitTimingBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimingBlockItem) {
			return visitor.visitTimingBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformTablesBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WAVEFORM_TABLES(): TerminalNode {
		return this.getToken(TimingBlockParser.WAVEFORM_TABLES, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public waveformTableBlock_list(): WaveformTableBlockContext[] {
		return this.getTypedRuleContexts(WaveformTableBlockContext) as WaveformTableBlockContext[];
	}
	public waveformTableBlock(i: number): WaveformTableBlockContext {
		return this.getTypedRuleContext(WaveformTableBlockContext, i) as WaveformTableBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_waveformTablesBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWaveformTablesBlock) {
	 		listener.enterWaveformTablesBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWaveformTablesBlock) {
	 		listener.exitWaveformTablesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWaveformTablesBlock) {
			return visitor.visitWaveformTablesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformTableBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WAVEFORM_TABLE(): TerminalNode {
		return this.getToken(TimingBlockParser.WAVEFORM_TABLE, 0);
	}
	public waveformTableName(): WaveformTableNameContext {
		return this.getTypedRuleContext(WaveformTableNameContext, 0) as WaveformTableNameContext;
	}
	public L_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACK, 0);
	}
	public xmodeValue(): XmodeValueContext {
		return this.getTypedRuleContext(XmodeValueContext, 0) as XmodeValueContext;
	}
	public R_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACK, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public waveformTableBlockItem_list(): WaveformTableBlockItemContext[] {
		return this.getTypedRuleContexts(WaveformTableBlockItemContext) as WaveformTableBlockItemContext[];
	}
	public waveformTableBlockItem(i: number): WaveformTableBlockItemContext {
		return this.getTypedRuleContext(WaveformTableBlockItemContext, i) as WaveformTableBlockItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_waveformTableBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWaveformTableBlock) {
	 		listener.enterWaveformTableBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWaveformTableBlock) {
	 		listener.exitWaveformTableBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWaveformTableBlock) {
			return visitor.visitWaveformTableBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformTableNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_waveformTableName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWaveformTableName) {
	 		listener.enterWaveformTableName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWaveformTableName) {
	 		listener.exitWaveformTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWaveformTableName) {
			return visitor.visitWaveformTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XmodeValueContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public XMODEValue(): TerminalNode {
		return this.getToken(TimingBlockParser.XMODEValue, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_xmodeValue;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterXmodeValue) {
	 		listener.enterXmodeValue(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitXmodeValue) {
	 		listener.exitXmodeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitXmodeValue) {
			return visitor.visitXmodeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformTableBlockItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SIGNAL(): TerminalNode {
		return this.getToken(TimingBlockParser.SIGNAL, 0);
	}
	public signalExpr(): SignalExprContext {
		return this.getTypedRuleContext(SignalExprContext, 0) as SignalExprContext;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public waveformItem_list(): WaveformItemContext[] {
		return this.getTypedRuleContexts(WaveformItemContext) as WaveformItemContext[];
	}
	public waveformItem(i: number): WaveformItemContext {
		return this.getTypedRuleContext(WaveformItemContext, i) as WaveformItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_waveformTableBlockItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWaveformTableBlockItem) {
	 		listener.enterWaveformTableBlockItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWaveformTableBlockItem) {
	 		listener.exitWaveformTableBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWaveformTableBlockItem) {
			return visitor.visitWaveformTableBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignalExprContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_signalExpr;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSignalExpr) {
	 		listener.enterSignalExpr(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSignalExpr) {
	 		listener.exitSignalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSignalExpr) {
			return visitor.visitSignalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public term_list(): TermContext[] {
		return this.getTypedRuleContexts(TermContext) as TermContext[];
	}
	public term(i: number): TermContext {
		return this.getTypedRuleContext(TermContext, i) as TermContext;
	}
	public ADD_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.ADD);
	}
	public ADD(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.ADD, i);
	}
	public SUB_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.SUB);
	}
	public SUB(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.SUB, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_expr;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
	public L_PAR(): TerminalNode {
		return this.getToken(TimingBlockParser.L_PAR, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public R_PAR(): TerminalNode {
		return this.getToken(TimingBlockParser.R_PAR, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_term;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTerm) {
	 		listener.enterTerm(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTerm) {
	 		listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public waveformCharItem(): WaveformCharItemContext {
		return this.getTypedRuleContext(WaveformCharItemContext, 0) as WaveformCharItemContext;
	}
	public breakItem(): BreakItemContext {
		return this.getTypedRuleContext(BreakItemContext, 0) as BreakItemContext;
	}
	public usedBlock(): UsedBlockContext {
		return this.getTypedRuleContext(UsedBlockContext, 0) as UsedBlockContext;
	}
	public unUsedBlock(): UnUsedBlockContext {
		return this.getTypedRuleContext(UnUsedBlockContext, 0) as UnUsedBlockContext;
	}
	public mapBlock(): MapBlockContext {
		return this.getTypedRuleContext(MapBlockContext, 0) as MapBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_waveformItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWaveformItem) {
	 		listener.enterWaveformItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWaveformItem) {
	 		listener.exitWaveformItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWaveformItem) {
			return visitor.visitWaveformItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformCharItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wfcChar(): WfcCharContext {
		return this.getTypedRuleContext(WfcCharContext, 0) as WfcCharContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(TimingBlockParser.COLON, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
	public eventItem_list(): EventItemContext[] {
		return this.getTypedRuleContexts(EventItemContext) as EventItemContext[];
	}
	public eventItem(i: number): EventItemContext {
		return this.getTypedRuleContext(EventItemContext, i) as EventItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_waveformCharItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWaveformCharItem) {
	 		listener.enterWaveformCharItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWaveformCharItem) {
	 		listener.exitWaveformCharItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWaveformCharItem) {
			return visitor.visitWaveformCharItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WfcCharContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_wfcChar;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWfcChar) {
	 		listener.enterWfcChar(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWfcChar) {
	 		listener.exitWfcChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWfcChar) {
			return visitor.visitWfcChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eventEdgeName(): EventEdgeNameContext {
		return this.getTypedRuleContext(EventEdgeNameContext, 0) as EventEdgeNameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(TimingBlockParser.COLON, 0);
	}
	public eventType(): EventTypeContext {
		return this.getTypedRuleContext(EventTypeContext, 0) as EventTypeContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_eventItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEventItem) {
	 		listener.enterEventItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEventItem) {
	 		listener.exitEventItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEventItem) {
			return visitor.visitEventItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventEdgeNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EDGE_NAME(): TerminalNode {
		return this.getToken(TimingBlockParser.EDGE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_eventEdgeName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEventEdgeName) {
	 		listener.enterEventEdgeName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEventEdgeName) {
	 		listener.exitEventEdgeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEventEdgeName) {
			return visitor.visitEventEdgeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventTypeContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_eventType;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEventType) {
	 		listener.enterEventType(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEventType) {
	 		listener.exitEventType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEventType) {
			return visitor.visitEventType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(TimingBlockParser.BREAK, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(TimingBlockParser.COLON, 0);
	}
	public breakWfcs(): BreakWfcsContext {
		return this.getTypedRuleContext(BreakWfcsContext, 0) as BreakWfcsContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_breakItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterBreakItem) {
	 		listener.enterBreakItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitBreakItem) {
	 		listener.exitBreakItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitBreakItem) {
			return visitor.visitBreakItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakWfcsContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wfcChar_list(): WfcCharContext[] {
		return this.getTypedRuleContexts(WfcCharContext) as WfcCharContext[];
	}
	public wfcChar(i: number): WfcCharContext {
		return this.getTypedRuleContext(WfcCharContext, i) as WfcCharContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_breakWfcs;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterBreakWfcs) {
	 		listener.enterBreakWfcs(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitBreakWfcs) {
	 		listener.exitBreakWfcs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitBreakWfcs) {
			return visitor.visitBreakWfcs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsedBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USED(): TerminalNode {
		return this.getToken(TimingBlockParser.USED, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public wfcItem_list(): WfcItemContext[] {
		return this.getTypedRuleContexts(WfcItemContext) as WfcItemContext[];
	}
	public wfcItem(i: number): WfcItemContext {
		return this.getTypedRuleContext(WfcItemContext, i) as WfcItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_usedBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterUsedBlock) {
	 		listener.enterUsedBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitUsedBlock) {
	 		listener.exitUsedBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitUsedBlock) {
			return visitor.visitUsedBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WfcItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
	public wfc_list(): WfcContext[] {
		return this.getTypedRuleContexts(WfcContext) as WfcContext[];
	}
	public wfc(i: number): WfcContext {
		return this.getTypedRuleContext(WfcContext, i) as WfcContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_wfcItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWfcItem) {
	 		listener.enterWfcItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWfcItem) {
	 		listener.exitWfcItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWfcItem) {
			return visitor.visitWfcItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WfcContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public breakWfcs(): BreakWfcsContext {
		return this.getTypedRuleContext(BreakWfcsContext, 0) as BreakWfcsContext;
	}
	public L_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACK, 0);
	}
	public R_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACK, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_wfc;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWfc) {
	 		listener.enterWfc(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWfc) {
	 		listener.exitWfc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWfc) {
			return visitor.visitWfc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnUsedBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNUSED(): TerminalNode {
		return this.getToken(TimingBlockParser.UNUSED, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public wfcItem_list(): WfcItemContext[] {
		return this.getTypedRuleContexts(WfcItemContext) as WfcItemContext[];
	}
	public wfcItem(i: number): WfcItemContext {
		return this.getTypedRuleContext(WfcItemContext, i) as WfcItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_unUsedBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterUnUsedBlock) {
	 		listener.enterUnUsedBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitUnUsedBlock) {
	 		listener.exitUnUsedBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitUnUsedBlock) {
			return visitor.visitUnUsedBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MAP(): TerminalNode {
		return this.getToken(TimingBlockParser.MAP, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public wfcMapItem_list(): WfcMapItemContext[] {
		return this.getTypedRuleContexts(WfcMapItemContext) as WfcMapItemContext[];
	}
	public wfcMapItem(i: number): WfcMapItemContext {
		return this.getTypedRuleContext(WfcMapItemContext, i) as WfcMapItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_mapBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterMapBlock) {
	 		listener.enterMapBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitMapBlock) {
	 		listener.exitMapBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitMapBlock) {
			return visitor.visitMapBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WfcMapItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARROW(): TerminalNode {
		return this.getToken(TimingBlockParser.ARROW, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
	public mapBeforItem_list(): MapBeforItemContext[] {
		return this.getTypedRuleContexts(MapBeforItemContext) as MapBeforItemContext[];
	}
	public mapBeforItem(i: number): MapBeforItemContext {
		return this.getTypedRuleContext(MapBeforItemContext, i) as MapBeforItemContext;
	}
	public mapAfterItem_list(): MapAfterItemContext[] {
		return this.getTypedRuleContexts(MapAfterItemContext) as MapAfterItemContext[];
	}
	public mapAfterItem(i: number): MapAfterItemContext {
		return this.getTypedRuleContext(MapAfterItemContext, i) as MapAfterItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_wfcMapItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterWfcMapItem) {
	 		listener.enterWfcMapItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitWfcMapItem) {
	 		listener.exitWfcMapItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitWfcMapItem) {
			return visitor.visitWfcMapItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapBeforItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACK, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, i);
	}
	public R_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACK, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_mapBeforItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterMapBeforItem) {
	 		listener.enterMapBeforItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitMapBeforItem) {
	 		listener.exitMapBeforItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitMapBeforItem) {
			return visitor.visitMapBeforItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapAfterItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_mapAfterItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterMapAfterItem) {
	 		listener.enterMapAfterItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitMapAfterItem) {
	 		listener.exitMapAfterItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitMapAfterItem) {
			return visitor.visitMapAfterItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationSetsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUATION_SETS(): TerminalNode {
		return this.getToken(TimingBlockParser.EQUATION_SETS, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public equationSetBlock_list(): EquationSetBlockContext[] {
		return this.getTypedRuleContexts(EquationSetBlockContext) as EquationSetBlockContext[];
	}
	public equationSetBlock(i: number): EquationSetBlockContext {
		return this.getTypedRuleContext(EquationSetBlockContext, i) as EquationSetBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_equationSetsBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEquationSetsBlock) {
	 		listener.enterEquationSetsBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEquationSetsBlock) {
	 		listener.exitEquationSetsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEquationSetsBlock) {
			return visitor.visitEquationSetsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationSetBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUATION_SET(): TerminalNode {
		return this.getToken(TimingBlockParser.EQUATION_SET, 0);
	}
	public equationSetName(): EquationSetNameContext {
		return this.getTypedRuleContext(EquationSetNameContext, 0) as EquationSetNameContext;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public equationSetBlockItem_list(): EquationSetBlockItemContext[] {
		return this.getTypedRuleContexts(EquationSetBlockItemContext) as EquationSetBlockItemContext[];
	}
	public equationSetBlockItem(i: number): EquationSetBlockItemContext {
		return this.getTypedRuleContext(EquationSetBlockItemContext, i) as EquationSetBlockItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_equationSetBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEquationSetBlock) {
	 		listener.enterEquationSetBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEquationSetBlock) {
	 		listener.exitEquationSetBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEquationSetBlock) {
			return visitor.visitEquationSetBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationSetNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_equationSetName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEquationSetName) {
	 		listener.enterEquationSetName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEquationSetName) {
	 		listener.exitEquationSetName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEquationSetName) {
			return visitor.visitEquationSetName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationSetBlockItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public specVarsBlock(): SpecVarsBlockContext {
		return this.getTypedRuleContext(SpecVarsBlockContext, 0) as SpecVarsBlockContext;
	}
	public timingSetsBlock(): TimingSetsBlockContext {
		return this.getTypedRuleContext(TimingSetsBlockContext, 0) as TimingSetsBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_equationSetBlockItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEquationSetBlockItem) {
	 		listener.enterEquationSetBlockItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEquationSetBlockItem) {
	 		listener.exitEquationSetBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEquationSetBlockItem) {
			return visitor.visitEquationSetBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecVarsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPEC_VARS(): TerminalNode {
		return this.getToken(TimingBlockParser.SPEC_VARS, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public declarVarItem_list(): DeclarVarItemContext[] {
		return this.getTypedRuleContexts(DeclarVarItemContext) as DeclarVarItemContext[];
	}
	public declarVarItem(i: number): DeclarVarItemContext {
		return this.getTypedRuleContext(DeclarVarItemContext, i) as DeclarVarItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specVarsBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecVarsBlock) {
	 		listener.enterSpecVarsBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecVarsBlock) {
	 		listener.exitSpecVarsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecVarsBlock) {
			return visitor.visitSpecVarsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarVarItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varType(): VarTypeContext {
		return this.getTypedRuleContext(VarTypeContext, 0) as VarTypeContext;
	}
	public varName(): VarNameContext {
		return this.getTypedRuleContext(VarNameContext, 0) as VarNameContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_declarVarItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterDeclarVarItem) {
	 		listener.enterDeclarVarItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitDeclarVarItem) {
	 		listener.exitDeclarVarItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitDeclarVarItem) {
			return visitor.visitDeclarVarItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarTypeContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR_TYPE(): TerminalNode {
		return this.getToken(TimingBlockParser.VAR_TYPE, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_varType;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterVarType) {
	 		listener.enterVarType(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitVarType) {
	 		listener.exitVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitVarType) {
			return visitor.visitVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_varName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterVarName) {
	 		listener.enterVarName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitVarName) {
	 		listener.exitVarName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitVarName) {
			return visitor.visitVarName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingSetsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIMING_SETS(): TerminalNode {
		return this.getToken(TimingBlockParser.TIMING_SETS, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public timingSetBlock_list(): TimingSetBlockContext[] {
		return this.getTypedRuleContexts(TimingSetBlockContext) as TimingSetBlockContext[];
	}
	public timingSetBlock(i: number): TimingSetBlockContext {
		return this.getTypedRuleContext(TimingSetBlockContext, i) as TimingSetBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timingSetsBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimingSetsBlock) {
	 		listener.enterTimingSetsBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimingSetsBlock) {
	 		listener.exitTimingSetsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimingSetsBlock) {
			return visitor.visitTimingSetsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingSetBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIMING_SET(): TerminalNode {
		return this.getToken(TimingBlockParser.TIMING_SET, 0);
	}
	public timingSetName(): TimingSetNameContext {
		return this.getTypedRuleContext(TimingSetNameContext, 0) as TimingSetNameContext;
	}
	public L_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACK, 0);
	}
	public timeValueExpr(): TimeValueExprContext {
		return this.getTypedRuleContext(TimeValueExprContext, 0) as TimeValueExprContext;
	}
	public R_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACK, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public timingSetBlockItem_list(): TimingSetBlockItemContext[] {
		return this.getTypedRuleContexts(TimingSetBlockItemContext) as TimingSetBlockItemContext[];
	}
	public timingSetBlockItem(i: number): TimingSetBlockItemContext {
		return this.getTypedRuleContext(TimingSetBlockItemContext, i) as TimingSetBlockItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timingSetBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimingSetBlock) {
	 		listener.enterTimingSetBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimingSetBlock) {
	 		listener.exitTimingSetBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimingSetBlock) {
			return visitor.visitTimingSetBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingSetNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timingSetName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimingSetName) {
	 		listener.enterTimingSetName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimingSetName) {
	 		listener.exitTimingSetName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimingSetName) {
			return visitor.visitTimingSetName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingSetBlockItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SIGNAL(): TerminalNode {
		return this.getToken(TimingBlockParser.SIGNAL, 0);
	}
	public signalExpr(): SignalExprContext {
		return this.getTypedRuleContext(SignalExprContext, 0) as SignalExprContext;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public edgePositionItem_list(): EdgePositionItemContext[] {
		return this.getTypedRuleContexts(EdgePositionItemContext) as EdgePositionItemContext[];
	}
	public edgePositionItem(i: number): EdgePositionItemContext {
		return this.getTypedRuleContext(EdgePositionItemContext, i) as EdgePositionItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timingSetBlockItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimingSetBlockItem) {
	 		listener.enterTimingSetBlockItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimingSetBlockItem) {
	 		listener.exitTimingSetBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimingSetBlockItem) {
			return visitor.visitTimingSetBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EdgePositionItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eventEdgeName(): EventEdgeNameContext {
		return this.getTypedRuleContext(EventEdgeNameContext, 0) as EventEdgeNameContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(TimingBlockParser.EQUAL, 0);
	}
	public timeValueExpr(): TimeValueExprContext {
		return this.getTypedRuleContext(TimeValueExprContext, 0) as TimeValueExprContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_edgePositionItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterEdgePositionItem) {
	 		listener.enterEdgePositionItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitEdgePositionItem) {
	 		listener.exitEdgePositionItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitEdgePositionItem) {
			return visitor.visitEdgePositionItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeValueExprContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addExpr(): AddExprContext {
		return this.getTypedRuleContext(AddExprContext, 0) as AddExprContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_timeValueExpr;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterTimeValueExpr) {
	 		listener.enterTimeValueExpr(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitTimeValueExpr) {
	 		listener.exitTimeValueExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitTimeValueExpr) {
			return visitor.visitTimeValueExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddExprContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mulExpr_list(): MulExprContext[] {
		return this.getTypedRuleContexts(MulExprContext) as MulExprContext[];
	}
	public mulExpr(i: number): MulExprContext {
		return this.getTypedRuleContext(MulExprContext, i) as MulExprContext;
	}
	public ADD_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.ADD);
	}
	public ADD(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.ADD, i);
	}
	public SUB_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.SUB);
	}
	public SUB(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.SUB, i);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_addExpr;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterAddExpr) {
	 		listener.enterAddExpr(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitAddExpr) {
	 		listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulExprContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom_list(): AtomContext[] {
		return this.getTypedRuleContexts(AtomContext) as AtomContext[];
	}
	public atom(i: number): AtomContext {
		return this.getTypedRuleContext(AtomContext, i) as AtomContext;
	}
	public MUL_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.MUL);
	}
	public MUL(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.MUL, i);
	}
	public DIV_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.DIV);
	}
	public DIV(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.DIV, i);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_mulExpr;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterMulExpr) {
	 		listener.enterMulExpr(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitMulExpr) {
	 		listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(TimingBlockParser.DOUBLE, 0);
	}
	public UNIT(): TerminalNode {
		return this.getToken(TimingBlockParser.UNIT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
	public L_PAR(): TerminalNode {
		return this.getToken(TimingBlockParser.L_PAR, 0);
	}
	public timeValueExpr(): TimeValueExprContext {
		return this.getTypedRuleContext(TimeValueExprContext, 0) as TimeValueExprContext;
	}
	public R_PAR(): TerminalNode {
		return this.getToken(TimingBlockParser.R_PAR, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_atom;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationSetsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPECIFICATION_SETS(): TerminalNode {
		return this.getToken(TimingBlockParser.SPECIFICATION_SETS, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public specificationSetBlock_list(): SpecificationSetBlockContext[] {
		return this.getTypedRuleContexts(SpecificationSetBlockContext) as SpecificationSetBlockContext[];
	}
	public specificationSetBlock(i: number): SpecificationSetBlockContext {
		return this.getTypedRuleContext(SpecificationSetBlockContext, i) as SpecificationSetBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specificationSetsBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecificationSetsBlock) {
	 		listener.enterSpecificationSetsBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecificationSetsBlock) {
	 		listener.exitSpecificationSetsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecificationSetsBlock) {
			return visitor.visitSpecificationSetsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationSetBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPECIFICATION_SET(): TerminalNode {
		return this.getToken(TimingBlockParser.SPECIFICATION_SET, 0);
	}
	public specificationSetName(): SpecificationSetNameContext {
		return this.getTypedRuleContext(SpecificationSetNameContext, 0) as SpecificationSetNameContext;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public specificationSetBlockItem_list(): SpecificationSetBlockItemContext[] {
		return this.getTypedRuleContexts(SpecificationSetBlockItemContext) as SpecificationSetBlockItemContext[];
	}
	public specificationSetBlockItem(i: number): SpecificationSetBlockItemContext {
		return this.getTypedRuleContext(SpecificationSetBlockItemContext, i) as SpecificationSetBlockItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specificationSetBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecificationSetBlock) {
	 		listener.enterSpecificationSetBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecificationSetBlock) {
	 		listener.exitSpecificationSetBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecificationSetBlock) {
			return visitor.visitSpecificationSetBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationSetNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specificationSetName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecificationSetName) {
	 		listener.enterSpecificationSetName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecificationSetName) {
	 		listener.exitSpecificationSetName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecificationSetName) {
			return visitor.visitSpecificationSetName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationSetBlockItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public specVarValueBlock(): SpecVarValueBlockContext {
		return this.getTypedRuleContext(SpecVarValueBlockContext, 0) as SpecVarValueBlockContext;
	}
	public portsBlock(): PortsBlockContext {
		return this.getTypedRuleContext(PortsBlockContext, 0) as PortsBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specificationSetBlockItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecificationSetBlockItem) {
	 		listener.enterSpecificationSetBlockItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecificationSetBlockItem) {
	 		listener.exitSpecificationSetBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecificationSetBlockItem) {
			return visitor.visitSpecificationSetBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecVarValueBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPEC_VARS(): TerminalNode {
		return this.getToken(TimingBlockParser.SPEC_VARS, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public specNameValueItem_list(): SpecNameValueItemContext[] {
		return this.getTypedRuleContexts(SpecNameValueItemContext) as SpecNameValueItemContext[];
	}
	public specNameValueItem(i: number): SpecNameValueItemContext {
		return this.getTypedRuleContext(SpecNameValueItemContext, i) as SpecNameValueItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specVarValueBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecVarValueBlock) {
	 		listener.enterSpecVarValueBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecVarValueBlock) {
	 		listener.exitSpecVarValueBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecVarValueBlock) {
			return visitor.visitSpecVarValueBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecNameValueItemContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varName(): VarNameContext {
		return this.getTypedRuleContext(VarNameContext, 0) as VarNameContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(TimingBlockParser.EQUAL, 0);
	}
	public varValue(): VarValueContext {
		return this.getTypedRuleContext(VarValueContext, 0) as VarValueContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TimingBlockParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_specNameValueItem;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterSpecNameValueItem) {
	 		listener.enterSpecNameValueItem(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitSpecNameValueItem) {
	 		listener.exitSpecNameValueItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitSpecNameValueItem) {
			return visitor.visitSpecNameValueItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarValueContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public timeValueExpr(): TimeValueExprContext {
		return this.getTypedRuleContext(TimeValueExprContext, 0) as TimeValueExprContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_varValue;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterVarValue) {
	 		listener.enterVarValue(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitVarValue) {
	 		listener.exitVarValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitVarValue) {
			return visitor.visitVarValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PORTS(): TerminalNode {
		return this.getToken(TimingBlockParser.PORTS, 0);
	}
	public L_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACK, 0);
	}
	public portNameExpr(): PortNameExprContext {
		return this.getTypedRuleContext(PortNameExprContext, 0) as PortNameExprContext;
	}
	public R_BRACK(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACK, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public portBlock_list(): PortBlockContext[] {
		return this.getTypedRuleContexts(PortBlockContext) as PortBlockContext[];
	}
	public portBlock(i: number): PortBlockContext {
		return this.getTypedRuleContext(PortBlockContext, i) as PortBlockContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_portsBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterPortsBlock) {
	 		listener.enterPortsBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitPortsBlock) {
	 		listener.exitPortsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitPortsBlock) {
			return visitor.visitPortsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortNameExprContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_portNameExpr;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterPortNameExpr) {
	 		listener.enterPortNameExpr(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitPortNameExpr) {
	 		listener.exitPortNameExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitPortNameExpr) {
			return visitor.visitPortNameExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortBlockContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPEC_VARS(): TerminalNode {
		return this.getToken(TimingBlockParser.SPEC_VARS, 0);
	}
	public portName(): PortNameContext {
		return this.getTypedRuleContext(PortNameContext, 0) as PortNameContext;
	}
	public L_BRACK_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.L_BRACK);
	}
	public L_BRACK(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACK, i);
	}
	public waveformTableName(): WaveformTableNameContext {
		return this.getTypedRuleContext(WaveformTableNameContext, 0) as WaveformTableNameContext;
	}
	public R_BRACK_list(): TerminalNode[] {
	    	return this.getTokens(TimingBlockParser.R_BRACK);
	}
	public R_BRACK(i: number): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACK, i);
	}
	public equationSetName(): EquationSetNameContext {
		return this.getTypedRuleContext(EquationSetNameContext, 0) as EquationSetNameContext;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(TimingBlockParser.R_BRACE, 0);
	}
	public specNameValueItem_list(): SpecNameValueItemContext[] {
		return this.getTypedRuleContexts(SpecNameValueItemContext) as SpecNameValueItemContext[];
	}
	public specNameValueItem(i: number): SpecNameValueItemContext {
		return this.getTypedRuleContext(SpecNameValueItemContext, i) as SpecNameValueItemContext;
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_portBlock;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterPortBlock) {
	 		listener.enterPortBlock(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitPortBlock) {
	 		listener.exitPortBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitPortBlock) {
			return visitor.visitPortBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortNameContext extends ParserRuleContext {
	constructor(parser?: TimingBlockParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(TimingBlockParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return TimingBlockParser.RULE_portName;
	}
	public enterRule(listener: TimingBlockListener): void {
	    if(listener.enterPortName) {
	 		listener.enterPortName(this);
		}
	}
	public exitRule(listener: TimingBlockListener): void {
	    if(listener.exitPortName) {
	 		listener.exitPortName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingBlockVisitor<Result>): Result {
		if (visitor.visitPortName) {
			return visitor.visitPortName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
