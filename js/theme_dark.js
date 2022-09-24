export default function darkTheme(btn, classDark) {
  let d = document,
    ls = localStorage;

  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"); //es para obtener todos los data-atributes, obtiene un NodeList, una especie de arReGlo del DOM
  console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  /*  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        $selectors.forEach((el) => el.classList.add(classDark));
        // como la variable $selectors es un NodeList se debe recorrer por medio de un ForEach y vas a entrar a sus listas de clases y la clase que recibe por el parametro classDark
        // (dark-mode)
        $themeBtn.textContent = sun;
        //cuando se le agregue la clase  el contenido del boton cambia por el sols
      } else {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
      }
    }
  }); */

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {

    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    //sila variable theme no existe agreguela y pongala en Light
    if (ls.getItem("them") === "light") lightMode();
   // si la variable es igual light pongala ligh
    if (ls.getItem("theme") === "dark") darkMode();
  });
}

// a las etiquetas a la cuales se le quiera agregar dark mode seles agrega un data atrubute, (una data atribute se agrega a partir de data- y el nombre, data guion nombre)
