describe("Core:Pubub", function() {

    var pubsub, callback = null;

    beforeEach(function() {

        callback = jasmine.createSpy();
        pubsub = Pubsub.create(this);
        pubsub.sub(callback);
        pubsub.pub('test');

    });

    it("should call callbacks", function() {

        expect(callback).toHaveBeenCalledWith('test');

    });


});
