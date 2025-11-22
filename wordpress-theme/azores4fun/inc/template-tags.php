<?php
/**
 * Custom template tags for this theme
 *
 * @package Azores4fun
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Prints HTML with meta information for the current post-date/time
 */
function azores4fun_posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if (get_the_time('U') !== get_the_modified_time('U')) {
        $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
    }

    $time_string = sprintf(
        $time_string,
        esc_attr(get_the_date(DATE_W3C)),
        esc_html(get_the_date()),
        esc_attr(get_the_modified_date(DATE_W3C)),
        esc_html(get_the_modified_date())
    );

    $posted_on = sprintf(
        /* translators: %s: post date */
        esc_html_x('Publicado em %s', 'post date', 'azores4fun'),
        '<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
    );

    echo '<span class="posted-on">' . $posted_on . '</span>';
}

/**
 * Prints HTML with meta information for the current author
 */
function azores4fun_posted_by() {
    $byline = sprintf(
        /* translators: %s: post author */
        esc_html_x('por %s', 'post author', 'azores4fun'),
        '<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
    );

    echo '<span class="byline"> ' . $byline . '</span>';
}

/**
 * Prints HTML with meta information for categories and tags
 */
function azores4fun_entry_footer() {
    // Hide category and tag text for pages
    if ('post' === get_post_type()) {
        $categories_list = get_the_category_list(esc_html__(', ', 'azores4fun'));
        if ($categories_list) {
            /* translators: %s: list of categories */
            printf('<span class="cat-links">' . esc_html__('Publicado em %1$s', 'azores4fun') . '</span>', $categories_list);
        }

        $tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', 'azores4fun'));
        if ($tags_list) {
            /* translators: %s: list of tags */
            printf('<span class="tags-links">' . esc_html__('Etiquetas: %1$s', 'azores4fun') . '</span>', $tags_list);
        }
    }
}
