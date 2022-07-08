const { interval, map, concatAll, subscribeOn } = require("rxjs");
const { ajax } = require("rxjs/ajax");
const { XMLHttpRequest } = require("xmlhttprequest");

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/user/cod3rcursos/repos",
})
  .pipe(
    map((resp) => resp),
    concatAll()
  )
  .subscribe(console.log);
