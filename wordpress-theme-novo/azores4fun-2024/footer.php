    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php esc_html_e('Azores4fun', 'azores4fun'); ?></h3>
                    <p><?php esc_html_e('A sua aventura completa nos Açores. Desde alojamento a experiências inesquecíveis.', 'azores4fun'); ?></p>
                </div>

                <div class="footer-section">
                    <h3><?php esc_html_e('Links Rápidos', 'azores4fun'); ?></h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'menu_id'        => 'footer-menu',
                        'container'      => false,
                        'fallback_cb'    => '__return_false',
                    ));
                    ?>
                </div>

                <div class="footer-section">
                    <h3><?php esc_html_e('Contacto', 'azores4fun'); ?></h3>
                    <ul>
                        <li><?php esc_html_e('Horta, Faial, Açores', 'azores4fun'); ?></li>
                        <li><?php esc_html_e('Telefone: +351 123 456 789', 'azores4fun'); ?></li>
                        <li><?php esc_html_e('Email: info@azores4fun.com', 'azores4fun'); ?></li>
                    </ul>
                </div>
            </div>

            <!-- FAQ Section -->
            <div class="faq-section">
                <h2 class="faq-title"><?php esc_html_e('Perguntas Frequentes', 'azores4fun'); ?></h2>
                
                <div class="faq-grid">
                    <!-- FAQ Alojamento -->
                    <div class="faq-category">
                        <h3 class="faq-category-title"><?php esc_html_e('Alojamento Local', 'azores4fun'); ?></h3>
                        <div class="faq-items">
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Onde ficam os apartamentos?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Os 3 apartamentos estão localizados no centro da cidade da Horta, próximos de restaurantes, supermercados e serviços.', 'azores4fun'); ?></p>
                            </div>
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Qual o check-in e check-out?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Check-in a partir das 15h00 e check-out até às 11h00. Horários flexíveis mediante disponibilidade.', 'azores4fun'); ?></p>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Animação -->
                    <div class="faq-category">
                        <h3 class="faq-category-title"><?php esc_html_e('Animação Turística', 'azores4fun'); ?></h3>
                        <div class="faq-items">
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Preciso de experiência prévia?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Não! Todas as atividades incluem briefing e equipamento. Adequado para iniciantes e experientes.', 'azores4fun'); ?></p>
                            </div>
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Qual a idade mínima?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Lasertag/Paintball: 8+ anos. SUP/Kayak: 12+ anos. Tours: todas as idades.', 'azores4fun'); ?></p>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Eventos -->
                    <div class="faq-category">
                        <h3 class="faq-category-title"><?php esc_html_e('Eventos', 'azores4fun'); ?></h3>
                        <div class="faq-items">
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Fazem eventos corporativos?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Sim! Organizamos teambuilding, eventos corporativos e festas personalizadas para grupos.', 'azores4fun'); ?></p>
                            </div>
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Qual a antecedência para reservar?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Recomendamos 2 semanas de antecedência, mas contacte-nos para disponibilidade imediata.', 'azores4fun'); ?></p>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Tatuagem -->
                    <div class="faq-category">
                        <h3 class="faq-category-title"><?php esc_html_e('Tatuagem & Piercings', 'azores4fun'); ?></h3>
                        <div class="faq-items">
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Preciso marcar com antecedência?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Sim, recomendamos marcação prévia. Contacte-nos para consulta e orçamento.', 'azores4fun'); ?></p>
                            </div>
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Posso levar o meu desenho?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Claro! Os nossos artistas trabalham com desenhos personalizados ou criam designs originais.', 'azores4fun'); ?></p>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Imobiliária -->
                    <div class="faq-category">
                        <h3 class="faq-category-title"><?php esc_html_e('Gestão Imobiliária', 'azores4fun'); ?></h3>
                        <div class="faq-items">
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Que serviços oferecem?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Arrendamento de longa duração, manutenção de propriedades e serviços de construção.', 'azores4fun'); ?></p>
                            </div>
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Gerem propriedades turísticas?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Sim, gerimos empreendimentos turísticos e propriedades particulares na ilha do Faial.', 'azores4fun'); ?></p>
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Loja -->
                    <div class="faq-category">
                        <h3 class="faq-category-title"><?php esc_html_e('Loja', 'azores4fun'); ?></h3>
                        <div class="faq-items">
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Que produtos vendem?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Produtos regionais dos Açores, merchandising Azores4fun e serviços de turismo local.', 'azores4fun'); ?></p>
                            </div>
                            <div class="faq-item">
                                <h4 class="faq-question"><?php esc_html_e('Qual o horário da loja?', 'azores4fun'); ?></h4>
                                <p class="faq-answer"><?php esc_html_e('Segunda a Sábado: 9h-19h. Contacte-nos para horários especiais.', 'azores4fun'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('Todos os direitos reservados.', 'azores4fun'); ?></p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
