<?php
/**
 * Template: Gestão Imobiliária
 * Template Name: Gestão Imobiliária
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Azorean_property_exterior_4bd4f6fb.png'); ?>" 
                 alt="<?php esc_attr_e('Gestão Imobiliária', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Gestão Imobiliária', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('Gestão Completa de Propriedades nos Açores', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <section class="service-page-content">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
                <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php esc_html_e('Especializados em gestão de propriedades turísticas e residenciais. Desde arrendamento de longa duração a manutenção e construção, cuidamos de tudo para que não tenha preocupações.', 'azores4fun'); ?>
                </p>
            </div>

            <h2 style="text-align: center; margin-bottom: 3rem;"><?php esc_html_e('Os Nossos Serviços Imobiliários', 'azores4fun'); ?></h2>

            <div class="service-features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Arrendamento', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Gestão de arrendamentos de longa duração. Encontramos inquilinos de confiança.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Manutenção', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Manutenção preventiva e corretiva. Equipa técnica disponível 24/7.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Construção', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Serviços de construção e remodelação. Projetos residenciais e comerciais.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Gestão Turística', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Gestão completa de empreendimentos turísticos e alojamento local.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Consultoria', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Consultoria imobiliária especializada. Investimento e rentabilização de imóveis.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Experiência Local', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Conhecimento profundo do mercado imobiliário do Faial e dos Açores.', 'azores4fun'); ?>
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 4rem;">
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-primary btn-lg">
                    <?php esc_html_e('Pedir Informações', 'azores4fun'); ?>
                </a>
                <a href="https://experiences.azores4fun.com" class="btn btn-outline btn-lg" style="margin-left: 1rem;" target="_blank" rel="noopener">
                    <?php esc_html_e('Ver Propriedades', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
