let arr = [4, 6, 7, 9, 10];

Array.prototype.fltr = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    let check = callback(el, i, this);
    if (check) {
      res.push(el)
    }
  }
  return res;
}

let even = arr.fltr ((el) => el % 2 === 0);

console.log(even);