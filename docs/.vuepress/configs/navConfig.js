const navs = [{
        text: '首页',
        link: '/'
    },
    {
        text: '前端',
        items: [{
                text: 'HTML',
                link: '/fontend/html/'
            },
            {
                text: 'CSS',
                link: '/fontend/css/'
            },
            {
                text: 'JavaScript',
                link: '/fontend/Js/'
            },
            // { text: '前端框架', link: '/fontend/framework/' },
            // { text: '前端算法', link: '/fontend/rsa/' },
            // { text: '开发工具', link: '/fontend/tools/' },
            {
                text: '网址收藏',
                link: '/fontend/websitecol/'
            },
        ],
    },
    // { text: '小程序', link: '/wechat/' },
    // { text: '面试', link: '/interview/' },
    // { text: '指南', link: '/guide/' },
    {
        text: '关于',
        link: '/about/'
    },
    {
        text: "工具",
        items: [{
                text: "思维导图",
                items: [{
                        text: "zhiMap",
                        link: "https://zhimap.com/home"
                    },
                    {
                        text: "processOn",
                        link: "https://www.processon.com/"
                    },
                    {
                        text: "gitmind",
                        link: "https://gitmind.cn/"
                    }
                ]
            },

            {
                text: "文档管理",
                items: [{
                        text: "语雀",
                        link: "https://www.yuque.com/dashboard"
                    },
                    {
                        text: "腾讯文档",
                        link: "https://docs.qq.com/desktop"
                    }
                ]
            },

            // {
            //     text: "实用工具",
            //     items: [{
            //             text: "声享-做ppt",
            //             link: "https://ppt.baomitu.com/"
            //         },
            //         {
            //             text: "马克鳗-量标注",
            //             link: "http://www.getmarkman.com/l"
            //         }
            //     ]
            // }
        ]
    },
    {
        text: 'Q 的 博客',
        items: [{
                text: 'Github',
                link: 'https://github.com/idoingno'
            },
            // { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
    }
]


module.exports = navs;