<template>
	<v-app dark>

		<v-main id="main">
			<nuxt />
		</v-main>

	</v-app>
</template>

<script>
import $ from 'jquery';

export default {
	data() {
		return {
			title: 'Ryan Kwan - Portfolio',
		}
	},

}

</script>
<style>
#main{   
    /* only animation-duration here is required, rest are optional (also animation-name but it will be set on hover)*/
    animation-duration: 15s; /* same as transition duration */
    animation-timing-function: linear; /* kind of same as transition timing */
    animation-delay: 0ms; /* same as transition delay */
    animation-iteration-count: Infinite; /* set to 2 to make it run twice, or Infinite to run forever!*/
    animation-direction: normal; /* can be set to "alternate" to run animation, then run it backwards.*/
    animation-fill-mode: none; /* can be used to retain keyframe styling after animation, with "forwards" */
    animation-play-state: running; /* can be set dynamically to pause mid animation*/
	animation-name: onHoverAnimation;
    
    /* declaring the states of the animation to transition through */
    /* optionally add other properties that will change here, or new states (50% etc) */

}
</style>
