import AuthLogo from "./extensions/favicon.png";
import MenuLogo from "./extensions/favicon.png";
import favicon from "./extensions/favicon.ico";

//import PluginIcon from "./components/PluginIcon";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "COTE Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Workplace",
      },
    },
    theme: {
      colors: {
        // danger100: "#24292d", // TOGGLE OFF BG
        // danger700: "#bf4c69", // TOGGLE OFF COLOR
        // neutral0: "#1f2428", // BACKGROUND SIDEBAR
        // neutral100: "#24292d", // BACKGROUND CONTENT
        neutral100: "#f6f7f9",
        // neutral150: "#1f2428", // DISABLED BUTTON BG
        // neutral200: "#1e2327", // LINE THROUGH MIDDLE
        //neutral700: "#daefff", // MENU IDLE COLOR
        // neutral600: "#daefff", // MENU HOVER COLOR
        // neutral600: "#9b9faa", // MENU HOVER COLOR
        // neutral700: "#9b9faa", // MENU ACTIVE ICON COLOR
        // neutral800: "#74787b", // TITLE COLORS
        // neutral900: "#24292d", // TOOLTIP BG
        primary100: "#2ea6ff14", // MENU ACTIVE BG
        // primary200: "#1f2428", // PLUS SIGN BG
        // primary500: "#6584ac", // PRIMARY BUTTON HOVER
        primary500: "#FEAF0C", // PRIMARY BUTTON HOVER
        primary600: "#002642", // PRIMARY BUTTON COLOR
        primary700: "#002642", // PRIMARY BUTTON COLOR
        // secondary100: "#1f2428", // INFO BOX COLOR

        // success100: "#1f2428", // SUCCESS BOX BG
      },
    },
    menu: {
      logo: MenuLogo,
    },
    auth: {
      logo: AuthLogo,
    },
    header: {
      favicon: favicon,
    },
    notifications: { release: false },
  },
  // register(app) {
  //   app.addMenuLink({
  //     to: '/plugins/my-plugin',
  //     icon: PluginIcon,
  //     intlLabel: {
  //       id: 'my-plugin.plugin.name',
  //       defaultMessage: 'My plugin',
  //     },
  //     Component: () => 'My plugin',
  //     permissions: [], // permissions to apply to the link
  //   });
  //   app.registerPlugin({ ... });
  // },
  bootstrap(app) {
    console.log(app);
  },
};
