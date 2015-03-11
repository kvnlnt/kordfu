describe("Core:App", function() {
  
  var app;
  var controller;

  beforeEach(function() {

    controller = {
      path_one:   function(){},
      path_two:   function(){},
      path_three: function(){}
    };


    paths  = {
      '/path_one'   : controller.path_one, 
      '/path_two'   : controller.path_two, 
      '/path_three' : controller.path_three
    };

    app = App.create(paths);

  });

  it("should be able to get paths", function() {
    expect(app.getPaths()).toEqual(paths);
  });

  it("should be able to add path", function() {
    path = '/path_four';
    controller.path_four = function(){};
    app.addPath(path, controller.path_four);
    expect(app.getPath(path)).toEqual(controller.path_four);
  });

  it("should be able to remove path", function() {
    app.removePath('/path_one');
    app.removePath('/path_two');
    expect(app.getPaths()).toEqual({ '/path_three':controller.path_three });
  });

  it("should be able to get selected key", function() {
    expect(app.getCurrentPath()).toEqual(null);
  });

  it("should be able to set selected key", function() {
    app.setCurrentPath('/path_one');
    expect(app.getCurrentPath()).toEqual('/path_one');
  });

});
