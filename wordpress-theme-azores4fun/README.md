# Azores4fun - Template WordPress

Template WordPress personalizado para o site Azores4fun, desenvolvido com base no design original da aplicação React.

## 📋 Características

- Design moderno e responsivo
- Otimizado para SEO
- Custom Post Types para Serviços, Atividades e FAQs
- Sistema de customização via WordPress Customizer
- Animações suaves e interações elegantes
- Menu de navegação responsivo
- Seções: Hero, Serviços, Atividades, FAQs, CTA
- Totalmente traduzível

## 🚀 Instalação

### Passo 1: Upload do Tema

1. Faça download de todos os arquivos do tema
2. Comprima a pasta `wordpress-theme-azores4fun` em formato ZIP
3. No painel do WordPress, vá para **Aparência > Temas**
4. Clique em **Adicionar Novo** e depois em **Enviar Tema**
5. Selecione o arquivo ZIP e clique em **Instalar Agora**
6. Após a instalação, clique em **Ativar**

### Passo 2: Configurar a Página Inicial

1. Crie uma nova página chamada "Início" ou "Home"
2. No editor da página, selecione o template **Front Page (Home)** no sidebar direito
3. Publique a página
4. Vá para **Configurações > Leitura**
5. Em "A sua página inicial mostra", selecione "Uma página estática"
6. Escolha a página que acabou de criar como "Página inicial"
7. Salve as alterações

### Passo 3: Configurar os Menus

1. Vá para **Aparência > Menus**
2. Crie um novo menu chamado "Menu Principal"
3. Adicione os links para as páginas/categorias que deseja
4. Marque a opção **Primary Menu** em "Localização do tema"
5. Salve o menu

### Passo 4: Configurar o Logo

1. Vá para **Aparência > Personalizar > Identidade do Site**
2. Clique em **Selecionar Logo**
3. Faça upload do logo do Azores4fun
4. Ajuste o tamanho conforme necessário
5. Publique as alterações

### Passo 5: Personalizar Hero Section

1. Vá para **Aparência > Personalizar > Hero Section**
2. Configure:
   - **Hero Title**: Título principal da hero section
   - **Hero Subtitle**: Subtítulo/descrição
   - **Hero Background Image**: Imagem de fundo da hero section
3. Publique as alterações

### Passo 6: Configurar Informações de Contacto

1. Vá para **Aparência > Personalizar > Contact Information**
2. Configure:
   - **Phone Number**: Número de telefone
   - **Email Address**: Email de contacto
   - **Address**: Endereço físico
3. Publique as alterações

## 📝 Adicionar Conteúdo

### Adicionar Serviços

1. No painel WordPress, vá para **Serviços > Adicionar Novo**
2. Preencha:
   - **Título**: Nome do serviço (ex: "Alojamento Local")
   - **Conteúdo**: Descrição detalhada do serviço
   - **Imagem Destacada**: Imagem representativa do serviço
3. Publique o serviço

### Adicionar Atividades

1. Vá para **Atividades > Adicionar Nova**
2. Preencha:
   - **Título**: Nome da atividade (ex: "Lasertag")
   - **Conteúdo**: Descrição da atividade
   - **Imagem Destacada**: Foto da atividade
3. Publique a atividade

### Adicionar FAQs

1. Vá para **FAQs > Categorias** e crie categorias (ex: "Alojamento", "Atividades", etc.)
2. Depois vá para **FAQs > Adicionar Nova**
3. Preencha:
   - **Título**: A pergunta (ex: "Qual o horário de check-in?")
   - **Conteúdo**: A resposta
   - **Categoria**: Selecione a categoria apropriada
4. Publique a FAQ

## 🔧 Plugins Recomendados

Para melhor funcionalidade, recomendamos instalar os seguintes plugins:

### Essenciais:
- **Advanced Custom Fields (ACF)** - Para campos personalizados avançados
- **Contact Form 7** - Para formulários de contacto
- **Yoast SEO** - Para otimização SEO

### Opcionais:
- **WPML** ou **Polylang** - Para site multilíngue (PT/EN)
- **WP Rocket** - Para cache e performance
- **Smush** - Para otimização de imagens
- **Wordfence Security** - Para segurança

## 📱 Configuração Avançada com ACF

Se instalar o plugin Advanced Custom Fields, pode adicionar campos personalizados:

### Para Serviços:
1. Vá para **ACF > Field Groups > Add New**
2. Crie grupo "Service Fields" e adicione:
   - **service_icon**: Campo de texto para código SVG do ícone
   - **service_link**: URL para página externa (se aplicável)

### Para Atividades:
1. Crie grupo "Activity Fields" e adicione:
   - **activity_highlights**: Repeater field com:
     - **text**: Texto do highlight
   - **activity_price**: Preço da atividade

## 🎨 Personalização de Cores

As cores podem ser personalizadas editando o arquivo `style.css` na seção `:root`:

```css
:root {
  --color-primary: hsl(192, 100%, 40%);      /* Cor principal (azul) */
  --color-background: hsl(210, 4%, 98%);     /* Cor de fundo */
  --color-foreground: hsl(210, 6%, 12%);     /* Cor do texto */
  /* ... outras cores ... */
}
```

## 📂 Estrutura de Arquivos

```
wordpress-theme-azores4fun/
├── style.css              # Estilos principais do tema
├── functions.php          # Funções e configurações do tema
├── index.php              # Template padrão
├── front-page.php         # Template da página inicial
├── single.php             # Template para posts individuais
├── header.php             # Header do site
├── footer.php             # Footer do site
├── js/
│   └── main.js           # JavaScript principal
├── css/                   # (opcional) CSS adicional
├── images/               # Imagens do tema
└── README.md             # Este arquivo
```

## 🐛 Resolução de Problemas

### O menu não aparece
- Verifique se criou e atribuiu o menu em **Aparência > Menus**

### As imagens não aparecem
- Verifique se fez upload das imagens destacadas em cada post
- Certifique-se que a pasta `images/` tem permissões corretas

### Os serviços não aparecem na home
- Verifique se publicou os serviços (não apenas salvou como rascunho)
- Verifique se o post type "service" está ativo

### O layout está quebrado
- Limpe o cache do navegador
- Se usa plugin de cache, limpe o cache do WordPress

## 📞 Suporte

Para questões técnicas ou suporte, contacte:
- Email: info@azores4fun.com
- Telefone: +351 934 993 770

## 📄 Licença

Este tema foi desenvolvido especificamente para Azores4fun. Todos os direitos reservados.

---

**Desenvolvido para Azores4fun** 🌊
Versão 1.0 - Novembro 2024
