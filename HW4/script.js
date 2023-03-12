// скролл
const links = document.querySelectorAll('a[href^="#"]');

// Обрабатываем каждую ссылку
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();

    // Получаем целевой элемент, на который ссылается ссылка
    const target = document.querySelector(link.getAttribute('href'));

    // Вычисляем расстояние до целевого элемента от начала страницы
    const distance = target.getBoundingClientRect().top;

    // Плавно прокручиваем страницу к целевому элементу
    window.scroll({
      top: distance,
      left: 0,
      behavior: 'smooth'
    });
  });
});