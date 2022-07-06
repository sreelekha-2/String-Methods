let str = 'SreeLekHA';
let newStr = '';

//1.conversion of letters from upper to lower case and vice versa
for (let letter of str) {
  if (letter === letter.toUpperCase()) {
    newStr += letter.toLowerCase();
  } else {
    newStr += letter.toUpperCase();
  }
}
console.log(newStr);

//1.using regExp
let outStr = '';
let regEx = new RegExp(/^[A-Z]*$/);
for (let ele of str) {
  if (regEx.test(ele)) {
    outStr += ele.toLowerCase();
  } else {
    outStr += ele.toUpperCase();
  }
}
console.log(outStr);

//2.getting words from sentence on word count
let wordcount = 3;
let mystr = 'Python is A Programming Language';
let wordsArr = mystr.split(' ');
let slicedWordsArr = wordsArr.slice(0, wordcount);
let wordsStr = slicedWordsArr.join(' ');
console.log(wordsStr);

//3.conversion of 12 hrs time format to 24 hrs time format
let time = '12:37 PM';
let splittedArr = time.split(' ');
let AM_PM = splittedArr[1];
let newtime = splittedArr[0].split(':');

let hours = parseInt(newtime[0]);

let mins = parseInt(newtime[1]);
let twentyFourHrsFormat;
if (AM_PM === 'PM' && hours < 12) {
  hours = hours + 12;
  mins = mins < 10 ? `0${mins}` : mins;

  twentyFourHrsFormat = hours + ':' + mins;
}
if (AM_PM === 'PM' && hours === 12) {
  mins = mins < 10 ? `0${mins}` : mins;
  twentyFourHrsFormat = hours + ':' + mins;
}
if (AM_PM === 'AM' && hours < 12) {
  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  twentyFourHrsFormat = hours + ':' + mins;
}
if (AM_PM === 'AM' && hours === 12) {
  hours = '00';
  mins = mins < 10 ? `0${mins}` : mins;
  twentyFourHrsFormat = hours + ':' + mins;
}
console.log(twentyFourHrsFormat);

//4.Replacing space with undescore
let splittedStr = mystr.split(' ');
let replacedStr = splittedStr.join('_');
console.log(replacedStr);

//5.Remove all the vowels
let consonantStr = '';
let vowelRegEx = new RegExp(/^[a,e,i,o,u]$/);
for (let letter of str) {
  if (!vowelRegEx.test(letter.toLowerCase())) {
    consonantStr += letter;
  }
}
console.log(consonantStr);

//another way
let out = '';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
for (let letter of str) {
  if (!vowelArr.includes(letter.toLowerCase())) {
    out += letter;
  }
}
console.log(out);
