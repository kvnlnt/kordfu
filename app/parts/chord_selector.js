var ChordSelectorPart = Object.create(Part);

ChordSelectorPart.registerEvents = function(){

    // elements
    var container  = this.getContainer();
    this.dom.btn   = 'button';
    this.dom.$btn  = container.find(this.dom.btn);
    this.dom.root  = 'select[name="chord_root"]';
    this.dom.$root = container.find(this.dom.root);
    this.dom.acci  = 'select[name="chord_accidental"]';
    this.dom.$acci = container.find(this.dom.acci);
    this.dom.qual  = 'select[name="chord_quality"]';
    this.dom.$qual = container.find(this.dom.qual);
   
    // element events
    container.on('click', this.dom.btn, this.pickChord.bind(this));

};

ChordSelectorPart.init = function(){
    Part.init(this);
};

ChordSelectorPart.pickChord = function(e){

    e.preventDefault();

    var root   = this.dom.$root.val();
    var acci   = this.dom.$acci.val();
    var qual   = this.dom.$qual.val();

    this
    .record
    .setKeyVal('root', root)
    .setKeyVal('acci', acci)
    .setKeyVal('qual', qual);

};
