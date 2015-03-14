var Template = {

    create:function(template){
        var newTemplate       = Object.create(this);
        newTemplate._template  = template || {};
        newTemplate._compiled  = null;
        return newTemplate;
    },

    get:function(){
        return this.getCompiled();
    },

    getCompiled:function(){
        return this._compiled;
    },

    setCompiled: function(compiled){
        this._compiled = compiled;
        return this;
    },

    compile:function(data){

        var string  = this._template.replace(/(\r\n|\n|\r)/gm,"");
        for(var key in data){ eval('var ' + key + '= data[key]'); }
        var eval_string = eval("'" + string.replace(/{{/gi, "' +").replace(/}}/gi, " +'") + "'");
        this.setCompiled(eval_string);
        return this;
        
    },

};
