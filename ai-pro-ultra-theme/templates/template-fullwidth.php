<?php
/**
 * Template Name: Full Width (PageLayer)
 * Template Post Type: page
 * 
 * Perfect for PageLayer page builder - provides full width layout
 * with header and footer, removing the container constraints.
 *
 * @package AIProUltra
 */

get_header();
?>

<?php aiproultra_before_content(); ?>

<main id="primary" class="site-content">
    
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

</main>

<?php aiproultra_after_content(); ?>

<?php
get_footer();
