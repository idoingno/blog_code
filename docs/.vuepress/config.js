const navConfig = require('./configs/navConfig'); // 头部导航栏配置,通过配置进行管理,nav.js后缀名可以省略
const plugins = require('./configs/plugin'); // 导入插件配置,如:包括返回顶部,图片缩放,pwa等插件

module.exports = {
    port: '9999',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {
                rel: 'icon',
                href: '/logo.svg'
            }
        ],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
    ],
    title: '如三秋兮',
    description: '独上高楼,望尽天涯路',
    theme: 'reco',
    base: '/frontend-apprenticeship/',
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    plugins,
    themeConfig: {
        subSidebar: 'auto',
        nav: navConfig,
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: 'auto',
    },
    markdown: {
        config: md => {
            md.set({html: true})
            md.use(require("markdown-it-katex"))
        }
    },
}