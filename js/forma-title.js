const forma=document.querySelector('.ad-form');
const title=forma.querySelector('#title');
const minLength=30;
const maxLength=100;

title.addEventListener('invalid',()=>{
if(title.validity.tooShort){
title.setCustomValidity('Имя должно состоять минимум из 30-и символов');
}
else if(title.validity.tooLong){
 title.setCustomValidity('Имя должно состоять максимум из 100 символов');
}
else if( title.validity.valueMissing){
title.userNameInput.setCustomValidity('Обязательное поле');
}
else{title.userNameInput.setCustomValidity('');}
});

title.addEventListener('input',()=>{
  const valueLength=title.value.length;
  if(valueLength<minLength){
  title('еще' +(minLength-valueLength) + 'симв.' );
  } else if(valueLength>maxLength){
    title.setCustomValidity('лишние' + (valueLength-maxLength) + 'симв.');
  }else{
    title.setCustomValidity('');
  }
  title.reportValidity();
});
