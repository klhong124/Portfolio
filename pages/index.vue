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
		<!-- <div class="more">
			<i class="arrow down"></i><br>
			<i class="arrow down"></i><br>
			<i class="arrow down"></i>
		</div> -->
	</div>
	<div class="container half-page">
		<div data-aos="fade-right">
			<small class="pr-5">cd</small><h1>ABOUT ME</h1>
		</div>
		<p class="about_me">
			> Hello, I’m Ryan from Hong Kong. Nice to meet you.
		</p>
		<p>
			> I am an intelligent and highly adaptable student currently enrolled on Information Technology Degree and Multimedia Higher Diploma with high grades achievement as well as related work experience.
		</p>
		<p>
			> Enthusiastic to become a skilled person and contribute to the Information Technology Industry. Seeking for an opportunity to take part in your company and demonstrate all of my technical ability.
		</p>
		<div class="readme">
			<center>
			<p>README.md</p>
			<i class="arrow down"></i>
			</center>
		</div>
	</div>
	<div class="container half-page">
		<div class="exe skill" data-aos="fade-left">
			<h1>MY SKILLS</h1><small class="pl-5">ls</small>
		</div>
		<v-row>
			<v-col cols="12" xs="12" sm="5" lg="4" data-aos="flip-down">
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
			<v-col cols="12" xs="12" sm="5" lg="4" data-aos="flip-down" data-aos-delay="50">
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
		<center data-aos="zoom-in-down">
			<h1 >MY WORKS</h1><small class="pl-5">../</small>
		</center>
		<!-- https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528 -->
		<section class="timeline">
		<p>Born in Hong Kong - a beautiful city with justice and freedom</p>
		<p>
			<time>1998</time>
		</p>
		<ul>
			<li data-aos="zoom-in">
				<time>2017</time>
				<div>
					Code at the first time in Java, EZPZ.
				</div>
			</li>
			<li data-aos="zoom-in">
				<time>2018</time>
				<div>
					Take my first Freelance Job:
					“Made An bot that automatically login into Facebook and send friend requests to the others everyday”
				</div>
			</li>
			<li data-aos="zoom-in">
				<time>2019</time>
				<div>
					 Submit my Final Year Project and graduated. “A web-based application provides IOT control platform to allow users to control their door lock via their smartphone”
				</div>
			</li>
			<li data-aos="zoom-in">
				<time>2020</time>
				<div>
					Work in Car8.com as an Analyst Programmer. Develop and Maintain the online vehilce trade platform by using vue.js.
				</div>
			</li>			
		</ul>
		<br>
		<p>
			<time>2021</time>
		</p>
		<p>It’s been a tough year, let’s make 2021 better</p>
		</section>
		
	</div>
	<div class="container half-page">
		<center>
			<h1>WANTED</h1>

		</center>
		<!-- https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528 -->
		
		
	</div>
	<span>&copy; Copyright © 2021 Ryan Kwan • UX Designer & Web Developer</span>
</div>
	
</template>

<script>
export default {

	mounted() {},

	methods: {},
}
</script>

<style>
.full-page{
	padding-top: 10vh;
	min-height: 100vh;
	position: relative;
}
.half-page{
	padding-top: 90px;
	min-height: 80vh;
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
.readme{
	margin: 10vh 0;
	width:100%;
	left: 0;
}
.readme i{
	transform: scale(1,0.7);
	transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
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
	top:-30px;
}
.card{
	padding: 32px 12px;
	border: solid white;
  	border-width:1px;
	border-radius: 8px;
}
time{
	font-weight: 700;
}
.timeline{
	margin-top: 100px;
}
.timeline p{
	text-align: center;
}
.timeline ul {
	padding:0;
}
.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 2px;
  margin: 0 auto;
  padding-top: 100px;
  background: #8D8D8D;
}
 
.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;;
  top:80px;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}
.timeline ul li time {
  position: absolute;
  top:70px;
  width: 400px;
  padding: 15px;
}
.timeline ul li div {
  position: relative;
  top:-30px;
  width: 400px;
  padding: 15px;
}
 
.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}
.timeline ul li:nth-child(odd) time {
  left: 35px;
}
.timeline ul li:nth-child(odd) div {
  left: 100px;
}
 
.timeline ul li:nth-child(odd) div::before {
  border-color: transparent transparent transparent transparent;
}

.timeline ul li:nth-child(even) time {
  left: -429px;
  text-align: right;
}
.timeline ul li:nth-child(even) div {
  left: -504px;
  text-align: right;
}
 
.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent transparent;
}
@media screen and (max-width: 900px) {
  .timeline ul li div {
    width: 250px;
  }
  .timeline ul li:nth-child(even) div {
    left: -289px; /*250+45-6*/
  }
}
@media screen and (max-width: 600px) {
  .timeline p{
	  text-align: left;
  }
  .timeline ul li {
    margin-left: 20px;
  }
   
  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li:nth-child(odd) div {
	left: 35px;
	top:0px;
  }
  .timeline ul li:nth-child(even) time {
	text-align: left;
    left: 35px;
  }
  .timeline ul li:nth-child(even) div {
	text-align: left;
	top:0;
    left: 35px;
  }
}
</style>