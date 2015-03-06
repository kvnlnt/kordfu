describe("App", function() {
  
  var app;
  var controller;

  beforeEach(function() {

    controller = {
      page_one:   function(){},
      page_two:   function(){},
      page_three: function(){}
    };


    pages  = {
      '/path_one'   : controller.page_one, 
      '/path_two'   : controller.page_two, 
      '/path_three' : controller.page_three
    };

    app = new App(pages);

  });

  it("should be able to get pages", function() {
    expect(app.getPages()).toEqual(pages);
  });

  it("should be able to add page", function() {
    page = '/page_four';
    controller.page_four = function(){};
    app.addPage(page, controller.page_four);
    expect(app.getPage(page)).toEqual(controller.page_four);
  });

  it("should be able to remove page", function() {
    app.removePage('/path_one');
    app.removePage('/path_two');
    expect(app.getPages()).toEqual({ '/path_three':controller.page_three });
  });

  it("should be able to get selected key", function() {
    expect(app.getCurrentPage()).toEqual(null);
  });

  it("should be able to set selected key", function() {
    app.setCurrentPage('/path_one');
    expect(app.getCurrentPage()).toEqual('/path_one');
  });

});
