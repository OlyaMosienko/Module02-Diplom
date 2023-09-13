import 'normalize.css'; 
import './styles/main.scss';

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
        }