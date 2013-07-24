/* global define */
define([
		'text!./templates/LayoutViewTemplate.html', 'backbone', 'underscore', 'jquery'
],

function(viewTemplate, Backbone, _, $) {
	var LayoutView = Backbone.View.extend({

		initialize: function() {
			this.render();
		},

		render: function() {
			var template = _.template(viewTemplate)();
			this.$el.html(template);
			return this;
		}

	});
	return LayoutView;
});