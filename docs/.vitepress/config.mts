import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Ly Learning Blog",
  description: "Ly Learning Blog",
  srcDir: 'src',
  base: '/A_Blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/images/LyLight.png', dark: '/images/LyDark.png' },
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      {
        text: 'Python', items: [
          { text: 'Learning', link: '/python/learning' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
