<?php
/**
 * Template: Tatuagem & Piercings
 * Template Name: Tatuagem & Piercings
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Tattoo_studio_workspace_bfc3187a.png'); ?>" 
                 alt="<?php esc_attr_e('Tatuagem & Piercings', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Tatuagem & Piercings', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('Arte Corporal Profissional nos Açores', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <section class="service-page-content">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
                <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php esc_html_e('O nosso estúdio de tatuagem e piercings oferece um ambiente profissional, higiénico e seguro. Os nossos artistas experientes transformam as suas ideias em arte corporal única e memorável.', 'azores4fun'); ?>
                </p>
            </div>

            <h2 style="text-align: center; margin-bottom: 3rem;"><?php esc_html_e('Os Nossos Serviços', 'azores4fun'); ?></h2>

            <div class="service-features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <polyline points="2 17 12 22 22 17"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Tatuagens Personalizadas', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Criamos designs únicos ou trabalhamos com o seu desenho. Todos os estilos.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Piercings', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Piercings em todas as zonas do corpo com joias de alta qualidade hipoalergénicas.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Artistas Experientes', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Equipa de artistas com anos de experiência e formação profissional certificada.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Higiene e Segurança', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Material esterilizado, agulhas descartáveis. Normas de higiene rigorosamente cumpridas.', 'azores4fun'); ?>
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
                    <h3 class="feature-title"><?php esc_html_e('Portfolio Variado', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Do tradicional ao realismo, minimalista a old school. Veja o nosso portfolio.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Consultas Gratuitas', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Agende uma consulta gratuita para discutir o seu projeto. Orçamento sem compromisso.', 'azores4fun'); ?>
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 4rem;">
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-primary btn-lg">
                    <?php esc_html_e('Marcar Consulta', 'azores4fun'); ?>
                </a>
                <a href="https://experiences.azores4fun.com" class="btn btn-outline btn-lg" style="margin-left: 1rem;" target="_blank" rel="noopener">
                    <?php esc_html_e('Ver Portfolio', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
