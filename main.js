// Завдання 1
let city = 'Kyiv';
city = 'Lviv';
let address;
address = city;
console.log(address);
// Завдання 2
var input = prompt('Enter any number', '');
let a;
a = input;
(a == 0) ? console.log('Число 0') :
    (a % 2 == 0) ? console.log(`Число ${a} парне`) :
        (a % 2 !== 0) ? console.log(`Число ${a} непарне`) :
            console.log('Введіть число');
// Завдання 3
function max(...arg) {
    return arg.reduce((prev, item) => Math.max(prev, item), 0);
}
console.log("Максимальне значення - ", max(-4, 84, 400, 7));
// Завдання 4
var number = prompt('Enter any number', '');
function getSqrt(number) {
    (number > 0) ? console.log(`Корінь квадратний із ${number} =`, Math.sqrt(number)) :
        (number < 0) ? console.log('Введіть додатнє число') :
            (isNaN(+`${number}`)) ? console.log('Повинно бути числове значення') :
                console.log('Будь ласка, введіть число!');
    ;
}
getSqrt(number);
// Завдання 5
let arr = [];
function add() {
    if (document.querySelector('.word').value != "") {
        document.querySelector('.word').placeholder = "word here ...";
        document.querySelector('.word').style.border = "1px solid black";
        if (document.querySelector('.sp1').innerHTML != "") {
            document.querySelector('.sp1').innerHTML += ", " + document.querySelector('.word').value;
            arr.push(document.querySelector('.word').value);
            document.querySelector('.word').value = "";
        }
        else {
            document.querySelector('.sp1').innerHTML = document.querySelector('.word').value;
            arr.push(document.querySelector('.word').value);
            document.querySelector('.word').value = "";
        }
    }
    else if (document.querySelector('.word').value.length === 0) {
        document.querySelector('.word').placeholder = "Please write a word";
        document.querySelector('.word').style.border = "1px solid red";
    }
}
function del() {
    document.querySelector('.sp1').innerHTML = "";
    document.querySelector('.word').value = "";
    document.querySelector('.word').placeholder = "word here ...";
    document.querySelector('.word').style.border = "1px solid black";
}
function cen() {
    for (let i in arr) {
        var regexstring = arr[i];
        var regexp = new RegExp(regexstring, "gi");
        var str = document.querySelector('.text').value.replace(regexp, "*".repeat(arr[i].length));
        document.querySelector('.text').value = str;
    }
}
