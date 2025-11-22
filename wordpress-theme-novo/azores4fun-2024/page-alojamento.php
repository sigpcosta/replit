<?php
/**
 * Template: Alojamento Local
 * Template Name: Alojamento Local
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Modern_Horta_apartment_interior_ec6f658d.png'); ?>" 
                 alt="<?php esc_attr_e('Alojamento Local', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Alojamento Local', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('3 Apartamentos Modernos no Centro da Horta', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <!-- Content -->
    <section class="service-page-content">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
                <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php esc_html_e('Os nossos apartamentos estão localizados no coração da cidade da Horta, proporcionando fácil acesso a restaurantes, supermercados, marina e todos os serviços essenciais. Cada apartamento está totalmente equipado para garantir uma estadia confortável e memorável.', 'azores4fun'); ?>
                </p>
            </div>

            <h2 style="text-align: center; margin-bottom: 3rem;"><?php esc_html_e('Características dos Apartamentos', 'azores4fun'); ?></h2>

            <div class="service-features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Localização Central', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('No centro da Horta, a poucos minutos a pé da marina, restaurantes e serviços.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Capacidade', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Apartamentos para 2 a 4 pessoas, perfeitos para casais, famílias ou grupos pequenos.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Cozinha Equipada', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Cozinha completa com todos os utensílios, frigorífico, fogão e micro-ondas.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <polyline points="2 17 12 22 22 17"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('WiFi Gratuito', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Internet de alta velocidade incluída em todos os apartamentos.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Roupa de Cama', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Roupa de cama e toalhas limpas fornecidas. Limpeza regular incluída.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Check-in Flexível', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Check-in a partir das 15h e check-out até às 11h. Horários flexíveis mediante disponibilidade.', 'azores4fun'); ?>
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 4rem;">
                <a href="https://experiences.azores4fun.com" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
                    <?php esc_html_e('Reservar Agora', 'azores4fun'); ?>
                </a>
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-outline btn-lg" style="margin-left: 1rem;">
                    <?php esc_html_e('Saber Mais', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
