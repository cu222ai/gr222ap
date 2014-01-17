define(['backbone', 'underscore', 'text!templates/app-template.html'], function (Backbone, _, AppTemplate) {
    return Backbone.View.extend({

        template: _.template(AppTemplate),
        message: '#msg',
        guessing: '#guessing',
        guesses: 0,
        gameOver: false,

        events: {
            "click #guess": "getInput",
            "click #newGame": "newGame"
        },

        initialize: function () {
            this.appModel = this.model;
            this.render();

        },

        render: function () {
            this.$el.empty();
            this.$el.append(this.template());
        },

        //TODO: Ta bort inparameter.
        getInput: function(a_input) {

            if(!this.gameOver)
            {
                $(this.message).empty();

                //TODO: FIXA DETTA!
                //Denna koden ska hämta input från ett fält, lyckas inte lösa det när jag använder karma.
                //Använder inparameter till funktionen vid tester.
                //var input = parseInt($('#yourGuess').val());
                var input = a_input;

                if(input <= 100 && input >= 0)
                {
                    this.guesses += 1;

                    this.compare(input);
                }
                else
                {
                    $(this.message).text(this.messages(3));
                }
            }
            else
            {
                console.log("false");
                return false;
            }
        },

        compare: function (a_input) {

            var number = this.appModel.getNumber();
            if (a_input === number) {

                $(this.message).text(this.messages(4));
                this.gameOver = true;
            }
            else
            {
                if(a_input > number)
                {
                    $(this.message).text(this.messages(1));
                }
                else if( a_input < number)
                {
                    $(this.message).text(this.messages(2));
                }
            }
        },

        newGame: function () {
            this.gameOver = false;
            this.guesses = 0;
            this.appModel.newNumber();
            this.render();
        },

        messages: function (index) {

            console.log("this is the real messages");

            switch (index)
            {
                case 1:
                    return "Guess > Number";
                    break;
                case 2:
                    return "Guess < Number";
                    break;
                case 3:
                    return "Allowed inputs 0-100";
                    break;
                case 4:
                    $(this.guessing).append("<input type='button' value='NewGame' id='newGame'/>");
                    return "Correct Guess! The Hidden Number was " + this.appModel.getNumber() + "! It took you " + this.guesses + " guesses!";
                    break;
                default:
                    break;
            }
        }
    });
});