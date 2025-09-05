// Generated from ./dsl/TimingLang/TimingLang.g4 by ANTLR 4.13.2
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
import TimingLangListener from "./TimingLangListener.js";
import TimingLangVisitor from "./TimingLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TimingLangParser extends Parser {
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_timingsBlock = 0;
	public static readonly RULE_timingsBlockContent = 1;
	public static readonly RULE_waveformTablesBlock = 2;
	public static readonly RULE_waveformTable = 3;
	public static readonly RULE_signal = 4;
	public static readonly RULE_signalData = 5;
	public static readonly RULE_signalEntry = 6;
	public static readonly RULE_equationSetsBlock = 7;
	public static readonly RULE_specificationSetsBlock = 8;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"timingsBlock", "timingsBlockContent", "waveformTablesBlock", "waveformTable", 
		"signal", "signalData", "signalEntry", "equationSetsBlock", "specificationSetsBlock",
	];
	public get grammarFileName(): string { return "TimingLang.g4"; }
	public get literalNames(): (string | null)[] { return TimingLangParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TimingLangParser.symbolicNames; }
	public get ruleNames(): string[] { return TimingLangParser.ruleNames; }
	public get serializedATN(): number[] { return TimingLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TimingLangParser._ATN, TimingLangParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public timingsBlock(): TimingsBlockContext {
		let localctx: TimingsBlockContext = new TimingsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TimingLangParser.RULE_timingsBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			this.match(TimingLangParser.T__0);
			this.state = 19;
			this.match(TimingLangParser.T__1);
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 784) !== 0)) {
				{
				{
				this.state = 20;
				this.timingsBlockContent();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
			this.match(TimingLangParser.T__2);
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
	public timingsBlockContent(): TimingsBlockContentContext {
		let localctx: TimingsBlockContentContext = new TimingsBlockContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TimingLangParser.RULE_timingsBlockContent);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 28;
				this.waveformTablesBlock();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 29;
				this.equationSetsBlock();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 30;
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
		this.enterRule(localctx, 4, TimingLangParser.RULE_waveformTablesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this.match(TimingLangParser.T__3);
			this.state = 34;
			this.match(TimingLangParser.T__1);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 35;
				this.waveformTable();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
			this.match(TimingLangParser.T__2);
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
	public waveformTable(): WaveformTableContext {
		let localctx: WaveformTableContext = new WaveformTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TimingLangParser.RULE_waveformTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.match(TimingLangParser.T__4);
			this.state = 44;
			this.match(TimingLangParser.T__1);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 45;
				this.signal();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 51;
			this.match(TimingLangParser.T__2);
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
	public signal(): SignalContext {
		let localctx: SignalContext = new SignalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TimingLangParser.RULE_signal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.match(TimingLangParser.T__5);
			this.state = 54;
			this.match(TimingLangParser.IDENT);
			this.state = 55;
			this.match(TimingLangParser.T__1);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10 || _la===11) {
				{
				{
				this.state = 56;
				this.signalData();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(TimingLangParser.T__2);
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
	public signalData(): SignalDataContext {
		let localctx: SignalDataContext = new SignalDataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TimingLangParser.RULE_signalData);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.signalEntry();
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 65;
				this.match(TimingLangParser.T__6);
				this.state = 66;
				this.signalEntry();
				}
				}
				this.state = 71;
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
	public signalEntry(): SignalEntryContext {
		let localctx: SignalEntryContext = new SignalEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TimingLangParser.RULE_signalEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			_la = this._input.LA(1);
			if(!(_la===10 || _la===11)) {
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
	public equationSetsBlock(): EquationSetsBlockContext {
		let localctx: EquationSetsBlockContext = new EquationSetsBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, TimingLangParser.RULE_equationSetsBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			this.match(TimingLangParser.T__7);
			this.state = 75;
			this.match(TimingLangParser.T__1);
			this.state = 76;
			this.match(TimingLangParser.T__2);
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
		this.enterRule(localctx, 16, TimingLangParser.RULE_specificationSetsBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.match(TimingLangParser.T__8);
			this.state = 79;
			this.match(TimingLangParser.T__1);
			this.state = 80;
			this.match(TimingLangParser.T__2);
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

	public static readonly _serializedATN: number[] = [4,1,12,83,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,0,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,
	2,5,2,37,8,2,10,2,12,2,40,9,2,1,2,1,2,1,3,1,3,1,3,5,3,47,8,3,10,3,12,3,
	50,9,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,58,8,4,10,4,12,4,61,9,4,1,4,1,4,1,5,
	1,5,1,5,5,5,68,8,5,10,5,12,5,71,9,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
	1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,10,11,80,0,18,1,0,0,0,2,31,
	1,0,0,0,4,33,1,0,0,0,6,43,1,0,0,0,8,53,1,0,0,0,10,64,1,0,0,0,12,72,1,0,
	0,0,14,74,1,0,0,0,16,78,1,0,0,0,18,19,5,1,0,0,19,23,5,2,0,0,20,22,3,2,1,
	0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,
	25,23,1,0,0,0,26,27,5,3,0,0,27,1,1,0,0,0,28,32,3,4,2,0,29,32,3,14,7,0,30,
	32,3,16,8,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,
	5,4,0,0,34,38,5,2,0,0,35,37,3,6,3,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,
	0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,3,0,0,42,5,1,0,
	0,0,43,44,5,5,0,0,44,48,5,2,0,0,45,47,3,8,4,0,46,45,1,0,0,0,47,50,1,0,0,
	0,48,46,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,48,1,0,0,0,51,52,5,3,0,0,
	52,7,1,0,0,0,53,54,5,6,0,0,54,55,5,10,0,0,55,59,5,2,0,0,56,58,3,10,5,0,
	57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,
	59,1,0,0,0,62,63,5,3,0,0,63,9,1,0,0,0,64,69,3,12,6,0,65,66,5,7,0,0,66,68,
	3,12,6,0,67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,11,
	1,0,0,0,71,69,1,0,0,0,72,73,7,0,0,0,73,13,1,0,0,0,74,75,5,8,0,0,75,76,5,
	2,0,0,76,77,5,3,0,0,77,15,1,0,0,0,78,79,5,9,0,0,79,80,5,2,0,0,80,81,5,3,
	0,0,81,17,1,0,0,0,6,23,31,38,48,59,69];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TimingLangParser.__ATN) {
			TimingLangParser.__ATN = new ATNDeserializer().deserialize(TimingLangParser._serializedATN);
		}

		return TimingLangParser.__ATN;
	}


	static DecisionsToDFA = TimingLangParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class TimingsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public timingsBlockContent_list(): TimingsBlockContentContext[] {
		return this.getTypedRuleContexts(TimingsBlockContentContext) as TimingsBlockContentContext[];
	}
	public timingsBlockContent(i: number): TimingsBlockContentContext {
		return this.getTypedRuleContext(TimingsBlockContentContext, i) as TimingsBlockContentContext;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_timingsBlock;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterTimingsBlock) {
	 		listener.enterTimingsBlock(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitTimingsBlock) {
	 		listener.exitTimingsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitTimingsBlock) {
			return visitor.visitTimingsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimingsBlockContentContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return TimingLangParser.RULE_timingsBlockContent;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterTimingsBlockContent) {
	 		listener.enterTimingsBlockContent(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitTimingsBlockContent) {
	 		listener.exitTimingsBlockContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitTimingsBlockContent) {
			return visitor.visitTimingsBlockContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformTablesBlockContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public waveformTable_list(): WaveformTableContext[] {
		return this.getTypedRuleContexts(WaveformTableContext) as WaveformTableContext[];
	}
	public waveformTable(i: number): WaveformTableContext {
		return this.getTypedRuleContext(WaveformTableContext, i) as WaveformTableContext;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_waveformTablesBlock;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterWaveformTablesBlock) {
	 		listener.enterWaveformTablesBlock(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitWaveformTablesBlock) {
	 		listener.exitWaveformTablesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitWaveformTablesBlock) {
			return visitor.visitWaveformTablesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveformTableContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signal_list(): SignalContext[] {
		return this.getTypedRuleContexts(SignalContext) as SignalContext[];
	}
	public signal(i: number): SignalContext {
		return this.getTypedRuleContext(SignalContext, i) as SignalContext;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_waveformTable;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterWaveformTable) {
	 		listener.enterWaveformTable(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitWaveformTable) {
	 		listener.exitWaveformTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitWaveformTable) {
			return visitor.visitWaveformTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignalContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENT(): TerminalNode {
		return this.getToken(TimingLangParser.IDENT, 0);
	}
	public signalData_list(): SignalDataContext[] {
		return this.getTypedRuleContexts(SignalDataContext) as SignalDataContext[];
	}
	public signalData(i: number): SignalDataContext {
		return this.getTypedRuleContext(SignalDataContext, i) as SignalDataContext;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_signal;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterSignal) {
	 		listener.enterSignal(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitSignal) {
	 		listener.exitSignal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitSignal) {
			return visitor.visitSignal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignalDataContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signalEntry_list(): SignalEntryContext[] {
		return this.getTypedRuleContexts(SignalEntryContext) as SignalEntryContext[];
	}
	public signalEntry(i: number): SignalEntryContext {
		return this.getTypedRuleContext(SignalEntryContext, i) as SignalEntryContext;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_signalData;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterSignalData) {
	 		listener.enterSignalData(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitSignalData) {
	 		listener.exitSignalData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitSignalData) {
			return visitor.visitSignalData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignalEntryContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENT(): TerminalNode {
		return this.getToken(TimingLangParser.IDENT, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(TimingLangParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_signalEntry;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterSignalEntry) {
	 		listener.enterSignalEntry(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitSignalEntry) {
	 		listener.exitSignalEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitSignalEntry) {
			return visitor.visitSignalEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationSetsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_equationSetsBlock;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterEquationSetsBlock) {
	 		listener.enterEquationSetsBlock(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitEquationSetsBlock) {
	 		listener.exitEquationSetsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitEquationSetsBlock) {
			return visitor.visitEquationSetsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificationSetsBlockContext extends ParserRuleContext {
	constructor(parser?: TimingLangParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return TimingLangParser.RULE_specificationSetsBlock;
	}
	public enterRule(listener: TimingLangListener): void {
	    if(listener.enterSpecificationSetsBlock) {
	 		listener.enterSpecificationSetsBlock(this);
		}
	}
	public exitRule(listener: TimingLangListener): void {
	    if(listener.exitSpecificationSetsBlock) {
	 		listener.exitSpecificationSetsBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimingLangVisitor<Result>): Result {
		if (visitor.visitSpecificationSetsBlock) {
			return visitor.visitSpecificationSetsBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
