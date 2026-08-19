import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { skills: 'Skills', fullstack: 'Full-stack', frontend: 'Front-end' },
      langToggle: { label: '中', aria: '中 — Switch to Chinese' },
      hero: {
        role: 'Frontend Developer',
        iam: 'I am',
        name: 'Weiming',
        intro: '"I love cracking problems with code."',
        cta: 'View my work',
        resume: 'Resume',
        contact: 'Contact me',
      },
      skills: {
        title: 'Skills',
        groups: {
          languages: 'Languages',
          frameworks: 'Frameworks / Libraries',
          backend: 'Backend & Database',
          cloud: 'Cloud & DevOps',
        },
      },
      projects: {
        title: 'Projects',
        liveDemo: 'Live Demo',
        p04: 'A full-stack Next.js app for finding parks to explore with young kids. Search parks by GPS location or keyword, save favourites to a personal place list, and get point-to-point routes drawn on an interactive Leaflet map. Includes full auth (register, login, password reset), user profiles, form validation, and transactional email. Backed by a Supabase database.',
        p03: 'Browse all 830 Taipei parks, green spaces and plazas. A React front end fetches from my own Flask REST API — with search, filtering and pagination handled server-side. Open-data source: Taipei City Government.',
        p02: 'A framework-free HBO Max–style streaming interface, built as a responsive design study. A sticky nav that collapses into a slide-in mobile menu, a gradient-scrim spotlight hero, horizontal scroll-snap carousels generated from a data array, and a CSS-Grid genre wall that steps 2 → 3 → 4 columns. Mobile-first, placeholder imagery only — no HBO assets or trademarks.',
        p01: 'A hand-coded responsive page from my bootcamp — no frameworks, no Bootstrap. Fluid images and mobile-first breakpoints at 600 / 900 / 1200px, with card sections that reflow from a single column up to a full multi-column row.',
      },
      footer: { builtWith: 'Built with React & Flask' },
    },
  },

  zh: {
    translation: {
      nav: { skills: '技術能力', fullstack: '全端專案', frontend: '前端專案' },
      langToggle: { label: 'EN', aria: 'EN — 切換至英文' },
      hero: {
        role: '前端工程師',
        iam: '我是',
        name: '暐銘',
        intro: '我熱愛用程式解決問題。',
        cta: '瀏覽專案',
        resume: '履歷',
        contact: '聯絡我',
      },
      skills: {
        title: '技能',
        groups: {
          languages: '程式語言',
          frameworks: '框架 / 函式庫',
          backend: '後端與資料庫',
          cloud: '雲端與開發維運',
        },
      },
      projects: {
        title: '專案作品',
        liveDemo: '瀏覽專案',
        p04: '一款全端 Next.js 應用，協助帶著孩子尋找適合探索的公園。可依 GPS 位置或關鍵字搜尋公園、將喜愛的地點收藏到個人清單，並在互動式 Leaflet 地圖上繪製點對點路線。具備完整的身分驗證（註冊、登入、重設密碼）、使用者個人檔案、表單驗證與交易信件。後端資料庫採用 Supabase。',
        p03: '瀏覽全台北 830 座公園、綠地與廣場。React 前端串接我自建的 Flask REST API，搜尋、篩選與分頁皆由伺服器端處理。開放資料來源：台北市政府。',
        p02: '不依賴框架、以 HBO Max 風格打造的串流介面，作為響應式設計練習。包含會收合成側滑選單的固定導覽列、漸層遮罩的主視覺、以資料陣列生成的水平 scroll-snap 輪播，以及從 2 → 3 → 4 欄變化的 CSS Grid 分類牆。行動優先，僅使用示意圖片，未使用任何 HBO 素材或商標。',
        p01: '利用線上資源學習手刻的響應式頁面，未使用任何框架或 Bootstrap。流動式圖片與行動優先斷點（600 / 900 / 1200px），卡片區塊會從單欄重排到多欄的完整排列。',
      },
      footer: { builtWith: '以 React 與 Flask 打造' },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

const applyHtmlLang = (lng) =>
  document.documentElement.setAttribute(
    'lang',
    lng && lng.startsWith('zh') ? 'zh-Hant' : 'en',
  );
applyHtmlLang(i18n.resolvedLanguage);
i18n.on('languageChanged', applyHtmlLang);

export default i18n;
