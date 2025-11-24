<?php
/**
 * Template Name: Front Page (Home)
 * Description: Template da página principal do Azores4fun
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-background">
        <?php 
        $hero_image = get_theme_mod('hero_image', get_template_directory_uri() . '/images/hero-default.jpg');
        ?>
        <img src="<?php echo esc_url($hero_image); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
        <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content container">
        <h1 class="hero-title">
            <?php echo esc_html(get_theme_mod('hero_title', 'Azores4fun - A Sua Aventura Completa nos Açores')); ?>
        </h1>
        <p class="hero-subtitle">
            <?php echo esc_html(get_theme_mod('hero_subtitle', 'Alojamento | Animação Turística | Eventos | Tatuagens | Imobiliária | Loja')); ?>
        </p>
        <div class="hero-actions">
            <a href="#services" class="btn btn-primary btn-lg">
                Explorar Serviços
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
            <a href="#contact" class="btn btn-outline btn-lg">
                Contactar
            </a>
        </div>
    </div>
    
    <div class="scroll-indicator">
        <a href="#services">
            <div>Descubra Mais</div>
            <div class="scroll-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>
        </a>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="services-section section-padding">
    <div class="container">
        <div class="section-header text-center">
            <h2 class="section-title">Os Nossos Serviços</h2>
            <p class="section-subtitle">
                Descubra tudo o que temos para oferecer nos Açores
            </p>
        </div>
        
        <div class="services-grid">
            <?php
            $services_query = new WP_Query(array(
                'post_type' => 'service',
                'posts_per_page' => 6,
                'orderby' => 'menu_order',
                'order' => 'ASC'
            ));
            
            if ($services_query->have_posts()) :
                while ($services_query->have_posts()) : $services_query->the_post();
            ?>
                <div class="service-card">
                    <?php if (has_post_thumbnail()) : ?>
                        <img src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php the_title(); ?>" class="service-image">
                    <?php endif; ?>
                    
                    <div class="service-content">
                        <?php 
                        // Get custom icon field (requires ACF)
                        $icon_svg = get_field('service_icon');
                        if ($icon_svg) : ?>
                            <div class="service-icon"><?php echo $icon_svg; ?></div>
                        <?php endif; ?>
                        
                        <h3 class="service-title"><?php the_title(); ?></h3>
                        <p class="service-description"><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                        <a href="<?php the_permalink(); ?>" class="service-link">
                            Saber Mais
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
                // Default services if none are added
                $default_services = array(
                    array('title' => 'Alojamento Local', 'desc' => '3 apartamentos modernos no centro de Horta'),
                    array('title' => 'Animação Turística', 'desc' => 'Lasertag, Paintball, SUP, Kayak e Tours'),
                    array('title' => 'Eventos', 'desc' => 'Tendas, insufláveis, aniversários e teambuilding'),
                    array('title' => 'Tatuagem & Piercings', 'desc' => 'Estúdio profissional com artistas experientes'),
                    array('title' => 'Gestão Imobiliária', 'desc' => 'Arrendamento, manutenção e construção'),
                    array('title' => 'Loja', 'desc' => 'Produtos regionais e merchandising'),
                );
                
                foreach ($default_services as $service) :
            ?>
                <div class="service-card">
                    <div class="service-content">
                        <h3 class="service-title"><?php echo esc_html($service['title']); ?></h3>
                        <p class="service-description"><?php echo esc_html($service['desc']); ?></p>
                        <a href="#contact" class="service-link">
                            Saber Mais
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
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

<!-- Featured Activities Section -->
<section class="featured-section section-padding">
    <div class="container">
        <div class="section-header text-center">
            <h2 class="section-title">Atividades em Destaque</h2>
            <p class="section-subtitle">
                Experiências únicas que não pode perder
            </p>
        </div>
        
        <?php
        $activities_query = new WP_Query(array(
            'post_type' => 'activity',
            'posts_per_page' => 4,
            'orderby' => 'menu_order',
            'order' => 'ASC'
        ));
        
        if ($activities_query->have_posts()) :
            $counter = 0;
            while ($activities_query->have_posts()) : $activities_query->the_post();
                $counter++;
                $reverse_class = ($counter % 2 == 0) ? 'reverse' : '';
        ?>
            <div class="activity-item <?php echo $reverse_class; ?>">
                <?php if (has_post_thumbnail()) : ?>
                    <img src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php the_title(); ?>" class="activity-image">
                <?php endif; ?>
                
                <div class="activity-content">
                    <h3><?php the_title(); ?></h3>
                    <p><?php the_excerpt(); ?></p>
                    
                    <?php 
                    $highlights = get_field('activity_highlights'); // ACF field
                    if ($highlights && is_array($highlights)) : ?>
                        <ul class="activity-highlights">
                            <?php foreach ($highlights as $highlight) : ?>
                                <li><?php echo esc_html($highlight['text']); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>
            </div>
        <?php
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    </div>
</section>

<!-- Why Choose Section -->
<section class="why-choose-section section-padding">
    <div class="container">
        <div class="section-header text-center">
            <h2 class="section-title">Porquê Escolher Azores4fun?</h2>
            <p class="section-subtitle">
                O seu parceiro completo para aventuras nos Açores
            </p>
        </div>
        
        <div class="features-grid">
            <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <h3>Localização Central</h3>
                <p>Situados no coração de Horta, Faial, com acesso fácil a todas as atrações</p>
            </div>
            
            <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h3>Experiências Únicas</h3>
                <p>Atividades diversificadas que combinam aventura, cultura e relaxamento</p>
            </div>
            
            <div class="feature-item">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h3>Equipamento Moderno</h3>
                <p>Instalações e equipamentos de qualidade superior para sua segurança</p>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-section section-padding">
    <div class="container">
        <div class="section-header text-center">
            <h2 class="section-title">Perguntas Frequentes</h2>
            <p class="section-subtitle">
                Respostas às questões mais comuns
            </p>
        </div>
        
        <div class="faq-grid">
            <?php
            $faq_categories = get_terms(array(
                'taxonomy' => 'faq_category',
                'hide_empty' => false,
            ));
            
            if ($faq_categories && !is_wp_error($faq_categories)) :
                foreach ($faq_categories as $category) :
                    $faqs = new WP_Query(array(
                        'post_type' => 'faq',
                        'posts_per_page' => 3,
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'faq_category',
                                'field' => 'term_id',
                                'terms' => $category->term_id,
                            ),
                        ),
                    ));
                    
                    if ($faqs->have_posts()) :
            ?>
                <div class="faq-category">
                    <h3><?php echo esc_html($category->name); ?></h3>
                    <?php while ($faqs->have_posts()) : $faqs->the_post(); ?>
                        <div class="faq-item">
                            <h4 class="faq-question"><?php the_title(); ?></h4>
                            <p class="faq-answer"><?php the_content(); ?></p>
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php
                    endif;
                    wp_reset_postdata();
                endforeach;
            endif;
            ?>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section id="contact" class="cta-section section-padding">
    <div class="container">
        <h2>Pronto para a Aventura?</h2>
        <p>Entre em contacto connosco e reserve já a sua experiência</p>
        <div class="cta-actions">
            <a href="https://book.azores4fun.com" class="btn btn-white btn-lg" target="_blank">
                Reservar Agora
            </a>
            <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+351934993770')); ?>" class="btn btn-outline btn-lg">
                Ligar Agora
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
