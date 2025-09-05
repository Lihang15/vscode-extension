// Generated from ./grammar/TimingBlock.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { TimingBlockContext } from "./TimingBlockParser.js";
import { TimingBlockItemContext } from "./TimingBlockParser.js";
import { WaveformTablesBlockContext } from "./TimingBlockParser.js";
import { WaveformTableBlockContext } from "./TimingBlockParser.js";
import { WaveformTableNameContext } from "./TimingBlockParser.js";
import { XmodeValueContext } from "./TimingBlockParser.js";
import { WaveformTableBlockItemContext } from "./TimingBlockParser.js";
import { SignalExprContext } from "./TimingBlockParser.js";
import { ExprContext } from "./TimingBlockParser.js";
import { TermContext } from "./TimingBlockParser.js";
import { WaveformItemContext } from "./TimingBlockParser.js";
import { WaveformCharItemContext } from "./TimingBlockParser.js";
import { WfcCharContext } from "./TimingBlockParser.js";
import { EventItemContext } from "./TimingBlockParser.js";
import { EventEdgeNameContext } from "./TimingBlockParser.js";
import { EventTypeContext } from "./TimingBlockParser.js";
import { BreakItemContext } from "./TimingBlockParser.js";
import { BreakWfcsContext } from "./TimingBlockParser.js";
import { UsedBlockContext } from "./TimingBlockParser.js";
import { WfcItemContext } from "./TimingBlockParser.js";
import { WfcContext } from "./TimingBlockParser.js";
import { UnUsedBlockContext } from "./TimingBlockParser.js";
import { MapBlockContext } from "./TimingBlockParser.js";
import { WfcMapItemContext } from "./TimingBlockParser.js";
import { MapBeforItemContext } from "./TimingBlockParser.js";
import { MapAfterItemContext } from "./TimingBlockParser.js";
import { EquationSetsBlockContext } from "./TimingBlockParser.js";
import { EquationSetBlockContext } from "./TimingBlockParser.js";
import { EquationSetNameContext } from "./TimingBlockParser.js";
import { EquationSetBlockItemContext } from "./TimingBlockParser.js";
import { SpecVarsBlockContext } from "./TimingBlockParser.js";
import { DeclarVarItemContext } from "./TimingBlockParser.js";
import { VarTypeContext } from "./TimingBlockParser.js";
import { VarNameContext } from "./TimingBlockParser.js";
import { TimingSetsBlockContext } from "./TimingBlockParser.js";
import { TimingSetBlockContext } from "./TimingBlockParser.js";
import { TimingSetNameContext } from "./TimingBlockParser.js";
import { TimingSetBlockItemContext } from "./TimingBlockParser.js";
import { EdgePositionItemContext } from "./TimingBlockParser.js";
import { TimeValueExprContext } from "./TimingBlockParser.js";
import { AddExprContext } from "./TimingBlockParser.js";
import { MulExprContext } from "./TimingBlockParser.js";
import { AtomContext } from "./TimingBlockParser.js";
import { SpecificationSetsBlockContext } from "./TimingBlockParser.js";
import { SpecificationSetBlockContext } from "./TimingBlockParser.js";
import { SpecificationSetNameContext } from "./TimingBlockParser.js";
import { SpecificationSetBlockItemContext } from "./TimingBlockParser.js";
import { SpecVarValueBlockContext } from "./TimingBlockParser.js";
import { SpecNameValueItemContext } from "./TimingBlockParser.js";
import { VarValueContext } from "./TimingBlockParser.js";
import { PortsBlockContext } from "./TimingBlockParser.js";
import { PortNameExprContext } from "./TimingBlockParser.js";
import { PortBlockContext } from "./TimingBlockParser.js";
import { PortNameContext } from "./TimingBlockParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TimingBlockParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class TimingBlockVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timingBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingBlock?: (ctx: TimingBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timingBlockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingBlockItem?: (ctx: TimingBlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.waveformTablesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformTablesBlock?: (ctx: WaveformTablesBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.waveformTableBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformTableBlock?: (ctx: WaveformTableBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.waveformTableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformTableName?: (ctx: WaveformTableNameContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.xmodeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXmodeValue?: (ctx: XmodeValueContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.waveformTableBlockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformTableBlockItem?: (ctx: WaveformTableBlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.signalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalExpr?: (ctx: SignalExprContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.waveformItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformItem?: (ctx: WaveformItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.waveformCharItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaveformCharItem?: (ctx: WaveformCharItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.wfcChar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWfcChar?: (ctx: WfcCharContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.eventItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventItem?: (ctx: EventItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.eventEdgeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventEdgeName?: (ctx: EventEdgeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.eventType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventType?: (ctx: EventTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.breakItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakItem?: (ctx: BreakItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.breakWfcs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakWfcs?: (ctx: BreakWfcsContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.usedBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsedBlock?: (ctx: UsedBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.wfcItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWfcItem?: (ctx: WfcItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.wfc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWfc?: (ctx: WfcContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.unUsedBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnUsedBlock?: (ctx: UnUsedBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.mapBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapBlock?: (ctx: MapBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.wfcMapItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWfcMapItem?: (ctx: WfcMapItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.mapBeforItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapBeforItem?: (ctx: MapBeforItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.mapAfterItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapAfterItem?: (ctx: MapAfterItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.equationSetsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquationSetsBlock?: (ctx: EquationSetsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.equationSetBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquationSetBlock?: (ctx: EquationSetBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.equationSetName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquationSetName?: (ctx: EquationSetNameContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.equationSetBlockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquationSetBlockItem?: (ctx: EquationSetBlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specVarsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecVarsBlock?: (ctx: SpecVarsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.declarVarItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarVarItem?: (ctx: DeclarVarItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.varType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarType?: (ctx: VarTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.varName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarName?: (ctx: VarNameContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timingSetsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingSetsBlock?: (ctx: TimingSetsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timingSetBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingSetBlock?: (ctx: TimingSetBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timingSetName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingSetName?: (ctx: TimingSetNameContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timingSetBlockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingSetBlockItem?: (ctx: TimingSetBlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.edgePositionItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdgePositionItem?: (ctx: EdgePositionItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.timeValueExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeValueExpr?: (ctx: TimeValueExprContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.addExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpr?: (ctx: AddExprContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.mulExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpr?: (ctx: MulExprContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specificationSetsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationSetsBlock?: (ctx: SpecificationSetsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specificationSetBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationSetBlock?: (ctx: SpecificationSetBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specificationSetName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationSetName?: (ctx: SpecificationSetNameContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specificationSetBlockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificationSetBlockItem?: (ctx: SpecificationSetBlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specVarValueBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecVarValueBlock?: (ctx: SpecVarValueBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.specNameValueItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecNameValueItem?: (ctx: SpecNameValueItemContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.varValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarValue?: (ctx: VarValueContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.portsBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortsBlock?: (ctx: PortsBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.portNameExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameExpr?: (ctx: PortNameExprContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.portBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortBlock?: (ctx: PortBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `TimingBlockParser.portName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortName?: (ctx: PortNameContext) => Result;
}

