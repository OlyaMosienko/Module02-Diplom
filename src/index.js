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

const btn = document.querySelector('.burger-btn');
const burger = document.getElementById("burger");
const menu = document.getElementById("modal-menu");
const main = document.querySelector(".main");

// Burger Menu
btn.addEventListener('click', function () {
    btn.classList.toggle("active");
	menu.classList.toggle("active");
});

// Close Sidebar 
burger.addEventListener("click", function () {
	btn.classList.remove("active");
	menu.classList.remove("active");
    window.addEventListener('scroll', (e) => {
        window.scrollTo(0,0);
    });
});

// Close Sidebar by Click Outside
main.addEventListener("click", function () {
	if (menu.classList.contains("active")) {
		burger.classList.remove("active");
        btn.classList.toggle("active");
		menu.classList.remove("active");
	}
});