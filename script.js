// 6 - Логика вычисления дней, которые остались до Рождества

// Сначала введем фунцию и назовем ее christmasCountDown

function christmasCountDown() {

    // вводим константу и назовем ее christmasDate и именно здесь введем когда наступает Рождество
    // Рождество наступает 25 Декабря в 00 00

    // Добавляем логику которую мы знаем когда хотели посомтреть какая датат у пользователя и в скобках ту дату которая нам интересна
    // в данном слкчае это  December 25, 2024
    const christmasDate = new Date("December 25, 2024 00:00");

    // Дальше мы вводим нашу дату то есть мы хотим чтобы у нас получилась разница между датой когда наступит Рождество и сегодняшней датой

    // вводим сегодняшний день, мы введем новую константу под названием now
    const now = new Date();
    console.log(christmasDate, now);

    // Теперь из даты Рождества вычетаем текущую дату
    const diff = christmasDate - now;
    // console.log(diff);



// 7 -  Переводим всё в... миллисекунды

    // Введу того что у нас все в милисикундах (так считает джаваскрипт если просто christmasDate - now) то мы должны все привести в милисекунды, дни в милисекунды часы и минуты и секунды
    
    // Начинаем с секунд. Сколько милисекунд в одной секунде? В одной секунде 1000 милисекунд
    const msInSecond = 1000;

    // Дальше введем константу чтобы перевести минуту в милисекунду. в одной минуте 60 секунд и в одной секунде 1000 милисекунд
    const msInMinute = 60 * 1000;

    // Дальше переводим часы в милисекунды.  В часе 60 минут каждая минута состоит из 60 секунд и в одной секунде 1000 милисекунд
    const msInHour = 60  * 60 * 1000;

    // Теперь наму нужно узнать сколько милисикунду в сутка по английский сутки можно  перевести как days
    // мы знаем что в сутках 24 часа в одном часе 60 минут в одной минуте 60 секунд в 1 секунде 1000 милисекунд

    const msInDay = 24 * 60 * 60 * 1000;

// 8 - Высчитываем количество оставшихся дней

 // В константе  diff мы делали математич действие мы из даты роздества вычетали текущую дату и получали разницу в милисекундах
 // Соответствено мы теперь константу diff можем использовать и применять ко все константам где мы делали пересчеты в милисекунды


 // ПРИМЕР

 // В константе diff у нас заложено сколько милисекунд осталось до рождества
 // И мы сейчас прросто количество мили секунд которое осталось до Рождества разделим на количество милисекунд которе содержиться в одних сутках, чтобы получить сколько у нас дней осталось до Рождества

 //  const displayDay = diff/msInDay;

 //  console.log(displayDay);


 //  Но если посмотреть консоль нам бдет выдавать не круглое число вот такое 235.7596775462963
 //   Поэтому буде использовать метод  Math.floor

  const displayDay = Math.floor(diff/msInDay);
 //   console.log(displayDay);

 //   Но это видно толлько в консоле а нам нужно отразить это в нашем приложении
 //  Мы идем в html ищем название класса который отвечает за то  сколько у нас дней будет показано 
 //  У нас название этого класа days
 //  Соответственно получаем досупу к этому классу
 //  Но мы не тллько хотим получить доступ а хотим получить фразу. какой текст мы хотим видеть
 //  Поэтому после скобок используем textContent и приравниваем к результату который только что вычеслили
 document.querySelector(".days").textContent = displayDay;



//  9 - Высчитываем количество часов
    // Ту же логику будем использовать сколько у нас осталось часов
    // Но у нас будет чуть посложней формула, потому что мы должны почитать какой у нас остался остаток с константы displayDay
    // И этот остаток мы дожны разделить на количество милисекун в часе. Будем использовать modulo
   const displayHour = Math.floor((diff%msInDay) / msInHour);
//    console.log(displayHour);
  //Получаем доступ к классу hours
  document.querySelector(".hours").textContent = displayHour;
  
// 10 - Высчитываем количество минут и секунд

//   MINUTES
//   Теперь мы создаем константу которая  у нас будет отвечать за то что мы покажем текст именно сколько осталось минут
  const displayMinute = Math.floor((diff%msInHour) / msInMinute);
  document.querySelector(".minutes").textContent = displayMinute;

//   SECONDS
  const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
  document.querySelector(".seconds").textContent = displaySecond;


// 13 - Устраняем глюк
// У нас когда счетчик дойдет до онца до нужной даты и времени то он начнет отсчет со знаком минус, чтобы это устранить нам нужно сделать 2 степа

// Первое мы вводим условие и мы говорим о том что если раница меньше или равна нулю то тогда мы отобразим что у нас  document.querySelector(".days").textContent равно нулю
// И тоже сделаем для часов минут и секунд
if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;

    // 14 - Останавливаем счётчик
 // Когда счетчик дойдет до нуля то пользователи увидят нули но джаваскрипт продлжает считать
 // Нам нужно остановить пдсчет
 // У нас есть setInterval чтобы определенная функция была вызвана каждую секунду
 // Но этот метод мы должны остановить и для этого у нас есть clearInterval()
 // И эти два метода идут всегда вместе но не обязательно чтобы они были написаны друг под другом но они взаимосвязаны
 // Но чтобы мы могли осчистить наш счетчик чтобы счет больше не шел мы должны метод setInterval помстить в переменнную
 // Тоесть сначала мы setInterval помещаем в переменную а потом эту переменную добавляем в метод clearInterval
 clearInterval(timerID);
//  console.log(timerID);
 marryChristmas();

}





}



// 11 - Работаем над уменьшением времени

// Мы сейчас напишем метод setInterval() и туда внесем нашу функцию christmasCountDown() и 1000 милисекунд
// Потому что мы хотим чтобы каждую секунду наш сайт обновлялся
let timerID = setInterval(christmasCountDown, 1000);

// Теперь вызываем функцию
// christmasCountDown()


//  15 - Меняем заголовок, когда у нас счётчик доходит до 0!
// Как только счетчик доходит до нуля нам нужно поменять заголовок
// Мы это можем сделать создав новую функцию, дадим ей название marryChristmas и она будет вызвана когда счетчик будет доходить до нуля

function marryChristmas() {

    // Сначала получаем к тексту к нашему заголовку доступ   сощдав новую константу
    const heading = document.querySelector("h1");

    // Теперь нужно поменять текст написав тот новый что мы хотим отразить
    heading.textContent = "MARRY CHRISTMAS!!! HO-HO-HO";

    // Также помимо того что поменяется тект мы хотим чтобы помеялся цвет и шрифт создав новый клас .red  но размер шрифта и цвет мы поменяем через CSS
    heading.classList.add("red");
}




const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');

button.addEventListener ('click', function() {

    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

// ORNAMENT ANMATION
// gsap.to(".ornament", {ease: "none", x: -400, duration: 4, repeat: 1000 })

gsap.to(".box", {
  x: 800, 
  duration: 7,
  rotation: 360,
  opacity: 0, 
  delay: 1, 
  // stagger: 1,
  ease: "sine.out", 
  // force3D: true
  repeat: 50
});

// document.querySelectorAll(".box").forEach(function(box) {
//   box.addEventListener("click", function() {
//     gsap.to(".box", {
//       duration: 1, 
//       opacity: 0, 
//       y: -100, 
//       stagger: 0.1,
//       ease: "back.in"
//     });
//   });
// });



// SNOW
particlesJS("particles-js", {
  particles: {
    number: { value: 800, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 6.33451405615796,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
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
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
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
