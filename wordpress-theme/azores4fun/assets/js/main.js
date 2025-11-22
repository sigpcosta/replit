/**
 * Azores4fun Theme Scripts
 */

(function($) {
    'use strict';

    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function() {
        var $nav = $('.main-navigation');
        var expanded = $(this).attr('aria-expanded') === 'true';
        
        $(this).attr('aria-expanded', !expanded);
        $nav.toggleClass('toggled');
        
        // Toggle menu visibility
        if ($nav.hasClass('toggled')) {
            $nav.find('ul').slideDown(300);
        } else {
            $nav.find('ul').slideUp(300);
        }
    });

    // Smooth Scroll for Anchor Links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
                return false;
            }
        }
    });

    // Sticky Header on Scroll
    var $header = $('.site-header');
    var headerHeight = $header.outerHeight();
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });

    // Add animation to elements on scroll (Intersection Observer)
    if ('IntersectionObserver' in window) {
        const animateElements = document.querySelectorAll('.service-card, .section-header');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animateElements.forEach(el => observer.observe(el));
    }

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        var $nav = $('.main-navigation');
        var $toggle = $('.mobile-menu-toggle');
        
        if (!$nav.is(e.target) && $nav.has(e.target).length === 0 && 
            !$toggle.is(e.target) && $toggle.has(e.target).length === 0) {
            if ($nav.hasClass('toggled')) {
                $toggle.trigger('click');
            }
        }
    });

    // Add loaded class to body when page is fully loaded
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

})(jQuery);
