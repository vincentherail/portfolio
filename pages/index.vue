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
            <font-awesome-icon id="burger" :icon="['fas', 'bars']" />
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
      <section class="section" id="hero">
        <div class="hero_data" style="z-index:99;">
          <h1 class="hero_title">Hello, moi c'est Vincent!</h1>
          <h3 class="section_subtitle">Je suis développeur front junior, avec 1 an d'expérience en code, et dix ans en marketing et création multimédia.</h3>
          <a class="button" :href="'#contact'">Me Contacter</a>
        </div>

        <div class="hero_img" style="z-index:99;">
          <img src="/vincent.jpg" alt="photo_vincent">
        </div>
      </section>
      <button @click="test">test</button>

      <!-- ====== Instagram feed // todo later ====== -->
      <!-- https://github.com/kevinongko/vue-instagram/issues/34
      https://gitlab.com/snippets/1957175
      <section class="section" id="insta">
        <oneWaveInsta 
            token=process.env.NUXT_ENV_INSTA_TOKEN
            fields="media_url,media_type,caption"
            :mediatypes="['IMAGE']"
        >
            <template v-slot:loading="props">
            <h1 v-if="props.loading" class="fancy-loading">
                Loading, please wait...
            </h1>
            </template>

            <template v-slot:feeds="props">
            <div>
                <img :src="props.feed.media_url" />
                <div :text="props.feed.caption" />
            </div>
            </template>

            <template v-slot:error="props">
            <div class="fancy-alert">{{ props.error }}</div>
            </template>
        </oneWaveInsta> 

      </section>-->

      <!-- ====== ABOUT ====== -->
      <section class="section" id="about">
        <h2 class="section_title">Parcours</h2>
        <div class="section_container">
          <div class="about_box marketing">
            <div class="about_img">
              <img src="/vangogh_shoes.png" alt="vangogh_shoes">
          </div>
            <div>
              <h3 class="section_subtitle">Marketing</h3>
              <p class="about_text">
                Diplômé d'un master en entrepreneuriat, j'ai été conseiller en création d'entreprise au sein d'un réseau national de franchise pendant trois ans. 
                <br/>Puis je suis devenu indépendant, et j'ai élargi ma clientèle auprès d'artistes et de chercheurs d'emploi.
              </p>
              <a href="https://www.linkedin.com/in/vincent-herail-143a72135/" class="about_social_icon">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
          <div class="about_box multimedia">
            <div class="about_img">
              <img src="/vangogh_sunflowers.png" alt="vangogh_sunflowers">
            </div>
            <div>
              <h3 class="section_subtitle">Multimédia</h3>
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
              <h3 class="section_subtitle">Développement</h3>
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
      <section class="section" id="competences">
        <h2 class="section_title">Compétences</h2>
        <div class="section_container">
          <div class="skills developpement">
            <div class="skills_left">
              <h3 class="section_subtitle">Développement</h3>
              <p class="skills_text">J'ai obtenu un titre de professionnel de niveau 5 - Développeur Web / Web Mobile à l'AFPA au cours d'une formation d'un an qui s'est conclue par un stage de mise en pratique Frontend. Cette formation (algorithmie, HTML / CSS / JS, découverte Front-Back End, BDD, sécurité et gestion de projet) m'a donné les bases nécessaires pour progresser grâce à des tutos en lignes sur des langages, frameworks et librairies spécifiques.
              </p>
              <p><strong>Liste non-exhaustive:</strong> VueJS (2 & 3), NuxtJS, Vuetify, Stylus, Pug, GraphQL, Firebase, etc ...    </p>
              <div class="skills_tech">
                <font-awesome-icon class="skills_icon" :icon="['fab', 'html5']" />
                <font-awesome-icon class="skills_icon" :icon="['fab', 'css3']" />
                <font-awesome-icon class="skills_icon" :icon="['fab', 'js']" />
              </div>
            </div>
            <div class="skills_img skills_right">
              <img src="/work3.jpg" alt="photo_ordinateur">
            </div>
          </div>
          <div class="skills collaboration">
            <div class="skills_img skills_right">
              <img src="/team_work.png" alt="team_work">
            </div>
            <div class="skills_left">
              <h3 class="section_subtitle">Collaboration</h3>
              <p class="skills_text">Dès le début de ma carrière, mon Master II en Gestion des Organisations et mon expérience de conseiller en création d'entreprise m'ont permis de collaborer sur des projets de nature très diverses tel que : la coordination d'un réseau national, l'animation de réunion de travail, la formation en face-à-face et le suivi de la progression des professionnels accompagnés. Je m'épanouïs dans le travail en équipe, et me sens aussi à l'aise dans une position de pédagogue que d'apprenant.
              </p>
              <p><strong>Mes valeurs professionnelles:</strong> Camaraderie, goût de l'effort, éthique et volonté d'innover.</p>
            </div>
          </div>
          
        </div>
      </section>

      <!-- ====== PROJETS ====== -->
      <section class="section" id="projects">
        <h2 class="section_title">Projets</h2>
        <div class="section_container">

          <v-dialog
            v-model="dialogOne"
            width="500"
            class="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <div 
                class="project_img"                
                v-bind="attrs"
                v-on="on"
              >
                <img src="sidy.png" alt="failed_project">
              </div>
            </template>

            <v-card>
              <v-card-title class="headline blue lighten-2">
                SIDY 
              </v-card-title>
              <v-card-title class="subtitle-1 blue lighten-3">
                Août / Décembre 2020
              </v-card-title>

              <v-card-text class="py-6">
                Projet de plateforme web dans le domaine de la gestion immobilière, développé par une start-up au sein de l'incubateur BIC Montpellier. Intégré au projet en tant que développeur Front, au sein d'une équipe composée de 3 développeurs et d'un CTO.
                <br/><br/>
                <strong>Stack</strong> : Vue, Pug, Stylus, GraphQL, Kubernetes, AWS  
              </v-card-text>
              <v-btn
                elevation="2"
                rounded
                small
                text
                class="next_btn"
                @click="nextProject(dialogOne)"
              >Next</v-btn>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialogTwo"
            width="500"
            class="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <div 
                class="project_img"                
                v-bind="attrs"
                v-on="on"
              >
                <img src="sequence_prevention2.jpeg" alt="sequence_prevention">
              </div>
            </template>

            <v-card>
              <v-card-title class="headline indigo darken-4 white--text">
                SEQUENCE PREVENTION
              </v-card-title>
              <v-card-title class="subtitle-1 indigo darken-3 white--text">
                Mars / Juin 2020
              </v-card-title>
              <v-card-text class="py-6">
                Application permettant la dématerialisation et le stockage sécurisé des réunions de sécurité pour le compte d'un cabinet d'avocats bordelais spécialisé dans le droit du travail. 
                Développée en binôme avec mon maître de stage, David MARSALONE, gérant du studio web montpelliérain Pixel Vinaigrette. 
                <br/><br/>
                <strong>Stack</strong> : PWA Vue, ORM Redbean, BDD SQLite, Vuetify, Vue-signature, vue-pdf  
              </v-card-text>
              <v-btn
                elevation="2"
                rounded
                small
                text
                class="next_btn"
                @click="nextProject(dialogTwo)"
              >Next</v-btn>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialogThree"
            width="500"
            class="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <div 
                class="project_img"                
                v-bind="attrs"
                v-on="on"
              >
                <img src="afpa.png" alt="">
              </div>
            </template>

            <v-card>
              <v-card-title class="headline light-green darken-1 white--text">
                AFPANIER
              </v-card-title>
              <v-card-title class="subtitle-1 light-green lighten-1 white--text">
                Janvier / Mars 2020
              </v-card-title>
              <v-card-text class="py-6">
                Plateforme web de commande de panier repas / légumes pour les stagiaires du centre de formation. 
                <br/><br/>
                <strong>Stack</strong> : HTML, CSS, JS, Framework PHP maison, BDD MySQL 
              </v-card-text>
              <v-btn
                elevation="2"
                rounded
                small
                text
                class="next_btn"
                @click="nextProject(dialogThree)"
              >Next</v-btn>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialogFour"
            width="500"
            class="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <div 
                class="project_img"                
                v-bind="attrs"
                v-on="on"
              >
                <img src="shopify.png" alt="">
              </div>
            </template>

            <v-card>
              <v-card-title class="headline lime lighten-2">
                Projet SHOPIFY
              </v-card-title>
              <v-card-title class="subtitle-1 lime lighten-3">
                Décembre 2020 / Mars 2021
              </v-card-title>
              <v-card-text class="py-6">
                Développement d'un site de e-commerce dans le but de me former au SEO. 
                <br/><br/>
                <strong>Stack</strong> : CMS Shopify, Photoshop, Aliexpress, Applis Shopify, SEO, SEA  
              </v-card-text>
              <v-btn
                elevation="2"
                rounded
                small
                text
                class="next_btn"
                @click="nextProject(dialogFour)"
              >Next</v-btn>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialogFive"
            width="500"
            class="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <div 
                class="project_img"                
                v-bind="attrs"
                v-on="on"
              >
                <img src="net_ninja.jpg" alt="net_ninja">
              </div>
            </template>

            <v-card>
              <v-card-title class="headline black white--text">
                NET NINJA
              </v-card-title>
              <v-card-title class="subtitle-1 black red--text">
                2020 / 2021
              </v-card-title>
              <v-card-text class="py-6">
                Formation continue Front-end / Back-end grâce aux tutoriels du youtubeur anglais Shaun sur son compte UDEMY. 
                <br/><br/>
                <strong>Stack</strong> : Vue, JS, Node, Angular, PHP, CSS, etc ... 
              </v-card-text>
              <v-btn
                elevation="2"
                rounded
                small
                text
                class="next_btn"
                @click="nextProject(dialogFive)"
              >Next</v-btn>
            </v-card>
          </v-dialog>

          <v-dialog
            v-model="dialogSix"
            width="500"
            class="dialog"
          >
            <template v-slot:activator="{ on, attrs }">
              <div 
                class="project_img"                
                v-bind="attrs"
                v-on="on"
              >
                <img src="maison_maitre.png" alt="maison_maitre">
              </div>
            </template>

            <v-card>
              <v-card-title class="headline green darken-4 white--text">
                MAISON MAÎTRE
              </v-card-title>
              <v-card-title class="subtitle-1 green darken-3 white--text">
                Mars 2020
              </v-card-title>
              <v-card-text class="py-6">
                Proposition de site web sous forme de tunnel de vente afin de candidater à mon stage de validation du diplôme de Développeur web.
                <br/><br/>
                <strong>Stack</strong> : HTML, CSS, JS, Canva (création graphique)  
              </v-card-text>
            </v-card>
          </v-dialog>

        </div>
      </section>

      <!-- ====== CONTACT ====== -->
      <section class="section" id="contact">
        <h2 class="section_title">Contact</h2>
        <form class="contact-form" @submit.prevent="sendEmail" v-if="!formSent">
          <label>Nom</label>
          <input type="text" name="user_name" required class="contact_input">
          <label>Email</label>
          <input type="email" name="user_email" required class="contact_input">
          <label>Message</label>
          <textarea name="message" required class="contact_input"></textarea>
          <input type="submit" value="Envoyer" class="button">
        </form>
        <div class="formSent" v-else>
          Merci ! Votre message a bien été envoyé.
        </div>
      </section>
    </main>

      <!-- ====== FOOTER ====== -->
      <div class="particles">
        <div class="footer particlecontent" >
          <span>&copy; {{ new Date().getFullYear() }} / Portfolio responsive, réalisé avec NuxtJS, repo accessible ici             
            <a href="https://github.com/vincentherail/portfolio" class="about_social_icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </span> 
        </div>
        <vue-particles
          class="particles-js"
          color="#4070F4"
          :particleOpacity="0.9"
          :particlesNumber="50"
          shapeType="circle"
          :particleSize="7"
          :lineLinked="false"
          :linesDistance="150"
          :moveSpeed="2.5"
          :hoverEffect="false"
          hoverMode="grab"
          :clickEffect="false"
          clickMode="push"
        >
        </vue-particles>
      </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import oneWaveInsta from '../components/oneWaveInsta';

export default {
  components: {oneWaveInsta},
  data() {
    return {
      items: [
        {link:'about', title: 'Parcours'}, 
        {link:'competences', title: 'Compétences'}, 
        {link:'projects', title: 'Projets'}, 
        {link:'contact', title: 'Contact'}
        ],
      mobileView: false,
      showNav: false,
      formSent: false,
      dialogOne: false, 
      dialogTwo: false, 
      dialogThree: false, 
      dialogFour: false, 
      dialogFive: false, 
      dialogSix: false
    }
  },
  methods: {
    test(){
      console.log(process.env.NUXT_ENV_INSTA_TOKEN)
    },
    // switch to the next dialog Project (not really UX friendly actually, could be improve)
    nextProject(dialog){
      switch(dialog) {
        case this.dialogOne: this.dialogOne = false ; this.dialogTwo = true; break
        case this.dialogTwo: this.dialogTwo = false ; this.dialogThree = true; break
        case this.dialogThree: this.dialogThree = false ; this.dialogFour = true; break
        case this.dialogFour: this.dialogFour = false ; this.dialogFive = true; break
        case this.dialogFive: this.dialogFive = false ; this.dialogSix = true; break
      }
    },
    // JS library to send an email to vincent.herail@gmail.com
    sendEmail(e) {
      emailjs.sendForm('service_a494ztq', 'template_g0pg96j', e.target, 'user_Tm1FJXS84TGFElsWMsQfV')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
            if (result.status = 200 ) {
             this.formSent = true 
            }; 
        }, (error) => {
          console.log('FAILED...', error);
        });

    },
    // make appear the gobackbtn
    handleScroll (event) {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        this.$refs.goTopBtn.style.display = "block";
        } else {
          this.$refs.goTopBtn.style.display = "none";
        }
    },
    // go back to the top button
    topFunction: () => {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
    },
    // Large screen x mobile menu switch
    handleView(){
      this.mobileView = window.innerWidth <= 768;
    },
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView)
  },
  // For Scroll active menu listener
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  // For Scroll active menu listener
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
  --h2-font-size: 2rem;
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

.next_btn{
  margin: 1rem
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
}

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

/*===== CLASS CSS ===== */
.section{
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 100%;
}

.section_title{
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--light-blue);
  margin-top: var(--mb-two);
  margin-bottom :var(--mb-four);
  text-align: center
}

.section_container{
  display: flex;
  justify-content: space-between;
}

.section_subtitle{
  margin: 1rem 0 .5rem;
}

main{
    max-width: 1024px;
    margin-right: auto;
    margin-left: auto;
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

/*===== HERO =====*/
#hero{
  height: 85vh;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
}

.hero_data{
  width: 192px;
  flex-grow: 3;
}
.hero_img {
  width: 192px;
  flex-grow: 1;
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
@media screen and (max-width: 768px) {

  .hero_title{
    font-size: var(--big-font-size);
    margin-bottom: var(--mb-five);
  }

  .hero_img img{
    margin-bottom: var(--mb-five);
  border-radius: 50%;
}

  #hero .button{
    margin: 2rem;
  }
}
/*===== ABOUT =====*/
#about{
  margin-bottom: 2rem;
}

.about_box{
  margin-left: 2rem;
  margin-right: 2rem;
  width: 270px;
  flex-grow: 1;
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
}

.about_social_icon:hover{
  color: var(--dark-blue) !important;
}

@media screen and (max-width: 768px) {

  .about_box {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

/*===== SKILLS =====*/
#competences .section_container{
  display: block;
}

.skills{
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
}

.skills_tech{
  display: flex;
  justify-content: center;
}

.skills_text{
  margin-bottom: 1rem !important;
}

.skills_icon{
  width: max-content;
  margin-bottom: var(--mb-two);
  font-size: 3rem;
  margin: 2rem
}

.skills_left{
  max-width: 550px;
}

.skills_right{
  width: 352px;
}
.skills_img img{
  border-radius: 5%;
  margin-top: 2rem;
}

@media screen and (max-width: 768px) {

  .section_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .skills {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

/*===== PROJECTS =====*/
#projects .section_container{
  display: flex;
  flex-wrap: wrap;
}

.project_img{
  margin: 2rem;
  width: 200px;
}

.project_img img{
  border-radius: 5%;
}

/*===== CONTACT =====*/
#contact{
  z-index: 999;
  overflow: hidden;
  margin-bottom: 4rem;
}

.contact_input{
  width: 100%;
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);
  padding: 1rem;
  border-radius: .5rem;
  border: 1.5px solid var(--dark-blue);
  background-color: white;
  outline: none;
  margin-bottom: var(--mb-four);
}

.contact_button{
  display: block;
  border: none;
  outline: none;
  font-size: var(--normal-font-size);
  cursor: pointer;
  margin-left: auto
}

.formSent{
  height: 20vh;
}

/*===== FOOTER =====*/

.footer{
  padding: 4rem 0rem;
  overflow: hidden;
}

.footer span{
  color: var(--light-blue);
  font-size: 1.2rem
}

.footer .about_social_icon{
  color: var(--light-blue) !important;
}

.particles{
  position: relative;
  justify-content: center;
  height: 15vh;
  z-index: 999 !important;
  display: block;
}

.particlecontent{
  text-align: center;
}

#particles-js {
    z-index: -1 !important;
    position: absolute;
    width: 100%;
    max-height: 150px;
    left: 0px;
    bottom: 0px;
    overflow: hidden;

}

canvas {
  display: inline-block;
}

</style>