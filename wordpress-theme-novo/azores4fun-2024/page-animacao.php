<?php
/**
 * Template: Animação Turística
 * Template Name: Animação Turística
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Laser_tag_action_shot_63a174d9.png'); ?>" 
                 alt="<?php esc_attr_e('Animação Turística', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Animação Turística', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('Aventuras Inesquecíveis nos Açores', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <!-- Content -->
    <section class="service-page-content">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
                <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php esc_html_e('Oferecemos uma variedade incrível de atividades de animação turística para todas as idades. Desde jogos de estratégia como Lasertag e Paintball até desportos aquáticos como SUP e Kayak, temos a aventura perfeita para você.', 'azores4fun'); ?>
                </p>
            </div>

            <h2 style="text-align: center; margin-bottom: 3rem;"><?php esc_html_e('As Nossas Atividades', 'azores4fun'); ?></h2>

            <div class="service-features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 8l-4 4 4 4M8 12h8"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Lasertag', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Jogo de estratégia em equipa com equipamento laser de última geração. Ideal para grupos e festas.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Paintball', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Ação intensa em campos de paintball outdoor. Equipamento profissional e seguro incluído.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Gelblaster & Nerfs', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Diversão segura para todas as idades com Gelblasters e armas Nerf de última geração.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('SUP & Kayak', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Aluguer de Stand Up Paddle e Kayaks para explorar a costa dos Açores. Material de snorkeling incluído.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Tours Personalizados', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Tours pela ilha do Faial em carrinha elétrica com guia local. Descubra lugares escondidos.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Equipamento Completo', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Todo o equipamento necessário incluído. Briefing de segurança antes de cada atividade.', 'azores4fun'); ?>
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 4rem;">
                <a href="https://experiences.azores4fun.com" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
                    <?php esc_html_e('Reservar Atividade', 'azores4fun'); ?>
                </a>
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-outline btn-lg" style="margin-left: 1rem;">
                    <?php esc_html_e('Mais Informações', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
