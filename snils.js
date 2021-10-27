const fs = require("fs");
function generateSnils() {
    const rnd = Math.floor(Math.random() * 999999999)
    const number = leftPad('' + rnd, 9, '0')
  
    let sum = number
      .split('')
      .map((val, i) => parseInt(val) * (9 - i))
      .reduce((a, b) => a + b)
  
    if (sum > 101) {
      sum = sum % 101
    }
  
    const checkSum = sum == 100 || sum == 101 ? '00' : leftPad('' + sum, 2, '0')
    const num=number + checkSum
    const numS= `${num.substr(0, 3)}-${num.substr(3, 3)}-${num.substr(6, 3)} ${num.substr(9)}`


    fs.appendFile("./snils.csv", `${numS}\n`, function (err) {
        if (err) return console.log(err);
      });
    
  }
  function leftPad(str, len, ch) {
    const length = len - str.length + 1
    return length > 0 ? new Array(length).join(ch) + str : str
  }

  for (let i = 0; i < 1000; i++) {
  generateSnils();
}