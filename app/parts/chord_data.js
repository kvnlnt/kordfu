var ChordDataPart = Object.create(Part);

ChordDataPart.registerEvents = function(){

    var container  = this.getContainer();
    this.record.recordChanged.sub(this.compileTemplate.bind(this));

};

ChordDataPart.init = function(){
    Part.init(this);
};
