var Record = {

    create:function(record){
        var newRecord           = Object.create(this);
        newRecord.Record        = record || {};
        newRecord.recordChanged = Pubsub.create(this);
        return newRecord;
    },

    get: function(){
        return this.Record;
    },

    set: function(record){
        this.Record = record;
        return this;
    },

    setKeyVal: function(key, val) {
        this.Record[key] = val;
        this.recordChanged.pub({ record: this.get() });
        return this;
    },

    removeVal: function(key) {
        var record;
        record = this.Record[key];
        delete this.Record[key];
        this.recordChanged.pub({ record: this.get() });
        return this;
    },

};
