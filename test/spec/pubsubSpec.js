describe("Pubub", function() {

    var pubsub, callback = null;

    beforeEach(function() {

        callback = jasmine.createSpy();
        pubsub = new Pubsub(this);
        pubsub.sub(callback);
        pubsub.pub('test');

    });

    it("should call callbacks", function() {

        expect(callback).toHaveBeenCalledWith('test');

    });


});
