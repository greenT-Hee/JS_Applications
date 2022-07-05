let numOne = "";
let operator = "";
let numTwo = "";

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event)=> {
        if(!operator){ //비어있다
            numOne += event.target.textContent;
            $result.value += event.target.textContent;
            return;
        }
        //비어있지 않다
        if(!numTwo){
                $result.value = "";
        } // 화면 지우고 나서 numTwo 넣기
        numTwo += event.target.textContent;
        $result.value += event.target.textContent;
} // 함수가 함수를 부름, 고차합수(high order function)

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

// const a = (evnet) => {console.log(event.target.value)}
// document.querySelector('#plus').addEventListener('click',a)
// 가상으로 브라우저가 a(event), 이것도 고차함수 

const onClickOperator = (op) => () => {
    if(numTwo) {
        switch  (operator) {
            case '+' : 
            $result.value = parseInt(numOne) + parseInt(numTwo);
            break;
    
            case '-' : 
            $result.value = parseInt(numOne) - parseInt(numTwo);
            break;
    
            case '*' :
            $result.value = parseInt(numOne) * parseInt(numTwo);
            break;
    
            case '/' : 
            $result.value = parseInt(numOne) / parseInt(numTwo);
            break;
            
            default:
            break;
        }
        numOne = $result.value;
        numTwo = '';
    }

    if(numOne) {
        operator = op;
        $operator.value = op;
    }else{
        alert("숫자를 먼저 입력하세요1");
    }
}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('*'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('/'));
document.querySelector('#clear').addEventListener('click', ()=> {
    numOne = "";
    operator = "";
    numTwo = "";
    $operator.value = "";
    $result.value = "";
});
document.querySelector('#calculate').addEventListener('click', ()=> {
    if (numTwo) {
        switch  (operator) {
            case '+' : 
            $result.value = parseInt(numOne) + parseInt(numTwo);
            break;
    
            case '-' : 
            $result.value = parseInt(numOne) - parseInt(numTwo);
            break;
    
            case '*' :
            $result.value = parseInt(numOne) * parseInt(numTwo);
            break;
    
            case '/' : 
            $result.value = parseInt(numOne) / parseInt(numTwo);
            break;
            
            default:
            break;
        }
        $operator.value ="";
        numOne = $result.value;
        operator = "";
        numTwo = "";
    }else {
        alert("숫자를 먼저 입력하세요2")
    }

});