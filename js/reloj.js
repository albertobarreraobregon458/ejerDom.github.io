const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h1 class="reloji">${clockHour}</h1>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo); //limpiar el intervalo del 
      d.querySelector(clock).innerHTML = null; //para  limpiar el contenido
      d.querySelector(btnPlay).disabled = false; //para activar de nuevo el boton 
    }
  });
}

export function alarma(sound, btnPlay, btnStop) {
  let alarmaTempo
  const $alarma = d.createElement("audio")// se agrega la etiqueta audio dinamicamente, solo se crea mas no le agrega un appendchild
  //ya que no necesita que esté visible en el documento
  $alarma.src = sound //sele agrega el atributo src para agregarle la ruta donde se encuentra el audio
  d.addEventListener("click", e=>{
    if(e.target.matches(btnPlay)){ //bonton iniciar alarma
      alarmaTempo = setTimeout(() => {
        $alarma.play()//para reproducir el audio, despues que pasen 2 segundos
      }, 1000);

      e.target.disabled = true//el objeto que originó el evento le activamos la propiedad disabled a true

    }
    if(e.target.matches(btnStop)){
      clearTimeout(alarmaTempo)
      $alarma.pause() //es para pausar el sonido, mas no para reiniciarlo
      $alarma.currentTime = 0; // para reiniciar el sonido
      d.querySelector(btnPlay).disabled = false
    }
  })


}
