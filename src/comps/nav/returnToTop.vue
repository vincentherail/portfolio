<template lang="pug">
	transition(name="top")
		.return-to-top(v-if="scrolled" @click="scrollToTop()")
			font-awesome-icon(icon="angle-up")

</template>

<script>
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component
	export default class Top extends Vue {

		scrolled = false

		onScroll() {
			if (window.scrollY > 265 && !this.scrolled) this.scrolled = true
			else if (window.scrollY < 265 && this.scrolled) this.scrolled = false
		}

		mounted() {
			window.addEventListener('scroll', this.onScroll, { passive: true })
		}

		beforeDestroy() {
			window.removeEventListener('scroll', this.onScroll)
		}

		scrollToTop() {
			window.scroll({
				top: 0,
				behavior: 'smooth'
			})
		}
	}
</script>


<style lang="stylus" scoped>
.return-to-top
	position fixed
	bottom 1em
	left 1em
	z-index 99
	width 50px
	height @width
	display flex
	justify-content center
	align-items center
	border-radius 5px
	opacity .7
	cursor pointer
	font-size: 2rem;

	&.top-enter-active, &.top-leave-active
		transition opacity 300ms

	&.top-enter, &.top-leave-to
		opacity 0

	i
		color invert(@background)
</style>
