define(['backbone', 'headerview', 'navview', 'footview'], function (Backbone, HeadView, NavView, FootView) {
    return Backbone.View.extend({

        initialize: function () {
            this.render();

        },

        render: function () {

            //vyer
            var headView = new HeadView({ el: $('header') }),
            navView = new NavView({ el: $('nav') }),
            footView = new FootView({ el: $('footer') })
        }
    });
});