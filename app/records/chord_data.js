var ChordDataRecord = Object.create(Record);

ChordDataRecord.schema = {
    chord:'C',
    notes:[],
    dominant:null,
    subdominant:null,
    intervals:[],
    voicings:[]
};

ChordDataRecord.init = function(){
    Record.init(this);
};

// on chord selector record update
ChordDataRecord.setChord = function(chord){

    this.reset().set({
        chord: chord, 
        notes: this.getNotes(),
        dominant: this.getDominant(),
        subdominant: this.getSubDominant(),
        intervals: this.getIntervals(),
        voicings: this.getVoicings(),
    });

    return this;

};

ChordDataRecord.getNotes = function(){

    var teoria_notes = teoria.chord(this.val('chord')).notes();
    var notes = _.map(teoria_notes, function(note){ 
        return {
            note: note.name().toUpperCase(),
            freq: note.fq().toPrecision(5),
            midiKey: note.key()
        } 
    });

    return notes;

};

ChordDataRecord.getDominant = function(){

    var chord = teoria.chord(this.val('chord'));
    return chord.dominant();

};

ChordDataRecord.getSubDominant = function(){

    var chord = teoria.chord(this.val('chord'));
    return chord.subdominant();

};

ChordDataRecord.getIntervals = function(){

    var chord = teoria.chord(this.val('chord'));
    var intervals = _.map(chord.voicing(), function(voice){ return voice.toString(); });
    return intervals.join(', ');

};

ChordDataRecord.getVoicings = function(){

    return chordData[this.val('chord')];

};

