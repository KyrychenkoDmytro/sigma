//================================  1  ================================

function diffMaxMin(arr) {
    if (!Array.isArray(arr)) return false;
    arr = arr.filter(value => typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity);
    if (arr.length < 2) return 0;
    //----------
    return Math.max(...arr) - Math.min(...arr);
    //-------------------
    // with lodash
    // return _.max(arr) - _.min(arr);
}

// console.log(diffMaxMin());
// console.log(diffMaxMin([Infinity, -Infinity]));
// console.log(diffMaxMin([16, Infinity]));
// console.log(diffMaxMin(['d',8, 0, 3, 'df', -5, Infinity]));
// console.log(diffMaxMin([1, 2, 3, -4, NaN]));

//================================  2  ================================

function arrStrsOfDesiredLength(str, length) {
    if (typeof str !== 'string' || typeof length !== 'number') return false;
    if (str.length === 0 || length < 0) return false;
    //-------------
    return str.split(/\s+/).filter(str => str.length > length);
    //-------------------
    // with lodash
    // const words = _.words(str, /[^\s]+/g);
    // return _.filter(words, word => word.length > length);
}

// console.log(arrStrsOfDesiredLength('asdfd  dfdfdf      fgger23  ddf       3434', 5));
// console.log(arrStrsOfDesiredLength('HJSDhfs'));
// console.log(arrStrsOfDesiredLength('HJ3hfs d sdsd', '2'));

//================================  3  ================================

function strEndsWith(str, ends) {
    if (typeof str !== 'string' || typeof ends !== 'string') return false;
    if (str.length === 0 || ends.length === 0) return false;
    //----------
    return str.endsWith(ends);
    //-------------------
    // with lodash
    // return _.endsWith(str, ends);
}

// console.log(strEndsWith('abc', 'bc'));
// console.log(strEndsWith('abc', 'd'));
// console.log(strEndsWith(4));

//================================  4  ================================

function arrOfAverages(arr) {
    if (!Array.isArray(arr)) return false;
    arr = arr.filter(value => typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity);
    if (arr.length < 2) return false;
    //----------
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push((arr[i] + arr[i - 1]) / 2);
    }
    return result;
    //-------------------
    // with lodash
    // return _.flatMap(arr, (num, i) => {
    //     if (i === arr.length - 1) return [];
    //     return [(num + arr[i + 1]) / 2];
    // });
}

// console.log(arrOfAverages(['df', 2, -2, 2,Infinity, -Infinity, -2, 2, NaN]));
// console.log(arrOfAverages([2, -2, 2, -2, 2]));
// console.log(arrOfAverages([1, 3, 5, 1, -10]));
// console.log(arrOfAverages([2]));

//================================  5  ================================

function countVowels(str) {
    if (typeof str !== 'string') return false;
    if (str.trim().length === 0) return false;
    const vowels = 'aeiou';
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < vowels.length; k++) {
            if (vowels[k] === str[i]) {
                count++;
                break;
            }
        }
    }
    return count;
}

// console.log(countVowels("CelEbration"));
// console.log(countVowels("PAlm"));
// console.log(countVowels("Plm"));

function removeABC(str) {
    if (typeof str !== 'string') return false;
    if (str.trim().length === 0) return false;
    let removed = str.replace(/[a-cA-C]/g, '').split(/\s{1,}/).join(' ');
    return str.length !== removed.length ? removed : null;
}

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("This might C be A Bit hArd"));
// console.log(removeABC("hello world!"));
// console.log(removeABC("  "));

//================================  6  ================================

function difference(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length === 0 || arr2.length === 0) return false;
    //---------------
    return [...new Set([...arr1, ...arr2])];
    //or 
    // let arr = [...arr1, ...arr2];
    // let obj = arr.reduce((obj, item) => {
    //     obj[item] ? obj[item]++ : obj[item] = 1;
    //     return obj;
    // }, {});
    // return Object.keys(obj);
    //-------------------
    // with lodash
    // return _.union(arr1, arr2);
}

// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference(['s'], 'd'));

//================================  7  ================================

function changeKeysTOValues(obj) {
    if (typeof obj !== 'object' || obj === null || Object.prototype.toString.call(obj) !== '[object Object]') {
        return false;
    }
    let keys = Object.keys(obj);
    let newObj = keys.reduce((newObj, i) => {
        let value = obj[i];
        newObj[value] = i;
        return newObj;
    }, {});
    return newObj;
}

// console.log(changeKeysTOValues({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
// console.log(changeKeysTOValues(null));

//================================  8  ================================

function calculateDifference(obj, insPrice) {
    if (typeof obj !== 'object' || obj === null || Object.prototype.toString.call(obj) !== '[object Object]') {
        return false;
    }
    let values = Object.values(obj);
    if (values.length === 0) return false;
    if (isNaN(insPrice) || insPrice === Infinity || insPrice === -Infinity || typeof insPrice !== 'number') return false;
    let sumValues = values
        .filter(item => !isNaN(item) && item !== Infinity && item !== -Infinity && typeof item === 'number')
        .reduce((sum, item) => sum += item, 0);
    return sumValues > insPrice ? sumValues - insPrice : false;
}

// console.log(calculateDifference(null, 19));
// console.log(calculateDifference({}, 19));
// console.log(calculateDifference({skate: 10}, '19'));
// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//================================  9  ================================

function doesBrickFit(...args) {
    const [a, b, c, w, h] = args;
    let filterArgs = args.filter(value =>
        value > 0 &&
        !isNaN(value) &&
        value !== Infinity &&
        value !== -Infinity &&
        typeof value === 'number');
    if (filterArgs.length < args.length) return false;

    let brick = [a, b, c];
    let hole = [w, h];
    brick = brick.sort((a, b) => b - a);
    hole = hole.sort((a, b) => b - a);

    let count = 0;
    for (let i = 0; i < brick.length; i++) {
        if (brick[i] <= hole[count]) {
            count++;
        }
        if (count === 2) break;
    }
    return count === 2 ? true : false;
}

// console.log(doesBrickFit(1, 1, 1, 1, 1));
// console.log(doesBrickFit(3, 2, 1, 1, 3));
// console.log(doesBrickFit(1, 2, 2, 1, 1));
// console.log(doesBrickFit(1, 1, 0, 1, 1));

//================================  10  ================================ 

// When a backslash is used in a string, it indicates that the next character should be treated as a literal character, rather than as a special character. For example: a newline (\n) or a tab (\t), which occurs here.
// For a single backslash, use "\\".
//'c:\WebServers\home\testsite\www\myfile.txt'; 

function extractFileName(str) {
    if (typeof str !== 'string') return false;
    if (str.trim().length === 0) return false;
    const lastIndex = str.lastIndexOf("\\");
    const filename = str.slice(lastIndex + 1).split(".")[0];
    return filename;
}

// console.log(extractFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// or

// function extractFileName(str) {
//     return str.split('/').pop().replace(/\.[^]+$/, '');
// }

// console.log(extractFileName('c:/WebServers/home/testsite/www/myfile.txt'));

//================================  11  ================================

function cyclicShift(str1, str2) {
    if (typeof str1 !== 'string' && typeof str2 !== 'string') return false;
    str1 = str1.trim();
    str2 = str2.trim();
    if (str1.length === 0 || str2.length === 0) return false;
    if (str1.length !== str2.length) return false;
    //-----------------------
    str1 = str1.split('');
    str2 = str2.split('');
    for (let i = 0; i < str2.length; i++) {
        if (str1.toString() === str2.toString()) {
            return true;
        }
        str2.push(str2.shift());
    }
    return false;
    //---------------------
    // with lodash
    // let doubleStr1 = str1 + str1;
    // return _.includes(doubleStr1, str2);
}

//   console.log(cyclicShift('qwerty', 'wertyq')); //true
//   console.log(cyclicShift('abcdef', 'defabc')); // true
//   console.log(cyclicShift('qwer', 'rewq')); // false
//   console.log(cyclicShift(' ', ' ')); //false

//================================  12  ================================

function splitArrInHalf(a) {
    if (!Array.isArray(a)) false;
    if (a.length % 2 !== 0 || a.length === 0) return false;
    //---------------
    let bSmaller = [];
    let cBiggest = [];
    a.sort((a, b) => b - a);
    while (a.length) {
        cBiggest.push(a.shift());
        bSmaller.push(a.shift());
    }
    return [cBiggest, bSmaller];
    //-------------
    //or
    // for (let i = 0; i < arr.length; i += 2) {
    //     cBiggest.push(arr[i]);
    //     bSmaller.push(arr[i + 1]);
    // }
    //---------------
    // return [cBiggest, bSmaller];
    //---------------------
    // with lodash
    // const sorted = _.sortBy(a);
    // let countC = 0;
    // let countB = 0;
    // for (let i = sorted.length-1; i >= 0; i -= 2) {
    //     cBiggest[countC] = sorted[i];
    //     countC++;
    //     bSmaller[countB] = sorted[i -1];
    //     countB++;
    // }
    // return [cBiggest, bSmaller];
}

// console.log(splitArrInHalf([2, 6, 13]));
// console.log(splitArrInHalf([]));
// console.log(splitArrInHalf([2, 6, 13, 1, -5, 24, -7, 18]));
// console.log(splitArrInHalf([2, 3, 1, 8, -5, 4, 7, 6, 5, -8]));

//================================  13  ================================

function ifStrLengthGreater() {
    setInterval(() => {
        alert('Вам потрібна допомога?')
    }, 5000)
}

function createNewString(str) {
    if (typeof str !== 'string') return false;
    if (str.trim().length === 0) return false;
    let arr = str.toLowerCase().split(/\s+/);
    let urlRegex = /https?:\/\/[^\s]+/;
    let mailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
    let numberRegex = /\d{4,}/;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        curr = curr.replace(urlRegex, '[посилання заборонено]');
        curr = curr.replace(mailRegex, '[контакти заборонені]');
        curr = curr.replace(numberRegex, '');

        if (curr !== '') newArr.push(curr);
    }
    if (newArr[0] !== '[посилання заборонено]' || newArr[0] !== '[контакти заборонені]') {
        let value = newArr[0];
        value = value.charAt(0).toUpperCase() + value.slice(1);
        newArr.splice(0, 1, value);
    }
    let newStr = newArr.join(' ');
    // console.log(str.length, newStr.length);
    return str.length >= newStr.length ? newStr : ifStrLengthGreater();
}

// console.log(createNewString('sdfdfsf   345      HtTp://s          2423    Dsawefd@g.sa')); // newStr smaller => console
// console.log(createNewString('sdfdfsf   345      HtTp://s      2423    Dsawefd@g.sa')); // newStr biggest => alert
// console.log(createNewString('   '));

//================================  14  ================================

function validBalanceBrackets(str) {
    if (typeof str !== 'string') return false;
    if (!str.includes('(') || !str.includes(')')) return false;
    let opening = 0;
    for (let i = 0; i < str.length; i++) {
        if (opening < 0) return false;
        if (str[i] === '(') opening++;
        if (str[i] === ')') opening--;
    }
    if (opening === 0) {
        let div = document.createElement('div');
        div.textContent = str;
        div.style.cssText += '-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'
        document.body.append(div);

        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.keyCode === 85) event.preventDefault();
            return false;
        });
        return true;
    } else return false;
}

// console.log(validBalanceBrackets('asd(dfdfdf) dffdf (dfdf  df )'));
// console.log(validBalanceBrackets('asd(dfdfdf) dffdf (dfdfdf dfdf '));
// console.log(validBalanceBrackets('dasd )( '));

//================================  15  ================================

function userPhrase() {
    try {
        let phrase = prompt('Please, write something:');
        let arrWords = phrase.trim().split(/\s+/);
        const ul = document.createElement('ul');
        for (let i = 0; i < arrWords.length; i++) {
            let word = arrWords[i];
            if (i === 0) {
                word = arrWords[i].toUpperCase();
            }
            if (i === arrWords.length - 1 || i === arrWords.length - 2) {
                word = arrWords[i].toLowerCase();
            }
            const li = document.createElement('li');
            li.textContent = word;
            ul.append(li);
        }
        document.body.append(ul);
        const countA = (phrase.match(/[aA]/g) || []).length;
        alert(`In a phrase ${countA} letters 'a'.`);
    } catch (error) {
        console.log('The user refused to write anything :(');
    }
}

// userPhrase();

let lastActivityTime = new Date().getTime();
const time = 5 * 60 * 1000; // 5 min 

function changeTimeActivity() {
    lastActivityTime = new Date().getTime();
    // console.log('changeTimeActivity');
}

document.addEventListener('mousemove', changeTimeActivity);
document.addEventListener('keydown', changeTimeActivity);

function userInactivity(time) {
    // console.log('userInterval');
    let currentTIme = new Date().getTime();
    if (currentTIme - lastActivityTime > time) {
        const answer = confirm('Are you still here?');
        if (answer) {
            lastActivityTime = new Date().getTime();
        } else {
            window.close();
        }
    }
}

// setInterval(() => userInactivity(time), 10 * 1000); // 10 sec

//================================  16  ================================

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const symbol = '_';
const numbers = '0123456789';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allsymbols = `${symbol}${numbers}${letters}${capitalLetters}`;
//'_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const passLength = getRandomIntInclusive(6, 20); // length from 6 to 20 characters
let leng = allsymbols.length - 1;

function getPassword() {
    let countOfCapitalLettter = 0;
    let countOfNumber = 0;
    let pass = new Array(passLength).fill(0).map((item) => item = allsymbols[getRandomIntInclusive(0, leng)]);
    if (!pass.includes(symbol)) return getPassword(); // should be exactly one of the emphasis symbol
    for (let i = 0; i < capitalLetters.length; i++) {
        if (pass.includes(capitalLetters[i])) countOfCapitalLettter++;
        if (countOfCapitalLettter >= 2) break;
    }
    if (countOfCapitalLettter < 2) return getPassword();  // at least two large letters
    for (let i = 0; i < numbers.length; i++) {
        if (pass.includes(numbers[i])) countOfNumber++;
        if (countOfNumber > 5) return getPassword(); // No more than 5 numbers
    }
    for (let i = 1; i < pass.length; i++) {  // Any two numbers in a row are unacceptable.
        let num = Number(pass[i]);
        let prevNum = Number(pass[i - 1]);
        if (typeof num === 'number' && !isNaN(num) && typeof prevNum === 'number' && !isNaN(prevNum)) {
            return getPassword();
        }
    }
    return pass;
}

// console.log(getPassword());

//================================  17  ================================

function sortingArray(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length < 2) return arr;
    let arrEven = [];
    let arrOdd = [];
    //-----------
    // arr.sort((a, b) => a - b);
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) arrEven.push(arr[i]);
    //     else arrOdd.push(arr[i]);
    // }
    // return [...arrEven, ...arrOdd.reverse()];
    //----------------
    const sorteredArr = _.sortBy(arr);
    for (let i = 0; i < sorteredArr.length; i++) {
        if (!(i % 2)) arrEven.push(sorteredArr[i]);
        else arrOdd.push(sorteredArr[i]);
    }
    return [...arrEven, ...(_.reverse(arrOdd))];
}

// [1,2,3,4,5,6] => [1,3,5,6,4,2]
// console.log(sortingArray([3, 5, 2, 4, 1, 6]));
// console.log(sortingArray([3, 1, 8, -30, 2, 5, -3, 20]));
// console.log(sortingArray('1234'));
// console.log(sortingArray());