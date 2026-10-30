# Proposta de fusão e correção das FAQs — azores4fun.com (28/10/2026)

> **Como aplicar (ler primeiro):** as alterações fazem-se pelo painel de administração em localhost (`npm run dev` → http://localhost:5000/admin) ou pela API local que o painel usa — nunca diretamente na tabela do Neon nem nos ficheiros gerados (`shared/static-faqs.ts`, `netlify/functions/data/faqs.ts`). Ver `Sincronizacao_FAQs.md`. Os ids abaixo são os da tabela `faqs`. Só PT por agora: o inglês de cada FAQ alterada é produzido depois de a Sandra aprovar o PT e responder aos pontos **[DECIDIR]**. As FAQs curtas do JSON-LD (ficheiros de tradução em `client/`) têm de ficar alinhadas com o resultado.

Origem: auditoria e proposta feitas no projeto claude.ai "Azores4fun Assistant" em 28/10/2026, a partir das 181 FAQs ativas lidas do site publicado.

Decisões da Sandra já aplicadas: check-in 16h; pagamento 30% + 70% até 30 dias antes; estacionamento gratuito na zona; carrinha de 9 lugares = 8 passageiros + guia; nº mínimo de jogadores depende do jogo.

Regra seguida: cada FAQ fundida mantém o texto da versão mais completa, com frases das outras acrescentadas — nada reescrito de raiz. Em cada ponto indica-se o id a manter (com o texto proposto), os ids a apagar e a origem de cada frase.

## A. Alojamento (/alojamento e página inicial)

**A1. Localização — manter #135 (sem alterações), apagar #57.** O #135 já diz tudo o que o #57 dizia, com mais detalhe.

**A2. Equipamento — manter #59 como resumo, apagar nada.** O #59 repete em curto o que #143, #144, #145 e #150 dizem em detalhe; em vez de apagar, passa a resumo coerente:
- P: Os apartamentos estão totalmente equipados?
- R: Sim! Todos os apartamentos têm cozinha totalmente equipada, Wi-Fi de fibra ótica, TV, ar condicionado quente/frio, roupa de cama, toalhas e amenities. Veja as perguntas seguintes para o detalhe de cada item.
- Origem: #59 (estrutura, "cozinha totalmente equipada", TV, roupa de cama); "fibra ótica" de #144; "quente/frio" de #143; "toalhas e amenities" de #150. Retirado: a lista de eletrodomésticos (está em #145).

**A3. Check-in / check-out — manter #60 (texto fundido), apagar #147 e #177.**
- P: Qual é o horário de check-in e check-out? Posso fazer check-in autónomo?
- R: O check-in é a partir das 16h e o check-out até às 11h. Oferecemos check-in autónomo (self-check-in) a qualquer hora a partir das 16h: no dia da chegada enviamos, para o contacto fornecido (preferencialmente e-mail, ou através da plataforma de reserva), o código de acesso e os dados necessários. Sempre que possível permitimos check-in antecipado ou check-out tardio, e dispomos de local seguro para deixar as malas. Já no alojamento, o nosso chat esclarece dúvidas e guia-o, passo a passo, na utilização dos equipamentos e eletrodomésticos.
- Origem: 1.ª frase de #60; self-check-in e envio do código de #147 e #177 (hora corrigida de 15h para 16h); check-in antecipado/malas de #147; última frase de #177. Retirado de #60: "Horários flexíveis podem ser combinados conforme disponibilidade" (coberto por "sempre que possível").

**A4. Estacionamento — manter #149 (sem alterações), apagar #61.** O #149 já diz: sem estacionamento privado, público e gratuito a 50 m (marginal / rua Conselheiro Miguel da Silveira).

**A5. Estadia mínima — manter #157 (texto fundido), apagar #62.**
- P: A estadia mínima e máxima é de quantos dias?
- R: O nosso período mínimo de estadia é de duas noites, ou valor equivalente, podendo variar conforme a época do ano. Não temos um limite máximo de dias para a sua reserva.
- Origem: #157; "podendo variar conforme a época do ano" de #62.

**A6. Reserva, pagamento e cancelamento — manter #154 (texto fundido), apagar #158. O #156 (meios de pagamento) fica à parte.**
- P: Como posso reservar o alojamento e quais são as condições de pagamento e cancelamento?
- R: As reservas podem ser feitas diretamente connosco (site, e-mail ou WhatsApp) ou através de plataformas parceiras. Nas reservas diretas, para confirmar a reserva é solicitado um sinal de 30% do valor total da estadia; os restantes 70% são pagos até 30 dias antes do check-in. O cancelamento é gratuito até 30 dias antes do check-in. Na tarifa não reembolsável, tipicamente 10% mais barata, é solicitado o pagamento de 100% na confirmação e o cancelamento não dá direito a reembolso.
- Origem: estrutura e frase da tarifa não reembolsável de #154; regra 30%/70% de #158 (decisão da Sandra); "site, e-mail ou WhatsApp" de #109. Retirado de #154: "pagamento antecipado ou" (substituído pela regra 30/70).
- **[DECIDIR]** Num cancelamento gratuito (mais de 30 dias antes) o sinal de 30% é devolvido? Se não, a frase tem de dizer "o sinal não é reembolsável".

**A7. Meios de pagamento — #156 (alojamento) e #99 (geral) têm listas diferentes. [DECIDIR]** quais são verdade: Revolut e Bitcoin (só em #156), dinheiro (só em #99). Proposta, se todos forem válidos, para os dois ids: "Aceitamos transferência bancária, MB WAY, PayPal, Revolut, cartão de crédito/débito (Visa, Mastercard), dinheiro (presencialmente) e Bitcoin. Todas as transações são seguras."

**A8. Concierge — manter #176 e #178 sem alterações** (o #177 foi fundido em A3).

**A9. Melhor época — apagar #103 (geral); fica #162 (alojamento), mais completo.** Se preferir manter uma pergunta no cartão "Geral" da página inicial, fica o #103 como está.

**A10. Correções de texto no alojamento (sem fusão):**
- #146: "Qual a marca de café que disponho nos alojamentos?" → "…que disponibilizamos nos alojamentos?"
- #168: os códigos dos trilhos estão trocados. Correto: Entre Montes PRC08 FAI (3,4 km) ✔; Caldeira **PRC04 FAI** (6,9 km, circular); Levadas **PR03 FAI** (7,6 km); Dez Vulcões **PR06 FAI** (19,3 km). Fonte: trails.visitazores.com e guia de trilhos do Faial.
- #134: n.º de registo AL do "Levadas" aparece como 2591 — confirmar (na memória do projeto consta 259).
- #58: espaços duplos; confirmar a soma "grupos até 18 pessoas" com as lotações reais.
- #175: "carrinha elétrica de 9 lugares" → "de 9 lugares (8 passageiros)", para bater certo com B9.

## B. Animação (/animacao: tourism + paintball + lasertag + kayak + tours)

**B1. "O LaserTag dói?" — manter #41 (texto fundido), apagar #187.**
- R: Não! O LaserTag usa sensores infravermelhos — não há qualquer impacto físico, apenas luz e vibração do equipamento. É perfeito para todas as idades, incluindo crianças.
- Origem: #41; "apenas luz e vibração do equipamento" de #187.

**B2. Equipamento de paintball — manter #34 (texto fundido), apagar #190.**
- R: Sim! O preço inclui máscara de proteção, marcador (arma), colete de proteção peitoral e bolas de tinta. Todo o equipamento necessário está incluído.
- Origem: #34; "proteção peitoral" de #190. (#191, recarregar bolas, mantém-se.)

**B3. Diferenças entre jogos — manter #39 (texto alargado), apagar #192, #193 e #194; corrigir #37.**
- R (#39): Paintball usa bolas de tinta biodegradável, com impacto médio. Gelblaster usa bolas de gel biodegradáveis, de impacto muito suave, que não sujam e evaporam após o impacto. Lasertag usa sensores infravermelhos, sem impacto. Nerfs usam dardos de espuma, completamente inofensivos. Todos são seguros e divertidos!
- Origem: #39; "impacto muito suave" de #192; "não sujam e evaporam" de #193; "completamente inofensivos" de #194.
- R (#37, corrigida): Sim! As nossas bolas de Paintball são biodegradáveis: depois de uma chuvinha normal, a tinta desaparece completamente, sem deixar vestígios na paisagem. As bolas do Gelblaster são de gel biodegradável e evaporam após o impacto.
- Alterado em #37: deixa de dizer que o Gelblaster tem "tinta" (contradizia #193).

**B4. Idades mínimas — manter #181 (texto alargado), apagar #33 e #42.**
- R: Nerfs: a partir dos 6 anos. LaserTag: a partir dos 6 anos. Gelblaster: a partir dos 10 anos. Paintball júnior: a partir dos 10 anos. Os menores devem estar acompanhados por um adulto responsável.
- Origem: #181; última frase de #33. Nota: os dados estruturados para o Google (JSON-LD) dizem LaserTag 10, Gelblaster 8 e Nerfs 8 — têm de passar a estes valores.

**B5. Local dos jogos — manter #182 (texto fundido), apagar #36 e #43.**
- P: Onde são feitas as partidas?
- R: No nosso campo na ilha do Faial — o local exato é comunicado após a reserva — ou num local escolhido por si, indoor ou outdoor, desde que adequado à atividade. Podemos levar o equipamento ao seu evento, festa ou local preferido.
- Origem: #182; "campo… local exato comunicado após a reserva" de #36; "indoor ou outdoor… levar o equipamento ao seu evento" de #43. Retirado de #36: "para garantir a sua privacidade".

**B6. Reservar com antecedência / como reservar — manter #184 (texto fundido), apagar #35 e #200.**
- P: É preciso reservar as atividades e os tours com antecedência? Como reservo?
- R: Sim, recomendamos reservar pelo menos 24 horas antes, especialmente em época alta, para garantir disponibilidade. Pode reservar no site, por WhatsApp ou telefone (+351 934 993 770) ou por e-mail.
- Origem: #184; "24 horas" e contactos de #35; "site… e-mail" de #200. O #109 (geral) mantém-se para a página inicial.

**B7. Dimensão dos grupos — manter #185 (texto fundido), apagar #40.**
- P: Quantas pessoas são necessárias para jogar? Há limite máximo?
- R: O número mínimo de jogadores depende da atividade (tipicamente entre 6 e 12). Se o seu grupo for mais pequeno, podemos juntá-lo a outros. Organizamos jogos para grupos de 40 ou mais pessoas; para grupos maiores, eventos ou teambuilding, contacte-nos para um orçamento personalizado.
- Origem: #185 (decisão da Sandra: mínimo em função do jogo); "40+" e orçamento de #40.

**B8. Duração dos tours — manter #51 (tours), apagar #195. [DECIDIR] as horas.**
- R: Os tours duram entre [2 e 6 horas — #51] / [3 e 7 horas — #195], consoante o roteiro (meio dia ou dia inteiro). Oferecemos tours personalizados adaptados aos seus interesses e ritmo.
- (#44 LaserTag 1–2 h e #186 "varia, contacte-nos" ficam como estão; o JSON-LD diz 3–8 h para tours e 2–3 h para LaserTag — alinhar com o que decidir.)

**B9. Carrinha elétrica — manter #53 (tours, texto fundido), apagar #82 e #199. Capacidade — manter #196 (texto fundido), apagar #84.**
- R (#53): Sim! Usamos uma carrinha 100% elétrica de 9 lugares (8 passageiros mais o guia) em todos os tours e transfers — conforto, silêncio e zero emissões, contribuindo para um turismo sustentável nos Açores.
- Origem: #53; "todos os transfers e tours" de #82; "conforto, silêncio e zero emissões" de #199; "(8 passageiros mais o guia)" decisão da Sandra.
- R (#196): Até 8 passageiros por carrinha (9 lugares, incluindo o guia). Para grupos maiores podemos organizar várias viagens ou carrinhas.
- Origem: #196; "grupos maiores… múltiplos transfers" de #84 (que dizia, errado, "9 passageiros").

**B10. Personalizar tour — manter #54 (sem alterações), apagar #197.**

**B11. Seguros — #107 (geral: responsabilidade civil) e #210 (eventos: acidentes pessoais). [DECIDIR]** se existem os dois. Se sim, texto igual nos dois ids: "Sim! Todas as nossas atividades de animação turística têm seguro de responsabilidade civil e de acidentes pessoais. A sua segurança é a nossa prioridade." (#179, #104 e #105 ficam como estão.)

## C. Eventos (/eventos e página inicial)

**C1. Teambuilding — manter #79 (sem alterações), apagar #214 e #215** (o #214 só diz "Sim!" e a resposta do #215 fala de aniversários).

**C2. Festas de aniversário — manter #204 (texto fundido), apagar #78.**
- R: LaserTag, Paintball, Nerfs, Gelblaster e insufláveis de grandes dimensões. Combinamos as atividades à medida para uma festa inesquecível.
- Origem: #204; "combinamos… festa inesquecível" de #78. (#75 e #205 mantêm-se.)

**C3. Mau tempo — manter #212 (texto fundido), apagar #213.**
- P: O que acontece se estiver mau tempo? Posso cancelar?
- R: Ajustamos, adiamos ou substituímos a atividade sem custos extra. Também pode cancelar por condições meteorológicas, com aviso prévio.
- Origem: #212; "com aviso prévio" de #213. Coerente com #104/#105 (geral).

## D. Geral / página inicial

**D1. Contactos — manter #97 (sem alterações), apagar #108** (o WhatsApp já está em #97). #96 (horário) e #109 (como reservar) mantêm-se.

**D2. Morada — #98: alinhar com #135** ("Travessa do Poiso Novo, n.ºs 1 e 3, Horta, Ilha do Faial, Açores"). **[DECIDIR]** o código postal: "9900-000" parece provisório.

**D3. Política de cancelamento — #110 passa a ser só das atividades.**
- P: Qual a política de cancelamento das atividades e tours?
- R: (texto atual, sem alterações: 48h, reembolso total…). Fica assim separada da política do alojamento (A6). **[DECIDIR]** se as 48h se aplicam a atividades, tours e eventos.

**D4. Pagamentos (#99)** — ver A7.

## E. Transfers (5 FAQs órfãs, ids 81–85)

Apagar #82 e #84 (fundidas em B9). Ficam #81 (transfer do aeroporto), #83 (preço) e #85 (esperar pelo voo), que completam #201–#203 (bagagem, privados, horários). **[DECIDIR]**: mudar o `service` destas três para `tours`, para aparecerem em /animacao, ou apagá-las.

## F. Sem decisão ainda (fora desta proposta)

- Tatuagem: estilos (#65 "diversos estilos" / #67 "Fineline" / #114 "só preto"); joias de piercing (#121 vs JSON-LD); prazos de cicatrização (#125 vs JSON-LD).
- Tendas (#77): o JSON-LD tem detalhe (três tendas, 100 sentados/150 em pé, 30–40) que o #77 não tem.
- Loja: envios (#92 vs JSON-LD).
- As FAQs dos ficheiros de tradução (JSON-LD para o Google) continuam desatualizadas; o ideal é gerá-las a partir desta base de dados depois das correções.

## Resumo

Apagar (29): 57, 61, 62, 147, 158, 177 · 33, 35, 36, 40, 42, 43, 82, 84, 187, 190, 192, 193, 194, 195, 197, 199, 200 · 78, 213, 214, 215 · 103, 108. Opcional: 210 (se B11 ficar só em #107).
Alterar texto (22): 59, 60, 154, 157, 146, 168, 175 · 34, 37, 39, 41, 53, 181, 182, 184, 185, 196, 51 · 204, 212 · 98, 110 (+ 99/156/107/210 conforme decisões).
Total: 181 → 152 FAQs.
