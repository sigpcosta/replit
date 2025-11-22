<?php
/**
 * The main template file
 *
 * @package Azores4fun
 */

get_header();
?>

<main id="primary" class="site-main">

    <?php if (have_posts()) : ?>

        <div class="container py-16">
            <div class="posts-grid">
                <?php
                while (have_posts()) :
                    the_post();
                    get_template_part('template-parts/content', get_post_type());
                endwhile;
                ?>
            </div>

            <?php
            the_posts_navigation(array(
                'prev_text' => __('&larr; Posts Anteriores', 'azores4fun'),
                'next_text' => __('Próximos Posts &rarr;', 'azores4fun'),
            ));
            ?>
        </div>

    <?php else : ?>

        <div class="container py-16">
            <div class="no-results">
                <h1><?php esc_html_e('Nada Encontrado', 'azores4fun'); ?></h1>
                <p><?php esc_html_e('Parece que não foi encontrado nada neste local.', 'azores4fun'); ?></p>
                <?php get_search_form(); ?>
            </div>
        </div>

    <?php endif; ?>

</main>

<?php
get_footer();
