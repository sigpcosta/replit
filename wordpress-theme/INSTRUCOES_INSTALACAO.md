# Instruções de Instalação - Tema Azores4fun v2.0

## 📦 Ficheiro do Tema
**Nome:** `azores4fun-theme-v2.tar.gz`  
**Versão:** 2.0.0  
**Data:** Novembro 2024

---

## 🚀 Instalação Rápida

### Método 1: Via Painel WordPress (Recomendado)

1. **Aceda ao seu WordPress**
   - Faça login no painel de administração
   - URL: `https://seusite.com/wp-admin`

2. **Navegue até Temas**
   - No menu lateral, vá a **Aparência → Temas**

3. **Adicione o Novo Tema**
   - Clique no botão **Adicionar Novo** (topo da página)
   - Clique em **Carregar Tema**

4. **Carregue o Ficheiro**
   - Clique em **Escolher ficheiro**
   - Selecione `azores4fun-theme-v2.tar.gz`
   - Clique em **Instalar Agora**

5. **Ative o Tema**
   - Após a instalação, clique em **Ativar**
   - O tema está agora ativo! 🎉

---

### Método 2: Via FTP/cPanel

1. **Extraia o Ficheiro**
   - Extraia `azores4fun-theme-v2.tar.gz`
   - Terá uma pasta chamada `azores4fun`

2. **Aceda ao Servidor**
   - Via FTP (FileZilla, Cyberduck, etc.) ou cPanel File Manager
   - Navegue até `/wp-content/themes/`

3. **Carregue a Pasta**
   - Carregue a pasta completa `azores4fun` para `/wp-content/themes/`
   - Aguarde até todos os ficheiros serem carregados (incluindo as 11 imagens)

4. **Ative no WordPress**
   - Vá ao painel WordPress: **Aparência → Temas**
   - Encontre o tema **Azores4fun**
   - Clique em **Ativar**

---

## ⚙️ Configuração Inicial (Passo a Passo)

### 1️⃣ Configurar Menu de Navegação

1. Vá a **Aparência → Menus**
2. Crie um novo menu:
   - Nome: "Menu Principal"
   - Clique em **Criar Menu**
3. Adicione os seguintes **Links Personalizados**:
   
   | Texto do Link | URL |
   |---------------|-----|
   | Alojamento | `#alojamento` |
   | Animação Turística | `#animacao` |
   | Eventos | `#eventos` |
   | Tatuagem | `#tatuagem` |
   | Imobiliária | `#imobiliaria` |
   | Loja | `#loja` |

4. Marque a caixa **Menu Principal** em "Localizações do Menu"
5. Clique em **Guardar Menu**

---

### 2️⃣ Personalizar Hero Section

1. Vá a **Aparência → Personalizar**
2. Abra a secção **Hero Section**
3. Configure:
   - **Título:** `Azores4fun`
   - **Subtítulo:** `A Sua Aventura Completa nos Açores`
   - **Descrição:** `Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja`
   - **Imagem de Fundo:** Carregue uma imagem panorâmica dos Açores (já incluída: `Azores_coastline_hero_image_28cfac0a.png`)

4. Clique em **Publicar**

---

### 3️⃣ Adicionar Serviços (Opcional)

O tema já vem com **6 serviços pré-definidos**. Se quiser personalizá-los:

1. Vá a **Posts → Categorias**
2. Crie uma nova categoria: `servicos`
3. Crie 6 novos posts, um para cada serviço:

**Exemplo: Post "Alojamento Local"**
- Título: `Alojamento Local`
- Categoria: `servicos`
- Conteúdo: Descrição completa do serviço
- Imagem Destacada: Carregue `Modern_Horta_apartment_interior_ec6f658d.png`

Repita para os outros 5 serviços usando as imagens incluídas.

---

### 4️⃣ Configurar Informações de Contacto

1. Vá a **Aparência → Personalizar → Informações de Contacto**
2. Preencha:
   - **Telefone:** `+351 123 456 789`
   - **Email:** `info@azores4fun.com`
   - **Morada:** `Rua da Horta, 123, 9900-000 Horta, Faial`
3. Clique em **Publicar**

---

## 🖼️ Imagens Incluídas

O tema inclui **11 imagens profissionais** prontas a usar:

| Imagem | Uso Recomendado |
|--------|-----------------|
| `Azores_coastline_hero_image_28cfac0a.png` | Hero Background |
| `Modern_Horta_apartment_interior_ec6f658d.png` | Alojamento Local |
| `Laser_tag_action_shot_63a174d9.png` | Lasertag |
| `Event_tent_celebration_fca04953.png` | Eventos |
| `Tattoo_studio_workspace_bfc3187a.png` | Tatuagem |
| `Azorean_property_exterior_4bd4f6fb.png` | Gestão Imobiliária |
| `Azores4fun_retail_shop_8204420f.png` | Loja |
| `SUP_paddleboarding_Azores_ocean_960e2ee9.png` | Desportos Aquáticos |
| `Electric_van_island_tour_9d32feea.png` | Tours |
| `Teambuilding_outdoor_activity_99e77711.png` | Teambuilding |
| `Paintball_action_gameplay_8c01711a.png` | Paintball |

**Localização:** `/wp-content/themes/azores4fun/assets/images/`

---

## 🎨 Personalização de Cores

Para alterar as cores do tema:

1. Edite o ficheiro `style.css` (linha 27+)
2. Modifique as variáveis CSS:

```css
:root {
  --color-primary: hsl(204, 88%, 42%);      /* Azul Principal */
  --color-background: hsl(210, 4%, 98%);    /* Fundo Claro */
  --color-foreground: hsl(210, 6%, 12%);    /* Texto Escuro */
}
```

---

## 🔧 Plugins Recomendados

Instale estes plugins para funcionalidade extra:

1. **Contact Form 7** - Formulários de contacto
2. **Yoast SEO** - Otimização para motores de busca
3. **WP Super Cache** - Melhorar performance
4. **Smush** - Otimizar imagens

---

## 📱 Funcionalidades do Tema

✅ **Design 100% Responsivo** - Funciona perfeitamente em mobile, tablet e desktop  
✅ **6 Áreas de Negócio** - Cada serviço com secção dedicada  
✅ **SEO Otimizado** - Meta tags e estrutura semântica  
✅ **Performance** - Código otimizado e leve  
✅ **Imagens Profissionais** - 11 imagens geradas com IA incluídas  
✅ **Fácil Personalização** - Via WordPress Customizer  

---

## 🆘 Suporte

**Problemas com a instalação?**

📧 Email: info@azores4fun.com  
📞 Telefone: +351 123 456 789

---

## 📝 Notas de Versão

**v2.0.0 (Novembro 2024)**
- ✨ Adicionada 6ª área de negócio (Loja)
- 🖼️ 11 imagens profissionais incluídas
- 🎨 Design atualizado e modernizado
- 🚀 Performance melhorada

**v1.0.0 (Versão Inicial)**
- 🎉 Lançamento inicial do tema

---

## ✅ Checklist Final

Depois de instalar, verifique:

- [ ] Tema ativado com sucesso
- [ ] Menu de navegação configurado
- [ ] Hero Section personalizado
- [ ] Imagens visíveis na página
- [ ] Informações de contacto atualizadas
- [ ] Testado em mobile e desktop
- [ ] SEO básico configurado

---

**Bem-vindo ao Tema Azores4fun! 🎉**
