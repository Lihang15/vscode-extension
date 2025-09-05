grammar TimingLang;

timingsBlock
    : 'Timings' '{' timingsBlockContent* '}' 
    ;

timingsBlockContent
    : waveformTablesBlock
    | equationSetsBlock
    | specificationSetsBlock
    ;

waveformTablesBlock
    : 'WaveformTables' '{' waveformTable* '}'
    ;

waveformTable
    : 'WaveformTable' '{' signal* '}'
    ;

signal
    : 'Signal' IDENT '{' signalData* '}'
    ;

signalData
    : signalEntry (':' signalEntry)*
    ;

signalEntry
    : IDENT
    | NUMBER
    ;

equationSetsBlock
    : 'EquationSets' '{' '}'
    ;

specificationSetsBlock
    : 'SpecificationSets' '{' '}'
    ;

IDENT
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

NUMBER
    : [0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
