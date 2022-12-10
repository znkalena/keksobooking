import{keksoBook} from './create-new-book.js'

const pattern =document.querySelector('#card').content.querySelector('.popup');
const ListFragment = document.createDocumentFragment();
const newAds=keksoBook;

const renderPopup=()=>{
newAds.forEach((offer) => {
 const clonElement = pattern.cloneNode(true);

 clonElement.querySelector('.popup__title').textContent=offer.offer.title;
 clonElement.querySelector('.popup__text--address').textContent=offer.offer.adress;
 clonElement.querySelector('.popup__text--price').textContent=offer.offer.price;
 clonElement.querySelector('.popup__text--capacity').textContent=`${offer.offer.rooms}комнаты для${offer.offer.guests}гостей`;
 clonElement.querySelector('.popup__text--time').textContent=`Заезд после${offer.offer.checkin},выезд до${offer.offer.checkout}`
 const typeAppartment=clonElement.querySelector('.popup__type');

 if(offer.offer.type==='flat'){
  typeAppartment.textContent='Квартира';
 if(offer.offer.type==='bungalow'){
  typeAppartment.textContent='Бунгало';
 if(offer.offer.type==='house'){
  typeAppartment.textContent='Дом';
 if(offer.offer.type==='palace'){
  typeAppartment.textContent='Дворец';
 }}}}

 const popupFeatures=clonElement.querySelector('.popup__features');
 const popupFeature=popupFeatures.children;
 const offerFeatures=offer.offer.features;
 const isFeatures = (feature) => offerFeatures.some((value) => value == feature);

offerFeatures.forEach((value)=>{
  if(value && offerFeatures.length){
  if(isFeatures(value)){
for(const itemLi of popupFeature){
  if(!itemLi.classList.contains(`popup__feature--${value}`)){
    itemLi.remove;
  }
}
  }
  }else{popupFeature.remove;}
});

clonElement.querySelector('.popup__description').textContent=offer.offer.description;

 const offferPhotos=offer.offer.photos;
 const image=clonElement.querySelector('.popup__photo');
 for(let i=0;i<offferPhotos.length;i++){
  if(i<1){
    image.src=offferPhotos[i];
  }
  else{
    const newImage=image.cloneNode(false);
    newImage.src =offferPhotos[i];
}
 }

clonElement.querySelector('.popup__avatar').src=offer.author.avatar;

ListFragment.appendChild(clonElement);
});

const mapCanvas=document.querySelector('#map-canvas');
mapCanvas.appendChild(ListFragment);

};
renderPopup();
