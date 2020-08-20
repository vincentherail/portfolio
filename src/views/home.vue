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

    //-==== BODY ====
    body.l-body

      //--===== HOME =====
      section.jome.bd-grid#home
        div.home__data
          h1.home__title Hey,
          | Je suis 
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

</style>

