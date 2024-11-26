<?php
// Enqueue custom CSS files
function enqueue_custom_styles() {
    // Enqueue header custom CSS file
    wp_enqueue_style('header-section-style', get_template_directory_uri() . '/assets/css/header-css.css');

    // Enqueue footer custom CSS file
    wp_enqueue_style('footer-section-style', get_template_directory_uri() . '/assets/css/footer-css.css');

    // Enqueue SignupBanner custom CSS file
    wp_enqueue_style('signUpBanner-section-style', get_template_directory_uri() . '/assets/css/sign-up-banner-css.css');

    // Enqueue hero custom CSS file
    wp_enqueue_style('hero-section-style', get_template_directory_uri() . '/assets/css/hero-css.css');

    // Enqueue new-arrivals custom CSS file
    wp_enqueue_style('new-arrivals-section-style', get_template_directory_uri() . '/assets/css/new-arrivals-css.css');

    // Enqueue testimonials custom CSS file
    wp_enqueue_style('testimonials-section-style', get_template_directory_uri() . '/assets/css/testimonials-css.css');

    // Enqueue product details custom CSS file
    wp_enqueue_style('product-details-section-style', get_template_directory_uri() . '/assets/css/product-details-section-css.css');

    // Enqueue product reveiew section custom CSS file
    wp_enqueue_style('product-reviews-section-style', get_template_directory_uri() . '/assets/css/product-reviews-section-css.css');

   // Enqueue recommendations section custom CSS file
   wp_enqueue_style('recommendations-style', get_template_directory_uri() . '/assets/css/recommendations-css.css');

   // Enqueue category section custom CSS file
   wp_enqueue_style('category-style', get_template_directory_uri() . '/assets/css/category-page-css.css');

    // Enqueue cart section custom CSS file
    wp_enqueue_style('cart-style', get_template_directory_uri() . '/assets/css/cart-css.css');



}
add_action('wp_enqueue_scripts', 'enqueue_custom_styles');

// Enqueue custom JS files
function enqueue_custom_scripts() {
    // Enqueue header custom JS file
    wp_enqueue_script('header-script', get_template_directory_uri() . '/assets/js/header-script.js', array(), null, true);

    // Enqueue footer custom JS file
    wp_enqueue_script('footer-script', get_template_directory_uri() . '/assets/js/footer-script.js', array(), null, true);

    // Enqueue testimonials custom JS file
    wp_enqueue_script('testimonial-script', get_template_directory_uri() . '/assets/js/testimonials-script.js', array(), null, true);

    // Enqueue product details custom JS file
    wp_enqueue_script('product-details-section-script', get_template_directory_uri() . '/assets/js/product-details-section-script.js', array(), null, true);

    // Enqueue product review section custom JS file
    wp_enqueue_script('product-reviews-section-script', get_template_directory_uri() . '/assets/js/product-reviews-section-script.js', array(), null, true);

    // Enqueue recommendations section custom JS file
    wp_enqueue_script('recommendations-script', get_template_directory_uri() . '/assets/js/recommendations-script.js', array(), null, true);

    // Enqueue category section custom JS file
    wp_enqueue_script('category-script', get_template_directory_uri() . '/assets/js/category-script.js', array(), null, true);

     // Enqueue cart section custom JS file
     wp_enqueue_script('cart-script', get_template_directory_uri() . '/assets/js/cart-script.js', array(), null, true);




}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
add_filter('big_image_size_threshold', '__return_false');