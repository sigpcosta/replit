<?php
/**
 * Template for displaying single posts
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
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('aiproultra-featured'); ?>
                    </div>
                <?php endif; ?>

                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>

                    <div class="entry-meta">
                        <span class="posted-on">
                            <time datetime="<?php echo get_the_date('c'); ?>">
                                <?php echo get_the_date(); ?>
                            </time>
                        </span>
                        <span class="byline">
                            <?php esc_html_e('by', 'aiproultra'); ?>
                            <span class="author">
                                <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
                                    <?php the_author(); ?>
                                </a>
                            </span>
                        </span>
                        <?php if (has_category()) : ?>
                            <span class="cat-links">
                                <?php esc_html_e('in', 'aiproultra'); ?>
                                <?php the_category(', '); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'aiproultra'),
                        'after' => '</div>',
                    ));
                    ?>
                </div>

                <footer class="entry-footer">
                    <?php
                    // Tags
                    if (has_tag()) :
                        the_tags(
                            '<div class="tags-links"><strong>' . esc_html__('Tags:', 'aiproultra') . '</strong> ',
                            ', ',
                            '</div>'
                        );
                    endif;

                    // Edit link
                    edit_post_link(
                        sprintf(
                            wp_kses(
                                __('Edit <span class="screen-reader-text">%s</span>', 'aiproultra'),
                                array(
                                    'span' => array(
                                        'class' => array(),
                                    ),
                                )
                            ),
                            wp_kses_post(get_the_title())
                        ),
                        '<span class="edit-link">',
                        '</span>'
                    );
                    ?>
                </footer>

            </article>

            <?php
            // Previous/Next post navigation
            the_post_navigation(array(
                'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'aiproultra') . '</span> <span class="nav-title">%title</span>',
                'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'aiproultra') . '</span> <span class="nav-title">%title</span>',
            ));

            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>

    </div>
</main>

<?php aiproultra_after_content(); ?>

<?php
get_footer();
