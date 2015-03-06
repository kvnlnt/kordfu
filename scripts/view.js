/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interraction.
 */
var View = function(elements) {

    this.Items                = items;
    this.SelectedIndex        = -1;
    this.itemAdded            = new Pubsub(this);
    this.itemRemoved          = new Pubsub(this);
    this.selectedIndexChanged = new Pubsub(this);

};

View.prototype = {

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
