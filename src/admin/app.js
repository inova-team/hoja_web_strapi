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
        // Base y texto
        neutral0: '#FFFFFF',   // fondo principal blanco
        neutral100: '#F9FAFB', // fondos suaves (cards, inputs)
        neutral800: '#2C3B2B', // texto en verde militar oscuro
  
        // Primarios
        primary600: '#3A4D39', // verde militar principal
        primary700: '#1E2A1D', // hover/activo
  
        // Acento
        alternative600: '#D4AF37', // dorado para detalles
      },
    },
    dark: {
      colors: {
        primary600: '#3A4D39',
        primary700: '#1E2A1D',
        alternative600: '#D4AF37',
      },
    },
  },
  
};

const bootstrap = (app) => {
  console.log('Strapi admin listo', app);
};

export default { config, bootstrap };
