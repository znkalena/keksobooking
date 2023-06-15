import {returnNumber} from "./util.js"
import { getNewAdds } from "./Api.js";
import { COUNT_ADDS } from "./data.js";


const getAddRank=(newAdd)=>{
  const formFilters=document.querySelector('.map__filters');
  const selectHousingType=formFilters.querySelector('#housing-type');
  const selectHousingPprice=formFilters.querySelector('#housing-price');
  const selectHousingGuests=formFilters.querySelector('#housing-guests');
  const fieldsetMapFeatures=document.querySelector('.map__features');
  const inputFilterWifi=fieldsetMapFeatures.querySelector('#filter-wifi');
  const inputFilterDishwasher=fieldsetMapFeatures.querySelector('#filter-dishwasher');
  const inputfFlterParking=fieldsetMapFeatures.querySelector('#filter-parking');
  const inputFilterWasher=fieldsetMapFeatures.querySelector('#filter-washer');
  const inputFilterElevator=fieldsetMapFeatures.querySelector('#filter-elevator');
  const inputFilterConditioner=fieldsetMapFeatures.querySelector('#filter-conditioner');

  let rank=0;
  if(newAdd.offer.type===selectHousingType){
    rank +=2;
  }
  if(newAdd.offer.price===selectHousingPprice.value){
   rank +=2;
  }
  if(newAdd.offer.guests===selectHousingGuests.value){
    rank +=2;
  }
  if(newAdd.offer.features.includes(inputFilterWifi.value)){
    rank +=1;
  }
  if(newAdd.offer.features.includes(inputFilterDishwasher.value)){
    rank +=1;
  }
  if(newAdd.offer.features.includes(inputFilterElevator.value)){
    rank +=1;
  }
  if(newAdd.offer.features.includes(inputFilterWifi.value)){
    rank +=1;
  }
  if(newAdd.offer.features.includes(inputFilterWasher.value)){
    rank +=1;
  }
  if(newAdd.offer.features.includes(inputfFlterParking.value)){
    rank +=1;
  }
  if(newAdd.offer.features.includes(inputFilterConditioner.value)){
    rank +=1;
  }
  console.log(rank);
  return rank;
};

const compareAdds=(addA,addB)=>{
  const rankA=getAddRank(addA);
  const rankB=getAddRank(addB);
  return rankB-rankA;
}

const ListFragment = document.createDocumentFragment();

const createPopup=(newAdds)=>{
  const pattern =document.querySelector('#card').content.querySelector('.popup');
  newAdds.slice()
.sort(compareAdds)
.slice(0,COUNT_ADDS)
.forEach((newAdd)=>{
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

return ListFragment
}})};

const dataForMap=getNewAdds(createPopup)
//const mapCanvas=document.querySelector('#map-canvas');
//mapCanvas.appendChild(ListFragment);
export{dataForMap};

