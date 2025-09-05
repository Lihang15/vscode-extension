grammar TimingBlock;

timingBlock
    : TIMIINGS L_BRACE timingBlockItem* R_BRACE
    ;

timingBlockItem
    : waveformTablesBlock
    | equationSetsBlock
	  | specificationSetsBlock
    ;

waveformTablesBlock
    : WAVEFORM_TABLES L_BRACE waveformTableBlock* R_BRACE
    ;

waveformTableBlock
    : WAVEFORM_TABLE waveformTableName L_BRACK xmodeValue R_BRACK L_BRACE waveformTableBlockItem* R_BRACE
    ;

waveformTableName
   : IDENTIFIER
   ;

xmodeValue
  : XMODEValue
  ;

waveformTableBlockItem
    :  SIGNAL signalExpr L_BRACE waveformItem* R_BRACE
    ;

signalExpr
    : expr
    ;

expr
   : term ((ADD | SUB | COMMA) term)*
   ;

term
   : IDENTIFIER
   | L_PAR expr R_PAR
   ;   

waveformItem
    :  waveformCharItem 
    |  breakItem
    |  usedBlock
    |  unUsedBlock
    |  mapBlock
    ;

waveformCharItem
    : wfcChar COLON eventItem+ SEMICOLON 
    ;

wfcChar
   : IDENTIFIER
  ;
	
eventItem
    : eventEdgeName COLON eventType 
    ;
	
eventEdgeName
    : EDGE_NAME
    ;

eventType
    : IDENTIFIER
    ;

breakItem
    : BREAK COLON breakWfcs SEMICOLON 
    ;
    

breakWfcs
    : wfcChar (wfcChar)*
    ;

usedBlock
    : USED L_BRACE wfcItem* R_BRACE
    ;

wfcItem
    : wfc+ SEMICOLON
    ;

wfc
    : breakWfcs
    | L_BRACK breakWfcs R_BRACK
    ;

unUsedBlock
    : UNUSED L_BRACE wfcItem* R_BRACE
    ;

mapBlock
    : MAP L_BRACE wfcMapItem* R_BRACE 
    ;

wfcMapItem
    : mapBeforItem+ ARROW mapAfterItem+ SEMICOLON
    ;

mapBeforItem
    : (L_BRACK? IDENTIFIER+ R_BRACK?)
    ;

mapAfterItem
    : IDENTIFIER
    ;

equationSetsBlock
    : EQUATION_SETS L_BRACE equationSetBlock* R_BRACE
    ;

equationSetBlock
    : EQUATION_SET equationSetName L_BRACE equationSetBlockItem* R_BRACE
    ;

equationSetName
    : IDENTIFIER
    ;
	
equationSetBlockItem
    : specVarsBlock
    | timingSetsBlock
    ;
	
specVarsBlock
    : SPEC_VARS L_BRACE declarVarItem* R_BRACE
    ;
	
declarVarItem
    : varType varName SEMICOLON
    ;

varType
    : VAR_TYPE
    | IDENTIFIER
    ;
	
varName 
    : IDENTIFIER
	;
	
timingSetsBlock
    : TIMING_SETS L_BRACE timingSetBlock* R_BRACE
    ;

timingSetBlock
    : TIMING_SET timingSetName L_BRACK timeValueExpr R_BRACK L_BRACE timingSetBlockItem* R_BRACE
    ;
	
timingSetName
   : IDENTIFIER
   ;
   
timingSetBlockItem
    : SIGNAL signalExpr L_BRACE edgePositionItem* R_BRACE
    ;
  
edgePositionItem
    : eventEdgeName EQUAL timeValueExpr SEMICOLON
    ;

timeValueExpr
    : addExpr
    ;

addExpr
    : mulExpr ( (ADD | SUB) mulExpr )*
    ;

mulExpr
    : atom ( (MUL | DIV) atom )*
    ;

atom
    : DOUBLE UNIT?                     
    | IDENTIFIER UNIT?                      
    | L_PAR timeValueExpr R_PAR        
    ;

specificationSetsBlock
   : SPECIFICATION_SETS L_BRACE specificationSetBlock* R_BRACE
   ;
  
specificationSetBlock
    : SPECIFICATION_SET specificationSetName L_BRACE specificationSetBlockItem* R_BRACE
	 ;

specificationSetName
  : IDENTIFIER
  ;

specificationSetBlockItem
  : specVarValueBlock
  | portsBlock
  ;
  
specVarValueBlock
   : SPEC_VARS L_BRACE specNameValueItem* R_BRACE
   ;
 
specNameValueItem
   : varName EQUAL varValue SEMICOLON
   ;

varValue
   : timeValueExpr
   ;

portsBlock
    : PORTS L_BRACK portNameExpr R_BRACK 
      L_BRACE portBlock+ R_BRACE
    ;

portNameExpr
    : IDENTIFIER (COMMA IDENTIFIER)*
    ;

portBlock
    : SPEC_VARS portName L_BRACK waveformTableName R_BRACK L_BRACK equationSetName R_BRACK
    L_BRACE specNameValueItem* R_BRACE
    ;

portName
    : IDENTIFIER
    ;

//lexer

TIMIINGS
  : 'Timings'
  ;

WAVEFORM_TABLES
  : 'WaveformTables'
;

WAVEFORM_TABLE
  : 'WaveformTable'
;

SIGNAL
  : 'Signal'
  ;

BREAK
   : 'Break'
   ;

USED
   : 'Used'
   ;

UNUSED
   :'Unused'
   ;

MAP
   :'Map'
   ;

EQUATION_SETS
  : 'EquationSets'
  ;

EQUATION_SET
  : 'EquationSet'
  ;

EDGE_NAME
  : 'd1'
  | 'd2'
  | 'd3'
  | 'd4'
  | 'r1'
  | 'r2'
  | 'r3'
  | 'r4'
  ;

VAR_TYPE
  : 'Attenuation'
  | 'Bandwidth'
  | 'Boolean'
  | 'Capacitance'
  | 'Charge' 
  | 'Conductance'
  | 'Current'
  | 'Decibel'
  | 'Degrees' 
  | 'Double'
  | 'Energy'
  | 'Frequency'
  | 'Gain'
  | 'Inductance'
  | 'Length'
  | 'Long'
  | 'MagneticFieldStrength'
  | 'MagneticFlux'
  | 'Mass'
  | 'Phase'
  | 'Power'
  | 'PowerLevel'
  | 'Rate'
  | 'Ratio'
  | 'Resistance'
  | 'String'
  | 'Temperature'
  | 'Time'
  | 'UnsignedLong'
  | 'Voltage'
  ;
  
PERIOD
  : 'Period'
;

SPEC_VARS
  : 'SpecVars'
  ;

TIMING_SETS
  : 'TimingSets'
  ;

TIMING_SET
  : 'TimingSet'
  ;

SPECIFICATION_SETS
  : 'SpecificationSets'
  ;

SPECIFICATION_SET
  : 'SpecificationSet'
  ;

PORTS
  : 'Ports'
  ;

XMODEValue
  : 'X1'
  | 'X2'
  | 'X3'
  | 'X4'
  | 'x1'
  | 'x2'
  | 'x3'
  | 'x4'
  ;

SALSH
  : '//'
;

L_BRACE
  : '{'
;

R_BRACE
  : '}'
;

L_BRACK
  : '['
;

R_BRACK
  : ']'
;

L_PAR
  : '('
;

R_PAR
  : ')'
;

SEMICOLON
  : ';'
;

EQUAL
  : '='
;

COLON
  : ':'
;

ADD
  : '+'
;
SUB
  : '-'
;
MUL
  : '*'
;
DIV
  : '/'
;

ARROW
  : '=>'
  ;

COMMA
  : ','
  ;
//匹配空格并丢弃
WS
  : [ \t\n\r\f]+ -> skip
;


//行注释     匹配行注释并丢弃 不给词法解析器
LINE_COMMENT
 : SALSH ~[\r\n]* (('\r'? '\n') | EOF) -> channel(HIDDEN)
 ;
 
//块注释     匹配块注释 并丢弃 不给词法解析器
BLOCK_COMMENT
  : '/*' .*? '*/' -> channel(HIDDEN)
;

IDENTIFIER
  : [0-9a-zA-Z_@][a-zA-Z_0-9]*
;

INT
  : [0-9]+
;

DOUBLE
  : INT '.' INT (EXP)? // 匹配带小数点的数字
  | '.' INT (EXP)?     // 匹配以小数点开头的数字
  | INT EXP?           // 匹配整数部分后可选的指数部分
;

EXP
  : [eE] [+-]? INT
; // 匹配指数部分，格式为 e 或 E 后跟可选的符号和整数

UNIT
  : ('T'| 'G' | 'M' | 'k' | 'm' | 'u' | 'n' | 'p' | 'f' | 'a')?('Hz' | 'F' | 'C' | 'S' | 'A'| 'V' | 's')
;
