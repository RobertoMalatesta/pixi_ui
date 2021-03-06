describe("test scalable/tialbe container", function() {
    it("no image loaded - should throw", function() {

        var rect = new PIXI.math.Rectangle(10,10,1,1);
        var img = "unloadable_image.png";
        expect(function() {
            PIXI_UI.utils.ScaleContainer.fromFrame(img, rect);
        }).throw();
    });

    it("make sure calculations are correct", function(done) {

        var loader = PIXI_UI.loader;
        loader.add("base/test/img/scale9.png");

        loader.load(function() {
            var rect = new PIXI.math.Rectangle(10,10,1,1);
            var scale = PIXI_UI.utils.ScaleContainer.fromFrame("base/test/img/scale9.png", rect);

            scale.width = 100;
            scale.height = 200;
            expect(scale.invalid).equal(true);
            scale.redraw();
            expect(scale.invalid).equal(false);

            expect(scale.tl.width).equal(10);
            expect(scale.tl.height).equal(10);
            //expect(scale.tm.width).equal(80);
            expect(scale.tm.height).equal(10);

            //expect(scale.tr.width).equal(10);
            //expect(scale.tr.height).equal(10);

            //expect(scale.cm.width).equal(80);
            //expect(scale.cm.height).equal(180);
            done();
        });
        //TODO: also use imagediff to check images
    });

});