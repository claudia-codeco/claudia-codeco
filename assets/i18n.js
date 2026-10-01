/* i18n PT/EN — detecção automática pelo idioma do navegador
   (navigator.language), com alternador manual que grava a
   preferência em localStorage. Carregar antes de main.js. */

const I18N = {
  pt: {
    'meta.title': 'Claudia Torres Codeço — Pesquisadora em Saúde Pública | Fiocruz',
    'meta.desc': 'Página pessoal de Claudia Torres Codeço, Pesquisadora Titular da Fiocruz. Epidemiologia, ecologia de doenças sensíveis ao clima, InfoDengue, Saúde Única.',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.edu': 'Formação',
    'nav.pubs': 'Publicações',
    'hero.kicker': 'Fundação Oswaldo Cruz · Rio de Janeiro',
    'hero.role': 'Pesquisadora Titular em Saúde Pública',
    'hero.tagline': 'Epidemiologia e ecologia de doenças sensíveis ao clima · Saúde Única · vigilância epidemiológica e modelagem matemática',
    'hero.lattes': 'Currículo Lattes',
    'photo.alt': 'Fotografia de Claudia Torres Codeço',
    'metrics.aria': 'Indicadores acadêmicos',
    'm.works': 'Publicações no ORCID',
    'm.citations': 'Citações desde 2021 · Google Scholar',
    'm.h': 'Índice-h · Google Scholar',
    'm.i10': 'Índice i10 · Google Scholar',
    'about.title': 'Sobre',
    'bio.p1': 'Claudia Codeço é Pesquisadora Titular em Saúde Pública da Fundação Oswaldo Cruz (Fiocruz), com mais de 100 artigos publicados nas áreas de epidemiologia e ecologia de doenças sensíveis ao clima. É orientadora de mestrado e doutorado nos programas de Epidemiologia em Saúde Pública e de Medicina Tropical da Fiocruz, e atuou como consultora do Ministério da Saúde em diversas emergências de saúde pública, incluindo zika, H1N1 e covid-19.',
    'bio.p2': 'Bióloga, com doutorado em Ecologia Quantitativa, iniciou sua trajetória na modelagem do cólera, conectando ambiente e dinâmica de transmissão. Com a emergência da dengue como problema de saúde pública, passou a trabalhar com entomologistas e epidemiologistas em estudos de campo e laboratório para parametrizar modelos matemáticos da doença. Entre 2008 e 2011, liderou um projeto multicêntrico para aproximar matemáticos e epidemiologistas no Brasil, fortalecendo o campo da epidemiologia matemática. Desde 2014, colidera o sistema <a href="https://info.dengue.mat.br" target="_blank" rel="noopener">InfoDengue</a>, que aplica indicadores baseados em modelos à vigilância da dengue, gerando alertas precoces em nível local e nacional.',
    'bio.p3': 'Desde 2010, dedica-se também à epidemiologia da paisagem, campo que estuda as relações entre a dinâmica das doenças e a paisagem social e ecológica — investigando a expansão da dengue e a persistência da malária em áreas da Amazônia transformadas por atividades econômicas e programas de assentamento. Nesse período, integrou grupos de síntese científica no NCEAS, SESYNC e Sinbiose/CNPq.',
    'bio.p4': 'Desde 2019, participa do grupo <a href="https://trajetorias-sinbiose.github.io/" target="_blank" rel="noopener">Trajetórias</a>, dedicado ao estudo das trajetórias econômicas, epidemiológicas e ecológicas dos municípios amazônicos na perspectiva da Saúde Planetária. Atualmente integra também os projetos HARMONIZE e IDExtremes (Wellcome Trust), que desenvolvem dados e ferramentas de modelagem para construir resiliência local frente a doenças infecciosas emergentes em pontos críticos de mudança climática.',
    'projects.title': 'Projetos de Pesquisa',
    'proj.link': 'Visitar site',
    'proj.infodengue.tag': 'Vigilância epidemiológica · desde 2014',
    'proj.infodengue.desc': 'Sistema nacional de alerta precoce para dengue, zika e chikungunya que cobre mais de 5.000 municípios brasileiros. Cruza dados de casos notificados, clima e mídias sociais para emitir níveis de alerta semanais, orientando a vigilância em nível local e nacional.',
    'proj.trajetorias.tag': 'Saúde Planetária · desde 2019',
    'proj.trajetorias.desc': 'Rede de pesquisa dedicada às trajetórias econômicas, epidemiológicas e ecológicas dos municípios amazônicos na perspectiva da Saúde Planetária. Na fase atual, desenvolve o estudo de coorte “Trajetórias — Baixo Tocantins” em comunidades rurais de Cametá e Mocajuba (PA), investigando saúde, sistemas produtivos de açaí e cacau e adaptação às mudanças climáticas.',
    'proj.sesam.tag': 'Síntese de conhecimento · SinBiose/CNPq',
    'proj.sesam.desc': 'Projeto de síntese de conhecimento “Uma Só Saúde na Amazônia”. Integra dados ambientais, socioeconômicos, epidemiológicos e ecológicos para subsidiar políticas de sociobiodiversidade, serviços ecossistêmicos e prevenção de zoonoses.',
    'proj.mosqlimate.tag': 'Previsão · dados abertos',
    'proj.mosqlimate.desc': 'Plataforma aberta de ciência de dados para o monitoramento e a previsão de riscos de doenças transmitidas por mosquitos no contexto das mudanças climáticas. Integra dados climáticos, epidemiológicos e entomológicos e hospeda modelos preditivos comparáveis, conectada ao InfoDengue.',
    'proj.harmonize.tag': 'Clima e saúde · Wellcome Trust',
    'proj.harmonize.desc': 'Projeto internacional que desenvolve dados e ferramentas de modelagem para construir resiliência local a doenças infecciosas emergentes em pontos críticos de mudança climática.',
    'proj.arboili.tag': 'Infovigilância',
    'proj.arboili.desc': 'Infovigilância precoce que cruza buscas online (Google Trends) por sintomas de dengue, chikungunya e SRAG com dados epidemiológicos oficiais (SINAN, SIVEP-Gripe) para detecção precoce de surtos.',
    'edu.title': 'Formação',
    'tl.2009.t': 'Pós-doutorado em Epidemiologia Teórica',
    'tl.2009.p': 'Instituto Gulbenkian de Ciência, Portugal',
    'tl.1998.t': 'PhD em Quantitative Biology',
    'tl.1998.p': 'University of Texas at Arlington, EUA',
    'tl.1995.t': 'MSc em Engenharia Biomédica',
    'tl.1995.p': 'Universidade Federal do Rio de Janeiro, Brasil',
    'tl.1991.t': 'BSc em Ciências Biológicas',
    'tl.1991.p': 'Universidade Federal do Rio de Janeiro, Brasil',
    'pubs.title': 'Publicações',
    'pubs.sub': 'trabalhos registrados no',
    'pubs.search.ph': 'Buscar por título ou periódico…',
    'pubs.search.aria': 'Buscar publicações',
    'pubs.all': 'Todos',
    'pubs.of': 'de',
    'pubs.nodate': 's.d.',
    'pubs.empty': 'Nenhuma publicação encontrada para este filtro.',
    'pubs.error': 'Não foi possível carregar os dados.',
    'footer.data': 'Dados de publicações e métricas: <a href="https://orcid.org/0000-0003-1174-178X" target="_blank" rel="noopener">ORCID</a> · <a href="https://scholar.google.com/citations?user=VEjEF-oAAAAJ" target="_blank" rel="noopener">Google Scholar</a> — atualizado em',
    'footer.host': 'Hospedado via GitHub Pages · <a href="https://github.com/claudia-codeco/claudia-codeco" target="_blank" rel="noopener">código-fonte</a>',
  },

  en: {
    'meta.title': 'Claudia Torres Codeço — Public Health Researcher | Fiocruz',
    'meta.desc': 'Personal page of Claudia Torres Codeço, Tenured Researcher at Fiocruz. Epidemiology, ecology of climate-sensitive diseases, InfoDengue, One Health.',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.edu': 'Education',
    'nav.pubs': 'Publications',
    'hero.kicker': 'Oswaldo Cruz Foundation · Rio de Janeiro',
    'hero.role': 'Tenured Researcher in Public Health',
    'hero.tagline': 'Epidemiology and ecology of climate-sensitive diseases · One Health · epidemiological surveillance and mathematical modelling',
    'hero.lattes': 'Lattes CV',
    'photo.alt': 'Photograph of Claudia Torres Codeço',
    'metrics.aria': 'Academic metrics',
    'm.works': 'Publications in ORCID',
    'm.citations': 'Citations since 2021 · Google Scholar',
    'm.h': 'h-index · Google Scholar',
    'm.i10': 'i10-index · Google Scholar',
    'about.title': 'About',
    'bio.p1': 'Claudia Codeço is a Tenured Researcher in Public Health at the Oswaldo Cruz Foundation (Fiocruz), with more than 100 articles published in the fields of epidemiology and the ecology of climate-sensitive diseases. She supervises master’s and doctoral students in the Fiocruz graduate programmes in Epidemiology in Public Health and Tropical Medicine, and has served as a consultant to the Brazilian Ministry of Health in several public health emergencies, including Zika, H1N1 and COVID-19.',
    'bio.p2': 'A biologist with a PhD in Quantitative Ecology, she began her career modelling cholera, connecting environment and transmission dynamics. As dengue emerged as a public health problem, she started working with entomologists and epidemiologists in field and laboratory studies to parameterise mathematical models of the disease. Between 2008 and 2011, she led a multicentre project bringing mathematicians and epidemiologists closer together in Brazil, strengthening the field of mathematical epidemiology. Since 2014, she has co-led the <a href="https://info.dengue.mat.br" target="_blank" rel="noopener">InfoDengue</a> system, which applies model-based indicators to dengue surveillance, generating early alerts at local and national levels.',
    'bio.p3': 'Since 2010, she has also worked in landscape epidemiology, a field that studies the relationships between disease dynamics and the social and ecological landscape — investigating the expansion of dengue and the persistence of malaria in areas of the Amazon transformed by economic activities and settlement programmes. During this period, she was a member of scientific synthesis groups at NCEAS, SESYNC and Sinbiose/CNPq.',
    'bio.p4': 'Since 2019, she has been part of the <a href="https://trajetorias-sinbiose.github.io/" target="_blank" rel="noopener">Trajetórias</a> group, dedicated to studying the economic, epidemiological and ecological trajectories of Amazonian municipalities from a Planetary Health perspective. She is also currently a member of the HARMONIZE and IDExtremes projects (Wellcome Trust), which develop data and modelling tools to build local resilience to emerging infectious diseases at climate change hotspots.',
    'projects.title': 'Research Projects',
    'proj.link': 'Visit website',
    'proj.infodengue.tag': 'Epidemiological surveillance · since 2014',
    'proj.infodengue.desc': 'Nationwide early-warning system for dengue, Zika and chikungunya covering more than 5,000 Brazilian municipalities. It cross-references notified case, climate and social media data to issue weekly alert levels, guiding surveillance at local and national levels.',
    'proj.trajetorias.tag': 'Planetary Health · since 2019',
    'proj.trajetorias.desc': 'Research network dedicated to the economic, epidemiological and ecological trajectories of Amazonian municipalities from a Planetary Health perspective. Its current phase is the “Trajetórias — Baixo Tocantins” cohort study in rural communities of Cametá and Mocajuba (Pará), investigating health, açaí and cocoa production systems and adaptation to climate change.',
    'proj.sesam.tag': 'Knowledge synthesis · SinBiose/CNPq',
    'proj.sesam.desc': 'Knowledge-synthesis project “One Health in the Amazon”. It integrates environmental, socioeconomic, epidemiological and ecological data to inform sociobiodiversity policies, ecosystem services and zoonosis prevention.',
    'proj.mosqlimate.tag': 'Forecasting · open data',
    'proj.mosqlimate.desc': 'Open data-science platform for monitoring and forecasting mosquito-borne disease risks in the context of climate change. It integrates climatic, epidemiological and entomological data and hosts comparable predictive models, connected to InfoDengue.',
    'proj.harmonize.tag': 'Climate and health · Wellcome Trust',
    'proj.harmonize.desc': 'International project developing data and modelling tools to build local resilience to emerging infectious diseases at climate change hotspots.',
    'proj.arboili.tag': 'Infoveillance',
    'proj.arboili.desc': 'Early infoveillance combining online searches for dengue, chikungunya and severe acute respiratory infection symptoms (Google Trends) with official epidemiological data (SINAN, SIVEP-Gripe) for early outbreak detection.',
    'edu.title': 'Education',
    'tl.2009.t': 'Postdoctoral fellowship in Theoretical Epidemiology',
    'tl.2009.p': 'Instituto Gulbenkian de Ciência, Portugal',
    'tl.1998.t': 'PhD in Quantitative Biology',
    'tl.1998.p': 'University of Texas at Arlington, USA',
    'tl.1995.t': 'MSc in Biomedical Engineering',
    'tl.1995.p': 'Federal University of Rio de Janeiro, Brazil',
    'tl.1991.t': 'BSc in Biological Sciences',
    'tl.1991.p': 'Federal University of Rio de Janeiro, Brazil',
    'pubs.title': 'Publications',
    'pubs.sub': 'works registered in',
    'pubs.search.ph': 'Search by title or journal…',
    'pubs.search.aria': 'Search publications',
    'pubs.all': 'All',
    'pubs.of': 'of',
    'pubs.nodate': 'n.d.',
    'pubs.empty': 'No publications found for this filter.',
    'pubs.error': 'The data could not be loaded.',
    'footer.data': 'Publication and metrics data: <a href="https://orcid.org/0000-0003-1174-178X" target="_blank" rel="noopener">ORCID</a> · <a href="https://scholar.google.com/citations?user=VEjEF-oAAAAJ" target="_blank" rel="noopener">Google Scholar</a> — updated on',
    'footer.host': 'Hosted via GitHub Pages · <a href="https://github.com/claudia-codeco/claudia-codeco" target="_blank" rel="noopener">source code</a>',
  },
};

/* Idioma ativo: preferência gravada > idioma do navegador > pt */
let LANG = (() => {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch (e) { /* localStorage indisponível */ }
  const nav = (navigator.language || 'pt').toLowerCase();
  return nav.startsWith('pt') ? 'pt' : 'en';
})();

function t(key) {
  return I18N[LANG]?.[key] ?? I18N.pt[key] ?? key;
}

/* Tipos de publicação (vêm em PT do ORCID/publications.json) */
const TYPE_EN = {
  'Artigo': 'Article',
  'Anais de congresso': 'Conference paper',
  'Livro': 'Book',
  'Outro': 'Other',
  'Preprint': 'Preprint',
  'Relatório técnico': 'Technical report',
};

function tType(type) {
  return LANG === 'en' ? (TYPE_EN[type] ?? type) : type;
}

function locale() {
  return LANG === 'pt' ? 'pt-BR' : 'en-GB';
}

function applyI18n() {
  document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : 'en';
  document.title = t('meta.title');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('meta.desc'));

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.setAttribute('placeholder', t(el.dataset.i18nPh));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.setAttribute('alt', t(el.dataset.i18nAlt));
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === LANG);
  });
}

function setLang(l, save = true) {
  if (l !== 'pt' && l !== 'en') return;
  LANG = l;
  try { if (save) localStorage.setItem('lang', l); } catch (e) { /* ignore */ }
  applyI18n();
  document.dispatchEvent(new CustomEvent('langchange'));
}

document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

/* Aplica o idioma detectado na carga inicial */
applyI18n();
