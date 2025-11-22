<?php
/**
 * Template da Página Inicial
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="hero-background">
            <?php
            $hero_image = get_theme_mod('azores4fun_hero_image');
            if ($hero_image) :
                echo wp_get_attachment_image($hero_image, 'azores4fun-hero');
            else :
                ?>
                <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/hero-default.jpg'); ?>" 
                     alt="<?php esc_attr_e('Bela costa dos Açores', 'azores4fun'); ?>">
            <?php endif; ?>
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title">
                <?php echo esc_html(get_theme_mod('azores4fun_hero_title', 'Azores4fun')); ?>
            </h1>
            <p class="hero-subtitle">
                <?php echo esc_html(get_theme_mod('azores4fun_hero_subtitle', 'A Sua Aventura Completa nos Açores')); ?>
            </p>
            <p class="hero-description">
                <?php echo esc_html(get_theme_mod('azores4fun_hero_description', 'Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja')); ?>
            </p>
            <div class="hero-buttons">
                <a href="#servicos" class="btn btn-primary btn-lg">
                    <?php esc_html_e('Explorar Serviços', 'azores4fun'); ?>
                </a>
                <a href="#contacto" class="btn btn-outline btn-lg">
                    <?php esc_html_e('Contactar', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('Os Nossos Serviços', 'azores4fun'); ?></h2>
                <p class="section-description">
                    <?php esc_html_e('Descubra tudo o que a Azores4fun tem para oferecer', 'azores4fun'); ?>
                </p>
            </div>

            <div class="services-grid">
                <?php
                // Serviços padrão da Azores4fun
                $services = array(
                    array(
                        'id'    => 'alojamento',
                        'title' => __('Alojamento Local', 'azores4fun'),
                        'desc'  => __('3 apartamentos modernos no centro da cidade da Horta, totalmente equipados para uma estadia confortável e memorável.', 'azores4fun'),
                        'icon'  => '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                        'image' => 'apartment.jpg',
                    ),
                    array(
                        'id'    => 'animacao',
                        'title' => __('Animação Turística', 'azores4fun'),
                        'desc'  => __('Lasertag, Paintball, Gelblaster, Nerfs, aluguer de SUPs e Kayaks, tours personalizados pela ilha e muito mais.', 'azores4fun'),
                        'icon'  => '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                        'image' => 'lasertag.jpg',
                    ),
                    array(
                        'id'    => 'eventos',
                        'title' => __('Eventos', 'azores4fun'),
                        'desc'  => __('Tendas para eventos, insufláveis, festas de aniversário, teambuilding e jogos de estratégia personalizados.', 'azores4fun'),
                        'icon'  => '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                        'image' => 'events.jpg',
                    ),
                    array(
                        'id'    => 'tatuagem',
                        'title' => __('Tatuagem & Piercings', 'azores4fun'),
                        'desc'  => __('Estúdio profissional com artistas experientes, ambiente higiénico e seguro para dar vida às suas ideias.', 'azores4fun'),
                        'icon'  => '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                        'image' => 'tattoo.jpg',
                    ),
                    array(
                        'id'    => 'imobiliaria',
                        'title' => __('Gestão Imobiliária', 'azores4fun'),
                        'desc'  => __('Serviços de arrendamento de longa duração, manutenção e construção para empreendimentos turísticos e particulares.', 'azores4fun'),
                        'icon'  => '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                        'image' => 'property.jpg',
                    ),
                    array(
                        'id'    => 'loja',
                        'title' => __('Loja', 'azores4fun'),
                        'desc'  => __('Loja aberta para receção de clientes, venda de bens e serviços de turismo local, produtos regionais e merchandising.', 'azores4fun'),
                        'icon'  => '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                        'image' => 'shop.jpg',
                    ),
                );

                foreach ($services as $service) :
                    $custom_image = get_theme_mod('azores4fun_service_' . $service['id'] . '_image');
                    ?>
                    <div class="service-card" id="<?php echo esc_attr($service['id']); ?>">
                        <div class="service-image">
                            <?php if ($custom_image) : ?>
                                <?php echo wp_get_attachment_image($custom_image, 'azores4fun-service'); ?>
                            <?php else : ?>
                                <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/' . $service['image']); ?>" 
                                     alt="<?php echo esc_attr($service['title']); ?>">
                            <?php endif; ?>
                            <div class="service-image-overlay"></div>
                            <div class="service-icon-wrapper">
                                <div class="service-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <?php echo $service['icon']; ?>
                                    </svg>
                                </div>
                                <h3 class="service-title"><?php echo esc_html($service['title']); ?></h3>
                            </div>
                        </div>
                        <div class="service-content">
                            <p class="service-description"><?php echo esc_html($service['desc']); ?></p>
                            <a href="#contacto" class="service-link">
                                <?php esc_html_e('Saber Mais', 'azores4fun'); ?> →
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="contacto">
        <div class="container">
            <h2 class="section-title">
                <?php esc_html_e('Pronto para a Aventura?', 'azores4fun'); ?>
            </h2>
            <p class="section-description">
                <?php esc_html_e('Entre em contacto connosco e comece a planear a sua experiência perfeita nos Açores', 'azores4fun'); ?>
            </p>
            <div class="hero-buttons">
                <a href="#reservar" class="btn btn-lg" style="background: white; color: var(--primary); border-color: white;">
                    <?php esc_html_e('Reservar Agora', 'azores4fun'); ?>
                </a>
                <a href="mailto:info@azores4fun.com" class="btn btn-outline btn-lg">
                    <?php esc_html_e('Contactar', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
