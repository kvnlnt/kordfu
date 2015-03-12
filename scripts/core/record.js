var Record = {

    create:function(record){
        var newRecord           = Object.create(this);
        newRecord.Record        = record || {};
        newRecord.recordChanged = Pubsub.create(this);
        return newRecord;
    },

    val: function(val){
        var val = val || null;
        return null === val ? this.Record : this.Record[val];
    },

    set: function(record){
        this.Record = record;
        this.recordChanged.pub({ record: this.val() });
        return this;
    },

    setKeyVal: function(key, val) {
        this.Record[key] = val;
        this.recordChanged.pub({ record: this.val() });
        return this;
    },

    removeVal: function(key) {
        var record;
        record = this.Record[key];
        delete this.Record[key];
        this.recordChanged.pub({ record: this.val() });
        return this;
    },

};
