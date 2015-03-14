var Page = {

    create:function(options){
        var newPage         = Object.create(this);
        newPage._options    = options || {};
        newPage._jst        = options.jst || '';
        newPage._data       = options.data || '';
        newPage._html       = '';
        newPage._parts      = {};
        newPage._container  = options.container || $('body');
        newPage.compiled    = Pubsub.create(this);
        newPage.partRemoved = Pubsub.create(this);
        newPage.partAdded   = Pubsub.create(this);
        newPage.template    = Template.create(newPage._jst) || Template.create();
        newPage.record      = Record.create(newPage._data) || Record.create();
        newPage.init();
        return newPage;
    },

    init: function(){
        this.compileTemplate();
        this.record.recordChanged.sub(this.compileTemplate.bind(this));
        this.getContainer().html(this.getHtml());
    },

    compileTemplate:function(){
        var html = this.template.compile(this.record.val());
        this.setHtml(html.get());
        this.compiled.pub({ html: this.getHtml() });
        return html;
    },

    addPart: function(name, instance, containerSelector){
        this._parts[name] = { instance: instance, container: $(containerSelector) };
        var part = this.getPart(name);
        this.partAdded.pub({ part: part }); // broadcast added
        part.container.html(part.instance.getHtml()); // populate container
        this.getPart(name).instance.compiled.sub(function(evt){
            part.container.html(evt.html);
        }); // register listener for changes
        return this;
    },

    removePart: function(name) {
        var part;
        part = this._parts[name];
        delete this._parts[name];
        this.partRemoved.pub({ part: part });
        return this;
    },

    getPart: function(name){
        return this._parts[name];
    },

    getHtml:function(){
        return this._html;
    },

    setHtml:function(html){
        this._html = html;
        return this;
    },

    getContainer: function(){
        return this._container;
    },

    setContainer: function(container){
        this._container = container;
        return this;
    },

    getRecord:function(){
        return this.record;
    },

    setRecord:function(record){
        this.record = record;
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
