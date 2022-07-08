const { Observable, observable } = require("rxjs");

const promise = new Promise((resolve) => {
  resolve("promise [e bem legal");
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
  subscriber.next("observable hihi");
  subscriber.next("observable hihi");
});

obs.subscribe(console.log);
