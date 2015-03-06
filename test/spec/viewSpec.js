describe("View", function() {

  var view;
  var data;

  beforeEach(function() {
    data  = ['a','b','c'];
    view = new Model(data);
  });

  it("should be able to get items", function() {
    expect(view.getItems()).toEqual(data);
  });

  it("should be able to add item", function() {
    new_data = data.slice(0);
    new_data.push('d');
    view.addItem('d');
    expect(view.getItems()).toEqual(new_data);
  });

  it("should be able to remove item", function() {
    new_data = data.slice(0);
    new_data.splice(2);
    view.removeItemAt(2);
    expect(view.getItems()).toEqual(new_data);
  });

  it("should be able to get selected index", function() {
    expect(view.getSelectedIndex()).toEqual(-1);
  });

  it("should be able to set selected index", function() {
    view.setSelectedIndex(1);
    expect(view.getSelectedIndex()).toEqual(1);
  });


});
