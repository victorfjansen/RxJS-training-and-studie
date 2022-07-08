const { from, Observable } = require("rxjs");

function primeiro() {
  return (obsFonte) => {
    return new Observable((subscriber) => {
      obsFonte.subscribe({
        next: (valor) => subscriber.next(valor + 1000),
        complete: () => subscriber.complete(),
      });
    });
  };
}

from([1, 2, 3, 4, 5]).pipe(primeiro()).subscribe(console.log);
