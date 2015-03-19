var Part = {

    create:function(options){
        var newPart        = Object.create(this);
        newPart._options   = options || {};
        newPart._jst       = options.jst || '';
        newPart._data      = this._data || options.data || '';
        newPart._html      = '';
        newPart.compiled   = Pubsub.create(this);
        newPart.template   = Template.create(newPart._jst) || Template.create();
        newPart.record     = Record.create(newPart._data) || Record.create();
        newPart.init();
        return newPart;
    },

    init: function(scope){
        var scope = scope || this;
        scope.compileTemplate();
        scope.record.recordChanged.sub(scope.compileTemplate.bind(scope));
    },

    compileTemplate:function(){
        var html = this.template.compile(this.record.val());
        this.setHtml(html.get());
        this.compiled.pub({ html: this.getHtml() });
        return html;
    },

    getHtml:function(){
        return this._html;
    },

    setHtml:function(html){
        this._html = html;
        return this;
    },

    getRecord:function(){
        return this.record;
    },

    setRecord:function(record){
        this.record = Record.create(record) || Record.create();;
        return this;
    }, 

    getTemplate:function(){
        return this.template;
    },

    setTemplate:function(template){
        this.template = template;
        return this;
    },

};
