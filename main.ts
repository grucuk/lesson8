// Завдання 1

let city:string='Kyiv';
city='Lviv';
let address:string;
address=city;
console.log(address);

// Завдання 2

var input:any = prompt('Enter any number', '');
let a:number;
a=input;

(a==0)?console.log('Число 0'):
(a%2==0)?console.log(`Число ${a} парне`):
(a%2!==0)?console.log(`Число ${a} непарне`):
console.log('Введіть число');

// Завдання 3

function max(...arg: Array<number>):number{
        return arg.reduce((prev, item)=>Math.max(prev, item),0);
        
}
console.log("Максимальне значення - ",max(-4,84,400,7));

// Завдання 4
var number:any = prompt('Enter any number', '');
function getSqrt(number){
        (number>0)?console.log(`Корінь квадратний із ${number} =`,Math.sqrt(number)):
        (number<0)?console.log('Введіть додатнє число'):
        (isNaN(+`${number}`))?console.log('Повинно бути числове значення'):
        console.log('Будь ласка, введіть число!');
        
        ;
       
}
getSqrt(number);

// Завдання 5

let arr=[];
function add(){
        
    if((<any>document.querySelector('.word')).value!=""){
        (<any>document.querySelector('.word')).placeholder="word here ...";
        (<any>document.querySelector('.word')).style.border="1px solid black";
                if(document.querySelector('.sp1').innerHTML!=""){
                        (<any>document.querySelector('.sp1')).innerHTML+=", "+(<any>document.querySelector('.word')).value;
                arr.push((<any>document.querySelector('.word')).value);
                (<any>document.querySelector('.word')).value="";
               
                         }
                else{(<any>document.querySelector('.sp1')).innerHTML=(<any>document.querySelector('.word')).value;
                arr.push((<any>document.querySelector('.word')).value);
                (<any>document.querySelector('.word')).value="";
               
                        }
                    }
                       else if((<any>document.querySelector('.word')).value.length===0) {
                        (<any>document.querySelector('.word')).placeholder="Please write a word";
                        (<any>document.querySelector('.word')).style.border="1px solid red";
                    }
            
               
               
    }
    function del() {document.querySelector('.sp1').innerHTML="";
    (<any>document.querySelector('.word')).value="";
    (<any>document.querySelector('.word')).placeholder="word here ...";
    (<any>document.querySelector('.word')).style.border="1px solid black"
    }

    function cen() {
        
        
       for(let i in arr){

        var regexstring = arr[i];

        var regexp = new RegExp(regexstring, "gi");
        var str = (<any>document.querySelector('.text')).value.replace(regexp, "*".repeat(arr[i].length));
       
        (<any>document.querySelector('.text')).value=str;
                       
       }

    }

