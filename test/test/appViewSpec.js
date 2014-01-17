define(['appView', 'jquery', 'text!templates/app-template.html', 'appModel'], function (AppView, $, Template, AppModel){
	describe("Testing View", function () {

		var appView = new AppView();
        appView.appModel = new AppModel();

        describe("Testing initialize", function () {
            it("initialize to be defined", function () {
                expect(appView.initialize).toBeDefined();
            });
            it("guesses to be 0 at initialize", function () {
                expect(appView.guesses).toBe(0);
            });
            it("model to be defined", function () {
                expect(appView.appModel).toBeDefined();
            });
        });

        describe("Testing getInput", function () {
            it("getInput to be defined", function () {
                expect(appView.getInput).toBeDefined();
            });
            it("number between 0-100 should call compare function", function() {
                spyOn(appView, 'compare');
                appView.getInput(50);
                expect(appView.compare).toHaveBeenCalled();

            });
            it("number below 0 and over 100 should not call compare function, it should instead call messages(3)",function() {
                spyOn(appView, 'compare');
                spyOn(appView, 'messages');
                appView.getInput(-1);
                expect(appView.compare).not.toHaveBeenCalled();
                expect(appView.messages).toHaveBeenCalledWith(3);
                appView.getInput(101);
                expect(appView.compare).not.toHaveBeenCalled();
                expect(appView.messages).toHaveBeenCalledWith(3);
            });
        });

        describe("Testing compare", function () {
            it("compare to be defined", function () {
                expect(appView.compare).toBeDefined();
            });
            it("calls messages(1) guess > number", function() {
                spyOn(appView, 'messages');
                appView.appModel.setNumber(50);
                appView.compare(60);
                expect(appView.messages).toHaveBeenCalledWith(1);
            });
            it("calls messages(2) guess < number", function() {
                spyOn(appView, 'messages');
                appView.appModel.setNumber(50);
                appView.compare(40);
                expect(appView.messages).toHaveBeenCalledWith(2);
            });
            it("calls messages(4) if number is correct", function() {
                spyOn(appView, 'messages');
                appView.appModel.setNumber(50);
                appView.compare(50);
                expect(appView.messages).toHaveBeenCalledWith(4);
            });
        });

        describe("Testing messages", function () {
            it("messages to be defined", function () {
                expect(appView.messages).toBeDefined();
            });
            it("messages(1) correct return", function () {
                expect(appView.messages(1)).toEqual("Guess > Number");
            });
            it("messages(2) correct return", function () {
                expect(appView.messages(2)).toEqual("Guess < Number");
            });
            it("messages(3) correct return", function () {
                expect(appView.messages(3)).toEqual("Allowed inputs 0-100");
            });
            it("messages(4) correct return", function () {
                appView.appModel.setNumber(50);
                appView.guesses = 5;
                expect(appView.messages(4)).toEqual("Correct Guess! The Hidden Number was 50! It took you 5 guesses!");
            });
        });

        describe("Testing if gameOver", function () {
            it( "if game is over getInput returns false", function () {
                //Behöver inte sätta denna till true då spelet redan har avslutats tidigare i testet.
                //appView.gameOver = true;
                expect(appView.getInput(50)).toBe(false);
            });
        });

        describe("Testing newGame", function () {
            it("newGame to be defined", function () {
                expect(appView.newGame).toBeDefined();
            });
            it("gameOver to be false, guesses to be 0 and newNumber() to have been called", function () {
                spyOn(appView.appModel, 'newNumber');
                appView.newGame();
                expect(appView.gameOver).toBe(false);
                expect(appView.guesses).toBe(0);
                expect(appView.appModel.newNumber).toHaveBeenCalled();
            });
        });

        describe("Testing to mock messages", function () {
            it("messages now returns string Mocking", function () {
                appView.messages = jasmine.createSpy("messages() spy").andCallFake(function() {
                    console.log("this is the fake messages");
                    return "mocking";
                });
                appView.getInput(-1);
                expect(appView.messages).toHaveBeenCalled();
                console.log(appView.messages());
                expect(appView.messages()).toBe("mocking");
            });
        });

	});
});