var Router = {

    create:function(routes){
        var newRouter          = Object.create(this);
        newRouter.Routes       = routes || {};
        newRouter.CurrentRoute = null;
        newRouter.routeAdded   = Pubsub.create(this);
        newRouter.routeRemoved = Pubsub.create(this);
        newRouter.routeChanged = Pubsub.create(this);
        return newRouter;
    },

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
        route = route === undefined ? '/404' : route;
        return route;

    },

    watch:function(interval){

        var _this       = this;
        var interval   = interval || 100;
        var storedHash = window.location.hash;

        var loop = function () {

            // if hash changes, announce
            if (window.location.hash != storedHash) {

                var route    = _this.getRouteByHash();
                var is_valid = route !== undefined;

                // only change if route exists
                if(is_valid){
                    var previous = _this.getRouteByHash(storedHash);
                    storedHash   = window.location.hash;
                    _this.routeChanged.pub({ route:route, previous:previous });
                }
            }

        };

        // loop forever
        window.setInterval(loop, interval);

    },

};
