const { Observable } = require("rxjs");

const obs = new Observable((subscriber) => {
  subscriber.next();
  subscriber.next();
  subscriber.next();
  subscriber.next();
  subscriber.next();
  subscriber.complete();
  subscriber.error();
});

obs.subscribe({
  next: () => console.log("aoba"),
  error: () => console.log("cuzao"),
  complete: () => console.log("completou"),
});
