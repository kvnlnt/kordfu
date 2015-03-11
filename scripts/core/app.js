var App = {

    create:function(container_id, paths){
        var newApp          = Object.create(this);
        newApp.container_id = container_id || 'container';
        newApp.container    = $('#'+newApp.container_id);
        newApp.Paths        = paths || {};
        newApp.CurrentPath  = null;
        newApp.Router       = Router.create();
        newApp.pathAdded    = Pubsub.create(this);
        newApp.pathRemoved  = Pubsub.create(this);
        newApp.pathChanged  = Pubsub.create(this);
        return newApp;
    },

    init: function(path){
        var _this = this;
        var path  = path || this.Router.getRouteByHash();

        // add default paths
        this.addPath('/404', Controller._404);

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
