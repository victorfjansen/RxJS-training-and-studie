const { interval } = require("rxjs");

const gerarNumeros = interval(500);

const subscription = gerarNumeros.subscribe((num) => {
  console.log(Math.pow(2, num));
});

setTimeout(() => {
  subscription.unsubscribe();
}, 4000);
