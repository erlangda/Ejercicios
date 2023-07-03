//Piedra, Papel, Tijeras
let puntJugador1=0;
let puntJugador2=0; 
let respuesta;

function puntajeTotal(tirada1,tirada2){
    
    if(tirada1==="A" && tirada2=="X"){
        puntJugador2 +=4;
        puntJugador1 +=4;
    }

    if(tirada1==="A" && tirada2=="Y"){
        puntJugador2 +=8;
        puntJugador1 +=1;
    }

    if(tirada1==="A" && tirada2=="Z"){
        puntJugador2 +=3;
        puntJugador1 +=7;
    }
   
    if(tirada1==="B" && tirada2=="X"){
        puntJugador2 +=1;
        puntJugador1 +=8;
    }

    if(tirada1==="B" && tirada2=="Y"){
        puntJugador2 +=5;
        puntJugador1 +=5;
    }

    if(tirada1==="B" && tirada2=="Z"){
        puntJugador2 +=9;
        puntJugador1 +=2;
    }

    if(tirada1==="C" && tirada2=="X"){
        puntJugador2 +=7;
        puntJugador1 +=3;
    }

    if(tirada1==="C" && tirada2=="Y"){
        puntJugador2 +=9;
        puntJugador1 +=2;
    }

    if(tirada1==="C" && tirada2=="Z"){
        puntJugador2 +=6;
        puntJugador1 +=6;
    }
    return respuesta=puntJugador2;
}

function enviar(estrategia){
    for(let i=0;i<estrategia.length;i++){
        puntajeTotal(estrategia[i].Jugador1,estrategia[i].Jugador2)
    }
    puntJugador1=0;
    puntJugador2=0; 
}

//Ejemplo de prueba
const estrategia = [
    { Jugador1: "A", Jugador2: "Y" },
    { Jugador1: "B", Jugador2: "X" },
    { Jugador1: "C", Jugador2: "Z" },
  ];

  enviar(estrategia);
  console.log("el puntage total del jugador 2 es: "+respuesta)