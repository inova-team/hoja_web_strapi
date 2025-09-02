export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:5500',   // ejemplo: Live Server en VSCode
        'http://127.0.0.1:5500',
        'http://localhost:3000',   // otro ejemplo si usas React/Vite local
        'https://hoja.pe',  // tu dominio en producción (Vercel/Netlify)
        'https://www.hoja.pe',
        'https://www.hoja.pe/*',
        'https://hoja.pe/*',
        'https://hoja-web.vercel.app  ',
        'https://hoja-web.vercel.app/*',
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
