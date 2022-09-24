export default function scrollTopButtom(btn) {
  const d = document,
    w = window;

  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    // console.log(w.scrollY, d.documentElement.scrollTop); son equivalentes
    let scrolltop = w.scrollY || d.documentElement.scrollTop; //operador corto circuito sino hay una tomaa la otra
    //como la variable scrolltop nos da un valor que significa cuantos pixeles ha recorrido desde el top 0, es decir desde arriba hacia abajo
    if (scrolltop > 1200) {
      //si el valor es mayor a 1200 px quita la clase hidden que es la que está ocultando el boton, al quitrla, ya lo va a mostrar
      $scrollBtn.classList.remove("hidden");
    } else {
      //si es menor a 1200, hace todo lo contrario de arriba, agrega la clase hidden y hace invisible el boton
      $scrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        // propiedad de window scrllTo a donde quieres enviar la barra de desplazamientocr
        top: 0,
        behavior: "smooth",
      });
    }
  });
}
