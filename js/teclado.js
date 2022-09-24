const d = document;

export function shortcuts(e) {
  /* console.log(e)//muestra como tal  el evento
console.log(e.type)// es para ver que tipo de evento es, el nombre del evento
console.log(e.key)// key si muestra la letra que he presionado es este caso "a", nombre de la tecla
console.log(e.keyCode)//la propiedad keyCode es el codigo que tiene cada letra
console.log(e.ctrlKey)//nos dice a traves de un boolean si se ha o o presinado la tecla control
console.log(e.altKey) // nos dice a traves de un boolean si se ha presionado o no la tecla alt
console.log(e.shiftKey) // nos dice a traves de un boolean si se ha presionado o no la tecla shift
 */

  // type hace referencia al tipo de evento (keydown)
  // code hace referencia a tecla ejem presiono a muesta keyA

  //las funciiones de abajo son para crear atajos de teclado

  if (e.key === "a" && e.altKey) {
    //al presionar la letra a y la tecla alt muestra el alert
    alert("haz lanzado una alerta alt + a");
  }
  if (e.key === "c" && e.ctrlKey) {
    confirm("haz lanzado una comfirmacion ctrl + c");
  }
  if (e.key === "p" && e.shiftKey) {
    alert("presionastes shift + p"); //no me funcionó, pero la tecla shift si la reconoce en la consola
  }
}

/* Video numero 85*/
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  //parametros: el evento, el selector de la pelota, y el selector del escenario o caja stage
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage), //le estaos pasando las clases que vienen desde  la inicializacion en el index
    $limitBall = $ball.getBoundingClientRect(), //lo que hace este metodo es que nos da un objeto con la anchura, la altura, la posicion en x, la posicion en y, y que tan alejado esta de los margenes de los 4 lado, con eso es que vamos a limitr el movimiento de la pelota
    $limitStage = $stage.getBoundingClientRect();
  console.log($limitBall, $limitStage);
  switch (e.keyCode) {
    case 37:
      //izq
      if ($limitBall.left > $limitStage.left) {
        //right y left vienen del metodo getBoundingClientRect(), ya que este es un objeto
        e.preventDefault(); //recuerde que esta funcion lo que hace es apagar todos los comporamientos por defecto que trae en este caso el teclado
        x--;
        //si el limite del balon en la izquierda, es decir si la ubicacion del balon es mayor que el limite del stage, osea si el balon esta ubicado hacia la derecha del stage o caja y tiene espacio para correr hacia la izquierda
        //entonces permite recorrer hacia la izquierda el balon e ir restando disminuyendo el valor de x
      }
      console.log(x);
      //cuando va a hacia la izquierda los valores son negativos
      //para no cancelar todos los comportamientos por defecto que trae el teclado, entonces los prevenimos sólo cuando las teclas presionadas solo sean la 37 en esta caso, para las 38 , 39 y 40 es lo mismo
      break;
    case 38:
      //arriba
      if ($limitBall.top > $limitStage.top) {
        e.preventDefault(); //active el preventDefault() solo cuando se este hacindo un movimiento dentro de los limites
        y--;
      }
      //cuando los valores de y van haca arriba son negativos, lo contrario al plano cartesiano
      break;
    case 39:
      //dere

      if ($limitBall.right < $limitStage.right) {
        e.preventDefault();
        x++;
        //si la ubicacion de la bola es menor que el de la caja, es decir si la bola esta ubicado a la izquierda de la caja y tiene espacio para correr hacia la derecha
        // entonces permite a x ir hacia la derecha
      }
      console.log(x);
      //cuando va a la derecha los valores son positivos
      break;
    case 40:
      if ($limitBall.bottom < $limitStage.bottom) {
        e.preventDefault();

        y++;
      }
      //cuando los valores en y van hacia abajo son positivos, lo contrario al plano cartesiano
      break;
    //abaj

    default:
      break;
  }
  // cuando salga dealguno de los casos sigue con esta parte que es la que permite mover la bolas
  $ball.style.transform = `translate(${x * 20}px, ${y * 15}px)`; //agrega un estilo css que permite mover la bola, trasladar la bola
  //se multiplica por 10 ya que x es un contador, al presionar 2 veces la tecla sea derecha o izquierda x tomará el valor de 2
  // por lo cual 2 x 10 es 20, que eso serian los pixeles que correrá al presionar 2 veces latecla y asi sucesivamente  con y de arriba a bajo
}
