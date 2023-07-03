//Conteo de Calorias

function elfoConMasCalorias(caloriasTodosLosElf) {
  let maxCalorias = 0;
  let numeroElf=0;

for (let i = 0; i < caloriasTodosLosElf.length; i++) {
  let elfo = caloriasTodosLosElf[i];
  let sumCaloriasElfo = 0; 

  for (let j = 0; j < elfo.length; j++) {
    sumCaloriasElfo += elfo[j]; 
  }

   if (sumCaloriasElfo > maxCalorias) {
    maxCalorias = sumCaloriasElfo;
    numeroElf=i+1;
  }

}
return preguntar=maxCalorias +" llevado por el elfo: "+ numeroElf;
}

//Ejemplo de prueba
const caloriasTodosLosElf  = [
  [1000, 2000, 3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000]
];

console.log(elfoConMasCalorias(caloriasTodosLosElf));