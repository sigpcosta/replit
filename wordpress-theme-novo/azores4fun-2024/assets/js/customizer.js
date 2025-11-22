/**
 * Customizer Live Preview
 */

(function($) {
    'use strict';

    // Hero Title
    wp.customize('azores4fun_hero_title', function(value) {
        value.bind(function(newval) {
            $('.hero-title').text(newval);
        });
    });

    // Hero Subtitle
    wp.customize('azores4fun_hero_subtitle', function(value) {
        value.bind(function(newval) {
            $('.hero-subtitle').text(newval);
        });
    });

    // Hero Description
    wp.customize('azores4fun_hero_description', function(value) {
        value.bind(function(newval) {
            $('.hero-description').text(newval);
        });
    });

})(jQuery);
