/**
 * The App. App stores pages and notifies
 * observers about changes.
 */

var App = function(pages) {

    this.Pages        = pages || {};
    this.CurrentPage  = null;
    this.Router       = new Router();
    this.pageAdded    = new Pubsub(this);
    this.pageRemoved  = new Pubsub(this);
    this.pageChanged  = new Pubsub(this);

};

App.prototype = {

    init: function(){
        // this.Router.routeChanged.sub(this.setCurrentPage);
        // this.Router.watch();
    },

    getPages: function() {
        return this.Pages;
    },

    getPage: function(page){
        return this.Pages[page];
    },

    addPage: function(page, controller) {
        this.Pages[page] = controller;
        this.pageAdded.pub({ page: page });
        return this;
    },

    removePage: function(page) {
        var deleted_page;
        deleted_page = this.Pages[page];
        delete this.Pages[page];
        this.pageRemoved.pub({ page: deleted_page });
        if (deleted_page === this.CurrentPage) { this.setCurrentPage(null); }
        return this;
    },

    getCurrentPage: function() {
        return this.CurrentPage;
    },
    
    setCurrentPage: function(page) {
        var previous;
        previous = this.CurrentPage;
        this.CurrentPage = page;
        this.pageChanged.pub({ page: page, previous: previous });
        return this;
    },
    
};
