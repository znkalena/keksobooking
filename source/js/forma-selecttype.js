const forma=document.querySelector('.ad-form');
const selectType=forma.querySelector('#type');
const optionsType=selectType.querySelectorAll('option');
const inputPrice=forma.querySelector('#price');
const maxLength=7;

inputPrice.addEventListener('input',()=>{
    const valueLength=inputPrice.value.length;
    if(valueLength>maxLength){
    inputPrice.setCustomValidity('цена не может быть больше 1000000 рублей' );
    }
    else{
      inputPrice.setCustomValidity('');
    }
    inputPrice.reportValidity();
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


