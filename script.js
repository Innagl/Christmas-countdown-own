// COUNTDOWN
function christmasCountDown() {

   const christmasDate = new Date("December 25, 2026 00:00");
   const now = new Date();
   console.log(christmasDate, now);
   const diff = christmasDate - now;

   // MILISECONDS
   const msInSecond = 1000;
   const msInMinute = 60 * 1000;
   const msInHour = 60 * 60 * 1000;
   const msInDay = 24 * 60 * 60 * 1000;


   const displayDay = Math.floor(diff / msInDay);
   document.querySelector(".days").textContent = displayDay;

   const displayHour = Math.floor((diff % msInDay) / msInHour);
   document.querySelector(".hours").textContent = displayHour;
   const displayMinute = Math.floor((diff % msInHour) / msInMinute);
   document.querySelector(".minutes").textContent = displayMinute;

   const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
   document.querySelector(".seconds").textContent = displaySecond;

   if (diff <= 0) {
      document.querySelector(".days").textContent = 0;
      document.querySelector(".hours").textContent = 0;
      document.querySelector(".minutes").textContent = 0;
      document.querySelector(".seconds").textContent = 0;


      clearInterval(timerID);
      marryChristmas();
   }

}


let timerID = setInterval(christmasCountDown, 1000);


function marryChristmas() {

   const heading = document.querySelector("h1");

   heading.textContent = "MARRY CHRISTMAS!!! HO-HO-HO";

   heading.classList.add("red");
}

// BUTTON
const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M10 12.0001V8.53613L13 10.2681L16 12.0001L13 13.7321L10 15.4641V12.0001Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>`;

const stopSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <rect x="9" y="9" width="6" height="6" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>`;

button.addEventListener('click', function () {
   if (audio.paused) {
      audio.play();
      button.innerHTML = stopSVG;
   } else {
      audio.pause();
      button.innerHTML = playSVG;
   }
})


// ORNAMENT ANMATION

gsap.to(".box", {
   x: 800,
   duration: 7,
   rotation: 360,
   opacity: 0,
   delay: 1,
   ease: "sine.out",
   repeat: 50
});


// SNOW
particlesJS("particles-js", {
   particles: {
      number: {
         value: 800,
         density: {
            enable: true,
            value_area: 800
         }
      },
      color: {
         value: "#fff"
      },
      shape: {
         type: "circle",
         stroke: {
            width: 0,
            color: "#000000"
         },
         polygon: {
            nb_sides: 5
         },
         image: {
            src: "img/github.svg",
            width: 100,
            height: 100
         }
      },
      opacity: {
         value: 0.5,
         random: true,
         anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
         }
      },
      size: {
         value: 6.33451405615796,
         random: true,
         anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
         }
      },
      line_linked: {
         enable: false,
         distance: 500,
         color: "#ffffff",
         opacity: 0.4,
         width: 2
      },
      move: {
         enable: true,
         speed: 2.333805622463184,
         direction: "bottom",
         random: true,
         straight: false,
         out_mode: "out",
         bounce: false,
         attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
         }
      }
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: {
            enable: true,
            mode: "bubble"
         },
         onclick: {
            enable: true,
            mode: "repulse"
         },
         resize: true
      },
      modes: {
         grab: {
            distance: 400,
            line_linked: {
               opacity: 0.5
            }
         },
         bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3
         },
         repulse: {
            distance: 200,
            duration: 0.4
         },
         push: {
            particles_nb: 4
         },
         remove: {
            particles_nb: 2
         }
      }
   },
   retina_detect: true
});
var count_particles, stats, update;
// stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
   stats.begin();
   stats.end();
   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
   }
   requestAnimationFrame(update);
};
requestAnimationFrame(update);