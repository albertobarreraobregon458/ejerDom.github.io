
export default function hamburguerMenu(panelBtn, panel, menuLink){

    const d = document;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`)){ //si el objeto que origina el evento (target) coincide (matches) con el selector que me estas dando en panelBtn
            d.querySelector(panel).classList.toggle("is-active") //toggle quita o agrega una etiqueta, si no esta la agrega, si esta la quita
            d.querySelector(panelBtn).classList.toggle("is-active")// se pone tambien el is active para que el boton menu gire (sugerido por la libreria) en forma de x al darle click

        }

        if(e.target.matches(menuLink)){ //
            d.querySelector(panel).classList.remove("is-active"); //al darle click en menu las equitas a, nos quita la clase is-active,por lo cual os remueve y solo nos lleva a la seccion seleccionada
            d.querySelector(panelBtn).classList.remove("is-active");
            
        }
    })

}