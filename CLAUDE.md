# Azores4fun — site (azores4fun.com)

Guia curto para o Claude (VS Code, Cowork ou claude.ai) ao trabalhar neste repositório. A descrição técnica completa está em `replit.md`; este ficheiro só diz onde estão as coisas e as regras que não se podem partir.

## O que é

Site da Azores4fun (Horta, Faial): alojamento local (3 apartamentos — T0 "Vulcão"/Azores4fun Studio, T2 "Levadas", T3 "Caldeira"), animação turística (LaserTag, Paintball, Gelblaster, Nerfs, kayak/SUP, tours e transfers em carrinha elétrica), eventos, estúdio de tatuagem/piercing, imobiliária e loja. React + Vite + Express + Drizzle, base de dados Neon (PostgreSQL), publicado no Netlify. Bilingue PT/EN (PT por defeito).

## Onde está o quê

- `client/` — frontend React. Textos de tradução PT/EN e as FAQs curtas usadas no JSON-LD (dados estruturados para o Google) vivem aqui, no i18n.
- `server/` — Express; `server/routes.ts` tem a API, o painel de administração e o prerender para bots; `server/seed-faqs.ts` é o seed inicial das FAQs.
- `shared/schema.ts` — esquema da base de dados (tabela `faqs`, blog, etc.).
- `shared/static-faqs.ts` e `netlify/functions/data/faqs.ts` — **gerados automaticamente** a partir da base de dados; nunca editar à mão.
- `scripts/sync-netlify-data.js` — regenera esses dois ficheiros a partir da base de dados; `scripts/export-faqs-from-db.ts` exporta as FAQs.
- `docs/` — propostas e decisões sobre conteúdo (ex.: `docs/faqs-proposta-2026-10-28.md`). É daqui que se implementam alterações pedidas pela Sandra noutros sítios (claude.ai, Cowork).
- `Sincronizacao_FAQs.md` — regra e passos para alterar FAQs e blog.
- `design_guidelines.md` — regras de design.

## Regras que não se partem

1. **FAQs e blog alteram-se pelo painel de administração em localhost** (`npm run dev` → http://localhost:5000/admin, password em `.env`), ou pela API local que o painel usa — nunca diretamente na tabela do Neon e nunca nos ficheiros gerados. É o painel que regenera `static-faqs.ts` e `netlify/functions/data/faqs.ts`. Detalhe em `Sincronizacao_FAQs.md`.
2. **SEO**: cada página de serviço mantém JSON-LD `FAQPage` com FAQs reais, title/description/canonical únicos, hreflang PT/EN; o prerender para bots em `server/routes.ts` não pode ser quebrado. Secção "SEO & LLM Optimization Requirements" em `replit.md`.
3. Depois de alterar conteúdo: commit + push; o Netlify publica.
4. Factos do negócio (horários, políticas, lotações, preços) vêm da Sandra, não se inventam. Decisões já tomadas (28/10/2026): check-in 16h, check-out 11h; reserva direta = sinal 30% + 70% até 30 dias antes; estacionamento público gratuito a 50 m; carrinha de 9 lugares = 8 passageiros + guia; número mínimo de jogadores depende do jogo.

## Relação com os outros sítios onde a Sandra trabalha

- `C:\Privados\02 Projects\Reservas AL` — gestão do alojamento (mapas de reservas, preços, estatísticas); projeto Cowork "Privados SC".
- Projeto claude.ai "Azores4fun Assistant" — usado no telemóvel/web; auditorias e propostas feitas lá são copiadas para `docs/` neste repositório antes de serem implementadas.

## Convenções

- Respostas em PT-PT; EN é tradução, não texto novo. Ao alterar uma FAQ, alterar sempre os dois idiomas.
- Ao fundir ou corrigir FAQs: manter o texto existente e adaptar, não reescrever de raiz; registar os ids alterados/apagados.
