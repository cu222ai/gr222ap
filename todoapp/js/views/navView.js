define(['backbone', 'text!templates/nav-template.html', 'underscore'], function (Backbone, NavTemplate, _) {
    return Backbone.View.extend({
        
        template: _.template(NavTemplate, {}),

		initialize: function(){
			this.render();
		},

		render: function() {
		    
		    this.$el.html(this.template);
		}
	});
});