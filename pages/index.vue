<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="8" md="6">
			<div class="text-center">
				<logo />
			</div>
			<v-card>
				<v-card-title class="headline">
					Welcome to the Vuetify + Nuxt.js + apollo Graphql template
				</v-card-title>
				<v-card-text>
					<p>
						Web Template by Nuxt with apollo graphql. UI with Vuetify. login system included .
					</p>
				
					<p>
						UI with Vuetify
					</p>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	layout(app) {
		return !!app.$apolloHelpers.getToken() ? 'auth' : 'default'
	},
	components: {
		Logo,
	},
	mounted() {
	},
	methods: {},
}
</script>
