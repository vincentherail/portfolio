<template lang="pug">

  //- ==== MAIN ====
  div  

    //- ==== HEADER =====
    header.l-header
      nav.nav.bd-grid
        div
          a.nav__logo(href='#') Vincent

        //- LARGE SCREEN MENU
        .nav__menu#nav-menu(v-if="!mobileView")
          ul.nav__list
            li.nav__item
              a.nav__link(href='#home') Accueil
            li.nav__item
              a.nav__link(href='#about') A propos
            li.nav__item
              a.nav__link(href='#skills') Compétences
            li.nav__item
              a.nav__link(href='#work') Projets
            li.nav__item
              a.nav__link(href='#contact') Contact

        //- MOBILE MENU
        .nav__toggle(v-if="mobileView" @click="showNav = !showNav" )
          font-awesome-icon(icon="bars")
          ul.nav__list__toggle(:class="{'open':showNav}")
            li.nav__item
              a.nav__link.active(href='#home') Accueil
            li.nav__item
              a.nav__link.active(href='#about') A propos
            li.nav__item
              a.nav__link.active(href='#skills') Compétences
            li.nav__item
              a.nav__link.active(href='#work') Projets
            li.nav__item
              a.nav__link.active(href='#contact') Contact
              
    //-==== MAIN ====
    main.l-main

      //--===== HOME =====
      section.home.bd-grid#home
        div.home__data
          h1.home__title Hey,
            br/ Moi c'est 
            span.home__title-color Vincent 
            br/ Je suis Dev Front Junior

          a.button(href='#contact') Contact

        .home__social
          a.home__social-icon(href="https://github.com/vincentherail")
            font-awesome-icon(:icon="['fab', 'github']")
          a.home__social-icon(href="https://www.linkedin.com/in/vincent-herail-143a72135/")
            font-awesome-icon(:icon="['fab', 'linkedin']")            
          a.home__social-icon(href="https://www.instagram.com/vangoghmethod/")
            font-awesome-icon(:icon="['fab', 'instagram']")            

        .home__img  
          img(src="../assets/img/vangogh.png" alt="vangogh") 

      //- ===== ABOUT =====
      section.about.section#about
        h2.section-title A Propos

        .about__container.bd-grid
          .about__img
            img(src="../assets/img/vincent.jpg" alt="")
              
          div
            h2.about__subtitle Moi c'est Vincent
            p.about__text Après un début de carrière dans la gestion et le marketing, mon attrait pour la technologie a fait de moi un référent technique au sein des organisations où je travaillais. Bureautique et multimédia m’ont progressivement orienté vers le cœur de la transformation numérique : le développement ! 
            br/ Aujourd’hui je souhaite intégrer une structure dynamique et reconnue pour donner le meilleur de moi-même.         

      //- --===== SKILLS =====
      section.skills.section#skills
        h2.section-title Compétences

        .skills__container.bd-grid        
          div
            h2.skills__subtitle Compétences Pro
            p.skills__text L'auto-évaluation en pourcentage des compétences est une pirouette de personal branding parfaitement subjective. Par rapport à quoi / qui s'évalue-t-on?? J'apprécie toutefois de m'en servir car elle me permet de montrer mon niveau de maîtrise des compétences les unes par rapport aux autres.
            .skills__data
              .skills__names                
                i.bx.bxl-html5
                font-awesome-icon.skills__icon(:icon="['fab', 'html5']")            
                span.skills__name HTML5
              .skills__bar.skills__html

              div
                span.skills__percentage 90%

            .skills__data
              .skills__names                
                font-awesome-icon.skills__icon(:icon="['fab', 'css3']")
                span.skills__name CS3
              .skills__bar.skills__css

              div
                span.skills__percentage 75%

            .skills__data
              .skills__names                
                font-awesome-icon.skills__icon(:icon="['fab', 'js']")
                span.skills__name JAVASCRIPT
              .skills__bar.skills__js

              div
                span.skills__percentage 80%

            .skills__data
              .skills__names                
                font-awesome-icon.skills__icon(icon="palette")
                span.skills__name UX/UI
              .skills__bar.skills__ux

              div
                span.skills__percentage 85%
          
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
            a.footer__icon(href="https://github.com/vincentherail")
              font-awesome-icon(:icon="['fab', 'github']")
            a.footer__icon(href="https://www.linkedin.com/in/vincent-herail-143a72135/")
              font-awesome-icon(:icon="['fab', 'linkedin']")
            a.footer__icon(href="https://www.instagram.com/vangoghmethod/")
              font-awesome-icon(:icon="['fab', 'instagram']")
        p &#169; 2021 copyright

</template>




<script>
export default {
    data: () => {
      return  {
        mobileView: false,
        showNav: false
    };
  },
  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 768;
    }
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView)
  }
}
// <!--===== SCROLL REVEAL =====-->
// vérifier s'il n'y en a pas dans le boilerplate

// <script src="https://unpkg.com/scrollreveal"></script>


</script>


<style lang="stylus">

/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/*===== VARIABLES CSS =====*/
:root
  --header-height 3rem
  --font-semi 600


/*===== Colors =====*/
:root
  --first-color #4070F4
  --second-color #0E2431


/*===== Typo =====*/
:root
  --body-font 'Poppins', sans-serif
  --big-font-size 2rem
  --h2-font-size 1.25rem
  --normal-font-size 0.938rem

@media screen and (min-width 768px)
  :root
    --big-font-size 3.5rem
    --h2-font-size 2rem
    --normal-font-size 1rem
  


/*===== Margins =====*/
:root
  --mb-one 0.5rem
  --mb-two 1rem
  --mb-three 1.5rem
  --mb-four 2rem
  --mb-five 2.5rem
  --mb-six 3rem


/*===== z index =====*/
:root
  --z-back -10
  --z-normal 1
  --z-tooltip 10
  --z-fixed 100


/*===== BASE =====*/
*,::before,::after
  box-sizing border-box

html
  scroll-behavior smooth

body
  margin var(--header-height) 0 0 0
  font-family var(--body-font)
  font-size var(--normal-font-size)
  color var(--second-color)

h1,h2,p
  margin 0

ul
  margin 0
  padding 0
  list-style none

a
  text-decoration none

img
  max-width 100%
  height auto
  display block


/*===== CLASS CSS ===== */
.section-title
  position relative
  font-size var(--h2-font-size)
  color var(--first-color)
  margin-top var(--mb-two)
  margin-bottom var(--mb-four)
  text-align center

.section-title::after
  position absolute
  content ""
  width 64px
  height 0.18rem
  left 0
  right 0
  margin auto
  top 2rem
  background-color var(--first-color)

.section
  padding-top 3rem
  padding-bottom 2rem


/*===== LAYOUT =====*/
.bd-grid
  max-width 1024px
  display grid
  grid-template-columns 100%
  grid-column-gap 2rem
  width calc(100% - 2rem)
  margin-left var(--mb-two)
  margin-right var(--mb-two)

.l-header
  width 100%
  position fixed
  top 0
  left 0
  z-index var(--z-fixed)
  background-color #fff
  box-shadow 0 1px 4px rgba(146,161,176,.15)


/*===== NAV =====*/
.nav
  height var(--header-height)
  display flex
  justify-content space-between
  align-items center
  font-weight var(--font-semi)


.nav__list__toggle
  position fixed
  top var(--header-height)
  right -100%
  width 80%
  height 100%
  padding 2rem
  background-color var(--second-color)
  transition .5s

.open
  transform translateX(-120%)

.nav__item
  margin-bottom var(--mb-four)

.nav__link
  position relative
  color #fff

.nav__link:hover
  position relative

.nav__link:hover::after
  position absolute
  content ""
  width 100%
  height 0.18rem
  left 0
  top 2rem
  background-color var(--first-color)

.nav__logo
  color var(--second-color)

.nav__toggle
  color var(--second-color)
  font-size 1.5rem
  cursor pointer


/*===== HOME =====*/
.home
  height calc(100vh - 3rem)
  row-gap 1rem

.home__data
  align-self center

.home__title
  font-size var(--big-font-size)
  margin-bottom var(--mb-five)

.home__title-color
  color var(--first-color)

.home__social
  display flex
  flex-direction column

.home__social-icon
  width max-content
  margin-bottom var(--mb-two)
  font-size 1.5rem
  color var(--second-color)

.home__social-icon:hover
  color var(--first-color)

.home__img
  position absolute
  right 5%
  bottom 10%
  width auto


/*BUTTONS*/
.button
  display inline-block
  background-color var(--first-color)
  color #fff
  padding .75rem 2.5rem
  font-weight var(--font-semi)
  border-radius .5rem

.button:hover
  box-shadow 0 10px 36px rgba(0,0,0,.15)


/* ===== ABOUT =====*/
.about__container
  row-gap 2rem
  text-align center

.about__subtitle
  margin-bottom var(--mb-two)

.about__img
  justify-self center

.about__img img
  width 200px
  border-radius .5rem

.about__text
  margin-bottom var(--mb-two)


/* ===== SKILLS =====*/
.skills__container
  row-gap 2rem
  text-align center

.skills__subtitle
  margin-bottom var(--mb-two)

.skills__text
  margin-bottom var(--mb-four)

.skills__data
  display flex
  justify-content space-between
  align-items center
  position relative
  font-weight var(--font-semi)
  padding .5rem 1rem
  margin-bottom var(--mb-four)
  border-radius .5rem
  box-shadow 0 4px 25px rgba(14,36,49,.15)

.skills__icon
  font-size 1.7rem
  margin-right var(--mb-two)
  color var(--first-color)

.skills__names
  display flex
  align-items center

.skills__bar
  position absolute
  left 0
  bottom 0
  background-color var(--first-color)
  height .25rem
  border-radius .5rem
  z-index var(--z-back)

.skills__html
  width 95%

.skills__css
  width 85%

.skills__js
  width 90%

.skills__ux
  width 80%

.skills__img
  border-radius .5rem


/* ===== WORK =====*/
.work__container
  row-gap 2rem

.work__img
  box-shadow 0 4px 25px rgba(14,36,49,.15)
  border-radius .5rem
  overflow hidden

.work__img img
  transition 1s
  cursor pointer

.work__img imghover
  transform scale(1.1)


/* ===== CONTACT =====*/
.contact__input
  width 100%
  font-size var(--normal-font-size)
  font-weight var(--font-semi)
  padding 1rem
  border-radius .5rem
  border 1.5px solid var(--second-color)
  outline none
  margin-bottom var(--mb-four)

.contact__button
  display block
  border none
  outline none
  font-size var(--normal-font-size)
  cursor pointer
  margin-left auto


/* ===== FOOTER =====*/
.footer
  background-color var(--second-color)
  color #fff
  text-align center
  font-weight var(--font-semi)
  padding 2rem 0

.footer__title
  font-size 2rem
  margin-bottom var(--mb-four)

.footer__social
  margin-bottom var(--mb-four)

.footer__icon
  font-size 1.5rem
  color #fff
  margin 0 var(--mb-two)


/* ===== MEDIA QUERIES=====*/
@media screen and (min-width 768px)
  body
    margin 0
  
  .section
    padding-top 4rem
    padding-bottom 3rem
  
  .section-title
    margin-bottom var(--mb-six)
  
  .section-title::after
    width 80px
    top 3rem
  
  .nav
    height calc(var(--header-height) + 1rem)
  
  .nav__list
    display flex
    padding-top 0
  
  .nav__item
    margin-left var(--mb-six)
    margin-bottom 0
  
  .nav__link
    color var(--second-color)

  .home
    height 100vh
  
  .home__data
    align-self flex-end
  
  .home__social
    padding-top 0
    padding-bottom 2.5rem
    flex-direction row
    align-self flex-end
  
  .home__social-icon
    margin-bottom 0
    margin-right var(--mb-four)
  
  .home__img
    width 457px
    bottom 15%

  .about__container, .skills__container
    grid-template-columns repeat(2,1fr)
    align-items center
    text-align initial
  
  .about__img img
    width 300px
  
  .work__container
    grid-template-columns repeat(3, 1fr)
    grid-template-rows repeat(2,1fr)
    column-gap 2rem
  
  .contact__form
    width 360px
  
  .contact__container
    justify-items center
  


@media screen and (min-width 1024px)
  .bd-grid
    margin-left auto
    margin-right auto
  
  .home__img
    right 10%
  

</style>

