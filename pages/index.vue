<template>
  <div>
    <div class="container full-page">
      <small class="pr-5">#</small>
      <h1 class="name aim">RYAN KWAN</h1>
      <v-btn
        class="exe aim shake-little"
        dark
        large
        outlined
        @click="moveTowanted"
        ><span class="aim">Hire.exe</span></v-btn
      >
      <div class="desc">
        <b><p>Eat(); Code(); Sleep() ;</p></b>
        <p>> Developer</p>
        <p>> Ux Designer</p>
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          class="white--text aim"
          fab
          icon
          small
          target="_blank"
          :href="social.href"
        >
          <v-icon class="aim">{{ social.icon }}</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="container half-page">
      <div data-aos="fade-right">
        <small class="pr-5">&&</small>
        <h1 class="aim">ABOUT ME</h1>
      </div>
      <p class="about_me">
        > 👋 Hello, I’m Ryan from Hong Kong. Nice to meet you.
      </p>
      <p>
        I have passion for making websites a more modern, usable, and reliable place.
      </p>
      <p>
        > I am a Fullstack developer using Nuxt.js and apolloGraphql to create a
        modern web application. I am a quick learner and hard worker with high
        academic achievement in an Information Technology Degree and Multimedia
        Higher Diploma.
      </p>
      <p>
        > Enthusiastic to become a skilled person and contribute to the
        Information Technology Industry. Seeking for an opportunity to
        contribute to your company and demonstrate all of my technical ability.
      </p>
      <div class="readme" data-aos="fade-down">
        <center>
          <p>README.md</p>
          <i class="arrow down"></i>
        </center>
      </div>
    </div>
    <div class="container half-page">
      <div class="skill" data-aos="fade-left">
        <h1 class="pr-5 aim">MY SKILLS</h1>
        <small>ls</small>
      </div>
      <v-row>
        <v-col cols="12" xs="12" sm="5" lg="4" data-aos="flip-down">
          <div class="card shake-little">
            <center class="pb-4">
              <b>#DESIGNER</b>
            </center>
            <p>
              // I value thoughtful user experience, clean design structure and
              users impression to my work.
            </p>
            <ul>
              <li v-for="(i, k) in designer" :key="k">{{ i }}</li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          xs="12"
          sm="5"
          lg="4"
          data-aos="flip-down"
          data-aos-delay="50"
        >
          <div class="card shake-little">
            <center class="pb-4">
              <b>#DEVELOPER</b>
            </center>
            <p>
              // stable, secure, fast, reliable and modern. Five demands not one
              less in my application.
            </p>
            <ul>
              <li v-for="(i, k) in developer" :key="k">
                {{ i }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="container half-page">
      <center data-aos="zoom-in-down">
        <h1 class="aim">MY WORKS</h1>
        <small class="pl-5">../</small>
      </center>
      <!-- https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528 -->
      <section class="timeline">
        <p data-aos="fade-up">
          Born in Hong Kong - a beautiful city with justice and freedom
        </p>
        <p data-aos="fade-up">
          <time>1998</time>
        </p>
        <ul>
          <li v-for="({ year, text }, i) in mywork" :key="i">
            <div :data-aos="i % 2 ? 'fade-left' : 'fade-right'">
              <time>{{ year }}</time>
              <p>{{ text }}</p>
            </div>
          </li>
        </ul>
        <br />
        <p data-aos="fade-down">
          <time>2022</time>
        </p>
        <p data-aos="fade-down">
          It has been a tough year, let’s make 2022 better 🔥
        </p>
      </section>
      <v-row>
        <v-col v-for="(j, i) in job" :key="i" cols="12">
          <Job :job="j" data-aos="zoom-out" />
        </v-col>
      </v-row>
    </div>
    <div class="container half-page" id="wanted">
      <center data-aos="flip-down">
        <h1>WANTED</h1>
      </center>
      <br />
      <div class="card mt-5 container pa-5 mw-700">
        <p>Leave a message to me:</p>
        <form
          name="contact"
          class="pb-4"
          method="POST"
          id="form"
          data-netlify="true"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />

          <v-text-field
            dark
            outlined
            name="company"
            label="From"
            value=""
          ></v-text-field>
          <v-textarea
            dark
            outlined
            name="message"
            value=""
            label="Message"
          ></v-textarea>
          <v-btn
            outlined
            dark
            style="float: right"
            type="submit"
            :disabled="!!cooldown"
            >{{ cooldown || "Send" }}</v-btn
          >
          <span class="form-msg" v-if="form_msg">
            😻 Form successfully submitted.
          </span>
          <br />
        </form>
      </div>

      <!-- https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528 -->
    </div>
    <div class="half-page">
      <center style="padding-top: 25vh">
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          class="white--text"
          fab
          icon
          small
          target="_blank"
          :href="social.href"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
        <br />
        &copy; Copyright © 2021 Ryan Kwan • UX Designer & Web Developer
      </center>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data: () => {
    return {
      job: [
        {
          name: "Gymism Club",
          img: "https://ryankwan.netlify.app/img/gymism.png",
          link: "https://www.gymism.club/",
          year: 2021,
          text:
            "A web application for downloading stickers from Sticker Cloud.",
          tags: [
            "Nuxt",
            "Vue",
            "Firebase",
            "PWA",
            "ApolloGrahpQL",
            "Stripe",
            "JAMstack",
            "Cloud Run",
          ],
        },
        {
          name: "Sticker Cloud Downloader",
          img: "https://ryankwan.netlify.app/img/sc_downloader.png",
          link: "https://sticker-cloud-downloader.netlify.app/",
          year: 2021,
          text:
            "A web application for downloading stickers from Sticker Cloud.",
          tags: ["Nuxt", "Vue", "Google Analytics", "Proxy", "JSzip"],
        },
        {
          name: "Car8",
          img: "https://ryankwan.netlify.app/img/car8.png",
          link: "https://www.car8.com/",
          year: 2020,
          text: "A used-car trading platform made of Vue and Laravel.",
          tags: [
            "Laravel",
            "Vue",
            "UBA",
            "Stripe Payment",
            "Vuex",
            "SQL",
            "Python OCR",
          ],
        },
        {
          name: "IPCC",
          img: "https://ryankwan.netlify.app/img/ipcc.png",
          link: "https://www.ipcc.gov.hk/symposium2019/view/index.html",
          year: 2019,
          text: "An event website made of pure HTML and CSS.",
          tags: ["HTML", "CSS", "Graphic Design", "AOS Animation"],
        },
        {
          name: "Facebook Add Friends Bot",
          img: "https://ryankwan.netlify.app/img/facebook.png",
          year: 2018,
          text:
            "An application that automatically login to Facebook and sends friend requests to the others. With a function to remove all friend requests as well.",
          tags: ["Java", "Selenium", "Web Scraping"],
        },
      ],
      mywork: [
        {
          year: 2017,
          text: "Coding at the first time in Java, System.out.println(EZPZ) .",
        },
        {
          year: 2018,
          text: `Taking my first Freelance Job:
					“I made a bot which is managed to login into Facebook and send friend-requests everyday automatically"`,
        },
        {
          year: 2019,
          text: `Submiting my Final Year Project and graduated. “A web-based application as an IOT control platform to allow users to unlock their door via their smartphone”`,
        },
        {
          year: 2020,
          text:
            "Working in Car8.com as an Analyst Programmer. I developed an online car trade platform by using Laravel and Vue.js.",
        },
        {
          year: 2021,
          text:
            "Founding Gymsim.Club. A sport coach matching platform built in Nuxt.js",
        },
      ],
      designer: [
        `UX Desgin`,
        `PhotoShop😎`,
        `Illustrator`,
        `Affter Effect`,
        `Davinvi Resolve😎`,
        `Figma😎`,
        `Audition`,
      ],
      developer: [
        `Nuxt.js😎`,
        `Express.js`,
        `Vue && Vuetify`,
        `ApolloGrahpQL😎`,
        `Serverless`,
        `Python Web Scraping😎`,
        `Python OCR`,
        `Python Selenium`,
        `MongoDB`,
        `SQL`,
        `Electron.js`,
        `UBA`,
        `PWA`,
        `PHP Laravel`,
        `Stripe`,
        `Netlify😎`,
        "Firebase",
        "Google Cloud Run",
        `HTML && CSS`,
		`Ngrok`,
      ],
      socials: [
        // {
        // 	icon: "mdi-facebook",
        // 	href: "https://www.facebook.com",
        // },
        {
          icon: "mdi-linkedin",
          href: "https://my.indeed.com/p/lokhongk-jm0z5xs",
        },
        // {
        // 	icon: "mdi-instagram",
        // 	href: "www.facebook.com",
        // },
        {
          icon: "mdi-gmail",
          href: "mailto:klhong124@gmail.com",
        },
        {
          icon: "mdi-github",
          href: "https://github.com/klhong124",
        },
        {
          icon: "mdi-whatsapp",
          href: "https://wa.me/447878154432",
        },
      ],
      form_msg: false,
      cooldown: 0,
    };
  },
  mounted() {
    console.log(`
			"#######::: ##:::: ##::::'###::::: ##':::: ##:
			##.... ##:' ##:::: ##:::'## ##:::: ####::: ##:
			##:::: ##: . ##:: ##:::'##:. ##::: ## ##:: ##:
			########:: :. ## ##:::'##:::. ##:: ##: ##: ##:
			##.. ##::: ::. ###:::: #########:: ##:. ## ##:
			##::. ##:: ::: ##::::: ##.... ##:: ##:::. ###:
			##:::. ##:.::: ##::::: ##:::: ##:: ##::::. "#:
		`);
  },
  methods: {
    moveTowanted() {
      $("html, body").animate(
        { scrollTop: $("#wanted").offset().top - 50 },
        1000
      );
    },
    handleSubmit() {
      let myForm = document.getElementById("form");
      let formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => (this.form_msg = true))
        .catch((error) => alert(error));
      this.cooldown_func(5);
    },
    cooldown_func(sec) {
      this.cooldown = sec;
      if (this.cooldown > 0) {
        setTimeout(() => {
          this.cooldown_func(sec - 1);
        }, 1000);
      } else {
        this.form_msg = false;
      }
    },
  },
};
</script>

<style>
.full-page {
  margin-top: 10vh;
  min-height: 90vh;
  position: relative;
}
.half-page {
  margin-top: 90px;
  min-height: 80vh;
  position: relative;
}
.desc {
  position: absolute;
  bottom: 10vh;
}
.name {
  font-size: max(8.5vw, 75px);
}
h1 {
  line-height: 60px;
  font-weight: 700;
  font-size: max(8.5vw, 45px);
  display: inline;
}
small {
  font-weight: 700;
  font-size: max(3vw, 25px);
  color: #747474;
}
.exe {
  margin-top: 12px;
  float: right;
}
.readme {
  margin: 12vh 0;
  width: 100%;
  left: 0;
}
.readme i {
  transform: scale(1, 0.7);
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
.about_me {
  margin-top: max(3vw, 25px);
}
.skill {
  text-align: right;
}
.skill h1 {
  display: inline;
}
.card {
  padding: 32px 12px;
  border: solid white;
  border-width: 1px;
  border-radius: 8px;
}
time {
  font-weight: 700;
}
.timeline {
  margin-top: 100px;
  margin-bottom: 100px;
}
.timeline p {
  text-align: center;
}

.timeline ul {
  padding: 0;
}
.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 2px;
  margin: 0 auto;
  padding-top: 100px;
  background: #8d8d8d;
}

.timeline ul li::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}
.timeline ul li time {
  position: absolute;
  top: 0;
  width: 70px;
  padding: 15px;
}
.timeline ul li div {
  position: relative;
  top: -32px;
  width: 400px;
  padding: 15px;
}

.timeline ul li div::before {
  content: "";
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) p {
  text-align: left;
}

.timeline ul li:nth-child(odd) time {
  left: -65px;
}
.timeline ul li:nth-child(odd) div {
  left: 100px;
}
.timeline ul li:nth-child(odd) div::before {
  border-color: transparent transparent transparent transparent;
}

.timeline ul li:nth-child(even) p {
  text-align: right;
}
.timeline ul li:nth-child(even) time {
  left: 395px;
  text-align: right;
}
.timeline ul li:nth-child(even) div {
  left: -501px;
  text-align: right;
}

.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent transparent;
}
.mw-700 {
  max-width: 700px;
}
.form-msg {
  margin-left: 8px;
  color: rgb(23, 201, 100);
}
@media screen and (max-width: 1015px) {
  .timeline ul li div {
    width: 260px;
  }
  .timeline ul li:nth-child(even) div {
    left: -354px;
  }
  .timeline ul li:nth-child(even) time {
    left: 248px;
  }
}
@media screen and (max-width: 740px) {
  .timeline p {
    text-align: left;
  }
  .timeline ul li {
    margin-left: 20px;
  }

  .timeline ul li div {
    width: calc(100vw - 91px);
  }
  .timeline ul li div time {
    top: -35px;
  }
  .timeline ul li div {
    top: 0;
  }
  .timeline ul li:nth-child(odd) time {
    left: 0;
  }
  .timeline ul li:nth-child(odd) div {
    left: 35px;
  }
  .timeline ul li:nth-child(even) time {
    text-align: left;
    left: 0;
  }
  .timeline ul li:nth-child(even) p {
    text-align: left;
  }
  .timeline ul li:nth-child(even) div {
    left: 35px;
  }
}
</style>
