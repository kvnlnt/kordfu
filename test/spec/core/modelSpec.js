describe("Core:Model", function() {
  
  var model;
  var data;

  beforeEach(function() {
    data  = ['a','b','c'];
    model = Model.create(data);
  });

  it("should be able to get items", function() {
    expect(model.getItems()).toEqual(data);
  });

  it("should be able to add item", function() {
    new_data = data.slice(0);
    new_data.push('d');
    model.addItem('d');
    expect(model.getItems()).toEqual(new_data);
  });

  it("should be able to remove item", function() {
    new_data = data.slice(0);
    new_data.splice(2);
    model.removeItemAt(2);
    expect(model.getItems()).toEqual(new_data);
  });

  it("should be able to get selected index", function() {
    expect(model.getSelectedIndex()).toEqual(-1);
  });

  it("should be able to set selected index", function() {
    model.setSelectedIndex(1);
    expect(model.getSelectedIndex()).toEqual(1);
  });


});
