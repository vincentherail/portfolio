<template>
  <div>
    <!-- ====== HEADER ====== -->
    <header>
      <nav>
        <div>
          <a href="#">Vincent</a>
        </div>
        <div class="nav_menu">
          <ul>
            <li v-for="item in items" :key="item">
              <a href="#">{{item}}</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- ====== MAIN ====== -->
    <main>

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
          <img src="/vangogh.png" alt="vangogh_lock">
        </div>
      </section>

      <!-- ====== ABOUT ====== -->
      <section class="about" id="">
        <h2 class="section_title">A propos</h2>
        <div class="about_container">
          <div class="about_img">
            <img src="/vincent.jpg" alt="photo_vincent">
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
      <section class="competences" id="">
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
      <section class="projects" id="">
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
      <section class="contact" id="">
        <form class="contact-form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input type="text" name="user_name">
          <label>Email</label>
          <input type="email" name="user_email">
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send">
        </form>
      </section>

    </main>


  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  components: {},
  data() {
    return {
      items: ['Accueil', 'A propos', 'Compétences', 'Projets', 'Contact']
    }
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_a494ztq', 'template_g0pg96j', e.target, 'user_Tm1FJXS84TGFElsWMsQfV')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>
