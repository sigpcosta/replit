<?php
/**
 * AI Pro Ultra Theme Functions
 *
 * @package AIProUltra
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// Theme version
define('AIPROULTRA_VERSION', '1.0.0');

/**
 * Theme Setup
 */
function aiproultra_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('custom-logo');
    add_theme_support('automatic-feed-links');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('wp-block-styles');
    add_theme_support('editor-styles');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'aiproultra'),
        'footer' => __('Footer Menu', 'aiproultra'),
    ));

    // Add image sizes
    add_image_size('aiproultra-featured', 1200, 630, true);
    add_image_size('aiproultra-thumbnail', 400, 300, true);

    // Load text domain for translations
    load_theme_textdomain('aiproultra', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'aiproultra_setup');

/**
 * Enqueue Scripts and Styles (Optimized)
 */
function aiproultra_scripts() {
    // Main stylesheet
    wp_enqueue_style('aiproultra-style', get_stylesheet_uri(), array(), AIPROULTRA_VERSION);

    // Custom CSS if exists
    if (file_exists(get_template_directory() . '/assets/css/custom.css')) {
        wp_enqueue_style('aiproultra-custom', get_template_directory_uri() . '/assets/css/custom.css', array('aiproultra-style'), AIPROULTRA_VERSION);
    }

    // Custom JS with defer attribute
    if (file_exists(get_template_directory() . '/assets/js/custom.js')) {
        wp_enqueue_script('aiproultra-custom', get_template_directory_uri() . '/assets/js/custom.js', array(), AIPROULTRA_VERSION, true);
    }

    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'aiproultra_scripts');

/**
 * Add defer attribute to scripts
 */
function aiproultra_defer_scripts($tag, $handle, $src) {
    // Skip defer for admin and certain handles
    if (is_admin() || strpos($handle, 'jquery') !== false) {
        return $tag;
    }

    // Add defer attribute
    return str_replace(' src', ' defer src', $tag);
}
add_filter('script_loader_tag', 'aiproultra_defer_scripts', 10, 3);

/**
 * Add lazy loading to images (only for WordPress < 5.5)
 * WordPress 5.5+ adds lazy loading automatically, so we skip this for modern versions
 */
function aiproultra_add_lazy_loading($content) {
    // Skip if WordPress version is 5.5 or higher (native lazy loading)
    global $wp_version;
    if (version_compare($wp_version, '5.5', '>=')) {
        return $content;
    }

    if (is_admin() || is_feed()) {
        return $content;
    }

    // Add loading="lazy" to images that don't already have it
    $content = preg_replace('/<img((?:(?!loading=)[^>])*)>/i', '<img$1 loading="lazy">', $content);
    
    return $content;
}
add_filter('the_content', 'aiproultra_add_lazy_loading', 20);
add_filter('post_thumbnail_html', 'aiproultra_add_lazy_loading', 20);

/**
 * Remove WordPress Bloat & Optimize
 */
function aiproultra_remove_bloat() {
    // Remove emoji scripts and styles
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

    // Remove WP version from head
    remove_action('wp_head', 'wp_generator');

    // Remove wlwmanifest link
    remove_action('wp_head', 'wlwmanifest_link');

    // Remove RSD link
    remove_action('wp_head', 'rsd_link');

    // Remove shortlink
    remove_action('wp_head', 'wp_shortlink_wp_head');

    // Remove REST API links
    remove_action('wp_head', 'rest_output_link_wp_head');
    remove_action('wp_head', 'wp_oembed_add_discovery_links');

    // Disable XML-RPC
    add_filter('xmlrpc_enabled', '__return_false');

    // Remove jQuery Migrate
    add_filter('wp_default_scripts', function($scripts) {
        if (!is_admin() && isset($scripts->registered['jquery'])) {
            $script = $scripts->registered['jquery'];
            if ($script->deps) {
                $script->deps = array_diff($script->deps, array('jquery-migrate'));
            }
        }
    });
}
add_action('init', 'aiproultra_remove_bloat');

/**
 * Remove version query strings from static resources
 */
function aiproultra_remove_query_strings($src) {
    if (strpos($src, 'ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('style_loader_src', 'aiproultra_remove_query_strings', 10, 2);
add_filter('script_loader_src', 'aiproultra_remove_query_strings', 10, 2);

/**
 * Enable SVG Upload Support
 */
function aiproultra_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    $mimes['webp'] = 'image/webp';
    return $mimes;
}
add_filter('upload_mimes', 'aiproultra_mime_types');

/**
 * Fix SVG Display in Media Library
 */
function aiproultra_fix_svg_display($response, $attachment, $meta) {
    if ($response['type'] === 'image' && $response['subtype'] === 'svg+xml') {
        $response['image'] = array(
            'src' => $response['url'],
        );
    }
    return $response;
}
add_filter('wp_prepare_attachment_for_js', 'aiproultra_fix_svg_display', 10, 3);

/**
 * JSON-LD Structured Data for AI & SEO
 */
function aiproultra_json_ld_schema() {
    $schema = array();

    // Website Schema (always present)
    $schema['website'] = array(
        '@context' => 'https://schema.org',
        '@type' => 'WebSite',
        'name' => get_bloginfo('name'),
        'url' => home_url(),
        'description' => get_bloginfo('description'),
        'potentialAction' => array(
            '@type' => 'SearchAction',
            'target' => array(
                '@type' => 'EntryPoint',
                'urlTemplate' => home_url('/?s={search_term_string}'),
            ),
            'query-input' => 'required name=search_term_string',
        ),
    );

    // Organization Schema
    $schema['organization'] = array(
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => get_bloginfo('name'),
        'url' => home_url(),
        'logo' => array(
            '@type' => 'ImageObject',
            'url' => has_custom_logo() ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full') : '',
        ),
    );

    // Article Schema for single posts
    if (is_single() && get_post_type() === 'post') {
        global $post;
        
        $schema['article'] = array(
            '@context' => 'https://schema.org',
            '@type' => 'Article',
            'headline' => get_the_title(),
            'description' => get_the_excerpt(),
            'datePublished' => get_the_date('c'),
            'dateModified' => get_the_modified_date('c'),
            'author' => array(
                '@type' => 'Person',
                'name' => get_the_author(),
            ),
            'publisher' => array(
                '@type' => 'Organization',
                'name' => get_bloginfo('name'),
                'logo' => array(
                    '@type' => 'ImageObject',
                    'url' => has_custom_logo() ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full') : '',
                ),
            ),
        );

        // Add featured image if available
        if (has_post_thumbnail()) {
            $schema['article']['image'] = array(
                '@type' => 'ImageObject',
                'url' => get_the_post_thumbnail_url($post->ID, 'full'),
            );
        }

        // Add article URL
        $schema['article']['url'] = get_permalink();
        $schema['article']['mainEntityOfPage'] = array(
            '@type' => 'WebPage',
            '@id' => get_permalink(),
        );
    }

    // BreadcrumbList Schema
    if (!is_front_page()) {
        $breadcrumbs = array(
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => array(),
        );

        // Home
        $breadcrumbs['itemListElement'][] = array(
            '@type' => 'ListItem',
            'position' => 1,
            'name' => __('Home', 'aiproultra'),
            'item' => home_url(),
        );

        $position = 2;

        // Archive pages
        if (is_archive()) {
            $breadcrumbs['itemListElement'][] = array(
                '@type' => 'ListItem',
                'position' => $position,
                'name' => get_the_archive_title(),
                'item' => get_permalink(),
            );
        }

        // Single post/page
        if (is_singular()) {
            $breadcrumbs['itemListElement'][] = array(
                '@type' => 'ListItem',
                'position' => $position,
                'name' => get_the_title(),
                'item' => get_permalink(),
            );
        }

        $schema['breadcrumb'] = $breadcrumbs;
    }

    // Output JSON-LD
    foreach ($schema as $type => $data) {
        if (!empty($data)) {
            echo '<script type="application/ld+json">' . wp_json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>' . "\n";
        }
    }
}
add_action('wp_head', 'aiproultra_json_ld_schema');

/**
 * Custom Hooks for Flexibility
 */
function aiproultra_before_header() {
    do_action('aiproultra_before_header');
}

function aiproultra_after_header() {
    do_action('aiproultra_after_header');
}

function aiproultra_before_content() {
    do_action('aiproultra_before_content');
}

function aiproultra_after_content() {
    do_action('aiproultra_after_content');
}

function aiproultra_before_footer() {
    do_action('aiproultra_before_footer');
}

function aiproultra_after_footer() {
    do_action('aiproultra_after_footer');
}

/**
 * PageLayer Support - Detect and add body class
 */
function aiproultra_pagelayer_body_class($classes) {
    if (function_exists('pagelayer_is_live') && pagelayer_is_live()) {
        $classes[] = 'pagelayer-active';
    }
    
    // Add template class
    if (is_page_template()) {
        $template_slug = str_replace('.php', '', basename(get_page_template()));
        $classes[] = 'template-' . sanitize_html_class($template_slug);
    }
    
    return $classes;
}
add_filter('body_class', 'aiproultra_pagelayer_body_class');

/**
 * Excerpt Length
 */
function aiproultra_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'aiproultra_excerpt_length');

/**
 * Excerpt More
 */
function aiproultra_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'aiproultra_excerpt_more');

/**
 * Security Headers
 */
function aiproultra_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
        header('Referrer-Policy: strict-origin-when-cross-origin');
    }
}
add_action('send_headers', 'aiproultra_security_headers');

/**
 * Improve Web Vitals - Preconnect to external domains
 */
function aiproultra_resource_hints($urls, $relation_type) {
    if ('dns-prefetch' === $relation_type || 'preconnect' === $relation_type) {
        $urls[] = array(
            'href' => 'https://fonts.googleapis.com',
        );
        $urls[] = array(
            'href' => 'https://fonts.gstatic.com',
            'crossorigin',
        );
    }
    return $urls;
}
add_filter('wp_resource_hints', 'aiproultra_resource_hints', 10, 2);

/**
 * Disable Gutenberg Block Library CSS on Frontend (if not needed)
 * Uncomment to enable this optimization
 */
// function aiproultra_remove_block_css() {
//     wp_dequeue_style('wp-block-library');
//     wp_dequeue_style('wp-block-library-theme');
//     wp_dequeue_style('wc-block-style');
// }
// add_action('wp_enqueue_scripts', 'aiproultra_remove_block_css', 100);

/**
 * Custom Page Templates Registration
 */
function aiproultra_register_templates($templates) {
    $templates['templates/template-fullwidth.php'] = __('Full Width (PageLayer)', 'aiproultra');
    $templates['templates/template-blank.php'] = __('Blank (PageLayer)', 'aiproultra');
    
    return $templates;
}
add_filter('theme_page_templates', 'aiproultra_register_templates');
