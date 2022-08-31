let clearBtn = document.querySelector('.clear-all');
let deleteBtn = document.querySelector('.delete');
let operator = document.getElementsByClassName('operator');
let digits = document.getElementsByClassName('number');
let equals = document.querySelector('.equals');
let screen = document.querySelector('.display');
let deci = document.querySelector('.decimal');

// console.log(digits);
let countDots = 0;
let operatorCount = 0;
let flag = false;

deleteBtn.addEventListener('click', () => {
    let str = screen.innerText;
    str = str.slice(0, -1);
    screen.innerText = str;
});

clearBtn.addEventListener('click', () => {
    screen.innerHTML = "";
    countDots = 0;
    operatorCount = 0;
});

Array.from(digits).forEach((digit) => {
    digit.addEventListener('click', (e) => {
        if (flag && operatorCount<1) {
            screen.innerHTML = "";
        }
        let num = (e.target.innerHTML);
        screen.innerHTML = screen.innerHTML + num;
        flag = false;
    });
});

let operatorArray = Array.from(operator);

Array.from(operator).forEach((op) => {
    op.addEventListener('click', (e)=>{
        operatorCount++;
        if(operatorCount > 1){
            screen.innerHTML = screen.innerHTML;
        }
        else{
            let opr = (e.target.innerHTML);
            screen.innerHTML = screen.innerHTML + opr;
        }
    });
});

equals.addEventListener('click', () => {
    screen.innerHTML = eval(screen.innerText);
    countDots = 0;
    operatorCount = 0;
    flag = true;
})

deci.addEventListener('click', (e) => {
    countDots++;
    if (flag) {
        screen.innerHTML = "";
    }
    if (countDots < 2) {
        let dot = e.target.innerHTML;
        screen.innerHTML = screen.innerHTML + dot;
    }
});

let toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () =>{
    document.getElementById('body').classList.toggle('body--light');
    document.getElementById('title').classList.toggle('title--light');
    document.getElementById('display').classList.toggle('display--light');
    let btns = document.getElementsByClassName('btn');

    Array.from(btns).forEach((btn)=>{
        btn.classList.toggle('btn--light');
    });
});




