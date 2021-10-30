//import './styles/index.css'
import 'virtual:windi.css'
// import './js/icons.js'
// import './js/scrollload.js'

//import Layer from '~icons/mono-icons/layers'
//import Kirby from '~icons/logos/kirby'
//const root = document.getElementById('app')
//root.innerHTML = Layer


// import '~icons/mono-icons/layers'
// import '~/icons/ion/logo-web-component'

// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';

// Javascript framework
// https://alpinejs.dev/start-here
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

//htmx.logAll();

// Page transition
// https://barba.js.org/docs/getstarted/intro/
import barba from "@barba/core";

// Animation library
// https://animejs.com/documentation/
import anime from 'animejs/lib/anime.es.js';

// Lazy load image
// https://github.com/ApoorvSaxena/lozad.js
// import lozad from 'lozad'

// window.Swiper = Swiper
//window.Alpine = Alpine
// window.htmx = htmx
//Alpine.plugin(intersect)
//Alpine.start()

barba.init({
  //debug: true,
  transitions: [{
    //name: 'opacity-transition',
    leave(data) {
      return anime({
        targets: data.current.container,
        opacity: [1, 0],
        translateX: [0, 100],
        duration: 300,
        easing: 'linear'
      }).finished;
    },
    beforeEnter(data) {
      //htmx.init()

    },
    afterEnter(data) {
      //console.log(htmx)
      htmx.process(data.next.container)
    },
    enter(data) {
      return anime({
        targets: data.next.container,
        opacity: [0, 1],
        translateX: [-100, 0],
        duration: 200,
        easing: 'linear'
      });
      /*
      let tl = anime.timeline()
      tl.add({
        targets: data.next.container,
        translateX: 120,
        duration: 0,
        opacity: 0
      })
      tl.add({
        targets: data.next.container,
        translateX: 0,
        duration: 2000,
        opacity: 1
      })
      return tl;
      */
    }
  }]
});

