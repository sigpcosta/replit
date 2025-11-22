# 🚀 Guia de Instalação - Azores4fun 2024

## Instalação Rápida (3 minutos)

### 📦 Passo 1: Carregar Tema

1. Faça login no WordPress Admin: `https://seusite.com/wp-admin`
2. Vá a **Aparência → Temas**
3. Clique em **Adicionar Novo**
4. Clique em **Carregar Tema**
5. Selecione `azores4fun-2024.tar.gz`
6. Clique em **Instalar Agora**
7. Aguarde a instalação (pode demorar devido às imagens)
8. Clique em **Ativar**

✅ **Tema Instalado!**

---

## ⚙️ Configuração Essencial (5 minutos)

### 🔗 Passo 2: Configurar Menu

1. Vá a **Aparência → Menus**
2. Clique em **criar novo menu**
3. Nome do menu: `Menu Principal`
4. Adicione **Links Personalizados**:

```
Alojamento       → #alojamento
Animação         → #animacao
Eventos          → #eventos
Tatuagem         → #tatuagem
Imobiliária      → #imobiliaria
Loja             → #loja
```

5. Marque ✅ **Menu Principal** em "Localizações do Menu"
6. Clique em **Guardar Menu**

### 🎨 Passo 3: Personalizar Hero

1. Vá a **Aparência → Personalizar**
2. Abra **Hero Section**
3. Preencha:
   - **Título:** `Azores4fun`
   - **Subtítulo:** `A Sua Aventura Completa nos Açores`
   - **Descrição:** `Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja`
4. **Imagem de Fundo:**
   - Clique em **Selecionar Imagem**
   - Escolha `Azores_coastline_hero_image_28cfac0a.png`
   - Clique em **Selecionar**
5. Clique em **Publicar**

### 📞 Passo 4: Informações de Contacto

1. Em **Personalizar**, abra **Informações de Contacto**
2. Preencha:
   - **Telefone:** `+351 292 123 456` (o seu número real)
   - **Email:** `info@azores4fun.com`
   - **Morada:** `Rua da Horta, Faial, Açores`
3. Clique em **Publicar**

---

## 🖼️ Configuração Avançada (Opcional)

### Personalizar Imagens dos Serviços

1. Vá a **Aparência → Personalizar → Serviços**
2. Carregue imagens personalizadas para cada serviço:
   - **Alojamento:** `Modern_Horta_apartment_interior_ec6f658d.png`
   - **Animação:** `Laser_tag_action_shot_63a174d9.png`
   - **Eventos:** `Event_tent_celebration_fca04953.png`
   - **Tatuagem:** `Tattoo_studio_workspace_bfc3187a.png`
   - **Imobiliária:** `Azorean_property_exterior_4bd4f6fb.png`
   - **Loja:** `Azores4fun_retail_shop_8204420f.png`

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Tema ativado
- [ ] Menu de navegação configurado
- [ ] Hero Section personalizado com imagem
- [ ] Informações de contacto atualizadas
- [ ] Testado em desktop
- [ ] Testado em mobile
- [ ] Todos os links funcionam
- [ ] Imagens carregam corretamente

---

## 🔧 Instalação Via FTP (Alternativa)

Se preferir instalar via FTP:

1. **Extrair Ficheiro:**
   - Descompacte `azores4fun-2024.tar.gz`
   - Terá uma pasta `azores4fun-2024`

2. **Carregar para Servidor:**
   - Conecte-se via FTP (FileZilla, Cyberduck)
   - Navegue até `/wp-content/themes/`
   - Carregue a pasta completa `azores4fun-2024`

3. **Ativar no WordPress:**
   - Aceda ao WordPress Admin
   - Vá a **Aparência → Temas**
   - Encontre **Azores4fun 2024**
   - Clique em **Ativar**

---

## 🆘 Problemas Comuns

### ❌ "Tema não aparece"
**Solução:** Verifique se a pasta está em `/wp-content/themes/azores4fun-2024`

### ❌ "Imagens não carregam"
**Solução:** 
1. Verifique permissões da pasta `/assets/images/` (775)
2. Re-carregue as imagens via FTP

### ❌ "Erro ao instalar"
**Solução:** 
1. Aumente `upload_max_filesize` no PHP (32M recomendado)
2. Aumente `post_max_size` no PHP (32M recomendado)

### ❌ "Menu não funciona"
**Solução:** Certifique-se que atribuiu o menu à localização "Menu Principal"

---

## 📧 Precisa de Ajuda?

**Email:** info@azores4fun.com  
**Telefone:** +351 123 456 789

---

**Bom trabalho! 🎉 O seu site Azores4fun está pronto!**
