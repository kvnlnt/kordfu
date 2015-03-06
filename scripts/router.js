/**
 * The Router. Router stores routes and notifies
 * observers about changes.
 */

var Router = function(routes) {

    this.Routes        = routes || {};
    this.CurrentRoute  = null;
    this.routeAdded    = new Pubsub(this);
    this.routeRemoved  = new Pubsub(this);
    this.routeChanged  = new Pubsub(this);

};

Router.prototype = {

    getRoutes: function() {
        return this.Routes;
    },

    getRoute: function(route){
        return this.Routes[route];
    },

    addRoute: function(route) {
        this.Routes[route] = route;
        this.routeAdded.pub({ route: route });
        return this;
    },

    removeRoute: function(route) {
        var route;
        route = this.Routes[route];
        delete this.Routes[route];
        this.routeRemoved.pub({ route: route });
        if (route === this.CurrentIndex) { this.setCurrentRoute(null); }
        return this;
    },

    getCurrentRoute: function() {
        return this.CurrentRoute;
    },
    
    setCurrentRoute: function(route) {
        var previous;
        previous = this.CurrentRoute;
        this.CurrentRoute = route;
        this.routeChanged.pub({ route: route, previous: previous });
        return this;
    },

    getRouteByHash:function(hash){

        var hash = hash || document.location.hash;
        hash = hash.indexOf('#') !== -1 ? hash.replace('#','') : hash;
        var path  = '' == hash ? '/' : hash;
        var route = this.Routes[path];

        return route;

    },

    watch:function(interval){

        var that       = this;
        var interval   = interval || 100;
        var storedHash = window.location.hash;

        var loop = function () {

            // if hash changes, announce
            if (window.location.hash != storedHash) {
                var previous = that.getRouteByHash(storedHash);
                var route    = that.getRouteByHash();
                storedHash   = window.location.hash;
                that.routeChanged.pub(route, previous);
            }

        };

        // loop forever
        window.setInterval(loop, interval);

    },
    
};
