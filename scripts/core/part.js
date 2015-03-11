var Part = {

    create:function(record, container){
        var newPart       = Object.create(this);
        newPart.Template  = this.Template || '';
        newPart.Compiled  = null;
        newPart.Record    = record || {};
        newPart.Container = container || {};
        newPart.init();
        return newPart;
    },

    init:function(){
        if(null !== this.getTemplate){ this.compile(); }
        this.Record.recordChanged.sub(this.reCompile.bind(this));
        this.render();
    },

    render:function(){
        this.Container.html(this.get());
    },

    reCompile:function(record, rerender){
        var rerender = rerender || true;
        this.Record.set(record.record);
        this.compile();
        if(rerender){ this.render() };
    },

    compile:function(){
        var pattern = /<%=(.+?)%>/g;
        var tokens  = Util.regMatches(this.Template, pattern, 1);
        var string  = this.Template;
        var scope   = this.Record.get();
        for(i = 0; i < tokens.length; i++){
            var token        = tokens[i]; // get token
            var target_token = '<%='+token+'%>'; // construct token to replace
            var scoped_token = '<%= scope.'+token.trim()+' %>'; // scope it with the record
            string = string.replace(target_token, scoped_token);
        }

        // eval the properly scoped string
        var eval_string = eval("'" + string.replace(/<%=/gi, "' +").replace(/%>/gi, " +'") + "'");

        // store result and return
        this.Compiled = eval_string;
        return this;
    },

    get:function(){
        return this.Compiled;
    },

    getContainer:function(){
        return this.Container;
    },

    setContainer:function(container){
        this.Container = container;
        return this;
    },

    getRecord:function(){
        return this.Record;
    },

    getTemplate:function(){
        return this.Template;
    },

    setRecord:function(record){
        this.Record = record;
        return this;
    }, 

    setTemplate:function(template){
        this.Template = template;
        return this;
    },

};
