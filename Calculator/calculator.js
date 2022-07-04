let numOne = "";
let operator = "";
let numTwo = "";

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
// const onClickNumber = (number)=> {
//     return () => {
//         if(operator){ //비어있지 않다
//             numTwo += number;
//         }else{ //비어있다
//             numOne += number;
//         }
//         $result.value += number;
//     }
    
// }

const onClickNumber = (number)=> () => {
        if(operator){ //비어있지 않다
            numTwo += number;
        }else{ //비어있다
            numOne += number;
        }
        $result.value += number;
}

document.querySelector('#num-0').addEventListener('click', onClickNumber(0));
document.querySelector('#num-0').addEventListener('click', onClickNumber(1));
document.querySelector('#num-0').addEventListener('click', onClickNumber(2));
document.querySelector('#num-0').addEventListener('click', onClickNumber(3));
document.querySelector('#num-0').addEventListener('click', onClickNumber(4));
document.querySelector('#num-0').addEventListener('click', onClickNumber(5));
document.querySelector('#num-0').addEventListener('click', onClickNumber(6));
document.querySelector('#num-0').addEventListener('click', onClickNumber(7));
document.querySelector('#num-0').addEventListener('click', onClickNumber(8));
document.querySelector('#num-0').addEventListener('click', onClickNumber(9));

document.querySelector('#plus').addEventListener('click', ()=> {})
document.querySelector('#minus').addEventListener('click', ()=> {})
document.querySelector('#devide').addEventListener('click', ()=> {})
document.querySelector('#multiply').addEventListener('click', ()=> {})
document.querySelector('#calculate').addEventListener('click', ()=> {})
document.querySelector('#clear').addEventListener('click', ()=> {})