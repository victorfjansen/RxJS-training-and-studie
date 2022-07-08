const { from, tap, map, observeOn, asyncScheduler } = require("rxjs");

console.log("antes..");

from([1, 2, 3, 4, 5, 6, 7, 8, 10])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log);

console.log("depois..");
