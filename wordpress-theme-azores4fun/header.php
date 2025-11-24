<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <!-- Logo -->
        <div class="site-logo">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <strong style="font-family: var(--font-heading); font-size: 1.5rem;">
                        <span style="color: var(--color-primary);">Azores</span><span>4fun</span>
                    </strong>
                </a>
            <?php endif; ?>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="main-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'fallback_cb' => 'azores4fun_default_menu',
            ));
            ?>
        </nav>
        
        <!-- Desktop Header Actions -->
        <div class="header-actions">
            <!-- Language Selector (você pode adicionar com plugin WPML ou Polylang) -->
            <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+351934993770')); ?>" class="btn btn-outline">
                Contactar
            </a>
            <a href="https://book.azores4fun.com" class="btn btn-primary" target="_blank">
                Reservar
            </a>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
            <span id="menu-icon">☰</span>
        </button>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
        <div class="container">
            <nav>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'fallback_cb' => 'azores4fun_default_menu',
                ));
                ?>
            </nav>
            <div class="header-actions">
                <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+351934993770')); ?>" class="btn btn-outline">
                    Contactar
                </a>
                <a href="https://book.azores4fun.com" class="btn btn-primary" target="_blank">
                    Reservar
                </a>
            </div>
        </div>
    </div>
</header>

<?php
// Default menu fallback
function azores4fun_default_menu() {
    echo '<ul>';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Início</a></li>';
    echo '<li><a href="' . esc_url(home_url('/alojamento')) . '">Alojamento</a></li>';
    echo '<li><a href="' . esc_url(home_url('/animacao')) . '">Animação</a></li>';
    echo '<li><a href="' . esc_url(home_url('/eventos')) . '">Eventos</a></li>';
    echo '<li><a href="' . esc_url(home_url('/tatuagem')) . '">Tatuagem</a></li>';
    echo '<li><a href="' . esc_url(home_url('/imobiliaria')) . '">Imobiliária</a></li>';
    echo '<li><a href="' . esc_url(home_url('/loja')) . '">Loja</a></li>';
    echo '<li><a href="https://www.azores4fun.com/blog" target="_blank">Blog</a></li>';
    echo '</ul>';
}
?>
