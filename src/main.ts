import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { createI18n, I18nOptions } from 'vue-i18n';
// import enUS from './locales/en-US.json';
// import deDE from './locales/de-DE.json';

function getBrowserLocale(options = {}) {
  const defaultOptions = { countryCodeOnly: false }
  const opt = { ...defaultOptions, ...options }
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language
  if (!navigatorLocale) {
    return undefined
  }
  const trimmedLocale = opt.countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim()
  return trimmedLocale
}

const browserLocale = getBrowserLocale();
let defaultLocale = 'en-US'
if (browserLocale?.startsWith('en')) { 
  defaultLocale = 'en-US';
}

// if (browserLocale?.startsWith('de')) {
//   defaultLocale = 'de-DE';
// }

// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = any;

const i18n = createI18n<I18nOptions, [MessageSchema], 'en-US' | 'de-De'>({
  legacy: false,
  locale: defaultLocale,
  messages: {
    // 'en-US': enUS,
    // 'de-DE': deDE
  }
})

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n);
  
router.isReady().then(() => {
  app.mount('#app');
});