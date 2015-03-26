var ChordSelectorRecord = Object.create(Record);

ChordSelectorRecord.schema = {
    root:'C',
    qual:''
};

ChordSelectorRecord.init = function(){
    Record.init(this);
};
