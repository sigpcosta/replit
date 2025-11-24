<?php
/**
 * Main template file
 *
 * @package AIProUltra
 */

get_header();
?>

<?php aiproultra_before_content(); ?>

<main id="primary" class="site-content">
    <div class="site-container">
        
        <?php if (have_posts()) : ?>

            <div class="posts-list">
                <?php
                while (have_posts()) :
                    the_post();
                ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-item'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('aiproultra-featured'); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <header class="entry-header">
                            <h2 class="entry-title">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a>
                            </h2>

                            <div class="entry-meta">
                                <span class="posted-on">
                                    <time datetime="<?php echo get_the_date('c'); ?>">
                                        <?php echo get_the_date(); ?>
                                    </time>
                                </span>
                                <span class="byline">
                                    <?php esc_html_e('by', 'aiproultra'); ?>
                                    <span class="author">
                                        <?php the_author(); ?>
                                    </span>
                                </span>
                            </div>
                        </header>

                        <div class="entry-summary">
                            <?php the_excerpt(); ?>
                        </div>

                        <footer class="entry-footer">
                            <a href="<?php the_permalink(); ?>" class="read-more">
                                <?php esc_html_e('Read More', 'aiproultra'); ?> &rarr;
                            </a>
                        </footer>

                    </article>
                <?php endwhile; ?>
            </div>

            <?php
            // Pagination
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => __('&laquo; Previous', 'aiproultra'),
                'next_text' => __('Next &raquo;', 'aiproultra'),
                'class' => 'pagination',
            ));
            ?>

        <?php else : ?>

            <div class="no-results">
                <h1><?php esc_html_e('Nothing Found', 'aiproultra'); ?></h1>
                <p><?php esc_html_e('It seems we can\'t find what you\'re looking for. Perhaps searching can help.', 'aiproultra'); ?></p>
                <?php get_search_form(); ?>
            </div>

        <?php endif; ?>

    </div>
</main>

<?php aiproultra_after_content(); ?>

<?php
get_footer();
