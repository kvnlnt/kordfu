describe("View Collection", function() {

  var viewCollection;
  var data;

  beforeEach(function() {
    data  = ['a','b','c'];
    viewCollection = new Model(data);
  });

  it("should be able to get items", function() {
    expect(viewCollection.getItems()).toEqual(data);
  });

  it("should be able to add item", function() {
    new_data = data.slice(0);
    new_data.push('d');
    viewCollection.addItem('d');
    expect(viewCollection.getItems()).toEqual(new_data);
  });

  it("should be able to remove item", function() {
    new_data = data.slice(0);
    new_data.splice(2);
    viewCollection.removeItemAt(2);
    expect(viewCollection.getItems()).toEqual(new_data);
  });

  it("should be able to get selected index", function() {
    expect(viewCollection.getSelectedIndex()).toEqual(-1);
  });

  it("should be able to set selected index", function() {
    viewCollection.setSelectedIndex(1);
    expect(viewCollection.getSelectedIndex()).toEqual(1);
  });


});
