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
        <div class="hero_data">
          <h1 class="hero_title">Hello, moi c'est Vincent!</h1>
          <h2>Je suis développeur front junior, avec 1 an et demi d'expérience en codage, et dix ans en design et marketing.</h2>
          <a class="button" :href="'#contact'">Contact</a>
        </div>

        <div class="hero_img">
          <img src="/vincent.jpg" alt="photo_vincent">
        </div>
      </section>

      <!-- ====== ABOUT ====== -->
      <section class="about" id="about">
        <h2 class="section_title">Parcours</h2>
        <div class="about_container">
          <div class="about_box marketing">
            <div class="about_img">
              <img src="/vangogh_shoes.png" alt="vangogh_shoes">
          </div>
            <div>
              <h3 class="about_subtitles">Marketing</h3>
              <p class="about_text">
                Diplômé d'un master en entrepreneuriat, j'ai été conseillé en création d'entreprise au sein d'un réseau national de franchise pendant trois ans. 
                <br/>Puis je suis devenu indépendant, et j'ai élargi mon champ d'activité auprès d'artistes et de chercheurs d'emploi.
              </p>
              <a href="https://www.linkedin.com/in/vincent-herail-143a72135/" class="about_social_icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
          <div class="about_box design">
            <div class="about_img">
              <img src="/vangogh_sunflowers.png" alt="vangogh_sunflowers">
            </div>
            <div>
              <h3 class="about_subtitles">Design</h3>
              <p class="about_text">
                La fréquentation du monde de la culture m'ayant ouvert de nouveaux horizons, je me suis formé à la réalisation et au montage vidéo afin d'ajouter ces prestations à mes services de bases.  
                <br/>Aujourd'hui encore je publie un manuel de design sur mon compte Instagram @vangoghmethod.
              </p>
              <a href="https://www.instagram.com/vangoghmethod/" class="about_social_icon">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </div>
          </div>

          <div class="about_box developpement">
            <div class="about_img">
              <img src="/vangogh.png" alt="vangogh_lock">
            </div>
            <div>
              <h3 class="about_subtitles">Développement</h3>
              <p class="about_text">
                Marketing et multimédia m’ont progressivement orienté vers le cœur de la transformation numérique : le développement ! 
                <br/>Je souhaite désormais intégrer une structure dynamique et reconnue pour donner le meilleur de moi-même et progresser en compétences.
              </p>
              <a href="https://github.com/vincentherail" class="about_social_icon">
               <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
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
        {link:'about', title: 'Parcours'}, 
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
  animation: fadeIn ease 0.6s; 
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

main{
    max-width: 1024px;
    margin-right: auto;
    margin-left: auto;
}

/*===== HERO =====*/
.hero{
  height: calc(100vh - 10rem);
  row-gap: 1rem;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  padding-top: 1rem
}

.hero_data{
  /* align-self: center */
  width: 192px;
  flex-grow: 3;
}
.hero_img {
  width: 192px;
  flex-grow: 1;
  /* margin: 3rem */
  margin-right: 3rem;
  margin-left: 3rem;
}

.hero_img img{
  border-radius: 50%;
}

.hero_title{
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-five)
}

.hero_title-color{
  color: var(--light-blue)
}


/*BUTTONS*/
.button{
  display :inline-block;
  background-color: var(--light-blue);
  color: #fff !important;
  margin: 3rem;
  padding: .75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: .5rem
}

.button:hover{
  box-shadow: 0 10px 36px rgba(0,0,0,.25)
}

/*===== ABOUT =====*/
.about{
  margin-bottom: 2rem;
}
.about_container{
  display: flex;
  flex-wrap: wrap;
  margin-left: -2rem;
  margin-right: -2rem;
  /* justify-content: space-between; */
}

.about_box{
  margin-left: 2rem;
  margin-right: 2rem;
  /* width: 30%; */
  width: 270px;
  flex-grow: 1;
}

.about_subtitles{
  margin: 1rem 0 .5rem;
}

.about_img img{
  height: 200px;
  margin: 0 auto 2rem
}

.about_social_icon{
  width: max-content;
  margin-bottom: var(--mb-two);
  font-size: 1.8rem;
  color: var(--light-blue) !important;
  /* margin: 1rem; */
}

.about_social_icon:hover{
  color: var(--dark-blue) !important;
}
</style>