/**
 * Customizer Live Preview Scripts
 */

(function($) {
    'use strict';

    // Site title
    wp.customize('blogname', function(value) {
        value.bind(function(to) {
            $('.site-title a').text(to);
        });
    });

    // Hero Title
    wp.customize('azores4fun_hero_title', function(value) {
        value.bind(function(to) {
            $('.hero-title').text(to);
        });
    });

    // Hero Subtitle
    wp.customize('azores4fun_hero_subtitle', function(value) {
        value.bind(function(to) {
            $('.hero-subtitle').text(to);
        });
    });

    // Hero Description
    wp.customize('azores4fun_hero_description', function(value) {
        value.bind(function(to) {
            $('.hero-description').text(to);
        });
    });

})(jQuery);
