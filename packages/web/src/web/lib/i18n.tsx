import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en" | "es";

const dictionaries: Record<Lang, any> = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre",
      fleet: "Frota & Parceiros",
      contact: "Contato",
      cta: "Solicitar Orçamento",
    },
    langNames: { pt: "PT", en: "EN", es: "ES" },
    home: {
      eyebrow: "Serviço Técnico Especializado",
      title: "Excelência técnica a serviço da sua embarcação",
      subtitle:
        "Manutenção preventiva, corretiva e assistência náutica especializada para embarcações e yachts. Precisão, confiabilidade e experiência em cada intervenção.",
      ctaPrimary: "Solicitar Orçamento",
      ctaSecondary: "Nossos Serviços",
      trustEyebrow: "Confiança construída no mar",
      stats: [
        { value: "15+", label: "Anos de Experiência" },
        { value: "800+", label: "Embarcações Atendidas" },
        { value: "24/7", label: "Assistência de Emergência" },
        { value: "98%", label: "Clientes Satisfeitos" },
      ],
      servicesEyebrow: "O que fazemos",
      servicesTitle: "Serviço técnico completo, do casco ao motor",
      servicesSubtitle:
        "Uma equipe especializada, ferramentas de precisão e protocolos rigorosos para manter sua embarcação sempre pronta para navegar.",
      viewAllServices: "Ver todos os serviços",
      whyEyebrow: "Por que a TechService",
      whyTitle: "Padrão de qualidade náutica premium",
      why: [
        {
          title: "Técnicos Certificados",
          desc: "Equipe especializada com certificação em motores marítimos e sistemas náuticos das principais marcas.",
        },
        {
          title: "Resposta Rápida",
          desc: "Atendimento de emergência e prazos de execução otimizados para minimizar o tempo da embarcação fora d'água.",
        },
        {
          title: "Peças Originais",
          desc: "Utilizamos apenas peças e componentes originais ou homologados pelos fabricantes.",
        },
        {
          title: "Transparência Total",
          desc: "Diagnóstico detalhado, orçamento claro e acompanhamento em cada etapa do serviço.",
        },
      ],
      ctaBandTitle: "Sua embarcação merece o melhor cuidado técnico",
      ctaBandSubtitle: "Fale com nossa equipe e solicite um orçamento sem compromisso.",
      ctaBandButton: "Falar com um Especialista",
    },
    services: {
      eyebrow: "Nosso Catálogo",
      title: "Serviços Técnicos Especializados",
      subtitle:
        "Cada embarcação exige atenção específica. Conheça nossa linha completa de serviços técnicos, pensados para preservar performance, segurança e valor do seu patrimônio náutico.",
      quote: "Solicitar Orçamento",
      learnMore: "Saber mais",
      list: [
        {
          name: "Manutenção Preventiva",
          tag: "Recomendado",
          desc: "Inspeções programadas e cuidados periódicos que evitam falhas, prolongam a vida útil dos sistemas e garantem navegação segura.",
          points: ["Checklist completo de sistemas", "Troca de fluidos e filtros", "Relatório técnico detalhado"],
        },
        {
          name: "Manutenção Corretiva",
          tag: "Resposta Rápida",
          desc: "Diagnóstico preciso e reparo de falhas identificadas, restabelecendo o pleno funcionamento da embarcação com agilidade.",
          points: ["Diagnóstico técnico avançado", "Reparo com peças homologadas", "Testes de performance pós-reparo"],
        },
        {
          name: "Reparos de Motor",
          tag: "Especialidade",
          desc: "Serviço especializado em motores marítimos — retífica, revisão, troca de componentes e otimização de performance.",
          points: ["Motores a diesel e gasolina", "Revisão completa de propulsão", "Balanceamento e ajuste fino"],
        },
        {
          name: "Reparos em Rabetas",
          tag: "Especialidade",
          desc: "Manutenção e reparo de rabetas (outdrives), incluindo vedações, juntas, hélices e alinhamento do conjunto propulsor.",
          points: ["Troca de vedações e fole", "Alinhamento do conjunto", "Substituição de hélices"],
        },
        {
          name: "Manutenção Geral",
          tag: "Completo",
          desc: "Cuidado abrangente da embarcação — elétrica, hidráulica, ar-condicionado, sistemas de bordo e casco.",
          points: ["Sistemas elétricos e eletrônicos", "Ar-condicionado e refrigeração", "Casco, pintura e acabamento"],
        },
        {
          name: "Assistência Náutica Especializada",
          tag: "24/7",
          desc: "Suporte técnico especializado no escopo da embarcação, incluindo atendimento de emergência e assistência em marina ou em rota.",
          points: ["Atendimento emergencial 24/7", "Suporte em marina ou em rota", "Equipe móvel especializada"],
        },
      ],
      processTitle: "Como trabalhamos",
      process: [
        { step: "01", title: "Diagnóstico", desc: "Avaliação técnica completa da embarcação e identificação de necessidades." },
        { step: "02", title: "Orçamento", desc: "Proposta clara, detalhada e sem surpresas, com prazo definido." },
        { step: "03", title: "Execução", desc: "Serviço realizado por técnicos especializados com peças homologadas." },
        { step: "04", title: "Entrega", desc: "Testes finais, relatório técnico e acompanhamento pós-serviço." },
      ],
    },
    about: {
      eyebrow: "Sobre a TechService",
      title: "Especialistas dedicados ao universo náutico",
      p1: "A TechService nasceu da paixão pelo mar e da busca constante por excelência técnica. Atuamos há mais de 15 anos oferecendo serviço técnico especializado para embarcações e yachts, unindo conhecimento profundo de engenharia náutica a um atendimento próximo e transparente.",
      p2: "Nossa equipe é formada por técnicos certificados nas principais marcas de motores marítimos, sistemas de propulsão e eletrônica embarcada. Cada intervenção é conduzida com rigor técnico, documentação detalhada e compromisso com prazos.",
      missionTitle: "Missão",
      mission: "Garantir que cada embarcação sob nossos cuidados navegue com máxima segurança, performance e confiabilidade.",
      visionTitle: "Visão",
      vision: "Ser referência em serviço técnico náutico especializado, reconhecida pela precisão e confiança dos nossos clientes.",
      valuesTitle: "Valores",
      values: ["Excelência Técnica", "Transparência", "Compromisso com Prazos", "Segurança em Primeiro Lugar"],
      credEyebrow: "Credenciais",
      credTitle: "Capacidade técnica comprovada",
      creds: [
        { title: "Certificação de Fabricantes", desc: "Técnicos treinados e certificados pelas principais marcas de motores e sistemas náuticos." },
        { title: "Ferramentas de Precisão", desc: "Equipamentos de diagnóstico e manutenção de última geração." },
        { title: "Documentação Completa", desc: "Relatórios técnicos detalhados em cada serviço executado." },
      ],
      teamEyebrow: "Nossa Equipe",
      teamTitle: "Profissionais que entendem de mar e mecânica",
      teamDesc: "Mecânicos, eletricistas navais e engenheiros dedicados exclusivamente ao setor náutico — treinados continuamente para acompanhar as tecnologias mais recentes em propulsão, eletrônica e sistemas de bordo.",
    },
    fleet: {
      eyebrow: "Frota Atendida",
      title: "Confiança de proprietários, marinas e parceiros",
      subtitle:
        "Atendemos uma frota diversa de embarcações e mantemos parcerias estratégicas com marinas e distribuidores para garantir o melhor suporte técnico e disponibilidade de peças.",
      typesTitle: "Tipos de embarcação atendidos",
      types: [
        { name: "Lanchas & Runabouts", desc: "Manutenção completa para lanchas de esporte e lazer." },
        { name: "Yachts & Iates", desc: "Serviço especializado para embarcações de médio e grande porte." },
        { name: "Veleiros", desc: "Suporte técnico para sistemas de propulsão e elétrica de veleiros." },
        { name: "Jet Boats & PWC", desc: "Manutenção de motos aquáticas e embarcações de alta performance." },
      ],
      partnersTitle: "Parceiros & Marinas",
      partnersDesc: "Trabalhamos em conjunto com marinas, distribuidores de peças e fabricantes para garantir agilidade e qualidade em cada atendimento.",
      testimonialsTitle: "O que dizem nossos clientes",
      testimonials: [
        {
          quote: "Atendimento rápido e extremamente técnico. Minha embarcação nunca esteve tão bem cuidada.",
          author: "Ricardo A.",
          role: "Proprietário de Yacht",
        },
        {
          quote: "Equipe de confiança para toda a manutenção da nossa marina. Profissionalismo do início ao fim.",
          author: "Marina Porto Sul",
          role: "Parceiro",
        },
        {
          quote: "Resolveram um problema crítico no motor em tempo recorde, antes de uma viagem importante.",
          author: "Fernanda L.",
          role: "Proprietária de Lancha",
        },
      ],
      investorsTitle: "Para Investidores & Parceiros",
      investorsDesc: "Buscamos relações de longo prazo com marinas, distribuidores e investidores interessados em expandir a presença da TechService no setor náutico. Entre em contato para explorar oportunidades de parceria.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos cuidar da sua embarcação",
      subtitle: "Preencha o formulário ou fale diretamente com nossa equipe. Respondemos em até 24 horas.",
      formName: "Nome completo",
      formEmail: "E-mail",
      formPhone: "Telefone / WhatsApp",
      formVessel: "Modelo da embarcação",
      formMessage: "Descreva o que você precisa",
      formSubmit: "Enviar Solicitação",
      infoTitle: "Informações de Contato",
      phone: "Telefone",
      email: "E-mail",
      address: "Marina",
      addressValue: "Av. Agílio Leão de Macedo, 10 — Caiobá, Matinhos - PR, 83260-000, Brasil",
      hours: "Horário de Atendimento",
      hoursValue: "Seg–Sáb: 07h às 19h · Emergências 24/7",
      mapNote: "Mapa da localização",
      thanks: "Solicitação enviada! Nossa equipe retornará em breve.",
    },
    footer: {
      tagline: "Serviço técnico especializado para embarcações e yachts.",
      servicesTitle: "Serviços",
      companyTitle: "Empresa",
      contactTitle: "Contato",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      fleet: "Fleet & Partners",
      contact: "Contact",
      cta: "Request a Quote",
    },
    langNames: { pt: "PT", en: "EN", es: "ES" },
    home: {
      eyebrow: "Specialized Technical Service",
      title: "Technical excellence, in service of your vessel",
      subtitle:
        "Preventive maintenance, repairs, and specialized nautical assistance for boats and yachts. Precision, reliability, and expertise in every intervention.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "Our Services",
      trustEyebrow: "Trust built at sea",
      stats: [
        { value: "15+", label: "Years of Experience" },
        { value: "800+", label: "Vessels Serviced" },
        { value: "24/7", label: "Emergency Assistance" },
        { value: "98%", label: "Satisfied Clients" },
      ],
      servicesEyebrow: "What We Do",
      servicesTitle: "Complete technical service, from hull to engine",
      servicesSubtitle:
        "A specialized team, precision tools, and rigorous protocols to keep your vessel always ready to sail.",
      viewAllServices: "View all services",
      whyEyebrow: "Why TechService",
      whyTitle: "Premium nautical quality standard",
      why: [
        { title: "Certified Technicians", desc: "Specialized team certified in marine engines and nautical systems from leading brands." },
        { title: "Fast Response", desc: "Emergency service and optimized turnaround to minimize time your vessel spends out of the water." },
        { title: "Genuine Parts", desc: "We use only original or manufacturer-approved parts and components." },
        { title: "Full Transparency", desc: "Detailed diagnostics, clear quotes, and progress updates at every stage of the service." },
      ],
      ctaBandTitle: "Your vessel deserves the best technical care",
      ctaBandSubtitle: "Talk to our team and request a no-obligation quote.",
      ctaBandButton: "Talk to a Specialist",
    },
    services: {
      eyebrow: "Our Catalog",
      title: "Specialized Technical Services",
      subtitle:
        "Every vessel demands specific attention. Explore our complete line of technical services, designed to preserve the performance, safety, and value of your nautical asset.",
      quote: "Request a Quote",
      learnMore: "Learn more",
      list: [
        {
          name: "Preventive Maintenance",
          tag: "Recommended",
          desc: "Scheduled inspections and periodic care that prevent failures, extend system lifespan, and ensure safe navigation.",
          points: ["Full systems checklist", "Fluid and filter changes", "Detailed technical report"],
        },
        {
          name: "Corrective Maintenance",
          tag: "Fast Response",
          desc: "Precise diagnostics and repair of identified issues, restoring full vessel operation quickly.",
          points: ["Advanced technical diagnostics", "Repairs with approved parts", "Post-repair performance testing"],
        },
        {
          name: "Engine Repairs",
          tag: "Specialty",
          desc: "Specialized marine engine service — overhaul, inspection, component replacement, and performance optimization.",
          points: ["Diesel and gasoline engines", "Full propulsion overhaul", "Balancing and fine-tuning"],
        },
        {
          name: "Outdrive Repairs",
          tag: "Specialty",
          desc: "Maintenance and repair of outdrives, including seals, bellows, propellers, and propulsion alignment.",
          points: ["Seal and bellow replacement", "Drive unit alignment", "Propeller replacement"],
        },
        {
          name: "General Maintenance",
          tag: "Complete",
          desc: "Comprehensive vessel care — electrical, hydraulic, air conditioning, onboard systems, and hull.",
          points: ["Electrical and electronic systems", "Air conditioning and refrigeration", "Hull, paint, and finishing"],
        },
        {
          name: "Specialized Nautical Assistance",
          tag: "24/7",
          desc: "Specialized technical support across the full scope of the vessel, including emergency service at the marina or underway.",
          points: ["24/7 emergency service", "Marina or on-route support", "Specialized mobile team"],
        },
      ],
      processTitle: "How We Work",
      process: [
        { step: "01", title: "Diagnostics", desc: "Complete technical assessment of the vessel and identification of needs." },
        { step: "02", title: "Quote", desc: "Clear, detailed proposal with no surprises and a defined timeline." },
        { step: "03", title: "Execution", desc: "Service performed by specialized technicians using approved parts." },
        { step: "04", title: "Delivery", desc: "Final testing, technical report, and post-service follow-up." },
      ],
    },
    about: {
      eyebrow: "About TechService",
      title: "Specialists dedicated to the nautical world",
      p1: "TechService was born from a passion for the sea and a constant pursuit of technical excellence. For over 15 years we have provided specialized technical service for boats and yachts, combining deep nautical engineering knowledge with close, transparent service.",
      p2: "Our team is made up of technicians certified across leading marine engine brands, propulsion systems, and onboard electronics. Every intervention is carried out with technical rigor, detailed documentation, and commitment to deadlines.",
      missionTitle: "Mission",
      mission: "To ensure every vessel in our care sails with maximum safety, performance, and reliability.",
      visionTitle: "Vision",
      vision: "To be the reference in specialized nautical technical service, recognized for precision and client trust.",
      valuesTitle: "Values",
      values: ["Technical Excellence", "Transparency", "Commitment to Deadlines", "Safety First"],
      credEyebrow: "Credentials",
      credTitle: "Proven technical capability",
      creds: [
        { title: "Manufacturer Certification", desc: "Technicians trained and certified by leading engine and nautical systems brands." },
        { title: "Precision Tools", desc: "State-of-the-art diagnostic and maintenance equipment." },
        { title: "Complete Documentation", desc: "Detailed technical reports for every service performed." },
      ],
      teamEyebrow: "Our Team",
      teamTitle: "Professionals who understand the sea and mechanics",
      teamDesc: "Mechanics, marine electricians, and engineers dedicated exclusively to the nautical sector — continuously trained to keep up with the latest technologies in propulsion, electronics, and onboard systems.",
    },
    fleet: {
      eyebrow: "Fleet Serviced",
      title: "Trusted by owners, marinas, and partners",
      subtitle:
        "We service a diverse fleet of vessels and maintain strategic partnerships with marinas and distributors to guarantee the best technical support and parts availability.",
      typesTitle: "Types of vessels serviced",
      types: [
        { name: "Boats & Runabouts", desc: "Complete maintenance for sport and leisure boats." },
        { name: "Yachts", desc: "Specialized service for medium and large vessels." },
        { name: "Sailboats", desc: "Technical support for propulsion and electrical systems." },
        { name: "Jet Boats & PWC", desc: "Maintenance for jet skis and high-performance craft." },
      ],
      partnersTitle: "Partners & Marinas",
      partnersDesc: "We work alongside marinas, parts distributors, and manufacturers to ensure speed and quality in every service.",
      testimonialsTitle: "What our clients say",
      testimonials: [
        { quote: "Fast, extremely technical service. My vessel has never been so well cared for.", author: "Ricardo A.", role: "Yacht Owner" },
        { quote: "A trusted team for all our marina's maintenance. Professionalism from start to finish.", author: "Marina Porto Sul", role: "Partner" },
        { quote: "They fixed a critical engine issue in record time, right before an important trip.", author: "Fernanda L.", role: "Boat Owner" },
      ],
      investorsTitle: "For Investors & Partners",
      investorsDesc: "We seek long-term relationships with marinas, distributors, and investors interested in expanding TechService's presence in the nautical sector. Get in touch to explore partnership opportunities.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's take care of your vessel",
      subtitle: "Fill out the form or speak directly with our team. We respond within 24 hours.",
      formName: "Full name",
      formEmail: "Email",
      formPhone: "Phone / WhatsApp",
      formVessel: "Vessel model",
      formMessage: "Describe what you need",
      formSubmit: "Send Request",
      infoTitle: "Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Marina",
      addressValue: "Av. Agílio Leão de Macedo, 10 — Caiobá, Matinhos - PR, 83260-000, Brazil",
      hours: "Business Hours",
      hoursValue: "Mon–Sat: 7am to 7pm · Emergencies 24/7",
      mapNote: "Location map",
      thanks: "Request sent! Our team will get back to you shortly.",
    },
    footer: {
      tagline: "Specialized technical service for boats and yachts.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      fleet: "Flota y Socios",
      contact: "Contacto",
      cta: "Solicitar Presupuesto",
    },
    langNames: { pt: "PT", en: "EN", es: "ES" },
    home: {
      eyebrow: "Servicio Técnico Especializado",
      title: "Excelencia técnica al servicio de su embarcación",
      subtitle:
        "Mantenimiento preventivo, correctivo y asistencia náutica especializada para embarcaciones y yates. Precisión, confiabilidad y experiencia en cada intervención.",
      ctaPrimary: "Solicitar Presupuesto",
      ctaSecondary: "Nuestros Servicios",
      trustEyebrow: "Confianza construida en el mar",
      stats: [
        { value: "15+", label: "Años de Experiencia" },
        { value: "800+", label: "Embarcaciones Atendidas" },
        { value: "24/7", label: "Asistencia de Emergencia" },
        { value: "98%", label: "Clientes Satisfechos" },
      ],
      servicesEyebrow: "Qué Hacemos",
      servicesTitle: "Servicio técnico completo, del casco al motor",
      servicesSubtitle:
        "Un equipo especializado, herramientas de precisión y protocolos rigurosos para mantener su embarcación siempre lista para navegar.",
      viewAllServices: "Ver todos los servicios",
      whyEyebrow: "Por qué TechService",
      whyTitle: "Estándar de calidad náutica premium",
      why: [
        { title: "Técnicos Certificados", desc: "Equipo especializado con certificación en motores marinos y sistemas náuticos de las principales marcas." },
        { title: "Respuesta Rápida", desc: "Atención de emergencia y plazos de ejecución optimizados para minimizar el tiempo fuera del agua." },
        { title: "Piezas Originales", desc: "Utilizamos solo piezas y componentes originales u homologados por los fabricantes." },
        { title: "Transparencia Total", desc: "Diagnóstico detallado, presupuesto claro y seguimiento en cada etapa del servicio." },
      ],
      ctaBandTitle: "Su embarcación merece el mejor cuidado técnico",
      ctaBandSubtitle: "Hable con nuestro equipo y solicite un presupuesto sin compromiso.",
      ctaBandButton: "Hablar con un Especialista",
    },
    services: {
      eyebrow: "Nuestro Catálogo",
      title: "Servicios Técnicos Especializados",
      subtitle:
        "Cada embarcación exige atención específica. Conozca nuestra línea completa de servicios técnicos, pensados para preservar el rendimiento, la seguridad y el valor de su patrimonio náutico.",
      quote: "Solicitar Presupuesto",
      learnMore: "Saber más",
      list: [
        {
          name: "Mantenimiento Preventivo",
          tag: "Recomendado",
          desc: "Inspecciones programadas y cuidados periódicos que evitan fallas, prolongan la vida útil de los sistemas y garantizan una navegación segura.",
          points: ["Checklist completo de sistemas", "Cambio de fluidos y filtros", "Informe técnico detallado"],
        },
        {
          name: "Mantenimiento Correctivo",
          tag: "Respuesta Rápida",
          desc: "Diagnóstico preciso y reparación de fallas identificadas, restableciendo el pleno funcionamiento de la embarcación con rapidez.",
          points: ["Diagnóstico técnico avanzado", "Reparación con piezas homologadas", "Pruebas de rendimiento post-reparación"],
        },
        {
          name: "Reparación de Motores",
          tag: "Especialidad",
          desc: "Servicio especializado en motores marinos — rectificación, revisión, cambio de componentes y optimización de rendimiento.",
          points: ["Motores diésel y gasolina", "Revisión completa de propulsión", "Balanceo y ajuste fino"],
        },
        {
          name: "Reparación de Colas / Rabetas",
          tag: "Especialidad",
          desc: "Mantenimiento y reparación de rabetas (outdrives), incluyendo sellos, fundas, hélices y alineación del conjunto propulsor.",
          points: ["Cambio de sellos y funda", "Alineación del conjunto", "Sustitución de hélices"],
        },
        {
          name: "Mantenimiento General",
          tag: "Completo",
          desc: "Cuidado integral de la embarcación — eléctrico, hidráulico, aire acondicionado, sistemas de a bordo y casco.",
          points: ["Sistemas eléctricos y electrónicos", "Aire acondicionado y refrigeración", "Casco, pintura y acabado"],
        },
        {
          name: "Asistencia Náutica Especializada",
          tag: "24/7",
          desc: "Soporte técnico especializado en todo el alcance de la embarcación, incluyendo atención de emergencia en marina o en ruta.",
          points: ["Atención de emergencia 24/7", "Soporte en marina o en ruta", "Equipo móvil especializado"],
        },
      ],
      processTitle: "Cómo Trabajamos",
      process: [
        { step: "01", title: "Diagnóstico", desc: "Evaluación técnica completa de la embarcación e identificación de necesidades." },
        { step: "02", title: "Presupuesto", desc: "Propuesta clara, detallada y sin sorpresas, con plazo definido." },
        { step: "03", title: "Ejecución", desc: "Servicio realizado por técnicos especializados con piezas homologadas." },
        { step: "04", title: "Entrega", desc: "Pruebas finales, informe técnico y seguimiento post-servicio." },
      ],
    },
    about: {
      eyebrow: "Sobre TechService",
      title: "Especialistas dedicados al universo náutico",
      p1: "TechService nació de la pasión por el mar y la búsqueda constante de excelencia técnica. Actuamos desde hace más de 15 años ofreciendo servicio técnico especializado para embarcaciones y yates, uniendo un profundo conocimiento de ingeniería náutica con una atención cercana y transparente.",
      p2: "Nuestro equipo está formado por técnicos certificados en las principales marcas de motores marinos, sistemas de propulsión y electrónica embarcada. Cada intervención se realiza con rigor técnico, documentación detallada y compromiso con los plazos.",
      missionTitle: "Misión",
      mission: "Garantizar que cada embarcación bajo nuestro cuidado navegue con máxima seguridad, rendimiento y confiabilidad.",
      visionTitle: "Visión",
      vision: "Ser referencia en servicio técnico náutico especializado, reconocida por la precisión y la confianza de nuestros clientes.",
      valuesTitle: "Valores",
      values: ["Excelencia Técnica", "Transparencia", "Compromiso con los Plazos", "Seguridad Primero"],
      credEyebrow: "Credenciales",
      credTitle: "Capacidad técnica comprobada",
      creds: [
        { title: "Certificación de Fabricantes", desc: "Técnicos entrenados y certificados por las principales marcas de motores y sistemas náuticos." },
        { title: "Herramientas de Precisión", desc: "Equipos de diagnóstico y mantenimiento de última generación." },
        { title: "Documentación Completa", desc: "Informes técnicos detallados en cada servicio ejecutado." },
      ],
      teamEyebrow: "Nuestro Equipo",
      teamTitle: "Profesionales que entienden de mar y mecánica",
      teamDesc: "Mecánicos, electricistas navales e ingenieros dedicados exclusivamente al sector náutico — entrenados continuamente para seguir las tecnologías más recientes en propulsión, electrónica y sistemas de a bordo.",
    },
    fleet: {
      eyebrow: "Flota Atendida",
      title: "Confianza de propietarios, marinas y socios",
      subtitle:
        "Atendemos una flota diversa de embarcaciones y mantenemos alianzas estratégicas con marinas y distribuidores para garantizar el mejor soporte técnico y disponibilidad de piezas.",
      typesTitle: "Tipos de embarcación atendidos",
      types: [
        { name: "Lanchas y Runabouts", desc: "Mantenimiento completo para lanchas deportivas y de ocio." },
        { name: "Yates", desc: "Servicio especializado para embarcaciones medianas y grandes." },
        { name: "Veleros", desc: "Soporte técnico para sistemas de propulsión y eléctricos de veleros." },
        { name: "Jet Boats y Motos de Agua", desc: "Mantenimiento de motos acuáticas y embarcaciones de alto rendimiento." },
      ],
      partnersTitle: "Socios y Marinas",
      partnersDesc: "Trabajamos junto a marinas, distribuidores de piezas y fabricantes para garantizar agilidad y calidad en cada atención.",
      testimonialsTitle: "Lo que dicen nuestros clientes",
      testimonials: [
        { quote: "Atención rápida y extremadamente técnica. Mi embarcación nunca estuvo tan bien cuidada.", author: "Ricardo A.", role: "Propietario de Yate" },
        { quote: "Equipo de confianza para todo el mantenimiento de nuestra marina. Profesionalismo de principio a fin.", author: "Marina Porto Sul", role: "Socio" },
        { quote: "Resolvieron un problema crítico del motor en tiempo récord, antes de un viaje importante.", author: "Fernanda L.", role: "Propietaria de Lancha" },
      ],
      investorsTitle: "Para Inversores y Socios",
      investorsDesc: "Buscamos relaciones a largo plazo con marinas, distribuidores e inversores interesados en expandir la presencia de TechService en el sector náutico. Contáctenos para explorar oportunidades de asociación.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Cuidemos su embarcación",
      subtitle: "Complete el formulario o hable directamente con nuestro equipo. Respondemos en un plazo de 24 horas.",
      formName: "Nombre completo",
      formEmail: "Correo electrónico",
      formPhone: "Teléfono / WhatsApp",
      formVessel: "Modelo de la embarcación",
      formMessage: "Describa lo que necesita",
      formSubmit: "Enviar Solicitud",
      infoTitle: "Información de Contacto",
      phone: "Teléfono",
      email: "Correo electrónico",
      address: "Marina",
      addressValue: "Av. Agílio Leão de Macedo, 10 — Caiobá, Matinhos - PR, 83260-000, Brasil",
      hours: "Horario de Atención",
      hoursValue: "Lun–Sáb: 7h a 19h · Emergencias 24/7",
      mapNote: "Mapa de ubicación",
      thanks: "¡Solicitud enviada! Nuestro equipo se pondrá en contacto en breve.",
    },
    footer: {
      tagline: "Servicio técnico especializado para embarcaciones y yates.",
      servicesTitle: "Servicios",
      companyTitle: "Empresa",
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
    },
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolve(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("ts-lang") : null;
    if (stored === "pt" || stored === "en" || stored === "es") return stored;
    return "pt";
  });

  useEffect(() => {
    window.localStorage.setItem("ts-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (path: string) => resolve(dictionaries[lang], path);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
