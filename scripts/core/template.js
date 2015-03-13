var Template = {

    create:function(template){
        var newTemplate       = Object.create(this);
        newTemplate.Template  = template || {};
        newTemplate.Compiled  = null;
        return newTemplate;
    },

    get:function(){
        return this.Compiled;
    },

    compile:function(data){
        var pattern = /\{\{(.+?)\}\}/g;
        var tokens  = Util.regMatches(this.Template, pattern, 1);
        var string  = this.Template;

        // dynamically create, flatten and localize data object to bring keys into local scope
        for(var key in data){ eval('var ' + key + '= data[key]'); }

        // eval the properly scoped string
        var eval_string = eval("'" + string.replace(/{{/gi, "' +").replace(/}}/gi, " +'") + "'");

        this.Compiled = eval_string;

        // store result and return
        return this;
    },

};
