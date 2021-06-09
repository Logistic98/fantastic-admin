module.exports = {
	title: 'Fantastic-admin 官网',
	description: '一款开箱即用的 Vue 中后台管理系统框架',
	base: '/fantastic-admin/',
	dest: 'docs',
	plugins: ['@vuepress/medium-zoom'],
	head: [
		['link', { rel: 'icon', href: `./favicon.ico` }],
		['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
		['script', {}, `var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?d07a64f7a02cd5e9c01e1b36948ac4a5";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();`]
	],
	themeConfig: {
		logo: '/logo.png',
		search: false,
		displayAllHeaders: false,
		smoothScroll: true,
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
						link: 'https://hooray.github.io/fantastic-admin/basic'
					},
					{
						text: '专业版',
						link: 'https://hooray.github.io/fantastic-admin/pro'
					}
				]
			},
			{
				text: '视频教程',
				link: 'https://space.bilibili.com/3079082/channel/detail?cid=156985'
			},
			{
				text: '购买专业版',
				link: '/buy'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/hooray/fantastic-admin'
			},
			{
				text: 'Github',
				link: 'https://github.com/hooray/fantastic-admin'
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
						'coding-standard',
						'configure',
						'layout',
						'theme',
						'global-resources',
						'axios',
						'component',
						'vuex',
						'router',
						'permission',
						'tabbar',
						'keep-alive',
						'keep-alive-neste',
						'font',
						'i18n',
						'storage',
						'library',
						'cdn',
						'gzip',
						'mock',
						'build',
						'git',
						'bug',
						'plop',
						'module',
						'position-fixed',
						'upgrade'
					]
				}
			],
			'/components/': [
				'',
				'basic',
				{
					title: '扩展组件',
					collapsable: false,
					children: [
						'auth',
						'auth-all',
						'page-header',
						'page-main',
						'result',
						'fixed-action-bar',
						'search-bar',
						'batch-action-bar',
						'image-upload',
						'images-upload',
						'file-upload',
						'image-preview',
						'svg-icon',
						'trend',
						'cascader-area',
						'colorful-card',
						'icon-picker'
					]
				}
			]
		}
	}
}