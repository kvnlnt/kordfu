var Part = {

    create:function(options){
        var newPart        = Object.create(this);
        newPart._options   = options || {};
        newPart._jst       = options.jst || '';
        newPart._html      = options.html || '';
        newPart._container = options.container || null;
        newPart.compiled   = Pubsub.create(this);
        newPart.dom        = {};
        newPart.template   = Template.create(newPart._jst) || Template.create();
        newPart.record     = options.record || Record.create();
        return newPart;
    },

    init: function(scope){
        var scope = scope || this;
        scope.compileTemplate();
        scope.registerEvents();
        scope.record.init(); // auto init record
        return scope;
    },

    registerEvents:function(){
        return this;
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

    getContainer:function(){
        return this._container;
    },

    setContainer:function(container){
        this._container = container;
        return this;
    }

};
