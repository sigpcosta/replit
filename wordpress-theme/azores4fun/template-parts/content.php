<?php
/**
 * Template part for displaying posts
 *
 * @package Azores4fun
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('blog-post'); ?>>
    <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail">
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('large'); ?>
            </a>
        </div>
    <?php endif; ?>

    <header class="entry-header">
        <?php
        if (is_singular()) :
            the_title('<h1 class="entry-title">', '</h1>');
        else :
            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
        endif;
        ?>

        <?php if ('post' === get_post_type()) : ?>
            <div class="entry-meta">
                <?php
                azores4fun_posted_on();
                azores4fun_posted_by();
                ?>
            </div>
        <?php endif; ?>
    </header>

    <div class="entry-content">
        <?php
        if (is_singular()) :
            the_content();
        else :
            the_excerpt();
        endif;

        wp_link_pages(
            array(
                'before' => '<div class="page-links">' . esc_html__('Páginas:', 'azores4fun'),
                'after'  => '</div>',
            )
        );
        ?>
    </div>

    <?php if (!is_singular()) : ?>
        <div class="entry-footer">
            <a href="<?php the_permalink(); ?>" class="btn btn-outline">
                <?php esc_html_e('Ler Mais', 'azores4fun'); ?> &rarr;
            </a>
        </div>
    <?php else : ?>
        <footer class="entry-footer">
            <?php azores4fun_entry_footer(); ?>
        </footer>
    <?php endif; ?>
</article>
