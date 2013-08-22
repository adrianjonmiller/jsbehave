(function($) {

    $.pluginName = function(element, options) {

        var defaults = {
            foo: 'bar',
            onFoo: function() {}
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            // code goes here'
            console.log("plugin is working");
        }

        plugin.foo_public_method = function() {
            // code goes here
        }

        var foo_private_method = function() {
            // code goes here
        }

        plugin.init();

    }

    $.fn.pluginName = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('pluginName')) {
                var plugin = new $.pluginName(this, options);
                $(this).data('pluginName', plugin);
            }
        });

    }

})(jQuery);