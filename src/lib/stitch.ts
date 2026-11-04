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

  const sectionAnchors: Record<typeof page, Array<[string, string]>> = {
    home: [['Filo Kapasitesi', 'filo'], ['Kapsamlı Lojistik Hizmetlerimiz', 'services']],
    about: [],
    services: [],
    contact: [['Doğrudan Teklif Masası', 'teklif']],
  };

  for (const [label, id] of sectionAnchors[page]) {
    const labelIndex = content.indexOf(label);
    const sectionIndex = content.lastIndexOf('<section', labelIndex);
    const tagEnd = content.indexOf('>', sectionIndex);
    if (labelIndex >= 0 && sectionIndex >= 0 && tagEnd >= 0) {
      content = `${content.slice(0, sectionIndex)}<section id="${id}"${content.slice(sectionIndex + '<section'.length, tagEnd + 1)}${content.slice(tagEnd + 1)}`;
    }
  }

  headContent = headContent.replace(/<meta\b[^>]*name=["']shell-type["'][^>]*>/gi, '');
  return { bodyClass, content, headContent };
}

export function prepareDesktopStitchPage(source: string, page: 'home' | 'about' | 'services' | 'contact') {
  const { content, ...metadata } = prepareStitchPage(source, page, false);
  const desktopContent = content.replace(
    /url\((["']?)https:\/\/lh3\.googleusercontent\.com\/[^)"']+\1\)/gi,
    "url('/assets/fleet.png')",
  );
  return { ...metadata, content: desktopContent };
}
