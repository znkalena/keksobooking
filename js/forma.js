const forma=document.querySelector('.ad-form');
const selectType=forma.querySelector('#type');
const optionsType=selectType.querySelectorAll('option');
const inputPrice=forma.querySelector('#price');


inputPrice.addEventListener('input',function(){
    const inputValueLength=inputPrice.value.length;
    if(inputValueLength>7){
        inputPrice.disabled=true;
        inputPrice.placeholder='error';
}else{inputPrice.disabled=false;}
});
const minPrice={
    bungalow:0,
    flat:1000,
    house:3000,
    palace:10000,
  };

const onCelectChange=()=>{
    inputPrice.disabled=false;
    for(let i=0;i<=3;i++){
     if(optionsType[i].selected){
    const name=optionsType[i].value;
    inputPrice.placeholder=minPrice[name];
    inputPrice.min=minPrice[name];
     }else{inputPrice.value='';}
    }};

selectType.addEventListener('change',onCelectChange)


