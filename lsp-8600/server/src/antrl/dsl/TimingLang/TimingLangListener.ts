// Generated from ./dsl/TimingLang/TimingLang.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { TimingsBlockContext } from "./TimingLangParser.js";
import { TimingsBlockContentContext } from "./TimingLangParser.js";
import { WaveformTablesBlockContext } from "./TimingLangParser.js";
import { WaveformTableContext } from "./TimingLangParser.js";
import { SignalContext } from "./TimingLangParser.js";
import { SignalDataContext } from "./TimingLangParser.js";
import { SignalEntryContext } from "./TimingLangParser.js";
import { EquationSetsBlockContext } from "./TimingLangParser.js";
import { SpecificationSetsBlockContext } from "./TimingLangParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TimingLangParser`.
 */
export default class TimingLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TimingLangParser.timingsBlock`.
	 * @param ctx the parse tree
	 */
	enterTimingsBlock?: (ctx: TimingsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.timingsBlock`.
	 * @param ctx the parse tree
	 */
	exitTimingsBlock?: (ctx: TimingsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.timingsBlockContent`.
	 * @param ctx the parse tree
	 */
	enterTimingsBlockContent?: (ctx: TimingsBlockContentContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.timingsBlockContent`.
	 * @param ctx the parse tree
	 */
	exitTimingsBlockContent?: (ctx: TimingsBlockContentContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.waveformTablesBlock`.
	 * @param ctx the parse tree
	 */
	enterWaveformTablesBlock?: (ctx: WaveformTablesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.waveformTablesBlock`.
	 * @param ctx the parse tree
	 */
	exitWaveformTablesBlock?: (ctx: WaveformTablesBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.waveformTable`.
	 * @param ctx the parse tree
	 */
	enterWaveformTable?: (ctx: WaveformTableContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.waveformTable`.
	 * @param ctx the parse tree
	 */
	exitWaveformTable?: (ctx: WaveformTableContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.signal`.
	 * @param ctx the parse tree
	 */
	enterSignal?: (ctx: SignalContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.signal`.
	 * @param ctx the parse tree
	 */
	exitSignal?: (ctx: SignalContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.signalData`.
	 * @param ctx the parse tree
	 */
	enterSignalData?: (ctx: SignalDataContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.signalData`.
	 * @param ctx the parse tree
	 */
	exitSignalData?: (ctx: SignalDataContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.signalEntry`.
	 * @param ctx the parse tree
	 */
	enterSignalEntry?: (ctx: SignalEntryContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.signalEntry`.
	 * @param ctx the parse tree
	 */
	exitSignalEntry?: (ctx: SignalEntryContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.equationSetsBlock`.
	 * @param ctx the parse tree
	 */
	enterEquationSetsBlock?: (ctx: EquationSetsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.equationSetsBlock`.
	 * @param ctx the parse tree
	 */
	exitEquationSetsBlock?: (ctx: EquationSetsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingLangParser.specificationSetsBlock`.
	 * @param ctx the parse tree
	 */
	enterSpecificationSetsBlock?: (ctx: SpecificationSetsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingLangParser.specificationSetsBlock`.
	 * @param ctx the parse tree
	 */
	exitSpecificationSetsBlock?: (ctx: SpecificationSetsBlockContext) => void;
}

