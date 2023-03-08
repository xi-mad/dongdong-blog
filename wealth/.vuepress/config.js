module.exports = {
    dest: 'docs',
	//网站的标题
	title: '东东的博客',
	//网站的描述
	description: '一名爱学习的好同志',
	//基础路径
	base: '/dongdong-blog/',
	//额外的需要被注入到当前页面的 HTML <head> 中的标签
	head: [
		['link', { rel: 'icon', href: '/assets/images/logo.png' }]
	],
 	//多语言支持，这里只设置了中文
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
 	//主题配置
	themeConfig: {
		//导航栏 Logo
		logo: '/assets/images/logo.png',
		//导航栏链接
		nav: [
            //单一的菜单导航
            // { text: '计算机之道', link: '/computer-dao/' },
            //带下拉的菜单导航
            // {
            //     text: '2023',
            //     ariLabel: '2023',
            //     //下拉列表
            //     items: [
            //         { text: 'May', link: '/2023/5/' },
            //         { text: 'June', link: '/2023/6/' }
            //     ]
            // },
		],
		//侧边栏
		sidebar: {
			'/computer-dao/': [
				'',
				{title: '第1章-计算机简述', path: '/computer-dao/1/第1章-计算机简述'},
				{title: '第2章-机器指令与编程语言', path: '/computer-dao/2/第2章-机器指令与编程语言'},
				{title: '第3章-编译原理', path: '/computer-dao/3/第3章-编译原理'},
				{title: '第4章-汇编语言', path: '/computer-dao/4/第4章-汇编语言'},
				{title: '第5章-C语言', path: '/computer-dao/5/第5章-C语言'},
			]
		},
	}
}