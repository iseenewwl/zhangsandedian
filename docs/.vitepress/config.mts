import mdItCustomAttrs from "markdown-it-custom-attrs";
import {defineConfig} from "vitepress";
import {set_sidebar} from "../guide/set_sidebar.mjs";

export default defineConfig({
	base: "/home",//部署到GitHub Pages时的仓库名
	title: "张三的店",
	lang: "zh-CN",
	description: "张三的店",
	head: [
		["meta", {name: "author", content: "张三的店"}],
		["meta", {name: "keywords", content: "张三的店"}],
		["link", {rel: "icon", href: "/logo.svg"}],
		["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"}],
		["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}],
	],
	markdown: {config: (md) => md.use(mdItCustomAttrs, "image", {"data-fancybox": "gallery"})},
	// lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
		//搜索
		// search: {
		// 	provider: "local"
		// },
		outline: {
			level: [2, 4], // 显示2-4级标题
			// level: 'deep', // 显示2-6级标题
			label: '当前页大纲' // 文字显示
		},
		// algolia: {
		//     appId: "xxx",
		//     apiKey: "xxx",
		//     indexName: "Vitepress-Template",
		// },
		// editLink: {
		// 	text: "为此页提供修改建议",
		// 	pattern: "https://gitee.com/dotnetmoyu/Vitepress-Template",
		// },
		// socialLinks: [{icon: "github", link: "https://gitee.com/dotnetmoyu/Vitepress-Template"}],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2024 张三的店",
		},
		nav: [
			{text: "首页", link: "/", activeMatch: "/home"},
			{text: "特性", link: "/pages/character", activeMatch: "/pages/character/"},
			{text: "了解", link: "/pages/understand", activeMatch: "/pages/understand/"},
			{text: "关于", link: "/pages/about", activeMatch: "/pages/about/"},
			{text: "登录", link: "/pages/login", activeMatch: "/pages/login"},
			
			// {text: "🍵 赞助", link: "/sponsor/index"},
		],

		// sidebar: {
		// 	"/guide/introduce/": set_sidebar('/guide/introduce',false),
		// 	"/guide/docs/": set_sidebar('/guide/docs'),
		// },
	},
	vite: {
		plugins: [],
	},
});
