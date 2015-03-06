var Pubsub = function(puber) {

    this._puber = puber;
    this._subscribers = [];

};

Pubsub.prototype = {

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
