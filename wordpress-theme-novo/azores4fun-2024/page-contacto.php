<?php
/**
 * Template: Página de Contacto
 * Template Name: Contacto
 *
 * @package Azores4fun_2024
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="service-page-hero">
        <div class="hero-background">
            <img src="<?php echo esc_url(AZORES4FUN_THEME_URI . '/assets/images/Azores_coastline_hero_image_28cfac0a.png'); ?>" 
                 alt="<?php esc_attr_e('Contacte-nos', 'azores4fun'); ?>">
        </div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content container">
            <h1 class="hero-title"><?php esc_html_e('Contacte-nos', 'azores4fun'); ?></h1>
            <p class="hero-subtitle">
                <?php esc_html_e('Estamos prontos para ajudar a planear a sua aventura nos Açores', 'azores4fun'); ?>
            </p>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="service-page-content">
        <div class="container">
            <div class="contact-form-container">
                <h2 style="text-align: center; margin-bottom: 2rem;"><?php esc_html_e('Envie-nos uma Mensagem', 'azores4fun'); ?></h2>
                
                <form id="contact-form" class="contact-form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                    <input type="hidden" name="action" value="azores4fun_contact_form">
                    <?php wp_nonce_field('azores4fun_contact_nonce', 'contact_nonce'); ?>
                    
                    <div class="form-group">
                        <label for="contact-name" class="form-label">
                            <?php esc_html_e('Nome', 'azores4fun'); ?> <span class="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="contact-name" 
                            name="contact_name" 
                            class="form-input" 
                            required
                            placeholder="<?php esc_attr_e('O seu nome completo', 'azores4fun'); ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="contact-email" class="form-label">
                            <?php esc_html_e('Email', 'azores4fun'); ?> <span class="required">*</span>
                        </label>
                        <input 
                            type="email" 
                            id="contact-email" 
                            name="contact_email" 
                            class="form-input" 
                            required
                            placeholder="<?php esc_attr_e('seuemail@exemplo.com', 'azores4fun'); ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="contact-phone" class="form-label">
                            <?php esc_html_e('Telefone', 'azores4fun'); ?>
                        </label>
                        <input 
                            type="tel" 
                            id="contact-phone" 
                            name="contact_phone" 
                            class="form-input"
                            placeholder="<?php esc_attr_e('+351 123 456 789', 'azores4fun'); ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="contact-subject" class="form-label">
                            <?php esc_html_e('Assunto', 'azores4fun'); ?> <span class="required">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="contact-subject" 
                            name="contact_subject" 
                            class="form-input" 
                            required
                            placeholder="<?php esc_attr_e('Assunto da mensagem', 'azores4fun'); ?>"
                        >
                    </div>

                    <div class="form-group">
                        <label for="contact-message" class="form-label">
                            <?php esc_html_e('Mensagem', 'azores4fun'); ?> <span class="required">*</span>
                        </label>
                        <textarea 
                            id="contact-message" 
                            name="contact_message" 
                            class="form-textarea" 
                            required
                            placeholder="<?php esc_attr_e('Escreva aqui a sua mensagem...', 'azores4fun'); ?>"
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-lg form-submit">
                            <?php esc_html_e('Enviar Mensagem', 'azores4fun'); ?>
                        </button>
                    </div>
                </form>

                <div id="form-message" style="margin-top: 1rem; padding: 1rem; border-radius: 0.5rem; display: none;"></div>
            </div>

            <!-- Contact Info -->
            <div style="margin-top: 4rem;">
                <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 56rem; margin: 0 auto;">
                    <div style="text-align: center;">
                        <h3 style="margin-bottom: 1rem;"><?php esc_html_e('Informações de Contacto', 'azores4fun'); ?></h3>
                        <div style="color: var(--text-secondary);">
                            <p style="margin-bottom: 0.5rem;">
                                <strong><?php esc_html_e('Morada:', 'azores4fun'); ?></strong><br>
                                <?php echo esc_html(get_theme_mod('azores4fun_contact_address', 'Horta, Faial, Açores')); ?>
                            </p>
                            <p style="margin-bottom: 0.5rem;">
                                <strong><?php esc_html_e('Telefone:', 'azores4fun'); ?></strong><br>
                                <?php echo esc_html(get_theme_mod('azores4fun_contact_phone', '+351 123 456 789')); ?>
                            </p>
                            <p style="margin-bottom: 0.5rem;">
                                <strong><?php esc_html_e('Email:', 'azores4fun'); ?></strong><br>
                                <a href="mailto:<?php echo esc_attr(get_theme_mod('azores4fun_contact_email', 'info@azores4fun.com')); ?>" 
                                   style="color: var(--primary);">
                                    <?php echo esc_html(get_theme_mod('azores4fun_contact_email', 'info@azores4fun.com')); ?>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2 class="section-title">
                <?php esc_html_e('Pronto para Reservar?', 'azores4fun'); ?>
            </h2>
            <p class="section-description">
                <?php esc_html_e('Reserve já a sua experiência na nossa plataforma de reservas', 'azores4fun'); ?>
            </p>
            <div class="hero-buttons">
                <a href="https://experiences.azores4fun.com" class="btn btn-lg" style="background: white; color: var(--primary); border-color: white;" target="_blank" rel="noopener">
                    <?php esc_html_e('Reservar Agora', 'azores4fun'); ?>
                </a>
            </div>
        </div>
    </section>

</main>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const messageDiv = document.getElementById('form-message');
    
    fetch('<?php echo esc_url(admin_url('admin-post.php')); ?>', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        messageDiv.style.display = 'block';
        if (data.success) {
            messageDiv.style.background = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
            messageDiv.textContent = data.message;
            document.getElementById('contact-form').reset();
        } else {
            messageDiv.style.background = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
            messageDiv.textContent = data.message;
        }
    })
    .catch(error => {
        messageDiv.style.display = 'block';
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.textContent = '<?php esc_html_e('Erro ao enviar mensagem. Tente novamente.', 'azores4fun'); ?>';
    });
});
</script>

<?php
get_footer();
