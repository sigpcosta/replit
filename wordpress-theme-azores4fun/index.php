<?php
/**
 * The main template file
 */

get_header();
?>

<main class="site-main section-padding">
    <div class="container">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <h1><?php the_title(); ?></h1>
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            endwhile;
        else :
            ?>
            <p>Nenhum conteúdo encontrado.</p>
            <?php
        endif;
        ?>
    </div>
</main>

<?php get_footer(); ?>
