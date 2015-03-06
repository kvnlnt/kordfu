describe("Model Collection", function() {
  
  var modelCollection;
  var data;

  beforeEach(function() {
    data  = ['a','b','c'];
    modelCollection = new ModelCollection(data);
  });

  it("should be able to get items", function() {
    expect(modelCollection.getItems()).toEqual(data);
  });

  it("should be able to add item", function() {
    new_data = data.slice(0);
    new_data.push('d');
    modelCollection.addItem('d');
    expect(modelCollection.getItems()).toEqual(new_data);
  });

  it("should be able to remove item", function() {
    new_data = data.slice(0);
    new_data.splice(2);
    modelCollection.removeItemAt(2);
    expect(modelCollection.getItems()).toEqual(new_data);
  });

  it("should be able to get selected index", function() {
    expect(modelCollection.getSelectedIndex()).toEqual(-1);
  });

  it("should be able to set selected index", function() {
    modelCollection.setSelectedIndex(1);
    expect(modelCollection.getSelectedIndex()).toEqual(1);
  });


});
