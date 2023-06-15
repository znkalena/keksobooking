const forma=document.querySelector('.ad-form');
const selectTimeIn=forma.querySelector('#timein');
const selectTimeOut=forma.querySelector('#timeout');
const optionsTimeIn=selectTimeIn.querySelectorAll('option');
const optionsTimeOut=selectTimeOut.querySelectorAll('option');

const onCheckTimeChange=(itemIn,itemOut)=>{
  selectTimeIn.addEventListener('change',function(){
    if(itemIn.selected){
      itemOut.selected=true;}
  });
}
for(let i=0;i<optionsTimeIn.length;i++){
    onCheckTimeChange(optionsTimeIn[i],optionsTimeOut[i]);
}

