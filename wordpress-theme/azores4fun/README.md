# Tema WordPress Azores4fun

Tema moderno e responsivo para a Azores4fun - A Sua Aventura Completa nos Açores.

## Características

- **Design Moderno**: Interface limpa e profissional com foco na experiência do utilizador
- **100% Responsivo**: Otimizado para todos os dispositivos (desktop, tablet, mobile)
- **6 Áreas de Negócio**: 
  - Alojamento Local
  - Animação Turística
  - Eventos
  - Tatuagem & Piercings
  - Gestão Imobiliária
  - Loja
- **Personalizável**: Opções de personalização via WordPress Customizer
- **SEO Otimizado**: Estrutura HTML semântica e otimizada para motores de busca
- **Performance**: Código otimizado e assets minificados

## Instalação

1. Faça download do tema
2. No painel de administração do WordPress, vá a **Aparência > Temas**
3. Clique em **Adicionar Novo** > **Carregar Tema**
4. Selecione o arquivo ZIP do tema
5. Clique em **Instalar Agora**
6. Após a instalação, clique em **Ativar**

## Configuração Inicial

### 1. Configurar Menus

Vá a **Aparência > Menus**:
- Crie um menu para "Menu Principal"
- Adicione as páginas: Alojamento, Animação Turística, Eventos, Tatuagem, Imobiliária, Loja
- Atribua ao local "Menu Principal"

### 2. Personalizar Hero Section

Vá a **Aparência > Personalizar > Secção Hero**:
- Carregue uma imagem de fundo (recomendado: 1920x1080px)
- Defina o título principal
- Adicione subtítulo e descrição

### 3. Configurar Informações de Contacto

Vá a **Aparência > Personalizar > Informações de Contacto**:
- Adicione telefone, email e morada da empresa

### 4. Adicionar Conteúdo

Crie posts na categoria "servicos" para cada área de negócio:
- Título do serviço
- Descrição completa
- Imagem destacada (recomendado: 800x600px)

## Estrutura de Ficheiros

```
azores4fun/
├── style.css                 # Estilos principais do tema
├── functions.php            # Funções e configurações do tema
├── header.php              # Cabeçalho do site
├── footer.php              # Rodapé do site
├── index.php               # Template principal
├── front-page.php          # Template da página inicial
├── inc/
│   ├── template-tags.php   # Tags personalizadas
│   └── customizer.php      # Configurações do Customizer
├── template-parts/
│   └── content.php         # Template de post
└── assets/
    ├── css/                # Estilos adicionais
    ├── js/                 # Scripts JavaScript
    │   ├── main.js        # Script principal
    │   └── customizer.js  # Preview do Customizer
    └── images/            # Imagens do tema
```

## Personalização Avançada

### Cores

As cores principais estão definidas em `style.css` usando variáveis CSS:

```css
:root {
  --color-primary: hsl(204, 88%, 42%);
  --color-background: hsl(210, 4%, 98%);
  --color-foreground: hsl(210, 6%, 12%);
}
```

### Fontes

O tema utiliza:
- **Inter** - Corpo de texto
- **Montserrat** - Títulos e destaques

As fontes são carregadas via Google Fonts em `functions.php`.

## Widgets

O tema suporta as seguintes áreas de widgets:

- **Sidebar Principal**: Área lateral para páginas de conteúdo
- **Rodapé 1, 2, 3**: Três colunas no rodapé

## Requisitos

- WordPress 6.0 ou superior
- PHP 7.4 ou superior
- MySQL 5.7 ou superior

## Suporte a Navegadores

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## Recomendações de Plugins

- **Contact Form 7**: Para formulários de contacto
- **Yoast SEO**: Para otimização SEO
- **WP Super Cache**: Para cache e performance
- **Smush**: Para otimização de imagens

## Créditos

- Desenvolvido para Azores4fun
- Fonts: Google Fonts (Inter, Montserrat)
- Ícones: Inline SVG

## Licença

Este tema está licenciado sob GPL v2 ou posterior.

## Suporte

Para questões ou suporte, contacte: info@azores4fun.com
