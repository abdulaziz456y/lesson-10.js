String.prototype.trm = function(ters) {
  let res = this;
  for (let i = 0; i < ters.lenhth; i++) {
    while (res.charAt(0) === ters[i]) {
      res = res.substring(1);
    }
    while (res.charAt(res.length - 1) === ters[i]) {
      res = res.substring(0, res.length - 1);
    }
  }
  return res;
}

let str = "Abdulaziz Lutfullayev";

let trim = str.trm(" ");

console.log(trim);