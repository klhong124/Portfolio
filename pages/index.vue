<template>
<div>

	<div class="container full-page">
		<small class="pr-5">su</small><h1>RYAN KWAN</h1>
		<v-btn
		class="exe"
		color="white"
		large
		outlined
		>Hire.exe</v-btn>
		<div class="desc">
			<p><b>the guy😎 who never miss ;</b></p>
			<p>> Developer</p>
			<p>> Ux Designer</p>
		</div>
		<div class="more">
			<i class="arrow down"></i><br>
			<i class="arrow down"></i><br>
			<i class="arrow down"></i>
		</div>
	</div>
	<div class="container half-page">
		<small class="pr-5">cd</small><h1>ABOUT ME</h1>
		<p class="about_me">
			> Hello, I’m Ryan from Hong Kong. Nice to meet you.
		</p>
		<p>
			> I am an intelligent and highly adaptable student currently enrolled on Information Technology Degree and Multimedia Higher Diploma with high grades achievement as well as related work experience.
		</p>
		<p>
			> Enthusiastic to become a skilled person and contribute to the Information Technology Industry. Seeking for an opportunity to take part in your company and demonstrate all of my technical ability.
		</p>
	</div>
	<div class="container half-page">
		<div class="exe skill">
			<h1>MY SKILLS</h1><small class="pl-5">ls</small>
		</div>
		<v-row>
			<v-col cols="12" xs="12" sm="5" lg="4">
				<div class="card">
					<center class="pb-4">
						<b>#DESIGNER</b>
					</center>
					<p>// I value thoughtful user experience, clean design structure and users impression to my work.</p>
					<ul>
						<li>UX Desgin</li>
						<li>PhotoShop😎</li>
						<li>Illustrator</li>
						<li>Affter Effect</li>
						<li>Davinvi Resolve😎</li>
						<li>Figma😎</li>
						<li>Audition</li>
					</ul>
				</div>
			</v-col>	
			<v-col cols="12" xs="12" sm="5" lg="4">
				<div class="card">
					<center class="pb-4">
						<b>#DEVELOPER</b>
					</center>
					<p>// stable, secure, fast, reliable and modern. Five demands not one less in my application.</p>
					<ul>
						<li>Nuxt.js😎</li>
						<li>Express.js</li>
						<li>Vue && Vuetify</li>
						<li>ApolloGrahpQL😎</li>
						<li>Serverless</li>
						<li>Python Web Scraping😎</li>
						<li>Python OCR </li>
						<li>Python Selenium</li>
						<li>MongoDB</li>
						<li>SQL</li>
						<li>Electron.js</li>
						<li>PWA</li>
						<li>PHP Laravel</li>
						<li>Stripe</li>
						<li>Netlify😎</li>
						<li>HTML && CSS</li>
					</ul>
				</div>
			</v-col>	
			<v-col></v-col>	
		</v-row>
		
	</div>
	<div class="container half-page">
		<center>
			<h1>MY WORKS</h1><small class="pl-5">../</small>
		</center>
		
		
	</div>
	<span>&copy; Copyright © 2021 Ryan Kwan • UX Designer & Web Developer</span>
</div>
	
</template>

<script>

export default {
	layout(app) {
		return !!app.$apolloHelpers.getToken() ? 'auth' : 'default'
	},
	components: {
	},
	mounted() {
	},
	methods: {},
}
</script>

<style>
.full-page{
	padding-top: 70px;
	height: 100vh;
	position: relative;
}
.half-page{
	padding-top: 90px;
	height: 80vh;
	position: relative;
}
.desc{
	position: absolute;
	bottom:10vh;
}
h1{
	line-height: 60px;
	font-weight: 700;
	font-size: max(8.5vw, 60px);
	display: inline;
}
small{
	font-weight: 700;
	font-size: max(3vw, 25px);
	color: #747474;
}
.exe{
	margin-top: 12px;
	float: right;
}
.more{
	position: absolute;
	bottom:10vh;
	right:12px;
	transform: scale(1,0.7);
}
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;
  
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.about_me{
	margin-top: max(3vw, 25px);
}
.skill{
	position:absolute;
	right:12px;
	top:0;
}
.card{
	padding: 32px 12px;
	border: solid white;
  	border-width:1px;
	border-radius: 8px;
}
</style>