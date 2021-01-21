<template>
	<div class="card pa-5 shake-little">
		<v-row>
			<v-col cols="12" md="5">
				<center>
					<img
						:src="job.img"
						class="img"
						@click="linkclick(job.link)"
					>
				</center>
			</v-col>
			<v-col cols="12" md="7">
				<h2 @click="linkclick(job.link)">{{ job.name }} ({{ job.year }})</h2>
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
		linkclick(url) {
            url&&window.open(url);
		},
	},
};
</script>

<style scoped>
	.img {
		border-radius: 8px;
		width:max(50%,300px);
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