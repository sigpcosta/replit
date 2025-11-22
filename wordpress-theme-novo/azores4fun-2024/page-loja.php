<?php
/**
 * Template: Loja
 * Template Name: Loja
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Azores4fun_retail_shop_8204420f.png'); ?>" 
                 alt="<?php esc_attr_e('Loja Azores4fun', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Loja Azores4fun', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('Produtos Regionais e Serviços Turísticos', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <section class="service-page-content">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
                <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php esc_html_e('A nossa loja está aberta para receção de clientes e venda de produtos regionais dos Açores, merchandising Azores4fun e serviços de turismo local. Visite-nos e descubra o melhor dos Açores.', 'azores4fun'); ?>
                </p>
            </div>

            <h2 style="text-align: center; margin-bottom: 3rem;"><?php esc_html_e('O Que Oferecemos', 'azores4fun'); ?></h2>

            <div class="service-features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Produtos Regionais', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Queijos, chás, conservas, mel e outros produtos típicos dos Açores.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Merchandising', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('T-shirts, bonés, canecas e outros artigos com a marca Azores4fun.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Serviços Turísticos', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Venda de bilhetes para atividades, tours e experiências nos Açores.', 'azores4fun'); ?>
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
                    <h3 class="feature-title"><?php esc_html_e('Artesanato Local', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Peças únicas de artesanato açoriano feitas por artesãos locais.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Informação Turística', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Receção de clientes e informações sobre o que fazer e visitar no Faial.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <polyline points="2 17 12 22 22 17"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Horário Flexível', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Aberto de Segunda a Sábado, 9h-19h. Contacte-nos para horários especiais.', 'azores4fun'); ?>
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 4rem;">
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-primary btn-lg">
                    <?php esc_html_e('Visitar Loja', 'azores4fun'); ?>
                </a>
                <a href="https://experiences.azores4fun.com" class="btn btn-outline btn-lg" style="margin-left: 1rem;" target="_blank" rel="noopener">
                    <?php esc_html_e('Loja Online', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
