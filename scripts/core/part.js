var Part = {

    create:function(options){
        var newPart        = Object.create(this);
        newPart.Options    = options || {};
        newPart._template  = options.template || '';
        newPart._record    = options.record || '';
        newPart.Template   = Template.create(newPart._template) || Template.create();
        newPart.Record     = Record.create(newPart._record) || Record.create();
        newPart.Html       = '';

        // compile template
        newPart.compileTemplate();
        newPart.Record.recordChanged.sub(newPart.compileTemplate.bind(newPart));
        
        return newPart;
    },

    compileTemplate:function(){
        var compiled = this.Template.compile(this.Record.val());
        this.setHtml(compiled.get());
        console.log(this.getHtml());
        return compiled;
    },

    getHtml:function(){
        return this.Html;
    },

    setHtml:function(html){
        this.Html = html;
        return this;
    },

    getRecord:function(){
        return this.Record;
    },

    setRecord:function(record){
        this.Record = record;
        return this;
    }, 

    getTemplate:function(){
        return this.Template;
    },

    setTemplate:function(template){
        this.Template = template;
        return this;
    },

};
