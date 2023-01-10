import {returnNumber} from "./util.js"
const pattern =document.querySelector('#card').content.querySelector('.popup');
const ListFragment = document.createDocumentFragment();


const createPopup=(newAdds)=>{
for(let newAdd of newAdds){
 const clonElement = pattern.cloneNode(true);
 clonElement.querySelector('.popup__title').textContent=newAdd.offer.title;
 clonElement.querySelector('.popup__text--address').textContent=newAdd.offer.address;
 clonElement.querySelector('.popup__text--price').textContent=newAdd.offer.price;
 clonElement.querySelector('.popup__text--capacity').textContent=`${newAdd.offer.rooms}комнаты для${newAdd.offer.guests}гостей`;
 clonElement.querySelector('.popup__text--time').textContent=`Заезд после${newAdd.offer.checkin},выезд до${newAdd.offer.checkout}`
 const typeAppartment=clonElement.querySelector('.popup__type');

 if(newAdd.offer.type==='flat'){
  typeAppartment.textContent='Квартира';
 if(newAdd.offer.type==='bungalow'){
  typeAppartment.textContent='Бунгало';
 if(newAdd.offer.type==='house'){
  typeAppartment.textContent='Дом';
 if(newAdd.offer.type==='palace'){
  typeAppartment.textContent='Дворец';
 }}}}

 const popupFeatures=clonElement.querySelector('.popup__features');
 const popupFeature=popupFeatures.querySelectorAll('.popup__feature');
 const offerFeatures=newAdd.offer.features;

  if(offerFeatures.length){
  const modifiers=offerFeatures.map((feature)=>`popup__feature--${feature}`);
  popupFeature.forEach((itemLi)=>{
    const modifier=itemLi.classList[1];
    if(!modifiers.includes(modifier)){
     itemLi.remove();
    }
  });
  }else{popupFeature.remove();}

clonElement.querySelector('.popup__description').textContent=newAdd.offer.description;

 const offferPhotos=newAdd.offer.photos;
 const image=clonElement.querySelector('.popup__photo');
 for(let i=0;i<offferPhotos.length;i++){
  if(i<1){
    image.src=offferPhotos[i];
  }
  else{
    const newImage=image.cloneNode(false);
    newImage.src =offferPhotos[i];
}
if(!newAdd.author.avatar==='img/avatars/default.png'){
clonElement.querySelector('.popup__avatar').src=newAdd.author.avatar;
}else{clonElement.querySelector('.popup__avatar').src=`img/avatars/user0${returnNumber(0,8)}.png`}

ListFragment.appendChild(clonElement);
console.log(ListFragment);

}}};

//const mapCanvas=document.querySelector('#map-canvas');
//mapCanvas.appendChild(ListFragment);
export{createPopup};

