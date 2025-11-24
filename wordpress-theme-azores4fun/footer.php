<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Brand Column -->
            <div class="footer-section">
                <div class="footer-brand">
                    <span class="primary-text">Azores</span><span>4fun</span>
                </div>
                <p class="muted-text">
                    A sua aventura completa nos Açores. Alojamento, atividades, eventos e muito mais.
                </p>
            </div>
            
            <!-- Services Column -->
            <div class="footer-section">
                <h3>Serviços</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'fallback_cb' => 'azores4fun_footer_default_menu',
                ));
                ?>
            </div>
            
            <!-- Contact Column -->
            <div class="footer-section">
                <h3>Contacto</h3>
                <ul>
                    <li><?php echo wp_kses_post(get_theme_mod('contact_address', 'Rua da Horta, 123<br>9900-000 Horta, Faial')); ?></li>
                    <li>
                        <a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone', '+351934993770')); ?>">
                            <?php echo esc_html(get_theme_mod('contact_phone', '+351 934 993 770')); ?>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'info@azores4fun.com')); ?>">
                            <?php echo esc_html(get_theme_mod('contact_email', 'info@azores4fun.com')); ?>
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- Schedule Column -->
            <div class="footer-section">
                <h3>Horário</h3>
                <ul>
                    <li>Segunda a Sexta: 9h - 18h</li>
                    <li>Sábado: 10h - 14h</li>
                    <li>Domingo: Fechado</li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Azores4fun. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>

<?php
// Footer menu fallback
function azores4fun_footer_default_menu() {
    echo '<ul>';
    echo '<li><a href="' . esc_url(home_url('/alojamento')) . '">Alojamento Local</a></li>';
    echo '<li><a href="' . esc_url(home_url('/animacao')) . '">Animação Turística</a></li>';
    echo '<li><a href="' . esc_url(home_url('/eventos')) . '">Eventos</a></li>';
    echo '<li><a href="' . esc_url(home_url('/tatuagem')) . '">Tatuagem</a></li>';
    echo '<li><a href="' . esc_url(home_url('/imobiliaria')) . '">Imobiliária</a></li>';
    echo '<li><a href="' . esc_url(home_url('/loja')) . '">Loja</a></li>';
    echo '<li><a href="https://www.azores4fun.com/blog" target="_blank">Blog</a></li>';
    echo '</ul>';
}
?>
