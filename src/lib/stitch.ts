const routes: Record<string, string> = {
  'ana-sayfa': '/',
  hakkimizda: '/hakkimizda/',
  hizmetlerimiz: '/hizmetlerimiz/',
  'filo-ve-operasyon': '/#filo',
  iletisim: '/iletisim/',
  'fiyat-teklifi': '/iletisim/#teklif',
  'kvkk-ve-gizlilik': '/iletisim/',
  'cerez-politikasi': '/iletisim/',
  'tasima-sozlesmesi': '/iletisim/',
};

const imageFor = (alt: string) => {
  const text = alt.toLocaleLowerCase('tr-TR');

  if (/whatsapp/.test(text)) return '/assets/whatsapp.png';
  if (/^(metrik lojistik|logo\.png)$/.test(text)) return '/assets/logo.png';
  if (/cold|refrigerat|pharma|soğuk|frigor|ısı kontroll/.test(text)) {
    return '/assets/cold-chain.png';
  }
  if (/control|operator|monitor|kontrol merkezi|telematik/.test(text)) {
    return '/assets/control-room.png';
  }
  if (/fleet|truck|freight|transport|road|heavy|highway|tır|filo|çekici/.test(text)) {
    return '/assets/fleet.png';
  }
  if (/headquarter|executive|corporate|office|kurumsal|merkez|team|ekip/.test(text)) {
    return '/assets/headquarters.png';
  }
  return '/assets/fleet.png';
};

const removeDuplicateBrandText = (content: string) =>
  content
    .replace(
      /(<img\b(?=[^>]*\bsrc=["']\/assets\/logo\.png["'])[^>]*>)\s*(<span\b[^>]*>METR[İI]K\s*LOJ[İI]ST[İI]K<\/span>)/gi,
      '$1',
    )
    .replace(
      /(<img\b(?=[^>]*\bsrc=["']\/assets\/logo\.png["'])[^>]*>)\s*(<div\b[^>]*class=["'][^"']*\bflex-col\b[^"']*["'][^>]*>[\s\S]*?<\/div>)/gi,
      (match, logo: string, textBlock: string) =>
        /METR[İI]K\s+LOJ[İI]ST[İI]K/i.test(textBlock.replace(/<[^>]*>/g, '')) ? logo : match,
    );

const normalizeContactDetails = (content: string) =>
  content
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, 'info@metriklojistik.com')
    .replace(/Ramazan\s+(?:Ölçücü|Olcucu)/gi, '');

const removeElementAt = (html: string, start: number, tagName: string) => {
  const tags = new RegExp(`<${tagName}\\b[^>]*>|<\\/${tagName}\\s*>`, 'gi');
  tags.lastIndex = start;
  let depth = 0;
  let match: RegExpExecArray | null;

  while ((match = tags.exec(html))) {
    depth += match[0].startsWith(`</`) ? -1 : 1;
    if (depth === 0) {
      return html.slice(0, start) + html.slice(tags.lastIndex);
    }
  }

  throw new Error(`Could not find the closing ${tagName} tag for the home operational banner.`);
};

const removeHomeOperationalBanners = (content: string) => {
  const mobileBannerStart = content.indexOf('<div class="w-full bg-primary-container');
  if (mobileBannerStart >= 0) content = removeElementAt(content, mobileBannerStart, 'div');

  const desktopBannerStart = content.indexOf('<section class="w-full bg-surface-container-high');
  if (desktopBannerStart >= 0) content = removeElementAt(content, desktopBannerStart, 'section');

  return content;
};

const sectionAnchors: Record<'home' | 'about' | 'services' | 'contact', Array<[string, string]>> = {
  home: [
    ['Filo Kapasitesi', 'filo'],
    ['Kapsamlı Lojistik Hizmetlerimiz', 'services'],
    ['Stratejik Karayolu Taşımacılık Koridorları', 'routes'],
    ['Yüksek Standartlı Filo ve Rota Optimizasyonu', 'fleetStandards'],
    ['1.500.000+', 'stats'],
  ],
  about: [],
  services: [],
  contact: [['Doğrudan Teklif Masası', 'teklif']],
};

const createSiteHeader = (page: 'home' | 'about' | 'services' | 'contact') => {
  const links: Array<[string, string, typeof page | undefined]> = [
    ['/', 'Ana Sayfa', 'home'],
    ['/hakkimizda/', 'Hakkımızda', 'about'],
    ['/hizmetlerimiz/', 'Hizmetlerimiz', 'services'],
    ['/iletisim/', 'İletişim', 'contact'],
  ];

  return `<header class="site-header">
    <div class="site-topbar">
      <div class="site-topbar-inner">
        <div class="site-contact-links">
          <a href="tel:+902623190041"><span class="material-symbols-outlined" aria-hidden="true">call</span>+90 262 319 0041</a>
          <a href="tel:+905337639584"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span>+90 533 763 95 84</a>
          <a href="mailto:info@metriklojistik.com"><span class="material-symbols-outlined" aria-hidden="true">mail</span>info@metriklojistik.com</a>
        </div>
        <span class="site-hours"><span class="material-symbols-outlined" aria-hidden="true">schedule</span>Pzt - Cmt: 08:30 - 18:30</span>
      </div>
    </div>
    <div class="site-mainbar">
      <div class="site-header-inner">
        <a class="site-brand" href="/" aria-label="Metrik Lojistik Ana Sayfa"><img src="/assets/logo.png" alt="Metrik Lojistik" /></a>
        <nav class="site-nav" aria-label="Ana menü">
          ${links.map(([href, label, route]) => `<a href="${href}"${route === page ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
        <div class="site-header-actions">
          <a class="site-action site-whatsapp" href="https://wa.me/905337639584" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın"><span class="material-symbols-outlined" aria-hidden="true">chat</span><span>WhatsApp</span></a>
          <a class="site-action site-phone" href="tel:+905337639584" aria-label="Hemen arayın"><span class="material-symbols-outlined" aria-hidden="true">call</span><span>Hemen Ara</span></a>
          <a class="site-quote" href="/iletisim/"><span class="material-symbols-outlined" aria-hidden="true">request_quote</span><span>Hemen Teklif Al</span></a>
          <button class="site-menu-toggle" type="button" aria-label="Menüyü Aç" aria-expanded="false"><span class="material-symbols-outlined" aria-hidden="true">menu</span></button>
        </div>
      </div>
    </div>
  </header>`;
};

export function prepareStitchPage(
  source: string,
  page: 'home' | 'about' | 'services' | 'contact',
  includeDesktopNav = true,
) {
  const head = source.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  const body = source.match(/<body\b([^>]*)>([\s\S]*?)<\/body>/i);

  if (!head || !body) {
    throw new Error(`Stitch HTML is missing a head or body element (${page}).`);
  }

  const bodyClass = body[1].match(/\bclass=["']([^"']*)["']/i)?.[1] ?? '';
  let headContent = head[1]
    .replace(/<script\b[^>]*src=["']https:\/\/cdn\.tailwindcss\.com["'][^>]*><\/script>/gi, '')
    .replace(/<script\b[^>]*id=["']tailwind-config["'][^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<meta\b[^>]*name=["']viewport["'][^>]*>/gi, '');

  let content = body[2].replace(/<img\b[^>]*>/gi, (tag) => {
    if (!/src=["']https:\/\/lh3\.googleusercontent\.com\//i.test(tag)) return tag;
    const alt = tag.match(/\b(?:data-alt|alt)=["']([^"']*)["']/i)?.[1] ?? '';
    return tag.replace(/\bsrc=["'][^"']*["']/i, `src="${imageFor(alt)}"`);
  });

  content = removeDuplicateBrandText(content);

  content = content.replace(/<a\b[^>]*>/gi, (tag) => {
    const path = tag.match(/\bdata-path=["']([^"']+)["']/i)?.[1];
    const href = path ? routes[path] : undefined;
    const updated = tag.replace(/\sdata-path=["'][^"']*["']/i, '');

    if (href) return updated.replace(/\bhref=["'][^"']*["']/i, `href="${href}"`);
    if (/<img\b[^>]*alt=["']Metrik Lojistik["']/i.test(tag)) {
      return updated.replace(/\bhref=["'][^"']*["']/i, 'href="/"');
    }
    return updated.replace(/\bhref=["']#["']/i, 'href="/iletisim/#teklif"');
  });

  content = content.replace(/tel:\+908502550000/g, 'tel:+905337639584');
  content = content.replace(/https:\/\/maps\.google\.com/g, 'https://www.google.com/maps/search/?api=1&query=Metrik+Lojistik');
  if (includeDesktopNav) {
    content = content.replace(
      /<header\b[^>]*>/i,
      (tag) => `${tag}<nav class="desktop-nav" aria-label="Ana menü"><a href="/">Ana Sayfa</a><a href="/hakkimizda/">Hakkımızda</a><a href="/hizmetlerimiz/">Hizmetlerimiz</a><a href="/#filo">Filomuz</a><a href="/iletisim/">İletişim</a></nav>`,
    );
  }

  content = content.replace(/<header\b[^>]*>[\s\S]*?<\/header>/i, createSiteHeader(page));
  if (page === 'home') {
    content = removeHomeOperationalBanners(content)
      .replace('Mobil &amp; Sevk Hattı', 'Mobil')
      .replace('Merkez Ofis Santral', 'Sabit')
      .replace('Acil Lojistik &amp; Operasyon', 'Mobil 2');
  }

  for (const [label, id] of sectionAnchors[page]) {
    const labelIndex = content.indexOf(label);
    const sectionIndex = content.lastIndexOf('<section', labelIndex);
    const tagEnd = content.indexOf('>', sectionIndex);
    if (labelIndex >= 0 && sectionIndex >= 0 && tagEnd >= 0) {
      content = `${content.slice(0, sectionIndex)}<section id="${id}"${content.slice(sectionIndex + '<section'.length, tagEnd + 1)}${content.slice(tagEnd + 1)}`;
    }
  }

  headContent = headContent.replace(/<meta\b[^>]*name=["']shell-type["'][^>]*>/gi, '');
  return {
    bodyClass,
    content: normalizeContactDetails(content),
    headContent: normalizeContactDetails(headContent),
  };
}

export function prepareDesktopStitchPage(source: string, page: 'home' | 'about' | 'services' | 'contact') {
  const { content, ...metadata } = prepareStitchPage(source, page, false);
  let desktopContent = content.replace(
    /url\((["']?)https:\/\/lh3\.googleusercontent\.com\/[^)"']+\1\)/gi,
    "url('/assets/fleet.png')",
  );

  const anchorIds = [...sectionAnchors[page].map(([, id]) => id), ...(page === 'contact' ? ['teklif'] : [])];
  for (const id of anchorIds) {
    desktopContent = desktopContent
      .replace(new RegExp(`\\bid=(["'])${id}\\1`, 'g'), `id="desktop-${id}"`)
      .replace(new RegExp(`(href=["'][^"']*#)${id}(["'])`, 'g'), `$1desktop-${id}$2`);
  }

  return { ...metadata, content: desktopContent };
}
