/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */

var Model = {

    create:function(items){
        var newModel                  = Object.create(this);
        newModel.Items                = items;
        newModel.itemAdded            = Pubsub.create(this);
        newModel.itemRemoved          = Pubsub.create(this);
        this.SelectedIndex            = -1;
        newModel.selectedIndexChanged = Pubsub.create(this);
        return newModel;
    },

    getItems: function() {
        return [].concat(this.Items);
    },

    addItem: function(item) {
        this.Items.push(item);
        this.itemAdded.pub({ item: item });
        return this;
    },

    removeItemAt: function(index) {
        var item;
        item = this.Items[index];
        this.Items.splice(index, 1);
        this.itemRemoved.pub({ item: item });
        if (index === this.SelectedIndex) { this.setSelectedIndex(-1); }
        return this;
    },

    getSelectedIndex: function() {
        return this.SelectedIndex;
    },
    
    setSelectedIndex: function(index) {
        var previousIndex;
        previousIndex = this.SelectedIndex;
        this.SelectedIndex = index;
        this.selectedIndexChanged.pub({ previous: previousIndex });
        return this;
    }

};
