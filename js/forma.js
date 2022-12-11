const forma=document.querySelector('.ad-form');
const celectType=forma.querySelector('#type');
const fieldSet=forma.querySelector('.ad-form__element');
const inputPrice=fieldSet.querySelector('#price');

const onCelectChange=(evt)=>{
    console.log(evt);
    if(inputPrice.value.length<7){
    if(evt.target.value==='bungalow'){
    inputPrice.placeholder=0;
    if(inputPrice<0){
     inputPrice.desabled=true;
    }}
    if(evt.target.value==='flat'){
        inputPrice.placeholder=1000;
        if(inputPrice<1000){
            inputPrice.desabled=true;
    }}
    if(evt.target.value==='house'){
    inputPrice.placeholder=3000;
    if(inputPrice<3000){
        inputPrice.desabled=true;
}}
    if(evt.target.value==='palace'){
        inputPrice.placeholder=10000;
        if(inputPrice<10000){
            inputPrice.desabled=true;
    }}
    }else
    {inputPrice.desabled=true;
    inputPrice.placeholder='price can`t more 1000000';
    }
}

celectType.addEventListener('change',onCelectChange)

