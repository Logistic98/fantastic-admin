module.exports = {
	title: 'Fantastic-admin 官网',
	description: '一款开箱即用的 Vue 中后台管理系统框架',
	base: '/docs/',
	dest: 'docs',
	plugins: ['@vuepress/medium-zoom'],
	head: [
		['link', { rel: 'favicon', type: "image/x-icon", href: `./favicon.ico` }],
		['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }]
	],
	themeConfig: {
		search: false,
		displayAllHeaders: false,
		nav: [
			{
				text: '指南',
				link: '/guide/'
			},
			{
				text: '组件',
				link: '/components/'
			},
			{
				text: '演示地址',
				items: [
					{
						text: '基础版',
						link: 'https://hooray.gitee.io/fantastic-admin/basic'
					},
					{
						text: '专业版',
						link: 'https://hooray.gitee.io/fantastic-admin/pro'
					}
				]
			},
			{
				text: '源码下载',
				link: 'https://gitee.com/hooray/fantastic-admin'
			},
			{
				text: '付费购买',
				link: 'https://gitee.com/hooray/fantastic-admin'
			}
		],
		sidebar: {
			'/guide/': [
				'',
				{
					title: '指南',
					collapsable: false,
					children: [
						'start',
						'configure',
						'layout-and-theme',
						'global-resources',
						'axios',
						'component',
						'vuex',
						'router',
						'permission',
						'keep-alive',
						'cdn',
						'coding-standard',
					]
				},
				{
					title: '专业版',
					collapsable: false,
					children: [
						'pro/layout-and-theme',
						'pro/router',
						'pro/plop',
						'pro/module',
						'pro/position-fixed'
					]
				}
			],
			'/components/': [
				'',
				{
					title: '基础组件',
					collapsable: false,
					children: [
						'page-main'
					]
				}
			]
		}
	}
}