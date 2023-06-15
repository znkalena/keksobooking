const AlertShowTime=5000;
const showSuccess=(message)=>{
  const alertConteiner=document.createElement('div');
  alertConteiner.style.zIndex=100;
  alertConteiner.style.position='absolute';
  alertConteiner.textContent=message;
  alertConteiner.style.backgroundColor='gray';
  alertConteiner.style.padding = '10px 3px';
  alertConteiner.style.left='50%';
  alertConteiner.style.top='70%';
  alertConteiner.style.width='250px'
  alertConteiner.style.fontSize='30px';


  document.body.append(alertConteiner);

  setTimeout(()=>{
  alertConteiner.remove();
  },AlertShowTime);
}
export{showSuccess}
