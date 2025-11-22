    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php esc_html_e('Azores4fun', 'azores4fun'); ?></h3>
                    <p><?php esc_html_e('A sua aventura completa nos Açores. Desde alojamento a experiências inesquecíveis.', 'azores4fun'); ?></p>
                </div>

                <div class="footer-section">
                    <h3><?php esc_html_e('Links Rápidos', 'azores4fun'); ?></h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'menu_id'        => 'footer-menu',
                        'container'      => false,
                        'fallback_cb'    => '__return_false',
                    ));
                    ?>
                </div>

                <div class="footer-section">
                    <h3><?php esc_html_e('Contacto', 'azores4fun'); ?></h3>
                    <ul>
                        <li><?php esc_html_e('Horta, Faial, Açores', 'azores4fun'); ?></li>
                        <li><?php esc_html_e('Telefone: +351 123 456 789', 'azores4fun'); ?></li>
                        <li><?php esc_html_e('Email: info@azores4fun.com', 'azores4fun'); ?></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('Todos os direitos reservados.', 'azores4fun'); ?></p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
