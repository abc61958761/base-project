import en from "../lang/en-US.js";
import fr from "../lang/fr-FR.js";
import es from "../lang/es-ES.js";

export const API_ROOT = "https://jsonplaceholder.typicode.com/";

export const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English",
    },
    {
      code: "fr",
      iso: "fr-FR",
      name: "Français",
    },
    {
      code: "es",
      iso: "es-ES",
      name: "Español",
    },
  ],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages: { en, fr, es },
  },
};
