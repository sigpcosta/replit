<?php
/**
 * Template part para quando não há conteúdo
 *
 * @package Azores4fun_2024
 */
?>

<section class="no-results not-found">
    <header class="page-header">
        <h1 class="page-title"><?php esc_html_e('Nada Encontrado', 'azores4fun'); ?></h1>
    </header>

    <div class="page-content">
        <?php if (is_home() && current_user_can('publish_posts')) : ?>
            <p><?php
                printf(
                    wp_kses(
                        __('Pronto para publicar o seu primeiro post? <a href="%1$s">Comece aqui</a>.', 'azores4fun'),
                        array(
                            'a' => array(
                                'href' => array(),
                            ),
                        )
                    ),
                    esc_url(admin_url('post-new.php'))
                );
            ?></p>
        <?php elseif (is_search()) : ?>
            <p><?php esc_html_e('Desculpe, mas nada foi encontrado para a sua pesquisa. Tente novamente com palavras-chave diferentes.', 'azores4fun'); ?></p>
            <?php get_search_form(); ?>
        <?php else : ?>
            <p><?php esc_html_e('Parece que não conseguimos encontrar o que procura. Talvez a pesquisa possa ajudar.', 'azores4fun'); ?></p>
            <?php get_search_form(); ?>
        <?php endif; ?>
    </div>
</section>
