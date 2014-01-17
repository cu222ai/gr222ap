define(['appModel'], function (AppModel) {
    describe("Testing Model", function () {

        var appModel = new AppModel();

        describe("Testing newNumber", function () {

            //Användbarhet att kolla om funtioner är definerade?:)
            it("function to be defined", function () {
                expect(appModel.newNumber).toBeDefined();
                expect(appModel.number).not.toBe(null);
            });
            it("new number is not null", function () {
                expect(appModel.number).not.toBe(null);
            });
        });
        describe("Testing getNumber", function () {
            it("function to be defined", function () {
                expect(appModel.getNumber).toBeDefined();
            });
            it("return number is less than 101", function () {
                expect (appModel.getNumber()).toBeLessThan(101);
            });
            it("return number is greater than -1", function () {
                expect (appModel.getNumber()).toBeGreaterThan(-1);
            });
        });
        describe("Testing setNumber", function () {
            
            it("function to be defined", function () {
                expect(appModel.setNumber).toBeDefined();
            });
            
            it("setNumber sets the correct value", function () {
                var value = 1;
                appModel.setNumber(value);
                expect(appModel.getNumber()).toBe(value);
            });
        });
    });
});
