var Record = {

    create:function(record){

        var newRecord           = Object.create(this);
        newRecord.record        = record || newRecord.getDefaults();
        newRecord.recordChanged = Pubsub.create(this);
        return newRecord;

    },

    schema:{},

    getDefaults:function(){
        return this.schema;
    },

    registerEvents:function(){
        return this;
    },

    init: function(scope){
        var scope = scope || this;
        scope.registerEvents();
        return scope;
    },

    val: function(val){

        var val = val || null;
        return null === val ? this.record : this.record[val];

    },

    reset:function(){
        this.record = this.getDefaults();
        return this;
    },

    set: function(record, broadcast){

        for(var item in record){
            this.setKeyVal(item, record[item], false);
        }

        if(broadcast || true){
            this.recordChanged.pub({ record: this.val() });
        }

        return this;

    },

    setKeyVal: function(key, val, broadcast) {

        
        this.record[key] = val;

        if(broadcast || true){
            this.recordChanged.pub({ record: this.val() });
        }
        
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
