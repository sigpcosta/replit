<?php
/**
 * Template for displaying the front page
 *
 * @package Azores4fun
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <?php
            $hero_image = get_theme_mod('azores4fun_hero_image');
            if ($hero_image) :
                echo wp_get_attachment_image($hero_image, 'azores4fun-hero');
            else :
                // Imagem padrão se não houver imagem personalizada
                ?>
                <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/hero-default.jpg'); ?>" alt="<?php esc_attr_e('Bela costa dos Açores', 'azores4fun'); ?>">
            <?php endif; ?>
            <div class="hero-overlay"></div>
        </div>

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
                <a href="#contacto" class="btn btn-outline btn-lg" style="background-color: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-color: rgba(255,255,255,0.3); color: white;">
                    <?php esc_html_e('Contactar', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="services-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('Os Nossos Serviços', 'azores4fun'); ?></h2>
                <p class="section-description">
                    <?php esc_html_e('Descubra tudo o que a Azores4fun tem para oferecer', 'azores4fun'); ?>
                </p>
            </div>

            <div class="services-grid">
                <?php
                // Query para posts de tipo "servicos" ou use categorias
                $services_args = array(
                    'post_type'      => 'post',
                    'posts_per_page' => 6,
                    'category_name'  => 'servicos', // Ajuste conforme necessário
                );

                $services_query = new WP_Query($services_args);

                if ($services_query->have_posts()) :
                    while ($services_query->have_posts()) :
                        $services_query->the_post();
                        ?>
                        <div class="service-card">
                            <div class="service-image">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('azores4fun-service'); ?>
                                <?php else : ?>
                                    <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
                                <?php endif; ?>
                                <div class="service-image-overlay"></div>
                                <div class="service-icon-wrapper">
                                    <div class="service-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <h3 class="service-title"><?php the_title(); ?></h3>
                                </div>
                            </div>
                            <div class="service-content">
                                <p class="service-description"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                <a href="<?php the_permalink(); ?>" class="btn-link">
                                    <?php esc_html_e('Explorar', 'azores4fun'); ?> &rarr;
                                </a>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    // Serviços padrão caso não haja posts
                    $default_services = array(
                        array('title' => 'Alojamento Local', 'desc' => '3 apartamentos modernos no centro da cidade da Horta, totalmente equipados para uma estadia confortável e memorável.'),
                        array('title' => 'Animação Turística', 'desc' => 'Lasertag, Paintball, Gelblaster, Nerfs, aluguer de SUPs e Kayaks, tours personalizados pela ilha e muito mais.'),
                        array('title' => 'Eventos', 'desc' => 'Tendas para eventos, insufláveis, festas de aniversário, teambuilding e jogos de estratégia personalizados.'),
                        array('title' => 'Tatuagem & Piercings', 'desc' => 'Estúdio profissional com artistas experientes, ambiente higiénico e seguro para dar vida às suas ideias.'),
                        array('title' => 'Gestão Imobiliária', 'desc' => 'Serviços de arrendamento de longa duração, manutenção e construção para empreendimentos turísticos e particulares.'),
                        array('title' => 'Loja', 'desc' => 'Loja aberta para receção de clientes, venda de bens e serviços de turismo local, produtos regionais e merchandising.'),
                    );

                    foreach ($default_services as $service) :
                        ?>
                        <div class="service-card">
                            <div class="service-image">
                                <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/placeholder.jpg'); ?>" alt="<?php echo esc_attr($service['title']); ?>">
                                <div class="service-image-overlay"></div>
                                <div class="service-icon-wrapper">
                                    <div class="service-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                        </svg>
                                    </div>
                                    <h3 class="service-title"><?php echo esc_html($service['title']); ?></h3>
                                </div>
                            </div>
                            <div class="service-content">
                                <p class="service-description"><?php echo esc_html($service['desc']); ?></p>
                                <a href="#" class="btn-link">
                                    <?php esc_html_e('Explorar', 'azores4fun'); ?> &rarr;
                                </a>
                            </div>
                        </div>
                        <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-16" style="background-color: var(--color-primary); color: white;">
        <div class="container text-center">
            <h2 class="section-title" style="color: white; text-transform: uppercase; font-size: 2.5rem; margin-bottom: 1.5rem;">
                <?php esc_html_e('Pronto para a Aventura?', 'azores4fun'); ?>
            </h2>
            <p style="font-size: 1.125rem; opacity: 0.9; margin-bottom: 3rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
                <?php esc_html_e('Entre em contacto connosco e comece a planear a sua experiência perfeita nos Açores', 'azores4fun'); ?>
            </p>
            <div class="hero-buttons">
                <a href="#reservar" class="btn btn-lg" style="background-color: white; color: var(--color-primary); border: none;">
                    <?php esc_html_e('Reservar Agora', 'azores4fun'); ?>
                </a>
                <a href="#contacto" class="btn btn-outline btn-lg" style="background-color: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-color: rgba(255,255,255,0.3); color: white;">
                    <?php esc_html_e('Contactar', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
