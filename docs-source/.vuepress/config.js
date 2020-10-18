module.exports = {
	title: 'Fantastic-admin 开发文档',
	description: '一款开箱即用的 Vue 中后台管理系统框架',
	base: '/docs/',
	dest: 'docs',
	themeConfig: {
		search: false,
		displayAllHeaders: false,
		nav: [
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
		sidebar: [
			{
				title: '指南',
				collapsable: false,
				children: [
					'guide/description',
					'guide/',
					'guide/configure',
					'guide/layout-and-theme',
					'guide/global-resources',
					'guide/axios',
					'guide/component',
					'guide/vuex',
					'guide/router',
					'guide/permission',
					'guide/cdn',
					'guide/coding-standard',
				]
			},
			{
				title: '专业版',
				collapsable: false,
				children: [
					'pro/front-end'
				]
			}
		]
	}
}