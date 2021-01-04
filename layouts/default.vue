<template>
	<v-app >

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
	mounted(){
		console.log(`
			"#######::: ##:::: ##::::'###::::: ##':::: ##:
			##.... ##:' ##:::: ##:::'## ##:::: ####::: ##:
			##:::: ##: . ##:: ##:::'##:. ##::: ## ##:: ##:
			########:: :. ## ##:::'##:::. ##:: ##: ##: ##:
			##.. ##::: ::. ###:::: #########:: ##:. ## ##:
			##::. ##:: ::: ##::::: ##.... ##:: ##:::. ###:
			##:::. ##:.::: ##::::: ##:::: ##:: ##::::. "#:
		`);
	}

}

</script>
<style>

#main{   
	background:linear-gradient(45deg, #363636, #2a2b2e);
}
</style>
