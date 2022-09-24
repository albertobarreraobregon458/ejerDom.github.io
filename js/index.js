
import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarma} from "./reloj.js";
import { shortcuts,moveBall } from "./teclado.js";
import countdowni from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./theme_dark.js";
import responsiveMedia from "./object_responsive.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{ //buscar

    hamburguerMenu(".panel-btn",".panel",".menu a" )
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarma("/assets/Dios-no-esta-muerto.mp3","#activar-alarma", "#desactivar-alarma")
    countdowni("countdown","Sep 19, 2022 12:46:19" ,"Feliz Cumpleaños Alberto 🤓")
    scrollTopButtom(".scroll-top-btn");

    responsiveMedia("youtube", 
    "(min-width: 1024px)", 
    `<a href = "https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&ab_channel=jonmircha" target = "blank"
    rel = "noopener">Ver Video </a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia("gmaps", "(min-width: 1024px)", 
    `<a href = "https://goo.gl/maps/ugDpX3ZzhpK1WDM58" target = "blank"
    rel = "noopener">Ver Mapa </a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1941.4000565026763!2d2.2922926150039795!3d48.858370079287454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e1!3m2!1ses!2sco!4v1663718440255!5m2!1ses!2sco" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
})

d.addEventListener("keydown", e =>{//evento keydown es cuando presionamos la tecla, cuando se presiona
    shortcuts(e)
    moveBall(e,".ball", ".stage")
})
darkTheme(".dark-theme-btn", "dark-mode"); //dark mode es la clase que se le va a gregar o quitar

//el evento keydown es cuando presionamos la tecla, cuando se presiona la tecla
//el evento keyup es exactamente cuando se levanta la tecla
//el evento keypress ex cuando tengas presionada la teclaes que se va a ejecutar


//la propiedad keyCode es el codigo que tiene cada letra
// type hace referencia al tipo de evento (keydown)
// code hace referencia a tecla ejem presiono a muesta keyA
// key si muestra la letra que he presionado es este caso "a"