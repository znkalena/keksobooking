export const createPopup =(adress) =>{

  const baloonTemplate =document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement =baloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${adress._latlng}`;

return popupElement;
}
