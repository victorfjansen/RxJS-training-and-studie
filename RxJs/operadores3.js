const { Observable } = require("rxjs");

function elementosComDelay(delay, ...elements) {
  return new Observable((subscriber) => {
    (elements || []).forEach((item, index) => {
      setTimeout(() => {
        if (elements.length === index + 1) subscriber.complete();
        subscriber.next(item);
      }, delay);
    });
  });
}

elementosComDelay(1000, 2, 3, 4, 5, 6, 7, 8, 9).subscribe(console.log);
