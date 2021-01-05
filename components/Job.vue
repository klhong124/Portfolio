<template>
	<div class="card pa-5 shake-little">
		<v-row>
			<v-col cols="12" sm="5">
				<center>
					<v-img
						:src="require(`~/assets/img/${job.img}.png`)"
						width="max(50%,350px)"
						class="img"
						@click="imgclick(job.link)"
					></v-img>
				</center>
			</v-col>
			<v-col cols="12" sm="7">
				<h2>{{ job.name }} ({{ job.year }})</h2>
				<p>{{ job.text }}</p>
				<div style="width:100%">
					<span v-for="(t, n) in job.tags" :key="n" class="tag">{{
						t
					}}</span>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	props: ["job"],
	methods: {
		imgclick(url) {
            url&&window.open(url);
		},
	},
};
</script>

<style scoped>
	.img {
		border-radius: 8px;
	}
	.tag {
		border: 1px white solid;
		border-radius: 50px;
		padding: 4px 12px;
        margin-right:8px;
        margin-bottom:8px;
		font-size: 12px;
        display: inline-block;
	}
</style>