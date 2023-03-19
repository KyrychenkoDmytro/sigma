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

  // close burger menu and nav header when link is clicked
  if (iconBurgerMenu.classList.contains('_active')) {
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


// ========================================================  progress bar  ============================================================


const progressStage = document.querySelector('.header__progress-stage');

const getProgressStage = () => {
  let fullHeight = document.body.scrollHeight;
  let innerHeight = window.innerHeight;
  progressStage.style.width = `${scrollY / (fullHeight - innerHeight) * 100}%`;
}

window.addEventListener('scroll', getProgressStage);
window.addEventListener('resize', getProgressStage);


// ========================================================  what we do  ============================================================

const resourcesUrl = ['posts/', 'comments/', 'users/'];
const url = 'https://jsonplaceholder.typicode.com/';

//I make a request to the server to receive an array of data or 1 object
const getData = async (resourse, count = '') => {
  const response = await fetch(url + resourse + count);
  const data = await response.json();
  return data;
}
// I create a block with a picture, title and text. and change the text color and background of every second page.
const createElementsFromData = async (imgNumber, resourse, count) => {
  let data = await getData(resourse, count);
  if (count === 1) data = [data];
  if (data.length > 5) data.length = 5;
  if (imgNumber % 2) {
    for (let item of data) {
      const wrap = document.querySelector('.what-we-do__wrap-info');
      const block = document.createElement('div');
      block.classList.add('what-we-do__info-block');
      const wrapImg = document.createElement('div');
      wrapImg.classList.add('what-we-do__info-img');
      const img = document.createElement('img');
      img.src = `./assets/img/icons/what-we-do-${imgNumber}.svg`;
      wrapImg.append(img);
      block.append(wrapImg);
      const wrapText = document.createElement('div');
      wrapText.classList.add('what-we-do__info-text');
      const title = document.createElement('h4');
      title.textContent = item?.name || item?.title;
      const text = document.createElement('p');
      text.textContent = item?.body || item?.email;
      block.style.backgroundColor = '#CAA892';   // change bgc and color
      title.style.color = '#fff';
      text.style.color = '#fff';
      wrapText.append(title);
      wrapText.append(text);
      block.append(wrapText);
      wrap.append(block);
    }
  } else {
    for (let item of data) {
      const wrap = document.querySelector('.what-we-do__wrap-info');
      const block = document.createElement('div');
      block.classList.add('what-we-do__info-block');
      const wrapImg = document.createElement('div');
      wrapImg.classList.add('what-we-do__info-img');
      const img = document.createElement('img');
      img.src = `./assets/img/icons/what-we-do-${imgNumber}.svg`;
      wrapImg.append(img);
      block.append(wrapImg);
      const wrapText = document.createElement('div');
      wrapText.classList.add('what-we-do__info-text');
      const title = document.createElement('h4');
      title.textContent = item?.name || item?.title;
      const text = document.createElement('p');
      text.textContent = item?.body || item?.email;
      wrapText.append(title);
      wrapText.append(text);
      block.append(wrapText);
      wrap.append(block);
    }
  }
}

const whatWeDoButtons = document.querySelectorAll('.what-we-do__btn[data-resource]');

// change border and make a query on an array "resourcesUrl" element using the date attribute in the button.
const whatWeDoButtonClick = (e) => {
  whatWeDoButtons.forEach(button => {
    button.classList.remove('what-we-do__btn_active');
  })
  const wrap = document.querySelector('.what-we-do__wrap-info');
  wrap.innerHTML = '';
  const target = e.target;
  target.classList.add('what-we-do__btn_active');
  const dataset = target.dataset.resource;
  if (dataset === 'all') {
    resourcesUrl.forEach((resourse, i) => {
      createElementsFromData(i, resourse, 1)
    })
  } else {
    createElementsFromData(dataset, resourcesUrl[dataset]);
  }
}

whatWeDoButtons.forEach(button => {
  button.addEventListener('click', whatWeDoButtonClick);
})

const createElementsDefault = () => {
  resourcesUrl.forEach((resourse, i) => {
    createElementsFromData(i, resourse, 1)
  })
}

createElementsDefault(); // by default


// ========================================================  preloader animation  ============================================================


window.addEventListener('load', function () {
  let loader = document.querySelector('.loader');
  if (!sessionStorage.getItem('isPageLoaded')) {  // the second time the animation doesn't work
    document.body.classList.add('_scroll-lock'); // disable page scrolling
    loader.classList.remove('loader_none');  // activate the animation
    setTimeout(() => {
      loader.classList.add('loader_none');
      document.body.classList.remove('_scroll-lock'); 
      sessionStorage.setItem('isPageLoaded', true);
    }, 5000)
  }

});