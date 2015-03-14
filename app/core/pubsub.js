var Pubsub = {

    create: function(publisher){
        var newPubsub = Object.create(this);
        newPubsub._publisher = publisher;
        newPubsub._subscribers = [];
        return newPubsub;
    },

    sub: function(subr) {
        this._subscribers.push(subr);
        return this;
    },

    pub: function(args) {
        var index;
        for (index = 0; index < this._subscribers.length; index += 1) {
            this._subscribers[index](args);
        }
        return this;
    }

};
