const forma=document.querySelector('.ad-form');
const selectType=forma.querySelector('#type');
const optionsType=selectType.querySelectorAll('option');
const inputPrice=forma.querySelector('#price');
const submitButton =forma.querySelector('.ad-form__submit');
const MAX_LENGTH=7;

inputPrice.oninput = function(evt){
    evt.preventDefault();
    const valueLength=inputPrice.value.length;
    if(valueLength>MAX_LENGTH){
    inputPrice.setCustomValidity('цена не может быть больше 1000000 рублей' );
    submitButton.disabled =true;
    }
    else{
      inputPrice.setCustomValidity('');
      submitButton.disabled = false;
    }

    inputPrice.reportValidity();

  };
const minPrice={
    bungalow:0,
    flat:1000,
    house:3000,
    palace:10000,
  };

const onCelectChange=()=>{
  inputPrice.value='';
    for(let i=0;i<=3;i++){
      if(optionsType[i].selected){
    const name=optionsType[i].value;
    inputPrice.placeholder=minPrice[name];
    inputPrice.min=minPrice[name];
      }
    }};

selectType.addEventListener('change',onCelectChange)


