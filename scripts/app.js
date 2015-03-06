/**
 * The App. App stores paths and notifies
 * observers about changes.
 */

var App = function(paths, page_id) {

    this.container_id = page_id || 'page';
    this.container    = $('#'+this.container_id);
    this.Paths        = paths || {};
    this.CurrentPath  = null;
    this.Router       = new Router();
    this.pathAdded    = new Pubsub(this);
    this.pathRemoved  = new Pubsub(this);
    this.pathChanged  = new Pubsub(this);

};

App.prototype = {

    init: function(path){
        var _this = this;
        var path  = path || this.Router.getRouteByHash();

        // add default paths
        this.addPath('/404', Errors._404);

        // setup router
        this.Router.routeChanged.sub(function(e){ _this.load(e.route); });
        this.Router.watch();

        // load default path
        this.load(path);
    },

    load: function(path){
        this.setCurrentPath(this.getPath(path));
        this.getCurrentPath()(this.container);
    },

    getPaths: function() {
        return this.Paths;
    },

    getPath: function(path){
        return this.Paths[path];
    },

    addPath: function(path, controller) {

        // keep router paths and app paths in sync
        this.Router.addRoute(path);
        this.Paths[path] = controller;
        this.pathAdded.pub({ path: path });
        return this;
    },

    removePath: function(path) {
        var deleted_path;
        deleted_path = this.Paths[path];
        delete this.Paths[path];
        this.pathRemoved.pub({ path: deleted_path });
        if (deleted_path === this.CurrentPath) { this.setCurrentPath(null); }
        return this;
    },

    getCurrentPath: function() {
        return this.CurrentPath;
    },
    
    setCurrentPath: function(path) {
        var previous;
        previous = this.CurrentPath;
        this.CurrentPath = path;
        this.pathChanged.pub(path, previous);
        return this;
    },
    
};
