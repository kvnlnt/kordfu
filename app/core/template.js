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

    engine: function(html, options) {
        var re = /<%([^%>]+)?%>/g;
        var reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;
        var code = 'var r=[];\n';
        var cursor = 0;
        var match;
        var add = function(line, js) {
            js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        while(match = re.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor));
        code += 'return r.join("");';
        return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    },

    compile:function(data){
        var string  = this._template.replace(/(\r\n|\n|\r)/gm,"");
        var compiled_string = this.engine(string, data);
        this.setCompiled(compiled_string);
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
