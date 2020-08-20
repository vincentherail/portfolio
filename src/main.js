import Vue from 'vue'
import App from '@/App.vue'

// gestion des méta-datas
import Meta from 'vue-meta'

// gestion des breakpoints
import VueMq from 'vue-mq'

// animate on scroll 
import aos from 'aos'

// ripple effect (balayage )
import Ripple from 'vue-ripple-directive'

// toasted button
import toasted from 'vue-toasted'

// triangle lighted background
import FlatSurfaceShader from 'vue-flat-surface-shader'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import SmoothScroll from 'smoothscroll-for-websites'
import i18n from '@core/i18n'
import router from '@core/routes'
import store from '@core/stores'
import Icons from '@cmp/utils/icons.vue'

import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.directive('rp', Ripple)
Vue.component('fa', Icons)

Vue.use(toasted, {
	position: 'bottom-center',
	duration: 4000,
	closeOnSwipe: true,
	containerClass: 'toasts'
})

Vue.use(Meta, { keyName: 'metas' })
Vue.use(VueMq, {
	breakpoints: {
		sm: 813, // iphoneX max
		lg: Infinity,
	},
})

Vue.use(FlatSurfaceShader)

aos.init({
	offset: 200,
	duration: 1000,
	easing: 'ease-in-sine',
	delay: 100,
	disable: () => window.innerWidth < 814,
	anchorPlacement: 'top-bottom',
})

new Vue({
	router,
	i18n,
	methods: {
		// litle npm script to disable body scroll on all devices (because those IOS hipsters think different)
		lockScroll: el => disableBodyScroll(el),
		unlockScroll: el => enableBodyScroll(el),
	},
	store,
	mounted() {
		SmoothScroll({
			animationTime: 700,
			accelerationDelta: 30,
			accelerationMax: 3,
		})
	},
	render: h => h(App),
}).$mount('#app')
