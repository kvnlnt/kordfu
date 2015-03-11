describe("Core:Router", function() {
  
  var router;
  var data;

  beforeEach(function() {
    data  = {
      '/path_one'   : '/path_one', 
      '/path_two'   : '/path_two', 
      '/path_three' : '/path_three'
    };
    router = Router.create(data);
  });

  it("should be able to get items", function() {
    expect(router.getRoutes()).toEqual(data);
  });

  it("should be able to add item", function() {
    var route = '/path';
    router.addRoute(route);
    expect(router.getRoute(route)).toEqual(route);
  });

  it("should be able to remove item", function() {
    router.removeRoute('/path_one');
    router.removeRoute('/path_two');
    expect(router.getRoutes()).toEqual({ '/path_three':'/path_three' });
  });

  it("should be able to get selected key", function() {
    expect(router.getCurrentRoute()).toEqual(null);
  });

  it("should be able to set selected key", function() {
    router.setCurrentRoute('/path_one');
    expect(router.getCurrentRoute()).toEqual('/path_one');
  });

  it("should be able get item by hash", function() {
    var route = router.getRouteByHash('#/path_one');
    expect(route).toBe('/path_one');
  });

});
