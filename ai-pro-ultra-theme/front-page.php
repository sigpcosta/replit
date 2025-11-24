<?php
/**
 * Front Page Template
 * 
 * This template is used for the homepage when static front page is set.
 * If you want to use a page builder like PageLayer, just create a page 
 * and set it as the front page in Settings > Reading.
 *
 * @package AIProUltra
 */

get_header();
?>

<?php aiproultra_before_content(); ?>

<main id="primary" class="site-content">
    <div class="site-container">
        
        <?php
        while (have_posts()) :
            the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                
                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'aiproultra'),
                        'after' => '</div>',
                    ));
                    ?>
                </div>

            </article>

        <?php endwhile; ?>

    </div>
</main>

<?php aiproultra_after_content(); ?>

<?php
get_footer();
