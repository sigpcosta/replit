<?php
/**
 * Configurações do WordPress Customizer
 *
 * @package Azores4fun_2024
 */

/**
 * Adicionar configurações ao Customizer
 */
function azores4fun_customize_register($wp_customize) {
    
    // ===================================
    // SECÇÃO: HERO
    // ===================================
    
    $wp_customize->add_section('azores4fun_hero_section', array(
        'title'    => __('Hero Section', 'azores4fun'),
        'priority' => 30,
    ));

    // Hero: Título
    $wp_customize->add_setting('azores4fun_hero_title', array(
        'default'           => 'Azores4fun',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'postMessage',
    ));

    $wp_customize->add_control('azores4fun_hero_title', array(
        'label'   => __('Título Principal', 'azores4fun'),
        'section' => 'azores4fun_hero_section',
        'type'    => 'text',
    ));

    // Hero: Subtítulo
    $wp_customize->add_setting('azores4fun_hero_subtitle', array(
        'default'           => 'A Sua Aventura Completa nos Açores',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'postMessage',
    ));

    $wp_customize->add_control('azores4fun_hero_subtitle', array(
        'label'   => __('Subtítulo', 'azores4fun'),
        'section' => 'azores4fun_hero_section',
        'type'    => 'text',
    ));

    // Hero: Descrição
    $wp_customize->add_setting('azores4fun_hero_description', array(
        'default'           => 'Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'postMessage',
    ));

    $wp_customize->add_control('azores4fun_hero_description', array(
        'label'   => __('Descrição', 'azores4fun'),
        'section' => 'azores4fun_hero_section',
        'type'    => 'textarea',
    ));

    // Hero: Imagem de Fundo
    $wp_customize->add_setting('azores4fun_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'azores4fun_hero_image', array(
        'label'     => __('Imagem de Fundo', 'azores4fun'),
        'section'   => 'azores4fun_hero_section',
        'mime_type' => 'image',
    )));

    // ===================================
    // SECÇÃO: SERVIÇOS
    // ===================================
    
    $wp_customize->add_section('azores4fun_services_section', array(
        'title'    => __('Serviços', 'azores4fun'),
        'priority' => 35,
    ));

    $services = array(
        'alojamento'   => __('Alojamento Local', 'azores4fun'),
        'animacao'     => __('Animação Turística', 'azores4fun'),
        'eventos'      => __('Eventos', 'azores4fun'),
        'tatuagem'     => __('Tatuagem & Piercings', 'azores4fun'),
        'imobiliaria'  => __('Gestão Imobiliária', 'azores4fun'),
        'loja'         => __('Loja', 'azores4fun'),
    );

    foreach ($services as $id => $name) {
        $wp_customize->add_setting('azores4fun_service_' . $id . '_image', array(
            'default'           => '',
            'sanitize_callback' => 'absint',
        ));

        $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'azores4fun_service_' . $id . '_image', array(
            'label'     => sprintf(__('Imagem: %s', 'azores4fun'), $name),
            'section'   => 'azores4fun_services_section',
            'mime_type' => 'image',
        )));
    }

    // ===================================
    // SECÇÃO: CONTACTO
    // ===================================
    
    $wp_customize->add_section('azores4fun_contact_section', array(
        'title'    => __('Informações de Contacto', 'azores4fun'),
        'priority' => 40,
    ));

    // Telefone
    $wp_customize->add_setting('azores4fun_contact_phone', array(
        'default'           => '+351 123 456 789',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('azores4fun_contact_phone', array(
        'label'   => __('Telefone', 'azores4fun'),
        'section' => 'azores4fun_contact_section',
        'type'    => 'text',
    ));

    // Email
    $wp_customize->add_setting('azores4fun_contact_email', array(
        'default'           => 'info@azores4fun.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('azores4fun_contact_email', array(
        'label'   => __('Email', 'azores4fun'),
        'section' => 'azores4fun_contact_section',
        'type'    => 'email',
    ));

    // Morada
    $wp_customize->add_setting('azores4fun_contact_address', array(
        'default'           => 'Horta, Faial, Açores',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('azores4fun_contact_address', array(
        'label'   => __('Morada', 'azores4fun'),
        'section' => 'azores4fun_contact_section',
        'type'    => 'text',
    ));

    // Selective Refresh para preview em tempo real
    if (isset($wp_customize->selective_refresh)) {
        $wp_customize->selective_refresh->add_partial('azores4fun_hero_title', array(
            'selector'        => '.hero-title',
            'render_callback' => function() {
                return get_theme_mod('azores4fun_hero_title', 'Azores4fun');
            },
        ));

        $wp_customize->selective_refresh->add_partial('azores4fun_hero_subtitle', array(
            'selector'        => '.hero-subtitle',
            'render_callback' => function() {
                return get_theme_mod('azores4fun_hero_subtitle', 'A Sua Aventura Completa nos Açores');
            },
        ));
    }
}
add_action('customize_register', 'azores4fun_customize_register');

/**
 * JavaScript do Customizer para preview em tempo real
 */
function azores4fun_customize_preview_js() {
    wp_enqueue_script(
        'azores4fun-customizer',
        AZORES4FUN_THEME_URI . '/assets/js/customizer.js',
        array('customize-preview'),
        AZORES4FUN_VERSION,
        true
    );
}
add_action('customize_preview_init', 'azores4fun_customize_preview_js');
