<?php
/**
 * 404 Error Page Template
 *
 * @package AIProUltra
 */

get_header();
?>

<?php aiproultra_before_content(); ?>

<main id="primary" class="site-content">
    <div class="site-container">
        
        <section class="error-404">
            <header class="page-header">
                <h1 class="page-title"><?php esc_html_e('404 - Page Not Found', 'aiproultra'); ?></h1>
            </header>

            <div class="page-content">
                <p><?php esc_html_e('Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.', 'aiproultra'); ?></p>

                <h2><?php esc_html_e('Try searching for what you need:', 'aiproultra'); ?></h2>
                <?php get_search_form(); ?>

                <h2><?php esc_html_e('Or return to:', 'aiproultra'); ?></h2>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home Page', 'aiproultra'); ?></a></li>
                    <?php if (has_nav_menu('primary')) : ?>
                        <li><?php esc_html_e('Use the navigation menu above', 'aiproultra'); ?></li>
                    <?php endif; ?>
                </ul>
            </div>
        </section>

    </div>
</main>

<?php aiproultra_after_content(); ?>

<?php
get_footer();
