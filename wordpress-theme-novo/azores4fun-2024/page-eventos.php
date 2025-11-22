<?php
/**
 * Template: Eventos
 * Template Name: Eventos
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Event_tent_celebration_fca04953.png'); ?>" 
                 alt="<?php esc_attr_e('Eventos', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Eventos', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('Organizamos o Seu Evento Perfeito', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <section class="service-page-content">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
                <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary);">
                    <?php esc_html_e('Especializados em eventos corporativos e particulares. Desde teambuilding empresarial a festas de aniversário, temos tudo o que precisa para criar momentos inesquecíveis.', 'azores4fun'); ?>
                </p>
            </div>

            <h2 style="text-align: center; margin-bottom: 3rem;"><?php esc_html_e('Os Nossos Serviços de Eventos', 'azores4fun'); ?></h2>

            <div class="service-features">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Tendas para Eventos', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Tendas de grandes dimensões para casamentos, festas e eventos corporativos.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M2 12h20"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Insufláveis', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Castelos insufláveis e jogos para festas de aniversário e eventos familiares.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Teambuilding Corporativo', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Atividades de teambuilding personalizadas para fortalecer a equipa da sua empresa.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Jogos de Estratégia', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Escape rooms, caça ao tesouro e jogos de estratégia personalizados para grupos.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Festas de Aniversário', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Pacotes completos para festas de aniversário infantis e adultos. Tudo organizado.', 'azores4fun'); ?>
                    </p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Serviço Personalizado', 'azores4fun'); ?></h3>
                    <p class="feature-description">
                        <?php esc_html_e('Adaptamos cada evento às suas necessidades. Planeamento completo do início ao fim.', 'azores4fun'); ?>
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 4rem;">
                <a href="<?php echo esc_url(home_url('/contacto')); ?>" class="btn btn-primary btn-lg">
                    <?php esc_html_e('Pedir Orçamento', 'azores4fun'); ?>
                </a>
                <a href="https://experiences.azores4fun.com" class="btn btn-outline btn-lg" style="margin-left: 1rem;" target="_blank" rel="noopener">
                    <?php esc_html_e('Ver Experiências', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
