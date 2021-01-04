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
	background:linear-gradient(45deg, #343436, #34363d);
}
</style>
