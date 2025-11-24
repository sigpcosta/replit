# AI Pro Ultra Theme

**Version:** 1.0.0  
**Author:** AI Pro Ultra  
**License:** GPL v2 or later  
**Requires WordPress:** 6.0+  
**Tested up to:** 6.4  
**Requires PHP:** 7.4+

## Description

AI Pro Ultra Theme is an ultra-lightweight, SEO-optimized WordPress theme designed for maximum performance and AI-ready structured data. Perfect for modern websites that demand speed, flexibility, and intelligent content markup.

### Key Features

✅ **Ultra-Lightweight & Fast**
- Minimal CSS and JavaScript
- Optimized for Core Web Vitals (LCP, FID, CLS)
- Scripts loaded with `defer` attribute
- Images with automatic `lazy-load`
- No external frameworks or libraries

✅ **PageLayer Compatible**
- Full support for PageLayer and PageLayer Pro
- Full Width template for page builders
- Blank canvas template for landing pages
- Compatible with BlankSlate template structure

✅ **SEO Optimized**
- Clean, semantic HTML5 markup
- Proper heading hierarchy
- Automatic removal of WordPress bloat
- Query string removal from static resources
- Security headers enabled

✅ **AI-Ready Structured Data**
- Automatic JSON-LD schema markup:
  - Website schema
  - Organization schema
  - Article schema (for blog posts)
  - BreadcrumbList schema
- Ready for search engine AI processing

✅ **Developer Friendly**
- Clean, commented code
- Custom action hooks for flexibility
- Child theme ready
- Translation ready (i18n)
- Compatible with Polylang and WPML

✅ **Modern Features**
- SVG and WebP support
- Custom logo support
- Featured images
- Multiple navigation menus
- Responsive design
- RTL language support

## Installation

### Method 1: WordPress Admin Panel

1. Download the `ai-pro-ultra-theme.zip` file
2. Log in to your WordPress admin panel
3. Navigate to **Appearance → Themes**
4. Click **Add New** → **Upload Theme**
5. Choose the `ai-pro-ultra-theme.zip` file
6. Click **Install Now**
7. After installation, click **Activate**

### Method 2: FTP Upload

1. Download and extract the `ai-pro-ultra-theme.zip` file
2. Using FTP, upload the `ai-pro-ultra-theme` folder to `/wp-content/themes/`
3. Log in to your WordPress admin panel
4. Navigate to **Appearance → Themes**
5. Find "AI Pro Ultra Theme" and click **Activate**

## Configuration

### After Activation

1. **Set Up Menus:**
   - Go to **Appearance → Menus**
   - Create a new menu and assign it to "Primary Menu"
   - Optionally create a footer menu

2. **Add a Logo:**
   - Go to **Appearance → Customize → Site Identity**
   - Upload your logo

3. **Configure Homepage:**
   - Go to **Settings → Reading**
   - Choose "A static page" and select your homepage

4. **For PageLayer Users:**
   - Create a new page
   - Select "Full Width (PageLayer)" or "Blank (PageLayer)" template
   - Edit with PageLayer
   - Set as homepage if desired

## Page Templates

### Full Width (PageLayer)
Perfect for page builders. Removes container constraints while keeping header and footer.

**To use:**
1. Edit a page
2. In Page Attributes → Template, select "Full Width (PageLayer)"
3. Edit with PageLayer or your preferred builder

### Blank (PageLayer)
Complete blank canvas with no header or footer. Ideal for landing pages.

**To use:**
1. Edit a page
2. In Page Attributes → Template, select "Blank (PageLayer)"
3. Edit with PageLayer for complete design freedom

## Customization

### Custom Hooks

The theme provides custom action hooks for maximum flexibility:

```php
// Before header
add_action('aiproultra_before_header', 'your_function');

// After header
add_action('aiproultra_after_header', 'your_function');

// Before content
add_action('aiproultra_before_content', 'your_function');

// After content
add_action('aiproultra_after_content', 'your_function');

// Before footer
add_action('aiproultra_before_footer', 'your_function');

// After footer
add_action('aiproultra_after_footer', 'your_function');
```

### Custom CSS

Add custom styles to `/assets/css/custom.css` (already enqueued).

### Custom JavaScript

Add custom scripts to `/assets/js/custom.js` (already enqueued with defer).

### Child Theme

To create a child theme:

1. Create a new folder in `/wp-content/themes/` (e.g., `ai-pro-ultra-child`)
2. Create `style.css` with:

```css
/*
Theme Name: AI Pro Ultra Child
Template: ai-pro-ultra-theme
*/
```

3. Create `functions.php` with:

```php
<?php
function aiproultra_child_enqueue_styles() {
    wp_enqueue_style('aiproultra-parent', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('aiproultra-child', get_stylesheet_uri(), array('aiproultra-parent'));
}
add_action('wp_enqueue_scripts', 'aiproultra_child_enqueue_styles');
```

4. Activate the child theme in **Appearance → Themes**

## Performance Optimizations

The theme automatically implements:

- ✅ Emoji removal (reduces HTTP requests)
- ✅ Query string removal from static resources
- ✅ jQuery Migrate removal (not needed for modern code)
- ✅ WP version removal from head
- ✅ Unnecessary WordPress links removal
- ✅ XML-RPC disabled (security)
- ✅ REST API links minimized
- ✅ Defer attribute on scripts
- ✅ Lazy loading on images
- ✅ Security headers enabled
- ✅ Resource hints (preconnect) for external domains

## SEO Features

### Automatic Structured Data

The theme automatically adds JSON-LD structured data:

**On all pages:**
- Website schema
- Organization schema
- BreadcrumbList schema

**On blog posts:**
- Article schema with:
  - Headline, description
  - Author information
  - Publish and modified dates
  - Featured image (if available)
  - Publisher information

### Clean URLs

All version query strings removed from CSS/JS for cleaner URLs and better caching.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
ai-pro-ultra-theme/
├── assets/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   │   └── custom.js
│   └── img/
├── templates/
│   ├── template-fullwidth.php
│   └── template-blank.php
├── 404.php
├── archive.php
├── footer.php
├── front-page.php
├── functions.php
├── header.php
├── index.php
├── page.php
├── single.php
├── style.css
└── README.md
```

## Frequently Asked Questions

### Q: Does this theme work with Gutenberg?
**A:** Yes! The theme supports the block editor with `align-wide`, `responsive-embeds`, and `wp-block-styles`.

### Q: Can I use this with WooCommerce?
**A:** The theme provides a clean foundation. For WooCommerce, you may need additional styling or consider a child theme.

### Q: Does it work with multilingual plugins?
**A:** Yes! The theme is translation-ready and compatible with Polylang and WPML.

### Q: How do I disable the automatic optimizations?
**A:** Edit `functions.php` and comment out the specific optimization you want to disable in the `aiproultra_remove_bloat()` function.

### Q: Can I use this theme without PageLayer?
**A:** Absolutely! The theme works perfectly as a standalone theme. PageLayer support is optional.

## Support

For support, customization requests, or bug reports:
- Create an issue on the theme repository
- Contact the theme author

## Changelog

### 1.0.0 - November 2024
- Initial release
- Core features implemented
- PageLayer compatibility
- SEO optimization
- AI-ready structured data
- Performance optimizations

## Credits

- Built with WordPress best practices
- Follows WordPress Coding Standards
- Semantic HTML5 markup
- Accessibility-focused design

## License

This theme is licensed under the GPL v2 or later.

```
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
```

---

**Thank you for using AI Pro Ultra Theme!** 🚀
