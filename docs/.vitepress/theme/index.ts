// @ts-nocheck
import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";

import 'element-plus/dist/index.css';
import  "./css/custom.css"	
import ElementPlus from 'element-plus';
import { h } from "vue";
// 页面组件
import Foo from './components/foo.vue'
import character from './components/character.vue'
import about from './components/about.vue'
export default {

    ...DefaultTheme,
		Layout: () => {
			return h(DefaultTheme.Layout, null, {
					"home-hero-info":()=>h(Foo)
			})
	}, 
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
				ctx.app.component('character', character)
				ctx.app.component('about', about)
				ctx.app.use(ElementPlus)
    },
};
