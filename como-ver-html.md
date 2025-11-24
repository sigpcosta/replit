# 🌐 Como Ver o HTML das Páginas Azores4fun

## MÉTODO 1: Ver HTML no Browser (RECOMENDADO) 👀

### Opção A: DevTools (Ferramentas de Programador)

1. **Abre o site** no browser (Chrome, Firefox, Edge, Safari)
2. **Clica com botão direito** em qualquer parte da página
3. Seleciona **"Inspecionar"** ou **"Inspecionar Elemento"**
4. Vês o HTML renderizado na tab "Elements" ou "Inspector"

**Atalhos de Teclado:**
- `F12` - Abre DevTools
- `Ctrl + Shift + I` (Windows/Linux) - Abre DevTools  
- `Cmd + Option + I` (Mac) - Abre DevTools
- `Ctrl + U` (Windows/Linux) - Ver código-fonte completo
- `Cmd + U` (Mac) - Ver código-fonte completo

### Opção B: Ver Código-Fonte Completo

1. Abre o site no browser
2. Clica com botão direito → **"Ver código-fonte da página"**
3. Ou usa atalho `Ctrl + U` (Windows) ou `Cmd + U` (Mac)

---

## MÉTODO 2: Diferença React (JSX) vs HTML Final

### ⚙️ **O Que é Este Projeto:**

Este site usa **React**, que significa:
- Código é escrito em **JSX** (JavaScript + HTML)
- O browser **converte JSX em HTML puro** automaticamente
- O HTML que vês no browser é o **resultado final**

### 📝 **Código-Fonte (JSX):**
```jsx
<div className="container">
  <h1>{t.home.title}</h1>
  <Button variant="primary">Contactar</Button>
</div>
```

### 🌐 **HTML Renderizado (No Browser):**
```html
<div class="container">
  <h1>Bem-vindo ao Azores4fun</h1>
  <button class="btn btn-primary">Contactar</button>
</div>
```

---

## MÉTODO 3: Exportar HTML de Uma Página 📄

Se quiseres guardar o HTML completo de uma página:

1. Abre DevTools (F12)
2. Na tab "Elements"/"Inspector"
3. Clica com botão direito no `<html>` (primeira linha)
4. Seleciona **"Copy" → "Copy outerHTML"**
5. Cola num ficheiro `.html`

---

## MÉTODO 4: Onde Está o Código-Fonte? 📂

### Estrutura do Projeto:

```
client/src/pages/
├── home.tsx          ← Código React da homepage
├── alojamento.tsx    ← Código React da página Alojamento
├── animacao.tsx      ← Código React da página Animação
├── eventos.tsx       ← Código React da página Eventos
├── tatuagem.tsx      ← Código React da página Tatuagem
├── imobiliaria.tsx   ← Código React da página Imobiliária
├── loja.tsx          ← Código React da página Loja
├── sobre.tsx         ← Código React da página Sobre
└── portfolio.tsx     ← Código React da página Portfolio
```

Cada ficheiro `.tsx` contém **JSX** que é convertido em **HTML** pelo React.

---

## MÉTODO 5: Ver HTML Renderizado Via Curl 🖥️

Podes fazer request ao servidor e ver o HTML inicial:

```bash
curl https://[seu-repl-url].replit.dev/
```

Mas nota: O HTML completo só é gerado **depois** do JavaScript carregar!

---

## 🎯 RESUMO RÁPIDO

| Método | Quando Usar |
|--------|-------------|
| **DevTools (F12)** | Ver HTML final renderizado (MELHOR) |
| **Ver Código-Fonte (Ctrl+U)** | Ver HTML inicial antes do JS |
| **Ficheiros .tsx** | Ver código React/JSX original |
| **Copy outerHTML** | Exportar HTML de elemento específico |

---

## 💡 DICA IMPORTANTE

O HTML que vês no **browser DevTools** é o mais relevante porque:
- ✅ Inclui todo o conteúdo dinâmico
- ✅ Mostra o estado atual da página
- ✅ Inclui alterações feitas por JavaScript
- ✅ É o que os utilizadores realmente vêem
- ✅ É o que o Google indexa (após renderização)

Os ficheiros `.tsx` são **código-fonte** que gera esse HTML.

---

