//Reorganización de mochilas 
let respuesta;
let tipoArticuloPrioridad;
const sumaPrioridad = (mochilas) => {
    const prioridades = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
      m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23,
      x: 24, y: 25, z: 26, A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34,
      I: 35, J: 36, K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45,
      T: 46, U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
    };
    
    let total = 0;
    tipoArticuloPrioridad = {};

    for (const mochila of mochilas) {
      const longitud = mochila.length;
      const compartimento1 = new Set(mochila.slice(0,longitud / 2));
      const compartimento2 = new Set(mochila.slice(longitud/ 2));
  
      for (const elemento of compartimento1) {
        if (compartimento2.has(elemento)) {
          total += prioridades[elemento];
          tipoArticuloPrioridad[elemento] = prioridades[elemento];
        }
      }
    }

    return respuesta="La suma de las proidades es:"+total+"  Tipos de articulos:";
  };
  
  // Ejemplo de uso
  
  const mochilas = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
  ];
  
  sumaPrioridad(mochilas);
  console.log(respuesta);
  console.log(tipoArticuloPrioridad)