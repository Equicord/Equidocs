import { defineConfig } from 'vitepress';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Equicord Documentation",
  description: "Documentation for Discord's other cutest client",
  srcDir: 'docs',
  lang: 'en-US',
  assetsDir: 'public',
  vite: {
    server: {
      allowedHosts: ['dev.vmohammad.dev']
    }
  },
  // auto generates a sitemap so ppl can search on google and find it (hopefully)
  sitemap: {
    hostname: "https://docs.equicord.org",
  },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Installation', link: '/installation' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Installation', link: '/installation' },
          { text: 'Building from Source', link: '/building-from-source' },
          { text: 'User Plugins', link: '/plugins' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
    ],
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Equicord/Equicord' },
      { icon: 'discord', link: 'https://discord.gg/equicord-1173279886065029291' },
    ],
    footer: {
      copyright: "Copyright © 2025 Equicord",
      message: "Made with ❤️ by the Equicord team",
    },
    logo: '/logo.png',
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
})
