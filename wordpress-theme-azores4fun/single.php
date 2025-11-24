<?php
/**
 * Template for single posts and custom post types
 */

get_header();
?>

<main class="site-main section-padding">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
        ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header text-center" style="margin-bottom: 2rem;">
                    <h1 style="font-size: 2.5rem; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                    
                    <?php if (has_post_thumbnail()) : ?>
                        <div style="margin: 2rem 0;">
                            <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; max-height: 500px; object-fit: cover; border-radius: var(--radius);')); ?>
                        </div>
                    <?php endif; ?>
                </header>

                <div class="entry-content" style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
                    <?php the_content(); ?>
                </div>
            </article>
            
            <div style="margin-top: 3rem; text-align: center;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">
                    Voltar à Página Inicial
                </a>
            </div>
        <?php
        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>
