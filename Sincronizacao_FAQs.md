# Sincronização das FAQs e do blog com o assistente do site

## Regra

**Qualquer alteração à base de dados do Neon (FAQs e blog) faz-se sempre pelo painel de administração em localhost, nunca diretamente na tabela.**

## Porquê

O assistente do site publicado não lê a base de dados. Lê dois ficheiros do código:

- `netlify/functions/data/faqs.ts` (FAQs)
- `netlify/functions/data/blogs.ts` (resumos do blog)

Só o painel atualiza esses ficheiros. Se alterares uma FAQ diretamente na tabela da base de dados (no Neon), os ficheiros não mudam e o assistente continua com a resposta antiga.

## Passos depois de alterar uma FAQ ou um artigo

1. Correr `npm run dev` em `C:\Dev\azores4fun`.
2. Abrir http://localhost:5000/admin e entrar com a password (`ADMIN_PASSWORD` no `.env`).
3. Gravar a alteração no painel. Se alguma alteração tiver sido feita diretamente na tabela, gravar uma FAQ qualquer, sem alterar nada, para forçar a sincronização.
4. Fazer commit e push. O Netlify publica e o assistente passa a usar a versão nova.

## Como confirmar que a sincronização correu

- A linha `Last updated` no início de `faqs.ts` tem a data de hoje.
- No fim de `faqs.ts` continuam as funções `getFaqsForChatbot`, `getFaqsByService` e `getAllFaqs`.
- No fim de `blogs.ts` continua a função `getBlogSummariesForChatbot`.

## Notas

- O painel só funciona no computador local. No site publicado, o login do painel não funciona.
- O `npm run dev` reinicia sozinho quando o código ou o `.env` mudam. Se aparecer `EADDRINUSE`, há um servidor antigo ainda ligado na porta 5000: é preciso pará-lo antes de usar o painel.
