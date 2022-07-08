function gerarElementos(array) {
  return {
    iniciar(fn) {
      let indice = 0;
      const intervalInstance = setInterval(() => {
        indice >= array.length
          ? clearInterval(intervalInstance)
          : fn(array[indice++]);
      }, 1000);

      return {
        parar() {
          clearInterval(intervalInstance);
        },
      };
    },
  };
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const temp1 = gerarElementos(numeros);

const sub1 = temp1.iniciar((num) => console.log(Math.pow(2, num)));

setTimeout(() => {
  sub1.parar();
}, 4000);
