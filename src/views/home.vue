<i18n>
en:
    hello: "Hello World"
fr:
    hello: "Bonjour le monde"
</i18n>

<template lang="pug">
  //- flat-surface-shader.shader(type="webgl" :light="light" :mesh="mesh")
  //- p(v-t="'hello'")

  //- ==== MAIN ====
  div  

    //- ==== HEADER =====
    header.l-header
      nav.nav.bd-grid
        div
          a.nav__logo(href='#') Vincent

        .nav__menu#nav-menu
          ul.nav__list
            li.nav__item
              a.nav__link.active(href='#home') Home
            li.nav__item
              a.nav__link.active(href='#about') A propos
            li.nav__item
              a.nav__link.active(href='#skills') Compétences
            li.nav__item
              a.nav__link.active(href='#work') Projets
            li.nav__item
              a.nav__link.active(href='#contact') Contact
        .nav__toggle#nav-toggle
          font-awesome-icon(icon="bars")

    //-==== MAIN ====
    main.l-main

      //--===== HOME =====
      section.home.bd-grid#home
        div.home__data
          h1.home__title Hey,
            br/ Je suis 
            span.home__title-color Vincent 
            | Développeur Web

          a.button(href='#contact') Contact

        .home__social
          a.home__social-icon(href="")
            font-awesome-icon(:icon="['fab', 'github']")
          a.home__social-icon(href="")
            font-awesome-icon(:icon="['fab', 'linkedin']")            
          a.home__social-icon(href="")
            font-awesome-icon(:icon="['fab', 'instagram']")            

        .home__img  
          img(src="../assets/img/vangogh.png" alt="") 

      //- ===== ABOUT =====
      section.about.section#about
        h2.section-title A Propos

          .about__container.bd-grid
            .about__img
              img(src="../assets/img/vincent.jpg" alt="")
              
          div
            h2.about__text Moi c'est Vincent
            p.about__text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.         

      //- --===== SKILLS =====
      section.skills.section#skills
        h2.section-title Compétences

        .skills__container.bd-grid        
          div
            h2.skills__subtitle Compétences Pro
            p.skills__text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.
            .skills__data
              .skills__names                
                i.bx.bxl-html5.skills__icon
                span.skills__name HTML5
              .skills__bar.skills__html

              div
                span.skills__percentage 95%

            .skills__data
              .skills__names                
                i.bx.bxl-CSS3.skills__icon
                span.skills__name CS3
              .skills__bar.skills__css

              div
                span.skills__percentage 85%

            .skills__data
              .skills__names                
                i.bx.bxl-javascript.skills__icon
                span.skills__name JAVASCRIPT
              .skills__bar.skills__js

              div
                span.skills__percentage 90%

            .skills__data
              .skills__names                
                i.bx.bxs-paint.skills__icon
                span.skills__name UX/UI
              .skills__bar.skills__ux

              div
                span.skills__percentage 80%
          
          div              
            img.skills__img(src="../assets/img/work3.jpg" alt="")
      
      //-===== WORK =====
      section.work.section#work
          h2.section-title Projets

          .work__container.bd-grid
              .work__img
                img(src="../assets/img/work1.jpg" alt="")
              .work__img
                img(src="../assets/img/work2.jpg" alt="")
              .work__img
                img(src="../assets/img/work3.jpg" alt="")
              .work__img
                img(src="../assets/img/work4.jpg" alt="")
              .work__img
                img(src="../assets/img/work5.jpg" alt="")
              .work__img
                img(src="../assets/img/work6.jpg" alt="")
      
      //- ===== CONTACT =====
      section.contact.section#contact
          h2.section-title Contact

          .contact__container.bd-grid
              form.contact__form(action="")
                  input.contact__input(type="text" placeholder="Name")
                  input.contact__input(type="mail" placeholder="Email")
                  textarea.contact__input(name="" id="" cols="0" rows="10")
                  input.contact__button.button(type="button" value="Envoyer")
      
    //- ===== FOOTER =====-
    footer.footer
        p.footer__title Vincent
        .footer__social
            a.footer__icon(href="#")
              font-awesome-icon(:icon="['fab', 'github']")
            a.footer__icon(href="#")
              font-awesome-icon(:icon="['fab', 'linkedin']")
            a.footer__icon(href="#")
              font-awesome-icon(:icon="['fab', 'instagram']")
        p &#169; 2020 copyright

</template>




<script>


// <!--===== SCROLL REVEAL =====-->
// vérifier s'il n'y en a pas dans le boilerplate

// <script src="https://unpkg.com/scrollreveal"></script>

// import { Vue, Component } from 'vue-property-decorator'
// @Component
// export default class Home extends Vue {

//   light = {
//     count: 2,
//     xyScalar: 1,
//     zOffset: 276,
//     ambient: '#ffffff',
//     diffuse: '#002b52',
//     speed: .0007,
//     autopilot: true,
//     draw: true
//   }

//   mesh = {
//     width: 1.2,
//     height: 1.5,
//     depth: 20,
//     segments: 14,
//     slices: 10,
//     xRange: 0.15,
//     yRange: 0.15,
//     ambient: '#000000',
//     diffuse: '#15639b',
//     speed: 0.0007
//   }
// }
</script>


<style lang="stylus">

/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/*===== VARIABLES CSS =====*/
:root{
  --header-height: 3rem;
  --font-semi: 600;
}

/*===== Colors =====*/
:root{
  --marine-blue: #4070F4;
  --stone-blue: #0E2431;
}

/*===== Typo =====*/
:root{
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
}
@media screen and (min-width: 768px){
  :root{
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
  }
}

/*===== Margins =====*/
:root{
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
}

/*===== z index =====*/
:root{
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*===== BASE =====*/
*,::before,::after{
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
}
body{
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--stone-blue);
}
h1,h2,p{
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}

/*===== CLASS CSS ===== */
.section-title{
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--marine-blue);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
  text-align: center;
}
.section-title::after{
  position: absolute;
  content: "";
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--marine-blue);
}
.section{
  padding-top: 3rem;
  padding-bottom: 2rem;
}

/*===== LAYOUT =====*/
.bd-grid{
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}
.l-header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146,161,176,.15);
}

/*===== NAV =====*/


/*Active menu*/


/*=== Show menu ===*/
.show{
  right: 0;
}

/*===== HOME =====*/
.home{
  height: calc(100vh - 3rem);
  row-gap: 1rem;
}
.home__data{
  align-self: center;
}
.home__title{
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-5);
}
.home__title-color{
  color: var(--marine-blue);
}
.home__social{
  display: flex;
  flex-direction: column;
}
.home__social-icon{
  width: max-content;
  margin-bottom: var(--mb-2);
  font-size: 1.5rem;
  color: var(--stone-blue);
}
.home__social-icon:hover{
  color: var(--marine-blue);
}
.home__img{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 295px;
}

/*BUTTONS*/


/* ===== ABOUT =====*/


/* ===== SKILLS =====*/


/* ===== WORK =====*/


/* ===== CONTACT =====*/


/* ===== FOOTER =====*/


/* ===== MEDIA QUERIES=====*/
@media screen and (min-width: 768px){
  body{
    margin: 0;
  }
  .section{
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  .section-title{
    margin-bottom: var(--mb-6);
  }
  .section-title::after{
    width: 80px;
    top: 3rem;
  }

  .nav{
    height: calc(var(--header-height) + 1rem);
  }
  .nav__list{
    display: flex;
    padding-top: 0;
  }
  .nav__item{
    margin-left: var(--mb-6);
    margin-bottom: 0;
  }
  .nav__toggle{
    display: none;
  }
  .nav__link{
    color: var(--stone-blue);
  }

  .home{
    height: 100vh;
  }
  .home__data{
    align-self: flex-end;
  }
  .home__social{
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }
  .home__social-icon{
    margin-bottom: 0;
    margin-right: var(--mb-4);
  }
  .home__img{
    width: 457px;
    bottom: 15%;
  }

  .about__container, .skills__container{
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    text-align: initial;
  }
  .about__img img{
    width: 300px;
  }
  .work__container{
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2,1fr);
    column-gap: 2rem;
  }
  .contact__form{
    width: 360px;
  }
  .contact__container{
    justify-items: center;
  }
}

@media screen and (min-width: 1024px){
  .bd-grid{
    margin-left: auto;
    margin-right: auto;
  }
  .home__img{
    right: 10%;
  }
}
</style>

