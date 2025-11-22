<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Saltar para o conteúdo', 'azores4fun'); ?></a>

    <header id="masthead" class="site-header">
        <div class="header-container container">
            <div class="site-branding">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" rel="home">
                        <span class="logo-highlight">Azores</span>4fun
                    </a>
                <?php endif; ?>
            </div>

            <nav id="site-navigation" class="main-nav" aria-label="<?php esc_attr_e('Menu Principal', 'azores4fun'); ?>">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                    'fallback_cb'    => '__return_false',
                ));
                ?>
            </nav>

            <div class="header-actions">
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-outline">
                    <?php esc_html_e('Contactar', 'azores4fun'); ?>
                </a>
                <a href="https://experiences.azores4fun.com" class="btn btn-primary" target="_blank" rel="noopener">
                    <?php esc_html_e('Reservar', 'azores4fun'); ?>
                </a>
            </div>

            <button class="mobile-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="<?php esc_attr_e('Menu', 'azores4fun'); ?>">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    </header>

    <div id="content" class="site-content">
