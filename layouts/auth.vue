<template>
	<v-app dark>
		<v-navigation-drawer clipped v-model="drawer" app>
			

		</v-navigation-drawer>

		<v-app-bar clipped-left fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer">
				<v-icon>fa-bars</v-icon>
			</v-app-bar-nav-icon>
			<v-toolbar-title v-text="title" />

			<v-spacer />

			<v-btn icon @click="onLogout">
				<v-icon>fa-sign-out-alt</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
	middleware: 'isAuth',

	data() {
		return {
			title: 'Template',
			drawer: false,
			fixed: 1,
			items: [
				{
					icon: 'fa-comment-alt',
					title: 'Messages',
					to: '/conversations',
				},
				{
					icon: 'fa-user',
					title: 'Accounts',
					to: '/account',
				},
				{
					icon: 'fa-cog',
					title: 'Settings',
					to: '/setting',
				},
			],
		}
	},
	computed: {
		...mapState(['user'])
	},
	mounted(){
	},
	methods: {
		async onLogout() {
			await this.$apolloHelpers.onLogout()
			this.clearUser();
			this.$router.go('/')
		},
		...mapMutations(['clearUser'])
	},
}
</script>
<style>
	
</style>
