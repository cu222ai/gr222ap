define(['backbone', 'text!templates/header-template.html', 'underscore'], function (Backbone, HeadTemplate, _) {
    return Backbone.View.extend({

        template: _.template(HeadTemplate, {}),

		initialize: function(){
			this.render();
		},

		render: function() {
			
			this.$el.html(this.template);
		}
	});
});