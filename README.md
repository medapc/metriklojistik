# Metrik Lojistik

Astro tabanlı statik site. Dört sayfanın masaüstü tasarımı 1024 px ve üzerindeki ekranlarda `stitch_metrik_lojistik_corporate_website(desktop edition)` klasöründen yüklenir; daha dar ekranlarda mevcut mobil tasarım kullanılır. Görseller `public/assets` altında sunulur.

## Yerel geliştirme

```sh
npm install
npm run dev
```

## Cloudflare Pages

```sh
npm run build
npx wrangler pages deploy dist --project-name metriklojistik
```

Cloudflare Pages panelinde build komutu `npm run build`, çıktı klasörü `dist` olmalıdır. Özel alan adı Cloudflare Pages projesine bağlandıktan sonra `https://metriklojistik.com` için hazırdır.
