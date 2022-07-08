function gerarNumeros() {
  return {
    iniciar(fn, interval = 1000) {
      let num = 0;
      const intervalInstance = setInterval(() => {
        fn(num++);
      }, interval);

      return {
        parar(done) {
          done(clearTimeout(intervalInstance));
        },
      };
    },
  };
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar((num) => console.log(num));
exec1.parar((clear) => setTimeout(() => clear, 10000));
