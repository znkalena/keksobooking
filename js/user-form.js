const formaAd=document.querySelector('.ad-form');
const adFieldsets=formaAd.querySelectorAll('fieldset');
const formaMap=document.querySelector('.map__filters');
const mapSelects=formaMap.querySelectorAll('select');
const forma=document.querySelector('.ad-form');

const formsDisable=()=>{
formaAd.classList.add('ad-form--disabled');
formaMap.classList.add('map-filters--disabled');
adFieldsets.forEach((fieldset)=>{
    fieldset.disabled=true;
});
mapSelects.forEach((select)=>{
    select.disabled=true;
});
};
  const formsAvilable=()=>{
     formaAd.classList.remove('ad-form--disabled');
    formaMap.classList.remove('map-filters--disabled');
    adFieldsets.forEach((fieldset)=>{
        fieldset.disabled=false;
    });
    mapSelects.forEach((select)=>{
        select.disabled=false;
    });
    };
formsDisable();


forma.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const formData=new FormData(evt.target);
  fetch(' https://23.javascript.pages.academy/keksobooking',{method:'POST',body:formData,})
  .then(()=>{console.log('отправлено')})
  .catch((err)=>{console.log(err)})
});


export{formsAvilable,formaAd};
