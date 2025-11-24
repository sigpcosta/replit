<?php
/**
 * Template Name: Blank (PageLayer)
 * Template Post Type: page
 * 
 * Perfect for PageLayer page builder - completely blank canvas
 * with no header, footer, or containers. Ideal for landing pages.
 *
 * @package AIProUltra
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php aiproultra_before_content(); ?>

<main id="primary" class="site-content">
    
    <?php
    while (have_posts()) :
        the_post();
    ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
            <div class="entry-content">
                <?php the_content(); ?>
            </div>

        </article>

    <?php endwhile; ?>

</main>

<?php aiproultra_after_content(); ?>

<?php wp_footer(); ?>
</body>
</html>
