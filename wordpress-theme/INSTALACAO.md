# Guia de Instalação do Tema Azores4fun WordPress

## 📦 Ficheiros Incluídos

- `azores4fun-theme.tar.gz` - Tema WordPress completo e pronto para instalação

## 🚀 Instalação Rápida

### Opção 1: Instalação via WordPress Admin

1. Faça login no painel de administração do WordPress
2. Vá a **Aparência > Temas**
3. Clique em **Adicionar Novo**
4. Clique em **Carregar Tema**
5. Escolha o ficheiro `azores4fun-theme.tar.gz`
6. Clique em **Instalar Agora**
7. Após instalação, clique em **Ativar**

### Opção 2: Instalação Manual via FTP

1. Descompacte o ficheiro `azores4fun-theme.tar.gz`
2. Conecte-se ao seu servidor via FTP
3. Navegue até `/wp-content/themes/`
4. Faça upload da pasta `azores4fun`
5. No WordPress Admin, vá a **Aparência > Temas**
6. Ative o tema "Azores4fun"

## 📸 Adicionar Imagens ao Tema

### Imagens Geradas Disponíveis

As seguintes imagens foram criadas para o tema (disponíveis em `attached_assets/generated_images/`):

1. **Hero (Página Inicial)**:
   - `Azores_coastline_hero_image_28cfac0a.png` - Imagem principal de fundo

2. **Serviços**:
   - `Modern_Horta_apartment_interior_ec6f658d.png` - Alojamento Local
   - `Laser_tag_action_shot_63a174d9.png` - Animação Turística (Lasertag)
   - `Event_tent_celebration_fca04953.png` - Eventos
   - `Tattoo_studio_workspace_bfc3187a.png` - Tatuagem & Piercings
   - `Azorean_property_exterior_4bd4f6fb.png` - Gestão Imobiliária
   - `Azores4fun_retail_shop_8204420f.png` - Loja

3. **Atividades Destacadas**:
   - `SUP_paddleboarding_Azores_ocean_960e2ee9.png` - Desportos Aquáticos
   - `Electric_van_island_tour_9d32feea.png` - Tours Personalizados
   - `Teambuilding_outdoor_activity_99e77711.png` - Eventos Corporativos
   - `Paintball_action_gameplay_8c01711a.png` - Paintball

### Como Adicionar as Imagens

#### Método 1: Via WordPress Customizer (Imagem Hero)

1. No WordPress Admin, vá a **Aparência > Personalizar**
2. Clique em **Secção Hero**
3. Em "Imagem de Fundo Hero", clique em **Selecionar Imagem**
4. Faça upload de `Azores_coastline_hero_image_28cfac0a.png`
5. Clique em **Publicar** para guardar

#### Método 2: Criar Posts de Serviços

Para que os serviços apareçam com as imagens corretas:

1. Vá a **Posts > Adicionar Novo**
2. Crie um post para cada serviço com os seguintes dados:

**Post 1 - Alojamento Local**
- Título: `Alojamento Local`
- Conteúdo: Descrição detalhada dos 3 apartamentos
- Categoria: Crie uma categoria chamada "servicos" e atribua
- Imagem Destacada: Upload `Modern_Horta_apartment_interior_ec6f658d.png`

**Post 2 - Animação Turística**
- Título: `Animação Turística`
- Conteúdo: Descrição das atividades (Lasertag, Paintball, SUPs, Kayaks, etc.)
- Categoria: `servicos`
- Imagem Destacada: Upload `Laser_tag_action_shot_63a174d9.png`

**Post 3 - Eventos**
- Título: `Eventos`
- Conteúdo: Descrição de tendas, insufláveis, teambuilding
- Categoria: `servicos`
- Imagem Destacada: Upload `Event_tent_celebration_fca04953.png`

**Post 4 - Tatuagem & Piercings**
- Título: `Tatuagem & Piercings`
- Conteúdo: Descrição do estúdio
- Categoria: `servicos`
- Imagem Destacada: Upload `Tattoo_studio_workspace_bfc3187a.png`

**Post 5 - Gestão Imobiliária**
- Título: `Gestão Imobiliária`
- Conteúdo: Descrição dos serviços de arrendamento e manutenção
- Categoria: `servicos`
- Imagem Destacada: Upload `Azorean_property_exterior_4bd4f6fb.png`

**Post 6 - Loja**
- Título: `Loja`
- Conteúdo: Descrição da loja e produtos
- Categoria: `servicos`
- Imagem Destacada: Upload `Azores4fun_retail_shop_8204420f.png`

#### Método 3: Upload Manual de Imagens para o Tema

1. Conecte-se via FTP ao servidor
2. Navegue até `/wp-content/themes/azores4fun/assets/images/`
3. Faça upload de todas as imagens geradas
4. Renomeie conforme necessário:
   - `hero-default.jpg` → Imagem hero principal
   - `placeholder.jpg` → Imagem placeholder genérica

## ⚙️ Configuração Inicial

### 1. Criar Menu de Navegação

1. Vá a **Aparência > Menus**
2. Crie um novo menu chamado "Menu Principal"
3. Adicione links personalizados:
   - Alojamento (`#alojamento`)
   - Animação Turística (`#animacao`)
   - Eventos (`#eventos`)
   - Tatuagem (`#tatuagem`)
   - Imobiliária (`#imobiliaria`)
   - Loja (`#loja`)
4. Atribua ao local: **Menu Principal**
5. Clique em **Guardar Menu**

### 2. Personalizar Hero Section

1. **Aparência > Personalizar > Secção Hero**
2. Configure:
   - **Título Hero**: `Azores4fun`
   - **Subtítulo**: `A Sua Aventura Completa nos Açores`
   - **Descrição**: `Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja`

### 3. Configurar Contactos

1. **Aparência > Personalizar > Informações de Contacto**
2. Configure:
   - **Telefone**: `+351 123 456 789` (ajuste para o seu número real)
   - **Email**: `info@azores4fun.com` (ajuste para o seu email real)
   - **Morada**: `Rua da Horta, 123, 9900-000 Horta, Faial` (ajuste conforme necessário)

### 4. Configurar SEO

1. Vá a **Definições > Geral**
2. Configure:
   - **Título do Site**: `Azores4fun`
   - **Slogan**: `A Sua Aventura Completa nos Açores`

## 🎨 Personalização Avançada

### Alterar Cores

Edite o ficheiro `style.css` e modifique as variáveis CSS:

```css
:root {
  --color-primary: hsl(204, 88%, 42%);     /* Azul principal */
  --color-background: hsl(210, 4%, 98%);   /* Fundo claro */
  --color-foreground: hsl(210, 6%, 12%);   /* Texto escuro */
}
```

### Alterar Fontes

O tema usa Google Fonts (Inter e Montserrat). Para alterar, edite `functions.php`:

```php
wp_enqueue_style(
    'azores4fun-fonts',
    'https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap',
    array(),
    null
);
```

## 📱 Widgets de Rodapé

1. Vá a **Aparência > Widgets**
2. Configure as áreas:
   - **Rodapé 1**: Adicione widget de texto com informações da empresa
   - **Rodapé 2**: Adicione menu de navegação ou links de serviços
   - **Rodapé 3**: Adicione informações de contacto ou horários

## ✅ Checklist Pós-Instalação

- [ ] Tema instalado e ativado
- [ ] Imagem hero carregada
- [ ] 6 posts de serviços criados com imagens
- [ ] Menu de navegação configurado
- [ ] Informações de contacto atualizadas
- [ ] SEO básico configurado
- [ ] Testado em dispositivos móveis
- [ ] Performance verificada

## 🔧 Resolução de Problemas

### As imagens não aparecem
- Verifique permissões da pasta `/wp-content/uploads/`
- Certifique-se que as imagens foram carregadas corretamente
- Limpe o cache do navegador

### Menu mobile não funciona
- Verifique se o jQuery está carregado
- Verifique o console do navegador para erros JavaScript
- Limpe o cache do site

### Estilos não aplicados
- Limpe o cache do WordPress
- Verifique se não há conflitos com plugins
- Ative o modo de debug para ver erros

## 📞 Suporte

Para questões técnicas ou suporte adicional:
- Email: info@azores4fun.com
- Documentação completa: Ver `README.md` incluído no tema

## 📄 Requisitos do Sistema

- WordPress 6.0+
- PHP 7.4+
- MySQL 5.7+
- Recomendado: HTTPS ativo

---

**Desenvolvido especialmente para Azores4fun**
Versão 1.0.0 | Novembro 2024
