// Generated from ./grammar/TimingBlock.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `TimingBlockParser`.
 */
export default class TimingBlockListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timingBlock`.
	 * @param ctx the parse tree
	 */
	enterTimingBlock?: (ctx: TimingBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timingBlock`.
	 * @param ctx the parse tree
	 */
	exitTimingBlock?: (ctx: TimingBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timingBlockItem`.
	 * @param ctx the parse tree
	 */
	enterTimingBlockItem?: (ctx: TimingBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timingBlockItem`.
	 * @param ctx the parse tree
	 */
	exitTimingBlockItem?: (ctx: TimingBlockItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.waveformTablesBlock`.
	 * @param ctx the parse tree
	 */
	enterWaveformTablesBlock?: (ctx: WaveformTablesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.waveformTablesBlock`.
	 * @param ctx the parse tree
	 */
	exitWaveformTablesBlock?: (ctx: WaveformTablesBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.waveformTableBlock`.
	 * @param ctx the parse tree
	 */
	enterWaveformTableBlock?: (ctx: WaveformTableBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.waveformTableBlock`.
	 * @param ctx the parse tree
	 */
	exitWaveformTableBlock?: (ctx: WaveformTableBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.waveformTableName`.
	 * @param ctx the parse tree
	 */
	enterWaveformTableName?: (ctx: WaveformTableNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.waveformTableName`.
	 * @param ctx the parse tree
	 */
	exitWaveformTableName?: (ctx: WaveformTableNameContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.xmodeValue`.
	 * @param ctx the parse tree
	 */
	enterXmodeValue?: (ctx: XmodeValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.xmodeValue`.
	 * @param ctx the parse tree
	 */
	exitXmodeValue?: (ctx: XmodeValueContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.waveformTableBlockItem`.
	 * @param ctx the parse tree
	 */
	enterWaveformTableBlockItem?: (ctx: WaveformTableBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.waveformTableBlockItem`.
	 * @param ctx the parse tree
	 */
	exitWaveformTableBlockItem?: (ctx: WaveformTableBlockItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.signalExpr`.
	 * @param ctx the parse tree
	 */
	enterSignalExpr?: (ctx: SignalExprContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.signalExpr`.
	 * @param ctx the parse tree
	 */
	exitSignalExpr?: (ctx: SignalExprContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.waveformItem`.
	 * @param ctx the parse tree
	 */
	enterWaveformItem?: (ctx: WaveformItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.waveformItem`.
	 * @param ctx the parse tree
	 */
	exitWaveformItem?: (ctx: WaveformItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.waveformCharItem`.
	 * @param ctx the parse tree
	 */
	enterWaveformCharItem?: (ctx: WaveformCharItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.waveformCharItem`.
	 * @param ctx the parse tree
	 */
	exitWaveformCharItem?: (ctx: WaveformCharItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.wfcChar`.
	 * @param ctx the parse tree
	 */
	enterWfcChar?: (ctx: WfcCharContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.wfcChar`.
	 * @param ctx the parse tree
	 */
	exitWfcChar?: (ctx: WfcCharContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.eventItem`.
	 * @param ctx the parse tree
	 */
	enterEventItem?: (ctx: EventItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.eventItem`.
	 * @param ctx the parse tree
	 */
	exitEventItem?: (ctx: EventItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.eventEdgeName`.
	 * @param ctx the parse tree
	 */
	enterEventEdgeName?: (ctx: EventEdgeNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.eventEdgeName`.
	 * @param ctx the parse tree
	 */
	exitEventEdgeName?: (ctx: EventEdgeNameContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.eventType`.
	 * @param ctx the parse tree
	 */
	enterEventType?: (ctx: EventTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.eventType`.
	 * @param ctx the parse tree
	 */
	exitEventType?: (ctx: EventTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.breakItem`.
	 * @param ctx the parse tree
	 */
	enterBreakItem?: (ctx: BreakItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.breakItem`.
	 * @param ctx the parse tree
	 */
	exitBreakItem?: (ctx: BreakItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.breakWfcs`.
	 * @param ctx the parse tree
	 */
	enterBreakWfcs?: (ctx: BreakWfcsContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.breakWfcs`.
	 * @param ctx the parse tree
	 */
	exitBreakWfcs?: (ctx: BreakWfcsContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.usedBlock`.
	 * @param ctx the parse tree
	 */
	enterUsedBlock?: (ctx: UsedBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.usedBlock`.
	 * @param ctx the parse tree
	 */
	exitUsedBlock?: (ctx: UsedBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.wfcItem`.
	 * @param ctx the parse tree
	 */
	enterWfcItem?: (ctx: WfcItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.wfcItem`.
	 * @param ctx the parse tree
	 */
	exitWfcItem?: (ctx: WfcItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.wfc`.
	 * @param ctx the parse tree
	 */
	enterWfc?: (ctx: WfcContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.wfc`.
	 * @param ctx the parse tree
	 */
	exitWfc?: (ctx: WfcContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.unUsedBlock`.
	 * @param ctx the parse tree
	 */
	enterUnUsedBlock?: (ctx: UnUsedBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.unUsedBlock`.
	 * @param ctx the parse tree
	 */
	exitUnUsedBlock?: (ctx: UnUsedBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.mapBlock`.
	 * @param ctx the parse tree
	 */
	enterMapBlock?: (ctx: MapBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.mapBlock`.
	 * @param ctx the parse tree
	 */
	exitMapBlock?: (ctx: MapBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.wfcMapItem`.
	 * @param ctx the parse tree
	 */
	enterWfcMapItem?: (ctx: WfcMapItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.wfcMapItem`.
	 * @param ctx the parse tree
	 */
	exitWfcMapItem?: (ctx: WfcMapItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.mapBeforItem`.
	 * @param ctx the parse tree
	 */
	enterMapBeforItem?: (ctx: MapBeforItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.mapBeforItem`.
	 * @param ctx the parse tree
	 */
	exitMapBeforItem?: (ctx: MapBeforItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.mapAfterItem`.
	 * @param ctx the parse tree
	 */
	enterMapAfterItem?: (ctx: MapAfterItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.mapAfterItem`.
	 * @param ctx the parse tree
	 */
	exitMapAfterItem?: (ctx: MapAfterItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.equationSetsBlock`.
	 * @param ctx the parse tree
	 */
	enterEquationSetsBlock?: (ctx: EquationSetsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.equationSetsBlock`.
	 * @param ctx the parse tree
	 */
	exitEquationSetsBlock?: (ctx: EquationSetsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.equationSetBlock`.
	 * @param ctx the parse tree
	 */
	enterEquationSetBlock?: (ctx: EquationSetBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.equationSetBlock`.
	 * @param ctx the parse tree
	 */
	exitEquationSetBlock?: (ctx: EquationSetBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.equationSetName`.
	 * @param ctx the parse tree
	 */
	enterEquationSetName?: (ctx: EquationSetNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.equationSetName`.
	 * @param ctx the parse tree
	 */
	exitEquationSetName?: (ctx: EquationSetNameContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.equationSetBlockItem`.
	 * @param ctx the parse tree
	 */
	enterEquationSetBlockItem?: (ctx: EquationSetBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.equationSetBlockItem`.
	 * @param ctx the parse tree
	 */
	exitEquationSetBlockItem?: (ctx: EquationSetBlockItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specVarsBlock`.
	 * @param ctx the parse tree
	 */
	enterSpecVarsBlock?: (ctx: SpecVarsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specVarsBlock`.
	 * @param ctx the parse tree
	 */
	exitSpecVarsBlock?: (ctx: SpecVarsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.declarVarItem`.
	 * @param ctx the parse tree
	 */
	enterDeclarVarItem?: (ctx: DeclarVarItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.declarVarItem`.
	 * @param ctx the parse tree
	 */
	exitDeclarVarItem?: (ctx: DeclarVarItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.varType`.
	 * @param ctx the parse tree
	 */
	enterVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.varType`.
	 * @param ctx the parse tree
	 */
	exitVarType?: (ctx: VarTypeContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.varName`.
	 * @param ctx the parse tree
	 */
	enterVarName?: (ctx: VarNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.varName`.
	 * @param ctx the parse tree
	 */
	exitVarName?: (ctx: VarNameContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timingSetsBlock`.
	 * @param ctx the parse tree
	 */
	enterTimingSetsBlock?: (ctx: TimingSetsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timingSetsBlock`.
	 * @param ctx the parse tree
	 */
	exitTimingSetsBlock?: (ctx: TimingSetsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timingSetBlock`.
	 * @param ctx the parse tree
	 */
	enterTimingSetBlock?: (ctx: TimingSetBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timingSetBlock`.
	 * @param ctx the parse tree
	 */
	exitTimingSetBlock?: (ctx: TimingSetBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timingSetName`.
	 * @param ctx the parse tree
	 */
	enterTimingSetName?: (ctx: TimingSetNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timingSetName`.
	 * @param ctx the parse tree
	 */
	exitTimingSetName?: (ctx: TimingSetNameContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timingSetBlockItem`.
	 * @param ctx the parse tree
	 */
	enterTimingSetBlockItem?: (ctx: TimingSetBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timingSetBlockItem`.
	 * @param ctx the parse tree
	 */
	exitTimingSetBlockItem?: (ctx: TimingSetBlockItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.edgePositionItem`.
	 * @param ctx the parse tree
	 */
	enterEdgePositionItem?: (ctx: EdgePositionItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.edgePositionItem`.
	 * @param ctx the parse tree
	 */
	exitEdgePositionItem?: (ctx: EdgePositionItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.timeValueExpr`.
	 * @param ctx the parse tree
	 */
	enterTimeValueExpr?: (ctx: TimeValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.timeValueExpr`.
	 * @param ctx the parse tree
	 */
	exitTimeValueExpr?: (ctx: TimeValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.addExpr`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.addExpr`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.mulExpr`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.mulExpr`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specificationSetsBlock`.
	 * @param ctx the parse tree
	 */
	enterSpecificationSetsBlock?: (ctx: SpecificationSetsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specificationSetsBlock`.
	 * @param ctx the parse tree
	 */
	exitSpecificationSetsBlock?: (ctx: SpecificationSetsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specificationSetBlock`.
	 * @param ctx the parse tree
	 */
	enterSpecificationSetBlock?: (ctx: SpecificationSetBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specificationSetBlock`.
	 * @param ctx the parse tree
	 */
	exitSpecificationSetBlock?: (ctx: SpecificationSetBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specificationSetName`.
	 * @param ctx the parse tree
	 */
	enterSpecificationSetName?: (ctx: SpecificationSetNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specificationSetName`.
	 * @param ctx the parse tree
	 */
	exitSpecificationSetName?: (ctx: SpecificationSetNameContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specificationSetBlockItem`.
	 * @param ctx the parse tree
	 */
	enterSpecificationSetBlockItem?: (ctx: SpecificationSetBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specificationSetBlockItem`.
	 * @param ctx the parse tree
	 */
	exitSpecificationSetBlockItem?: (ctx: SpecificationSetBlockItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specVarValueBlock`.
	 * @param ctx the parse tree
	 */
	enterSpecVarValueBlock?: (ctx: SpecVarValueBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specVarValueBlock`.
	 * @param ctx the parse tree
	 */
	exitSpecVarValueBlock?: (ctx: SpecVarValueBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.specNameValueItem`.
	 * @param ctx the parse tree
	 */
	enterSpecNameValueItem?: (ctx: SpecNameValueItemContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.specNameValueItem`.
	 * @param ctx the parse tree
	 */
	exitSpecNameValueItem?: (ctx: SpecNameValueItemContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.varValue`.
	 * @param ctx the parse tree
	 */
	enterVarValue?: (ctx: VarValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.varValue`.
	 * @param ctx the parse tree
	 */
	exitVarValue?: (ctx: VarValueContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.portsBlock`.
	 * @param ctx the parse tree
	 */
	enterPortsBlock?: (ctx: PortsBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.portsBlock`.
	 * @param ctx the parse tree
	 */
	exitPortsBlock?: (ctx: PortsBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.portNameExpr`.
	 * @param ctx the parse tree
	 */
	enterPortNameExpr?: (ctx: PortNameExprContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.portNameExpr`.
	 * @param ctx the parse tree
	 */
	exitPortNameExpr?: (ctx: PortNameExprContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.portBlock`.
	 * @param ctx the parse tree
	 */
	enterPortBlock?: (ctx: PortBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.portBlock`.
	 * @param ctx the parse tree
	 */
	exitPortBlock?: (ctx: PortBlockContext) => void;
	/**
	 * Enter a parse tree produced by `TimingBlockParser.portName`.
	 * @param ctx the parse tree
	 */
	enterPortName?: (ctx: PortNameContext) => void;
	/**
	 * Exit a parse tree produced by `TimingBlockParser.portName`.
	 * @param ctx the parse tree
	 */
	exitPortName?: (ctx: PortNameContext) => void;
}

