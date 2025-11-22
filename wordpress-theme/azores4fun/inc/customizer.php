<?php
/**
 * Theme Customizer settings
 *
 * @package Azores4fun
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add postMessage support for site title and description
 */
function azores4fun_customize_register($wp_customize) {
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->get_setting('blogdescription')->transport = 'postMessage';

    if (isset($wp_customize->selective_refresh)) {
        $wp_customize->selective_refresh->add_partial(
            'blogname',
            array(
                'selector'        => '.site-title a',
                'render_callback' => function() {
                    bloginfo('name');
                },
            )
        );
    }

    // Hero Section Settings
    $wp_customize->add_section('azores4fun_hero', array(
        'title'    => __('Secção Hero', 'azores4fun'),
        'priority' => 30,
    ));

    // Hero Image
    $wp_customize->add_setting('azores4fun_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'azores4fun_hero_image', array(
        'label'    => __('Imagem de Fundo Hero', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'settings' => 'azores4fun_hero_image',
    )));

    // Hero Title
    $wp_customize->add_setting('azores4fun_hero_title', array(
        'default'           => 'Azores4fun',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'postMessage',
    ));

    $wp_customize->add_control('azores4fun_hero_title', array(
        'label'    => __('Título Hero', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'type'     => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('azores4fun_hero_subtitle', array(
        'default'           => 'A Sua Aventura Completa nos Açores',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'postMessage',
    ));

    $wp_customize->add_control('azores4fun_hero_subtitle', array(
        'label'    => __('Subtítulo Hero', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'type'     => 'text',
    ));

    // Hero Description
    $wp_customize->add_setting('azores4fun_hero_description', array(
        'default'           => 'Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja',
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'postMessage',
    ));

    $wp_customize->add_control('azores4fun_hero_description', array(
        'label'    => __('Descrição Hero', 'azores4fun'),
        'section'  => 'azores4fun_hero',
        'type'     => 'textarea',
    ));

    // Contact Information Section
    $wp_customize->add_section('azores4fun_contact', array(
        'title'    => __('Informações de Contacto', 'azores4fun'),
        'priority' => 40,
    ));

    // Phone
    $wp_customize->add_setting('azores4fun_phone', array(
        'default'           => '+351 123 456 789',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('azores4fun_phone', array(
        'label'    => __('Telefone', 'azores4fun'),
        'section'  => 'azores4fun_contact',
        'type'     => 'text',
    ));

    // Email
    $wp_customize->add_setting('azores4fun_email', array(
        'default'           => 'info@azores4fun.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('azores4fun_email', array(
        'label'    => __('Email', 'azores4fun'),
        'section'  => 'azores4fun_contact',
        'type'     => 'email',
    ));

    // Address
    $wp_customize->add_setting('azores4fun_address', array(
        'default'           => 'Rua da Horta, 123, 9900-000 Horta, Faial',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('azores4fun_address', array(
        'label'    => __('Morada', 'azores4fun'),
        'section'  => 'azores4fun_contact',
        'type'     => 'textarea',
    ));
}
add_action('customize_register', 'azores4fun_customize_register');

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously
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
