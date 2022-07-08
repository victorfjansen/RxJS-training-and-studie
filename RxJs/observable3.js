const { Observable } = require("rxjs");

const entre = (startNumber, LastNumber) => {
  return new Observable((subscriber) => {
    for (let i = startNumber; i < LastNumber + 1; i++) {
      subscriber.next(i);
    }
  });
};

entre(6, 10).subscribe((num) => {
  console.log(num);
});
