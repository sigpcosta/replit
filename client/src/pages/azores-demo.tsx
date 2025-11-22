export default function AzoresDemo() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'system-ui' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
          --primary: hsl(204, 88%, 42%);
          --primary-dark: hsl(204, 88%, 35%);
          --primary-light: hsl(204, 88%, 52%);
        }

        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

        .site-header {
          position: fixed; top: 0; left: 0; right: 0;
          background: white; border-bottom: 1px solid #e5e7eb;
          z-index: 100; padding: 1rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }

        .header-content {
          display: flex; align-items: center; justify-content: space-between;
          gap: 2rem; flex-wrap: wrap;
        }

        .site-logo {
          font-size: 1.5rem; font-weight: 800;
          color: var(--primary); text-decoration: none;
        }

        .header-nav { display: flex; gap: 2rem; list-style: none; flex-wrap: wrap; }
        .header-nav a {
          color: #6b7280; text-decoration: none; font-weight: 500;
          transition: 0.2s;
        }
        .header-nav a:hover { color: var(--primary); }

        .btn {
          display: inline-block; padding: 0.625rem 1.5rem;
          border-radius: 0.5rem; font-weight: 600;
          text-decoration: none; transition: 0.2s;
          border: 2px solid transparent; cursor: pointer;
        }

        .btn-primary {
          background: var(--primary); color: white; border-color: var(--primary);
        }
        .btn-primary:hover { background: var(--primary-dark); }

        .btn-outline { border-color: var(--primary); color: var(--primary); }
        .btn-outline:hover { background: var(--primary); color: white; }

        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          color: white; text-align: center; margin-top: 70px;
        }

        .hero-content { position: relative; z-index: 2; padding: 4rem 0; }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800;
          margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          margin-bottom: 1rem; opacity: 0.95;
        }

        .hero-description { font-size: 1.125rem; margin-bottom: 2rem; opacity: 0.9; }

        .hero-buttons {
          display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
        }

        .section { padding: 6rem 0; }

        .section-header { text-align: center; margin-bottom: 4rem; }

        .section-title {
          font-size: 2.5rem; margin-bottom: 1rem; color: #111827;
        }

        .section-description {
          font-size: 1.125rem; color: #6b7280; max-width: 42rem; margin: 0 auto;
        }

        .services-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white; border: 1px solid #e5e7eb;
          border-radius: 0.5rem; overflow: hidden;
          transition: 0.2s; cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .service-image {
          height: 200px;
          background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 3rem;
        }

        .service-content { padding: 1.5rem; }

        .service-title { font-size: 1.25rem; margin-bottom: 0.75rem; }

        .service-description { color: #6b7280; margin-bottom: 1rem; }

        .service-link { color: var(--primary); font-weight: 600; text-decoration: none; }
        .service-link:hover { text-decoration: underline; }

        .cta-section {
          background: var(--primary); color: white;
          padding: 4rem 0; text-align: center;
        }

        .cta-section .section-title { color: white; }
        .cta-section .section-description { color: rgba(255, 255, 255, 0.9); }

        .site-footer {
          background: #111827; color: rgba(255, 255, 255, 0.8);
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem; margin-bottom: 3rem;
        }

        .footer-section h3 { color: white; margin-bottom: 1rem; }

        .faq-section {
          margin-top: 4rem; padding-top: 4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .faq-title {
          color: white; font-size: 2rem; text-align: center;
          margin-bottom: 3rem; text-transform: uppercase; letter-spacing: 0.05em;
        }

        .faq-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .faq-category {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem; padding: 1.5rem;
        }

        .faq-category-title {
          color: var(--primary-light); font-size: 1.125rem;
          margin-bottom: 1rem; padding-bottom: 0.75rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .faq-item { margin-bottom: 1rem; }

        .faq-question {
          color: white; font-weight: 600; margin-bottom: 0.5rem;
        }

        .faq-answer {
          color: rgba(255, 255, 255, 0.75); font-size: 0.875rem;
        }

        .footer-bottom {
          padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center; font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .header-nav { display: none; }
        }
      `}</style>

      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <a href="#" className="site-logo">Azores4fun</a>
            
            <nav>
              <ul className="header-nav">
                <li><a href="#alojamento">Alojamento</a></li>
                <li><a href="#animacao">Animação</a></li>
                <li><a href="#eventos">Eventos</a></li>
                <li><a href="#tatuagem">Tatuagem</a></li>
                <li><a href="#imobiliaria">Imobiliária</a></li>
                <li><a href="#loja">Loja</a></li>
              </ul>
            </nav>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contacto" className="btn btn-outline">Contactar</a>
              <a href="https://experiences.azores4fun.com" className="btn btn-primary" target="_blank" rel="noopener">Reservar</a>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Azores4fun</h1>
          <p className="hero-subtitle">A Sua Aventura Completa nos Açores</p>
          <p className="hero-description">Alojamento · Animação Turística · Eventos · Tatuagem · Gestão Imobiliária · Loja</p>
          <div className="hero-buttons">
            <a href="#servicos" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '0.875rem 2rem' }}>Explorar Serviços</a>
            <a href="https://experiences.azores4fun.com" className="btn btn-outline" style={{ fontSize: '1.125rem', padding: '0.875rem 2rem', background: 'white', color: 'var(--primary)', borderColor: 'white' }} target="_blank" rel="noopener">Reservar Agora</a>
          </div>
        </div>
      </section>

      <section id="servicos" className="section" style={{ background: '#f9fafb' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Os Nossos Serviços</h2>
            <p className="section-description">Descubra tudo o que a Azores4fun tem para oferecer</p>
          </div>

          <div className="services-grid">
            <div className="service-card" id="alojamento">
              <div className="service-image">🏠</div>
              <div className="service-content">
                <h3 className="service-title">Alojamento Local</h3>
                <p className="service-description">3 apartamentos modernos no centro da cidade da Horta, totalmente equipados para uma estadia confortável e memorável.</p>
                <a href="#" className="service-link">Saber Mais →</a>
              </div>
            </div>

            <div className="service-card" id="animacao">
              <div className="service-image">🎯</div>
              <div className="service-content">
                <h3 className="service-title">Animação Turística</h3>
                <p className="service-description">Lasertag, Paintball, Gelblaster, Nerfs, aluguer de SUPs e Kayaks, tours personalizados pela ilha e muito mais.</p>
                <a href="#" className="service-link">Saber Mais →</a>
              </div>
            </div>

            <div className="service-card" id="eventos">
              <div className="service-image">🎉</div>
              <div className="service-content">
                <h3 className="service-title">Eventos</h3>
                <p className="service-description">Tendas para eventos, insufláveis, festas de aniversário, teambuilding e jogos de estratégia personalizados.</p>
                <a href="#" className="service-link">Saber Mais →</a>
              </div>
            </div>

            <div className="service-card" id="tatuagem">
              <div className="service-image">🎨</div>
              <div className="service-content">
                <h3 className="service-title">Tatuagem & Piercings</h3>
                <p className="service-description">Estúdio profissional com artistas experientes, ambiente higiénico e seguro para dar vida às suas ideias.</p>
                <a href="#" className="service-link">Saber Mais →</a>
              </div>
            </div>

            <div className="service-card" id="imobiliaria">
              <div className="service-image">🏢</div>
              <div className="service-content">
                <h3 className="service-title">Gestão Imobiliária</h3>
                <p className="service-description">Serviços de arrendamento de longa duração, manutenção e construção para empreendimentos turísticos e particulares.</p>
                <a href="#" className="service-link">Saber Mais →</a>
              </div>
            </div>

            <div className="service-card" id="loja">
              <div className="service-image">🛍️</div>
              <div className="service-content">
                <h3 className="service-title">Loja</h3>
                <p className="service-description">Loja aberta para receção de clientes, venda de bens e serviços de turismo local, produtos regionais e merchandising.</p>
                <a href="#" className="service-link">Saber Mais →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contacto">
        <div className="container">
          <h2 className="section-title">Pronto para a Aventura?</h2>
          <p className="section-description">Reserve já a sua experiência na nossa plataforma ou contacte-nos para mais informações</p>
          <div className="hero-buttons">
            <a href="https://experiences.azores4fun.com" className="btn" style={{ background: 'white', color: 'var(--primary)', fontSize: '1.125rem', padding: '0.875rem 2rem' }} target="_blank" rel="noopener">Reservar Agora</a>
            <a href="#" className="btn btn-outline" style={{ fontSize: '1.125rem', padding: '0.875rem 2rem', borderColor: 'white', color: 'white' }}>Contactar</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Azores4fun</h3>
              <p>A sua aventura completa nos Açores. Desde alojamento a experiências inesquecíveis.</p>
            </div>

            <div className="footer-section">
              <h3>Links Rápidos</h3>
              <ul style={{ listStyle: 'none' }}>
                <li><a href="#alojamento" style={{ color: 'inherit', textDecoration: 'none' }}>Alojamento</a></li>
                <li><a href="#animacao" style={{ color: 'inherit', textDecoration: 'none' }}>Animação</a></li>
                <li><a href="#eventos" style={{ color: 'inherit', textDecoration: 'none' }}>Eventos</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contacto</h3>
              <p>Horta, Faial, Açores<br />
              Telefone: +351 123 456 789<br />
              Email: info@azores4fun.com</p>
            </div>
          </div>

          <div className="faq-section">
            <h2 className="faq-title">Perguntas Frequentes</h2>
            
            <div className="faq-grid">
              <div className="faq-category">
                <h3 className="faq-category-title">Alojamento Local</h3>
                <div className="faq-item">
                  <h4 className="faq-question">Onde ficam os apartamentos?</h4>
                  <p className="faq-answer">Os 3 apartamentos estão localizados no centro da cidade da Horta, próximos de restaurantes, supermercados e serviços.</p>
                </div>
                <div className="faq-item">
                  <h4 className="faq-question">Qual o check-in e check-out?</h4>
                  <p className="faq-answer">Check-in a partir das 15h00 e check-out até às 11h00. Horários flexíveis mediante disponibilidade.</p>
                </div>
              </div>

              <div className="faq-category">
                <h3 className="faq-category-title">Animação Turística</h3>
                <div className="faq-item">
                  <h4 className="faq-question">Preciso de experiência prévia?</h4>
                  <p className="faq-answer">Não! Todas as atividades incluem briefing e equipamento. Adequado para iniciantes e experientes.</p>
                </div>
                <div className="faq-item">
                  <h4 className="faq-question">Qual a idade mínima?</h4>
                  <p className="faq-answer">Lasertag/Paintball: 8+ anos. SUP/Kayak: 12+ anos. Tours: todas as idades.</p>
                </div>
              </div>

              <div className="faq-category">
                <h3 className="faq-category-title">Eventos</h3>
                <div className="faq-item">
                  <h4 className="faq-question">Fazem eventos corporativos?</h4>
                  <p className="faq-answer">Sim! Organizamos teambuilding, eventos corporativos e festas personalizadas para grupos.</p>
                </div>
                <div className="faq-item">
                  <h4 className="faq-question">Qual a antecedência para reservar?</h4>
                  <p className="faq-answer">Recomendamos 2 semanas de antecedência, mas contacte-nos para disponibilidade imediata.</p>
                </div>
              </div>

              <div className="faq-category">
                <h3 className="faq-category-title">Tatuagem & Piercings</h3>
                <div className="faq-item">
                  <h4 className="faq-question">Preciso marcar com antecedência?</h4>
                  <p className="faq-answer">Sim, recomendamos marcação prévia. Contacte-nos para consulta e orçamento.</p>
                </div>
                <div className="faq-item">
                  <h4 className="faq-question">Posso levar o meu desenho?</h4>
                  <p className="faq-answer">Claro! Os nossos artistas trabalham com desenhos personalizados ou criam designs originais.</p>
                </div>
              </div>

              <div className="faq-category">
                <h3 className="faq-category-title">Gestão Imobiliária</h3>
                <div className="faq-item">
                  <h4 className="faq-question">Que serviços oferecem?</h4>
                  <p className="faq-answer">Arrendamento de longa duração, manutenção de propriedades e serviços de construção.</p>
                </div>
                <div className="faq-item">
                  <h4 className="faq-question">Gerem propriedades turísticas?</h4>
                  <p className="faq-answer">Sim, gerimos empreendimentos turísticos e propriedades particulares na ilha do Faial.</p>
                </div>
              </div>

              <div className="faq-category">
                <h3 className="faq-category-title">Loja</h3>
                <div className="faq-item">
                  <h4 className="faq-question">Que produtos vendem?</h4>
                  <p className="faq-answer">Produtos regionais dos Açores, merchandising Azores4fun e serviços de turismo local.</p>
                </div>
                <div className="faq-item">
                  <h4 className="faq-question">Qual o horário da loja?</h4>
                  <p className="faq-answer">Segunda a Sábado: 9h-19h. Contacte-nos para horários especiais.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Azores4fun. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
