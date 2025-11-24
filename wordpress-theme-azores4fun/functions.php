<?php
/**
 * Azores4fun Theme Functions
 */

// Theme Setup
function azores4fun_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'azores4fun'),
        'footer' => __('Footer Menu', 'azores4fun'),
    ));
}
add_action('after_setup_theme', 'azores4fun_setup');

// Enqueue scripts and styles
function azores4fun_scripts() {
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800&display=swap', array(), null);
    
    // Main stylesheet
    wp_enqueue_style('azores4fun-style', get_stylesheet_uri(), array(), '1.0');
    
    // Main JavaScript
    wp_enqueue_script('azores4fun-main', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'azores4fun_scripts');

// Custom Logo Support
function azores4fun_custom_logo_setup() {
    $defaults = array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'azores4fun_custom_logo_setup');

// Register Widget Areas
function azores4fun_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'azores4fun'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'azores4fun'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'azores4fun_widgets_init');

// Custom post type for Services
function azores4fun_register_service_post_type() {
    $labels = array(
        'name'               => 'Serviços',
        'singular_name'      => 'Serviço',
        'add_new'            => 'Adicionar Novo',
        'add_new_item'       => 'Adicionar Novo Serviço',
        'edit_item'          => 'Editar Serviço',
        'new_item'           => 'Novo Serviço',
        'view_item'          => 'Ver Serviço',
        'search_items'       => 'Procurar Serviços',
        'not_found'          => 'Nenhum serviço encontrado',
        'not_found_in_trash' => 'Nenhum serviço encontrado no lixo',
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'servico'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
    );
    
    register_post_type('service', $args);
}
add_action('init', 'azores4fun_register_service_post_type');

// Custom post type for Featured Activities
function azores4fun_register_activity_post_type() {
    $labels = array(
        'name'               => 'Atividades',
        'singular_name'      => 'Atividade',
        'add_new'            => 'Adicionar Nova',
        'add_new_item'       => 'Adicionar Nova Atividade',
        'edit_item'          => 'Editar Atividade',
        'new_item'           => 'Nova Atividade',
        'view_item'          => 'Ver Atividade',
        'search_items'       => 'Procurar Atividades',
        'not_found'          => 'Nenhuma atividade encontrada',
        'not_found_in_trash' => 'Nenhuma atividade encontrada no lixo',
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'atividade'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 21,
        'menu_icon'          => 'dashicons-star-filled',
        'supports'           => array('title', 'editor', 'thumbnail'),
    );
    
    register_post_type('activity', $args);
}
add_action('init', 'azores4fun_register_activity_post_type');

// Custom post type for FAQs
function azores4fun_register_faq_post_type() {
    $labels = array(
        'name'               => 'FAQs',
        'singular_name'      => 'FAQ',
        'add_new'            => 'Adicionar Nova',
        'add_new_item'       => 'Adicionar Nova FAQ',
        'edit_item'          => 'Editar FAQ',
        'new_item'           => 'Nova FAQ',
        'view_item'          => 'Ver FAQ',
        'search_items'       => 'Procurar FAQs',
        'not_found'          => 'Nenhuma FAQ encontrada',
        'not_found_in_trash' => 'Nenhuma FAQ encontrada no lixo',
    );
    
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'has_archive'        => false,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'faq'),
        'capability_type'    => 'post',
        'hierarchical'       => false,
        'menu_position'      => 22,
        'menu_icon'          => 'dashicons-format-chat',
        'supports'           => array('title', 'editor'),
    );
    
    register_post_type('faq', $args);
}
add_action('init', 'azores4fun_register_faq_post_type');

// Register FAQ Categories taxonomy
function azores4fun_register_faq_taxonomy() {
    $labels = array(
        'name'              => 'Categorias de FAQ',
        'singular_name'     => 'Categoria de FAQ',
        'search_items'      => 'Procurar Categorias',
        'all_items'         => 'Todas as Categorias',
        'parent_item'       => 'Categoria Pai',
        'parent_item_colon' => 'Categoria Pai:',
        'edit_item'         => 'Editar Categoria',
        'update_item'       => 'Atualizar Categoria',
        'add_new_item'      => 'Adicionar Nova Categoria',
        'new_item_name'     => 'Nome da Nova Categoria',
        'menu_name'         => 'Categorias',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'faq-categoria'),
    );

    register_taxonomy('faq_category', array('faq'), $args);
}
add_action('init', 'azores4fun_register_faq_taxonomy');

// Add custom fields support (requires Advanced Custom Fields plugin or similar)
// This is just a placeholder - you'll need ACF plugin for full functionality
function azores4fun_add_custom_fields_notice() {
    if (!function_exists('acf_add_local_field_group')) {
        echo '<div class="notice notice-warning"><p>';
        echo '<strong>Azores4fun Theme:</strong> Instale o plugin "Advanced Custom Fields" para configurar campos personalizados para Serviços, Atividades e FAQs.';
        echo '</p></div>';
    }
}
add_action('admin_notices', 'azores4fun_add_custom_fields_notice');

// Customizer Settings
function azores4fun_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('azores4fun_hero', array(
        'title'    => __('Hero Section', 'azores4fun'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default'           => 'Azores4fun - A Sua Aventura Completa nos Açores',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label'    => __('Hero Title', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'type'     => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'Descubra os Açores connosco',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label'    => __('Hero Subtitle', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'type'     => 'textarea',
    ));
    
    $wp_customize->add_setting('hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_image', array(
        'label'    => __('Hero Background Image', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'settings' => 'hero_image',
    )));
    
    // Contact Info
    $wp_customize->add_section('azores4fun_contact', array(
        'title'    => __('Contact Information', 'azores4fun'),
        'priority' => 31,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+351 934 993 770',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label'    => __('Phone Number', 'azores4fun'),
        'section'  => 'azores4fun_contact',
        'type'     => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'info@azores4fun.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label'    => __('Email Address', 'azores4fun'),
        'section'  => 'azores4fun_contact',
        'type'     => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default'           => 'Rua da Horta, 123<br>9900-000 Horta, Faial',
        'sanitize_callback' => 'wp_kses_post',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label'    => __('Address', 'azores4fun'),
        'section'  => 'azores4fun_contact',
        'type'     => 'textarea',
    ));
}
add_action('customize_register', 'azores4fun_customize_register');

// Limit excerpt length
function azores4fun_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'azores4fun_excerpt_length');

// Change excerpt more string
function azores4fun_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'azores4fun_excerpt_more');
