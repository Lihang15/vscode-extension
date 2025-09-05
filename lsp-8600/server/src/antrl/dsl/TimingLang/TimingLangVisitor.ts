// Generated from ./dsl/TimingLang/TimingLang.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TimingLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class TimingLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TimingLangParser.timingsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingsBlock?: (ctx: TimingsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.timingsBlockContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingsBlockContent?: (ctx: TimingsBlockContentContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.waveformTablesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformTablesBlock?: (ctx: WaveformTablesBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.waveformTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformTable?: (ctx: WaveformTableContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.signal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal?: (ctx: SignalContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.signalData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalData?: (ctx: SignalDataContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.signalEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalEntry?: (ctx: SignalEntryContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.equationSetsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquationSetsBlock?: (ctx: EquationSetsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingLangParser.specificationSetsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationSetsBlock?: (ctx: SpecificationSetsBlockContext) => Result;
}

