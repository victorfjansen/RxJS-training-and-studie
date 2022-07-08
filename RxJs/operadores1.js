const { of, last, map, mergeMap, from } = require("rxjs");

of("victor", 3, 4, 5, "jansen")
  .pipe(
    map((item) => item),
    last()
  )
  .subscribe((data) => {
    console.log(data);
  });

from([1, 2, 3, 4, 5, 6])
  .pipe(map((num) => num))
  .subscribe(console.log);
