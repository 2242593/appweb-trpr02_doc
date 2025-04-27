import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Travail Pratique 2",
  description: "Travail pour le cours de Développement d'applications web",
  base: '/appweb-trpr02_doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Semaine 1', link: '/semaine_1' }
    ],

    sidebar: [
      {
        text: 'Avancées de mon projet',
        items: [
          { text: 'Semaine 1', link: '/semaine_1' },
          { text: 'Semaine 2', link: '/semaine_2' },
          { text: 'Semaine 3', link: '/semaine_3' },
          { text: 'Revue finale', link: '/revue_finale' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2242593/appweb-trpr02_doc' }
    ]
  }
})
