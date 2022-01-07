const plugins = [
    '@vuepress/nprogress', // 进度条插件

    'img-lazy', // 图片的懒加载
    [
        '@vuepress/pwa', // 以@开头的都是官方维护的插件, pwa配置
        {
            serviceWorker: true, // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
            updatePopup: {
                '/zh/': {
                    message: '发现有新的内容更新,马上更新',
                    buttonText: '刷新',
                },
            },
        },
    ],
    [
        'vuepress-plugin-auto-sidebar',
        {
            titleMode: 'titlecase', // 标题模式
            collapsable: {
                open: false
            }, // 设置为true,开启折叠
            map: {
                "/fontend/Js/README": "🎉 Hello Vuepress 🎉",
                // "/exampleMenu1/exampleSubMenu1-c/": "🎉 Auto Sidebar 🎉"
            },
            // ignore: [
            //     // 例子：
            //     // 忽略 `/menu3/menu3-3/` 目录下以 `ignore-` 开头的文件
            //     {
            //         menu: "/fontend/Js/",
            //         regex: "README"
            //     }
            // ]
        },
    ],

    [
        // 使VuePress站点支持简洁链接,而不是/xx.html
        'vuepress-plugin-clean-urls',
        {
            normalSuffix: '/',
            indexSuffix: '/',
            notFoundPath: '/404.html',
        },
    ]
]


module.exports = plugins; // 导出