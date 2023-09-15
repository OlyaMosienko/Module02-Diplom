import 'normalize.css'; 
import './styles/main.scss';

// Smooth Nav Effect
const links = document.querySelectorAll(".header__link");
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");

            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        };

// Burger Menu
let btn = document.querySelector('.burger-btn');

btn.addEventListener('click', function () {
    this.classList.toggle('is-active');
});