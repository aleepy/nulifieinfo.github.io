let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");
const footer = document.querySelector("footer");
let isAnimating = false;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (!isAnimating) {
        if (prevScrollPos > currentScrollPos) {
            // Прокрутка вверх - показываем хедер и футер
            isAnimating = true;
            header.style.transform = "translateY(0)";
            footer.style.transform = "translateY(0)";
            setTimeout(() => {
                isAnimating = false;
            }, 300); // Задержка перед завершением анимации (в миллисекундах)
        } else {
            // Прокрутка вниз - скрываем хедер и футер
            isAnimating = true;
            header.style.transform = "translateY(-100%)"; // Появление хедера сверху
            footer.style.transform = "translateY(100%)"; // Появление футера снизу
            setTimeout(() => {
                isAnimating = false;
            }, 300); // Задержка перед завершением анимации (в миллисекундах)
        }
    }

    prevScrollPos = currentScrollPos;
};


// Функция для загрузки новой страницы и вставки ее в контейнер
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Вставляем полученный HTML-код в контейнер
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => console.error('Ошибка при загрузке страницы:', error));
}

// Пример использования: загрузка страницы link-to-page2.html
loadPage('1stlink.html');
