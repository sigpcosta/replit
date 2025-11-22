<?php
/**
 * Template part para exibir posts
 *
 * @package Azores4fun_2024
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php
        if (is_singular()) :
            the_title('<h1 class="entry-title">', '</h1>');
        else :
            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
        endif;
        ?>
    </header>

    <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail">
            <?php the_post_thumbnail('azores4fun-service'); ?>
        </div>
    <?php endif; ?>

    <div class="entry-content">
        <?php
        if (is_singular()) :
            the_content();
        else :
            the_excerpt();
        endif;
        ?>
    </div>

    <footer class="entry-footer">
        <?php
        if (!is_singular()) :
            ?>
            <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                <?php esc_html_e('Ler Mais', 'azores4fun'); ?>
            </a>
        <?php endif; ?>
    </footer>
</article>
