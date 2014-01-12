define(['backbone', 'headerview', 'navview', 'footview', 'text!templates/main-template.html'], function (Backbone, HeadView, NavView, FootView, MainTemplate) {
    return Backbone.View.extend({

        template: _.template(MainTemplate),

        initialize: function () {
            this.render();

        },

        render: function () {

            //el = body   
            //lägger på maintemplate header, content, nav, footer
            this.$el.append(this.template());
            //vyer
            var headView = new HeadView({ el: $('header') }),
            navView = new NavView({ el: $('nav') }),
            footView = new FootView({ el: $('footer') })
        }
    });
});