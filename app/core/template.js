var Template = {

    create:function(template){
        var newTemplate       = Object.create(this);
        newTemplate._template  = template || {};
        newTemplate._compiled  = null;
        return newTemplate;
    },

    JST:{},

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

    includeMenu:function(){

        var menu = '';
        menu += '<ul id="menu">';
        menu += '<li><a href="#/">Dashboard</a></li>';
        menu += '<li><a href="#/chords">Chords</a></li>';
        menu += '<li><a href="#/progressions">Progressions</a></li>';
        menu += '<li><a href="#/scales">Scales</a></li>';
        menu += '<li><a href="#/lyrics">Lyrics</a></li>';
        menu += '<li><a href="#/theory">Theory</a></li>';
        menu += '</ul>';

        return menu;
    }

};
