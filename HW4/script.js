// скролл
// const links = document.querySelectorAll('a[href^="#"]');

// // Обрабатываем каждую ссылку
// links.forEach(link => {
//   link.addEventListener('click', (event) => {
//     // Отменяем стандартное поведение ссылки
//     event.preventDefault();

//     // Получаем целевой элемент, на который ссылается ссылка
//     const target = document.querySelector(link.getAttribute('href'));

//     // Вычисляем расстояние до целевого элемента от начала страницы
//     const distance = target.getBoundingClientRect().top;

//     // Плавно прокручиваем страницу к целевому элементу
//     window.scroll({
//       top: distance,
//       left: 0,
//       behavior: 'smooth'
//     });
//   });
// });

// ========================================================  project  ============================================================

const weatherApp = async (id) => {
  const apiKey = '9352c45d2abfb10662000937a603691d';
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;

  const title = document.querySelector('.project__title');
  const cityImg = document.querySelector('.project__image img');
  const name = document.querySelector('.project__city-name');
  const img = document.querySelector('.project__city-img img');
  const description = document.querySelector('.project__city-descripion');
  const temp = document.querySelector('.project__city-temp');
  const pressure = document.querySelector('.project__city-pressure');
  const humidity = document.querySelector('.project__city-humidity');
  const windSpeed = document.querySelector('.project__city-wind-speed');

  const response = await fetch(url);
  const data = await response.json();

  title.textContent = `Weather in the ${data.name}`;
  cityImg.setAttribute('src', `./assets/img/${id}.jpg`);
  name.textContent = data.name;
  img.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  description.textContent = `${data.weather[0].description}`;
  temp.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)} °C`;
  pressure.textContent = `Pressure: ${Math.round(data.main.pressure * 0.75)} mmHg`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeed.textContent = `Wind speed: ${data.wind.speed} m/s`;
}

weatherApp(706483); // Kharkiv city id by default

const buttonHandler = function (e) {
  buttons.forEach(button => {
    button.classList.remove('project__app-btn_active');
  })
  const target = e.target;
  target.classList.add('project__app-btn_active');
  const dataset = target.dataset.cityid;
  weatherApp(dataset);
}

const buttons = document.querySelectorAll('.project__app-btn[data-cityid]');

buttons.forEach(button => {
  button.addEventListener('click', buttonHandler)
});


// ========================================================  burger menu  ============================================================


const iconBurgerMenu = document.querySelector('.header__burger-menu-icon');
const headerNavMenu = document.querySelector('.header__nav');

const onClickIconBurger = () => {
  document.body.classList.toggle('_scroll-lock');
  iconBurgerMenu.classList.toggle('_active');
  headerNavMenu.classList.toggle('_active');
}

if (iconBurgerMenu) {
  iconBurgerMenu.addEventListener('click', onClickIconBurger);
}


// ========================================================  smooth page scrolling  ============================================================


const onHeaderLinkClick = (e) => {
  const link = e.target;
  if (!link.dataset.goto || !document.querySelector(link.dataset.goto)) return false;
  e.preventDefault();

  if (iconBurgerMenu.classList.contains('_active')) {  // close burger menu and nav header when link is clicked
    document.body.classList.remove('_scroll-lock');
    iconBurgerMenu.classList.remove('_active');
    headerNavMenu.classList.remove('_active');
  }

  if (link.dataset.goto === '#header') {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    return true;
  }

  const target = document.querySelector(link.dataset.goto);
  const distance = target.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
  window.scroll({
    top: distance,
    left: 0,
    behavior: 'smooth'
  });
}

const headerLinks = document.querySelectorAll('.header__link[data-goto]');

headerLinks.forEach(link => {
  link.addEventListener('click', onHeaderLinkClick);
})
