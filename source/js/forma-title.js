const forma=document.querySelector('.ad-form');
const title=forma.querySelector('#title');
const minLength=10;
const maxLength=100;

title.addEventListener('input',()=>{
  const valueLength=title.value.length;
  if(valueLength<minLength){
    title.setCustomValidity('еще' +(minLength-valueLength) + 'симв.' );
  } else if(valueLength>maxLength){
    title.setCustomValidity('лишние' + (valueLength-maxLength) + 'симв.');
  }else{
    title.setCustomValidity('');
  }
  title.reportValidity();
});
