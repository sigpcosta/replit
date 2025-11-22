# Tema WordPress Azores4fun 2024

**Versão:** 1.0.0  
**Autor:** Azores4fun Team  
**Licença:** GPL v2 ou posterior

---

## 🎯 Sobre o Tema

Tema WordPress moderno e profissional criado especificamente para a **Azores4fun**, apresentando as 6 áreas de negócio da empresa:

1. **Alojamento Local** - 3 apartamentos no centro da Horta
2. **Animação Turística** - Lasertag, Paintball, SUP/Kayaks, Tours
3. **Eventos** - Tendas, insufláveis, teambuilding
4. **Tatuagem & Piercings** - Estúdio profissional
5. **Gestão Imobiliária** - Arrendamento e manutenção
6. **Loja** - Venda de produtos turísticos e merchandising

---

## ✨ Características

### Design & UX
- ✅ **100% Responsivo** - Perfeito em mobile, tablet e desktop
- ✅ **Design Moderno** - Interface limpa e profissional
- ✅ **Smooth Scroll** - Navegação suave entre secções
- ✅ **Animações Subtis** - Efeitos de fade-in e hover
- ✅ **Hero Dinâmico** - Imagem de fundo personalizável

### Funcionalidades
- ✅ **6 Cards de Serviços** - Grid responsivo 3 colunas
- ✅ **Customizer WordPress** - Personalização visual fácil
- ✅ **Menus Personalizados** - Header e footer
- ✅ **SEO Otimizado** - Estrutura HTML semântica
- ✅ **Performance** - Código otimizado e leve
- ✅ **Acessibilidade** - ARIA labels e navegação por teclado

### Técnico
- ✅ **WordPress 6.0+** compatível
- ✅ **PHP 7.4+** compatível
- ✅ **Google Fonts** - Inter & Montserrat
- ✅ **Lazy Loading** - Imagens carregadas sob demanda
- ✅ **Live Preview** - Customizer com preview em tempo real

---

## 📦 Instalação

### Método 1: WordPress Admin (Recomendado)

1. Aceda ao WordPress: `wp-admin`
2. Vá a **Aparência → Temas**
3. Clique em **Adicionar Novo → Carregar Tema**
4. Selecione o ficheiro `.tar.gz`
5. Clique em **Instalar Agora**
6. Clique em **Ativar**

### Método 2: FTP/cPanel

1. Extraia o arquivo `.tar.gz`
2. Carregue a pasta `azores4fun-2024` para `/wp-content/themes/`
3. Ative o tema em **Aparência → Temas**

---

## ⚙️ Configuração Inicial

### 1. Menu de Navegação

**Aparência → Menus**

Crie um menu "Menu Principal" com os seguintes links:

| Texto | URL |
|-------|-----|
| Alojamento | `#alojamento` |
| Animação | `#animacao` |
| Eventos | `#eventos` |
| Tatuagem | `#tatuagem` |
| Imobiliária | `#imobiliaria` |
| Loja | `#loja` |

Atribua à localização **Menu Principal**.

### 2. Personalizar Hero Section

**Aparência → Personalizar → Hero Section**

- **Título:** `Azores4fun`
- **Subtítulo:** `A Sua Aventura Completa nos Açores`
- **Descrição:** `Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja`
- **Imagem de Fundo:** Carregue uma imagem 1920x1080px

### 3. Imagens dos Serviços (Opcional)

**Aparência → Personalizar → Serviços**

Carregue imagens personalizadas para cada serviço (800x600px recomendado).

### 4. Informações de Contacto

**Aparência → Personalizar → Informações de Contacto**

- **Telefone:** `+351 123 456 789`
- **Email:** `info@azores4fun.com`
- **Morada:** `Horta, Faial, Açores`

---

## 🖼️ Imagens Incluídas

O tema inclui **11 imagens profissionais** geradas com IA:

| Imagem | Uso Sugerido |
|--------|--------------|
| `Azores_coastline_hero_image_28cfac0a.png` | Hero Background |
| `Modern_Horta_apartment_interior_ec6f658d.png` | Alojamento Local |
| `Laser_tag_action_shot_63a174d9.png` | Lasertag |
| `Event_tent_celebration_fca04953.png` | Eventos |
| `Tattoo_studio_workspace_bfc3187a.png` | Tatuagem |
| `Azorean_property_exterior_4bd4f6fb.png` | Gestão Imobiliária |
| `Azores4fun_retail_shop_8204420f.png` | Loja |
| `SUP_paddleboarding_Azores_ocean_960e2ee9.png` | SUP/Kayak |
| `Electric_van_island_tour_9d32feea.png` | Tours |
| `Teambuilding_outdoor_activity_99e77711.png` | Teambuilding |
| `Paintball_action_gameplay_8c01711a.png` | Paintball |

**Localização:** `/assets/images/`

---

## 📁 Estrutura de Ficheiros

```
azores4fun-2024/
├── style.css                    # Estilos principais
├── functions.php                # Funções do tema
├── header.php                   # Cabeçalho
├── footer.php                   # Rodapé
├── index.php                    # Template padrão
├── front-page.php               # Página inicial
├── screenshot.png               # Captura de ecrã do tema
├── README.md                    # Este ficheiro
│
├── inc/
│   └── customizer.php           # Configurações do Customizer
│
├── template-parts/
│   ├── content.php              # Template de post
│   └── content-none.php         # Sem resultados
│
└── assets/
    ├── css/
    ├── js/
    │   ├── main.js              # JavaScript principal
    │   └── customizer.js        # Preview do Customizer
    └── images/                  # 11 imagens incluídas
```

---

## 🎨 Personalização

### Cores

As cores principais estão definidas em `style.css` (linha 27+):

```css
:root {
  --primary: hsl(204, 88%, 42%);        /* Azul dos Açores */
  --background: hsl(210, 4%, 98%);      /* Fundo claro */
  --foreground: hsl(210, 6%, 12%);      /* Texto escuro */
  --card: hsl(0, 0%, 100%);             /* Cards brancos */
}
```

### Tipografia

- **Headings:** Montserrat (600, 700, 800)
- **Body:** Inter (400, 500, 600)

Carregadas automaticamente do Google Fonts.

### Espaçamentos

Sistema de espaçamento consistente:

```css
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

---

## 🔌 Plugins Recomendados

| Plugin | Propósito |
|--------|-----------|
| **Contact Form 7** | Formulários de contacto |
| **Yoast SEO** | Otimização SEO |
| **WP Super Cache** | Performance e cache |
| **Smush** | Otimização de imagens |
| **Wordfence** | Segurança |

---

## 🌐 Suporte a Navegadores

| Navegador | Suporte |
|-----------|---------|
| Chrome | ✅ Últimas 2 versões |
| Firefox | ✅ Últimas 2 versões |
| Safari | ✅ Últimas 2 versões |
| Edge | ✅ Últimas 2 versões |
| IE 11 | ❌ Não suportado |

---

## 📝 Requisitos Mínimos

- **WordPress:** 6.0 ou superior
- **PHP:** 7.4 ou superior
- **MySQL:** 5.7 ou superior

---

## 🐛 Resolução de Problemas

### Imagens não aparecem

1. Verifique se a pasta `/assets/images/` tem as imagens
2. Teste em **Aparência → Personalizar → Serviços**

### Menu não funciona

1. Crie o menu em **Aparência → Menus**
2. Atribua à localização "Menu Principal"

### Hero Section vazia

1. Configure em **Aparência → Personalizar → Hero Section**
2. Carregue uma imagem de fundo

---

## 🚀 Próximas Funcionalidades (Roadmap)

- [ ] Sistema de reservas integrado
- [ ] Galeria de imagens por serviço
- [ ] Formulário de contacto personalizado
- [ ] Integração redes sociais
- [ ] Multilíngue (PT, EN, ES)
- [ ] Área de cliente

---

## 📞 Suporte

**Email:** info@azores4fun.com  
**Telefone:** +351 123 456 789  
**Website:** https://azores4fun.com

---

## 📄 Licença

Este tema está licenciado sob a **GNU General Public License v2 ou posterior**.

---

## 🙏 Créditos

- **Desenvolvimento:** Azores4fun Team
- **Fonts:** Google Fonts (Inter, Montserrat)
- **Imagens:** Geradas com IA
- **Ícones:** SVG inline personalizados

---

**Desenvolvido com ❤️ para Azores4fun**

*Versão 1.0.0 - Novembro 2024*
