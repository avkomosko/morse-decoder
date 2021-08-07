const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let newArr = [];
  let result = [];
  let word;
  let regEx2 = /10/gi;
  let regEx3 = /11/gi;
  let regEx4 = /00/gi;

  while (expr !== "") {
    arr.push(expr.slice(0, 10));
    expr = expr.slice(10);
  }

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].replace(regEx2, ".");
    newArr[i] = newArr[i].replace(regEx3, "-");
    newArr[i] = newArr[i].replace(regEx4, "");
    if (newArr[i] === "**********") {
      newArr[i] = MORSE_TABLE[newArr[i]];
      word = newArr.slice(0, i).join("");
      result.push(word);
      newArr = newArr.slice(i + 1);
    } else {
      newArr[i] = MORSE_TABLE[newArr[i]];
      word = newArr.join("");
    }
  }
  result.push(word);
  return result.join(" ");
}

module.exports = {
  decode,
};
