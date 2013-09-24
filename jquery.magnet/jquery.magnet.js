;
(function($) {
    $.fn.magnet = function(options) {
        if (jQuery.ui) {
            var settings = $.extend({
                delay: 100, // milliseconds
                animation: "ease",
                css: {
                    backgroundColor: red
                },
                callback: null
            }, options);

            return this.each(function() {
                $(this).draggable();
            });
        }
    };

    // Private function for debugging.
    function debug($obj) {
        if (window.console && window.console.log) {
            window.console.log("hilight selection count: " + $obj.size());
        }
    }
    ;

})(jQuery);