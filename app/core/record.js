var Record = {

    create:function(record){
        var newRecord           = Object.create(this);
        newRecord.record        = record || {};
        newRecord.recordChanged = Pubsub.create(this);
        return newRecord;
    },

    val: function(val){
        var val = val || null;
        return null === val ? this.record : this.record[val];
    },

    set: function(record){
        this.record = record;
        this.recordChanged.pub({ record: this.val() });
        return this;
    },

    setKeyVal: function(key, val) {
        this.record[key] = val;
        this.recordChanged.pub({ record: this.val() });
        return this;
    },

    removeVal: function(key) {
        var record;
        record = this.record[key];
        delete this.record[key];
        this.recordChanged.pub({ record: this.val() });
        return this;
    },

};
