var ChordDataPart = Object.create(Part);

ChordDataPart.registerEvents = function(){

    var container  = this.getContainer();
    this.record.recordChanged.sub(this.compileTemplate.bind(this));

};

ChordDataPart.init = function(){

    Part.init(this);

};

ChordDataPart.set = function(chord){

    this.record.setKeyVal('chord', chord);
    this.record.setKeyVal('notes', this.getNotes());
    this.record.setKeyVal('dominant', this.getDominant());
    this.record.setKeyVal('subdominant', this.getSubDominant());
    this.record.setKeyVal('voicing', this.getVoicing());
    this.record.setKeyVal('voicings', this.getVoicings());
    return this;

};

ChordDataPart.setChord = function(selector){

    var chord = selector.record.root + selector.record.acci + selector.record.qual;
    this.set(chord);
    return this;

};

ChordDataPart.getNotes = function(){

    var teoria_notes = teoria.chord(this.record.val('chord')).notes();
    var notes = _.map(teoria_notes, function(note){ 
        return {
            note: note.scientific(),
            freq: note.fq().toPrecision(5),
            midiKey: note.key()
        } 
    });

    return notes;

};

ChordDataPart.getDominant = function(){

    var chord = teoria.chord(this.record.val('chord'));
    return chord.dominant();

};

ChordDataPart.getSubDominant = function(){

    var chord = teoria.chord(this.record.val('chord'));
    return chord.subdominant();

};

ChordDataPart.getVoicing = function(){

    var chord = teoria.chord(this.record.val('chord'));
    var intervals = _.map(chord.voicing(), function(voice){ return voice.toString(); });
    return intervals.join(', ');

};

ChordDataPart.getVoicings = function(){

    var chords = jtab.Chords[this.record.val('chord')];
    var voicings = chords[0] + chords[1];
    return voicings;

};
