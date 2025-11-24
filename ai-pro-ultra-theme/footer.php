<?php aiproultra_before_footer(); ?>

<footer class="site-footer">
    <div class="site-container">
        <?php if (has_nav_menu('footer')) : ?>
            <nav class="footer-navigation" role="navigation" aria-label="<?php esc_attr_e('Footer Navigation', 'aiproultra'); ?>">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_class' => 'footer-menu',
                    'container' => false,
                    'depth' => 1,
                ));
                ?>
            </nav>
        <?php endif; ?>

        <div class="site-info">
            <p>
                &copy; <?php echo date('Y'); ?> 
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <?php bloginfo('name'); ?>
                </a>
                <?php
                printf(
                    esc_html__('| Powered by %s', 'aiproultra'),
                    '<a href="https://wordpress.org/" target="_blank" rel="noopener">WordPress</a>'
                );
                ?>
            </p>
        </div>
    </div>
</footer>

<?php aiproultra_after_footer(); ?>

<?php wp_footer(); ?>
</body>
</html>
