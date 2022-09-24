//REDUCE MAP FILTER PARA BUSCAR CONCEPTOS

//en el video 85 explica algo de operaciones de fechas hecho un video anterior del inicio

export default function countdowni(id, limitDate, finalMessage) {
    const d = document;
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(); //para definir fecha actual
    let limiTime = countdownDate - now; //para hacer el control regresivo tenemos que restar, la fecha ala que queremos llegar menos la fecha actual, asi se sabe cuanto falta
    let days = Math.floor(limiTime /(1000 *60 * 60 * 24)), //convertir a Dias
    hours =( "0" + Math.floor((limiTime % (1000 *60 * 60 * 24))/ (1000 * 60 * 60))).slice(-2) , 
    minutes = ("0" + Math.floor((limiTime % (1000 *60 *60)) / (1000 * 60)) ).slice(-2), // el slice es para tomar los ultimos 2 valores, de atras hacia adelante
    seconds = ("0" + Math.floor((limiTime % (1000 *60 )) / (1000)) ).slice(-2) // el slice es para tomar los ultimos 2 valores, de atras hacia adelante;

    $countdown.innerHTML = `<h3> faltan: ${days} días ${hours} horas ${minutes} minutos
     ${seconds} segundos </h3> `;

     if(limiTime<0){
        clearInterval(countdownTempo)
        $countdown.innerHTML = `<h3> ${finalMessage} </h3>`
     }
    console.log(countdownDate);
  }, 1000);
}

//REDUCE MAP FILTER
