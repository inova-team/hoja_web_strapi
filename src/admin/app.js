// /src/admin/app.js

// Coloca estos archivos en /src/admin/extensions/
import AuthLogo from './extensions/logo_blanco_nav.jpeg';
import MenuLogo from './extensions/logo_blanco_nav.jpeg';
import Favicon from './extensions/favicon.ico';

const config = {
  // 1) Idiomas disponibles
  locales: ['es'],

  // 2) Traducciones opcionales
  translations: {
    es: {
      'Auth.form.email.label': 'Correo electrónico',
      'global.content-manager': 'Gestor de contenido',
      'content-type-builder.plugin.name': 'Constructor de Tipos de Contenido',
    },
  },

  // 3) Reducir ruido visual
  tutorials: false,
  notifications: { releases: false },

  // 4) Branding
  auth: { logo: AuthLogo },   // login
  menu: { logo: MenuLogo },   // sidebar
  head: { favicon: Favicon }, // favicon

  // 5) Tema
  theme: {
    light: {
      colors: {
        primary600: '#16a34a',
        primary700: '#15803d',
      },
    },
    dark: {
      colors: {
        primary600: '#16a34a',
        primary700: '#15803d',
      },
    },
  },
};

const bootstrap = (app) => {
  console.log('Strapi admin listo', app);
};

export default { config, bootstrap };
