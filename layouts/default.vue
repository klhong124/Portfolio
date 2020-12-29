<template>
	<v-app dark>

		<v-navigation-drawer
			clipped
      permanent
      expand-on-hover
			app
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar clipped-left fixed app>
			<v-btn icon to="/"> <v-icon>fa-bars</v-icon> </v-btn>
			<v-toolbar-title v-text="title" />

			<v-spacer />

			<v-btn icon to="/login"> <v-icon>fa-sign-in-alt</v-icon> </v-btn>
			<v-btn icon to="/register"> <v-icon>fa-user</v-icon> </v-btn>
		</v-app-bar>

		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<v-footer :absolute="!fixed" app>
			<span
				>&copy; 2020 Web Template created by Ryan
				Kwan</span
			>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			isAuthenticated:false,
			fixed: 1,
			items: [
				{
					icon: 'fa-home',
					title: 'Home',
					to: '/',
				},{
					icon: 'fa-user',
					title: 'Accounts',
					to: '/user',
				},
			],
			title: 'Nuxt Web-Template',
		}
	},

}
</script>
