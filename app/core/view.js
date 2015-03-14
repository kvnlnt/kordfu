var View = {

    create:function(options){

        var newView      = Object.create(this);
        newView.Options  = options || {};
        newView.Html     = options.html || {};
        return newView;

    },

    getOptions:function(){
        return this.Options;
    },

    getHtml:function(){
        return this.Html;
    },

    setHtml:function(html){
        this.Html = html;
    },

    render:function(){
        return this.getHtml();
    },

};

