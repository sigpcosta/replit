<?php
/**
 * Azores4fun 2024 Functions
 *
 * @package Azores4fun_2024
 */

if (!defined('ABSPATH')) {
    exit;
}

// Constantes do tema
define('AZORES4FUN_VERSION', '1.0.0');
define('AZORES4FUN_THEME_DIR', get_template_directory());
define('AZORES4FUN_THEME_URI', get_template_directory_uri());

/**
 * Setup do Tema
 */
function azores4fun_setup() {
    // Suporte a tradução
    load_theme_textdomain('azores4fun', AZORES4FUN_THEME_DIR . '/languages');

    // Suporte a título dinâmico
    add_theme_support('title-tag');

    // Suporte a imagem destacada
    add_theme_support('post-thumbnails');

    // Tamanhos de imagem personalizados
    add_image_size('azores4fun-hero', 1920, 1080, true);
    add_image_size('azores4fun-service', 800, 600, true);
    add_image_size('azores4fun-thumbnail', 400, 300, true);

    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Suporte a logo personalizado
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Suporte a refresh seletivo no customizer
    add_theme_support('customize-selective-refresh-widgets');

    // Registrar menus de navegação
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'azores4fun'),
        'footer'  => __('Menu Rodapé', 'azores4fun'),
    ));
}
add_action('after_setup_theme', 'azores4fun_setup');

/**
 * Enqueue scripts e styles
 */
function azores4fun_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'azores4fun-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap',
        array(),
        null
    );

    // CSS Principal
    wp_enqueue_style(
        'azores4fun-style',
        get_stylesheet_uri(),
        array(),
        AZORES4FUN_VERSION
    );

    // JavaScript Principal
    wp_enqueue_script(
        'azores4fun-main',
        AZORES4FUN_THEME_URI . '/assets/js/main.js',
        array(),
        AZORES4FUN_VERSION,
        true
    );

    // Passar dados para JavaScript
    wp_localize_script('azores4fun-main', 'azores4funData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('azores4fun-nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'azores4fun_scripts');

/**
 * Registrar áreas de widgets
 */
function azores4fun_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar Principal', 'azores4fun'),
        'id'            => 'sidebar-1',
        'description'   => __('Área de widgets principal', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Rodapé 1', 'azores4fun'),
        'id'            => 'footer-1',
        'description'   => __('Primeira coluna do rodapé', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Rodapé 2', 'azores4fun'),
        'id'            => 'footer-2',
        'description'   => __('Segunda coluna do rodapé', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => __('Rodapé 3', 'azores4fun'),
        'id'            => 'footer-3',
        'description'   => __('Terceira coluna do rodapé', 'azores4fun'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'azores4fun_widgets_init');

/**
 * Incluir customizer
 */
require AZORES4FUN_THEME_DIR . '/inc/customizer.php';

/**
 * Adicionar classe ao body quando scrolled
 */
function azores4fun_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    return $classes;
}
add_filter('body_class', 'azores4fun_body_classes');

/**
 * Excerpt customizado
 */
function azores4fun_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'azores4fun_excerpt_length');

function azores4fun_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'azores4fun_excerpt_more');
