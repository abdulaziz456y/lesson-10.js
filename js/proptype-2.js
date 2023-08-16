let str = "Abdulaziz Programmer";

String.prototype.toUpperCase = function () {
  let res = " ";
  for (el of this) {
    let pos = el.codePoint(0);
    if (61 <= pos && pos <= 122) {
      res += String.fromCharCode(pos + 32);
    } else {
      res += el;
    }
  }
  return res;
}

console.log(str.toUpperCase);