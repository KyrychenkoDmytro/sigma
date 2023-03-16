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
  // const imgUrl = 'https://openweathermap.org/img/wn/10d@2x.png';

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
  // console.log(data);

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

const buttons = document.querySelectorAll('.project__app-btn[data-cityid]');

const buttonHandler = function (e) {
  buttons.forEach(button => {
    button.classList.remove('project__app-btn_active');
  })
  const target = e.target;
  target.classList.add('project__app-btn_active');
  const dataset = target.dataset.cityid;
  weatherApp(dataset);
}

buttons.forEach(button => {
  button.addEventListener('click', buttonHandler)
});
