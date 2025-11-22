    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>
                        <span style="color: var(--color-primary); font-weight: 700;">Azores</span><span style="font-weight: 700;">4fun</span>
                    </h3>
                    <p style="color: var(--color-muted-foreground); font-size: 0.875rem; margin-top: 1rem;">
                        <?php esc_html_e('A sua aventura completa nos Açores. Experiências únicas na Horta, Faial.', 'azores4fun'); ?>
                    </p>
                </div>

                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-section">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php else : ?>
                    <div class="footer-section">
                        <h3><?php esc_html_e('Serviços', 'azores4fun'); ?></h3>
                        <ul>
                            <li><a href="#alojamento"><?php esc_html_e('Alojamento Local', 'azores4fun'); ?></a></li>
                            <li><a href="#animacao"><?php esc_html_e('Animação Turística', 'azores4fun'); ?></a></li>
                            <li><a href="#eventos"><?php esc_html_e('Eventos', 'azores4fun'); ?></a></li>
                            <li><a href="#tatuagem"><?php esc_html_e('Tatuagem & Piercings', 'azores4fun'); ?></a></li>
                            <li><a href="#imobiliaria"><?php esc_html_e('Gestão Imobiliária', 'azores4fun'); ?></a></li>
                            <li><a href="#loja"><?php esc_html_e('Loja', 'azores4fun'); ?></a></li>
                        </ul>
                    </div>
                <?php endif; ?>

                <?php if (is_active_sidebar('footer-2')) : ?>
                    <div class="footer-section">
                        <?php dynamic_sidebar('footer-2'); ?>
                    </div>
                <?php else : ?>
                    <div class="footer-section">
                        <h3><?php esc_html_e('Contacto', 'azores4fun'); ?></h3>
                        <ul>
                            <li style="margin-bottom: 0.5rem;"><?php esc_html_e('Rua da Horta, 123', 'azores4fun'); ?></li>
                            <li style="margin-bottom: 0.5rem;"><?php esc_html_e('9900-000 Horta, Faial', 'azores4fun'); ?></li>
                            <li style="margin-bottom: 0.5rem;"><a href="tel:+351123456789">+351 123 456 789</a></li>
                            <li><a href="mailto:info@azores4fun.com">info@azores4fun.com</a></li>
                        </ul>
                    </div>
                <?php endif; ?>

                <?php if (is_active_sidebar('footer-3')) : ?>
                    <div class="footer-section">
                        <?php dynamic_sidebar('footer-3'); ?>
                    </div>
                <?php else : ?>
                    <div class="footer-section">
                        <h3><?php esc_html_e('Horário', 'azores4fun'); ?></h3>
                        <ul>
                            <li style="margin-bottom: 0.5rem;"><?php esc_html_e('Segunda - Sexta: 9h - 19h', 'azores4fun'); ?></li>
                            <li style="margin-bottom: 0.5rem;"><?php esc_html_e('Sábado: 10h - 18h', 'azores4fun'); ?></li>
                            <li><?php esc_html_e('Domingo: 10h - 14h', 'azores4fun'); ?></li>
                        </ul>
                    </div>
                <?php endif; ?>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo esc_html(date('Y')); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('Todos os direitos reservados.', 'azores4fun'); ?></p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
