<template>
  <div>
    <!-- ====== HEADER ====== -->
    <header>
      <nav>
        <div>
          <a href="#">VINCENT</a>
        </div>

        <!-- LARGE SCREEN MENU -->
        <scrollactive 
          class="nav_menu" 
          :duration="50"
          active-class="isActive"
          v-if="!mobileView" 
          v-on:itemchanged="onItemChanged"
        >
          <ul>
            <li v-for="item in items" :key="item.link" class="nav_item">
              <a 
              :href="'#' + item.link" 
              class="nav_link scrollactive-item" 
              >
              {{item.title}}
              </a>
            </li>
          </ul>
        </scrollactive>
        
        <!-- MOBILE MENU -->
        <div class="nav_toggle" v-else @click="showNav = !showNav">
            <font-awesome-icon :icon="['fas', 'bars']" />
            <ul :class="{'open':showNav}">
              <li v-for="item in items" :key="item.link" class="nav_item">
                <a :href="'#' + item.link" class="nav_link">{{item.title}}</a>
              </li>
            </ul>
        </div>

      </nav>
    </header>

    <!-- ====== MAIN ====== -->
    <main>
      <button @click="topFunction()" id="goTopBtn" ref="goTopBtn" title="Go to top">Top</button>

      <!-- ====== HERO BANNER ====== -->
      <section class="hero" id="hero">
        <h1>Hey, moi c'est Vincent</h1>
        <h2>Je suis dev front junior !</h2>

        <button>Contact</button>

        <div class="hero_social">
          <a href="https://github.com/vincentherail">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://www.linkedin.com/in/vincent-herail-143a72135/">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="https://www.instagram.com/vangoghmethod/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>

        <div class="hero_img">
          <img src="/vincent.jpg" alt="photo_vincent">
        </div>
      </section>

      <!-- ====== ABOUT ====== -->
      <section class="about" id="about">
        <h2 class="section_title">A propos</h2>
        <div class="about_container">
          <div class="about_img">
            <img src="/vangogh.png" alt="vangogh_lock">
          </div>
          <div>
            <h3 class="about_subtitles">Entrepreunariat & technologies</h3>
            <p class="about_text">
              Après un début de carrière dans la gestion et le marketing, mon attrait pour la technologie a fait de moi un référent technique au sein des organisations où je travaillais. Bureautique et multimédia m’ont progressivement orienté vers le cœur de la transformation numérique : le développement ! 
              <br/>Aujourd’hui je souhaite intégrer une structure dynamique et reconnue pour donner le meilleur de moi-même et progresser en compétences.
            </p>
          </div>
        </div>
      </section>


      <!-- ====== COMPETENCES ====== -->
      <section class="competences" id="competences">
        <h2 class="section_title">Compétences</h2>
        <div class="skills_container">
          <div>
            <h2 class="skills_subtitle">Skills subtitles</h2>
            <p class="skills_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque est minima, repudiandae eveniet hic culpa consequuntur excepturi sit ut commodi odio nesciunt, totam quae incidunt non tenetur sapiente aspernatur.</p>
          </div>
          <div class="skills_tech">
            <font-awesome-icon :icon="['fab', 'html5']" />
            <font-awesome-icon :icon="['fab', 'css3']" />
            <font-awesome-icon :icon="['fab', 'js']" />
            <font-awesome-icon :icon="['fas', 'palette']" />
          </div>
          <div class="skills_img">
            <img src="/work3.jpg" alt="photo_ordinateur">
          </div>
        </div>
      </section>


      <!-- ====== PROJETS ====== -->
      <section class="projects" id="projects">
        <h2 class="section_title">Projets</h2>
        <div class="projects_container">
          <div class="project_img">
            <img src="work1.jpg" alt="">
          </div>
          <div class="project_img">
            <img src="work1.jpg" alt="">
          </div>
          <div class="project_img">
            <img src="work1.jpg" alt="">
          </div>
          <div class="project_img">
            <img src="work1.jpg" alt="">
          </div>
          <div class="project_img">
            <img src="work1.jpg" alt="">
          </div>
          <div class="project_img">
            <img src="work1.jpg" alt="">
          </div>
        </div>
      </section>


      <!-- ====== CONTACT ====== -->
      <section class="contact" id="contact">
        <form class="contact-form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input type="text" name="user_name" required>
          <label>Email</label>
          <input type="email" name="user_email" required>
          <label>Message</label>
          <textarea name="message" required></textarea>
          <input type="submit" value="Send">
        </form>
      </section>


    </main>

    <!-- ====== FOOTER ====== -->
    <footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </footer>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  components: {},
  data() {
    return {
      items: [
        {link:'about', title: 'A Propos'}, 
        {link:'competences', title: 'Compétences'}, 
        {link:'projects', title: 'Projets'}, 
        {link:'contact', title: 'Contact'}
        ],
      mobileView: false,
      showNav: false
    }
  },
  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 768;
    },
    sendEmail: (e) => {
      emailjs.sendForm('service_a494ztq', 'template_g0pg96j', e.target, 'user_Tm1FJXS84TGFElsWMsQfV')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },
    handleScroll (event) {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          this.$refs.goTopBtn.style.display = "block";
        } else {
          this.$refs.goTopBtn.style.display = "none";
        }
    },
    topFunction: () => {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
    }
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView)
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/*===== Colors =====*/
:root{
  --extra-light-blue: #88a6f7;
  --light-blue: #4070F4;
  --dark-blue: #0e2544;
}

/*===== Typo =====*/
:root{
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
  --font-semi: 600
}

@media screen and (min-width: 768px) {
  :root{
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem
  }
  
}

/*===== Margins =====*/
:root{
  --header-height: 3rem;
  --mb-one: 0.5rem;
  --mb-two: 1rem;
  --mb-three: 1.5rem;
  --mb-four: 2rem;
  --mb-five: 2.5rem;
  --mb-six: 3rem
}


/*===== z index =====*/
:root{
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100
}

/*===== BASE =====*/
*,::before,::after{
  box-sizing: border-box
}

html{
  scroll-behavior: smooth;
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--dark-blue);
}

h1,h2,p{
  margin: 0
}

ul{
  margin: 0;
  padding: 0;
  list-style: none
}

a{
  text-decoration: none
}

img{
  max-width: 100%;
  height: auto;
  display: block
}

#goTopBtn {
  display: none; 
  animation: fadeIn ease 0.5s;
  position: fixed; 
  bottom: 20px; 
  right: 30px; 
  z-index: 99; 
  border: none; 
  outline: none; 
  background-color: var(--extra-light-blue); 
  color: white; 
  cursor: pointer; 
  padding: 12px; 
  border-radius: 10px; 
  font-size: 15px; 
}

@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

#goTopBtn:hover {
  background-color: var(--light-blue); 
}

/*===== CLASS CSS ===== */
.section_title{
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--light-blue);
  margin-top: var(--mb-two);
  margin-bottom :var(--mb-four);
  text-align: center
}

.section{
  padding-top: 3rem;
  padding-bottom: 2rem
}

/*===== NAV =====*/

header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146,161,176,.15)
}
nav{
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--mb-two);
  padding-right: var(--mb-two);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi)
}

.nav_menu{
  width: 70%;
  margin-right: 0;
  display: flex;
  justify-content: space-around;
  /* padding-left: auto; */
}

/* .nav_menu a:active{
  color: red
} */

.isActive{
  color: var(--dark-blue) !important;
}

.nav_menu ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav_toggle ul{
  position: fixed;
  top: var(--header-height);
  right: -100%;
  width: 80%;
  height: 100%;
  padding: 2rem;
  background-color: var(--dark-blue);
  transition: .5s
}

.nav_toggle .nav_item{
  margin-bottom: var(--mb-four)
}


.open{
  transform: translateX(-120%)
}

.nav_link{
  position :relative;
  /* color: #fff */
}

.nav_link:hover{
  position: relative
}

.nav_link:hover::after, .isActive::after{
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--light-blue)
}


/*
nav li{
  list-style-type: none;
} */
</style>