import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',

  title: "Ly Learning Blog",
  description: "Ly Learning Blog",

  srcDir: 'src',
  base: '/A_Blog/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: 'LyLight.png', dark: 'LyDark.png' },
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Python',
        link: '/python/'
      }
    ],

    sidebar: [
      {
        text: 'Python基础',
        collapsed: false,
        base: '/python/',
        items: [
          { text: '基础语法', link: 'base' },
          { text: '函数随记', link: 'function' }
        ]
      }
    ],
    // aside: false,

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
