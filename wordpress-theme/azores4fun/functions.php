<?php
/**
 * Azores4fun Theme Functions
 *
 * @package Azores4fun
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Define constants
 */
define('AZORES4FUN_VERSION', '1.0.0');
define('AZORES4FUN_THEME_DIR', get_template_directory());
define('AZORES4FUN_THEME_URI', get_template_directory_uri());

/**
 * Theme setup
 */
function azores4fun_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 800, true);
    add_image_size('azores4fun-service', 800, 600, true);
    add_image_size('azores4fun-hero', 1920, 1080, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'azores4fun'),
        'footer'  => __('Menu Rodapé', 'azores4fun'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'script',
        'style',
    ));

    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Add support for editor styles
    add_theme_support('editor-styles');

    // Add support for responsive embedded content
    add_theme_support('responsive-embeds');

    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'azores4fun_setup');

/**
 * Enqueue styles and scripts
 */
function azores4fun_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'azores4fun-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'azores4fun-style',
        get_stylesheet_uri(),
        array(),
        AZORES4FUN_VERSION
    );

    // Main JavaScript
    wp_enqueue_script(
        'azores4fun-script',
        AZORES4FUN_THEME_URI . '/assets/js/main.js',
        array('jquery'),
        AZORES4FUN_VERSION,
        true
    );

    // Localize script for AJAX
    wp_localize_script('azores4fun-script', 'azores4funData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('azores4fun_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'azores4fun_enqueue_assets');

/**
 * Register widget areas
 */
function azores4fun_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar Principal', 'azores4fun'),
        'id'            => 'sidebar-1',
        'description'   => __('Adicione widgets aqui.', 'azores4fun'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Rodapé 1', 'azores4fun'),
        'id'            => 'footer-1',
        'description'   => __('Primeira coluna do rodapé.', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Rodapé 2', 'azores4fun'),
        'id'            => 'footer-2',
        'description'   => __('Segunda coluna do rodapé.', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Rodapé 3', 'azores4fun'),
        'id'            => 'footer-3',
        'description'   => __('Terceira coluna do rodapé.', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'azores4fun_widgets_init');

/**
 * Custom excerpt length
 */
function azores4fun_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'azores4fun_excerpt_length');

/**
 * Custom excerpt more
 */
function azores4fun_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'azores4fun_excerpt_more');

/**
 * Add body classes
 */
function azores4fun_body_classes($classes) {
    // Add class if sidebar is active
    if (is_active_sidebar('sidebar-1')) {
        $classes[] = 'has-sidebar';
    }

    // Add class for singular pages
    if (is_singular()) {
        $classes[] = 'singular';
    }

    return $classes;
}
add_filter('body_class', 'azores4fun_body_classes');

/**
 * Custom template tags
 */
require AZORES4FUN_THEME_DIR . '/inc/template-tags.php';

/**
 * Customizer additions
 */
require AZORES4FUN_THEME_DIR . '/inc/customizer.php';
