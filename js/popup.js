import{createFetch} from './fetch.js'


const pattern =document.querySelector('#card').content.querySelector('.popup');
const ListFragment = document.createDocumentFragment();


const createPopup=function(){
  const newAdds=createFetch(
    (newAdd)=>{console.log(newAdd)},(err)=>{console.log(err);}
  );
for(let i=0;i<newAdds.length;i++ ){
  console.log(newAdds[i]);
 const clonElement = pattern.cloneNode(true);
 clonElement.querySelector('.popup__title').textContent=newAdds[i].offer.title;
 clonElement.querySelector('.popup__text--address').textContent=newAdds[i].offer.adress;
 clonElement.querySelector('.popup__text--price').textContent=newAdds[i].offer.price;
 clonElement.querySelector('.popup__text--capacity').textContent=`${newAdds[i].offer.rooms}комнаты для${newAdds[i].offer.guests}гостей`;
 clonElement.querySelector('.popup__text--time').textContent=`Заезд после${newAdds[i].offer.checkin},выезд до${newAdds[i].offer.checkout}`
 const typeAppartment=clonElement.querySelector('.popup__type');

 if(newAdds[i].offer.type==='flat'){
  typeAppartment.textContent='Квартира';
 if(newAdds[i].offer.type==='bungalow'){
  typeAppartment.textContent='Бунгало';
 if(newAdds[i].offer.type==='house'){
  typeAppartment.textContent='Дом';
 if(newAdds[i].offer.type==='palace'){
  typeAppartment.textContent='Дворец';
 }}}}

 const popupFeatures=clonElement.querySelector('.popup__features');
 const popupFeature=popupFeatures.querySelectorAll('.popup__feature');
 const offerFeatures=newAdds[i].offer.features;

  if(offerFeatures.length){
  const modifiers=offerFeatures.map((feature)=>`popup__feature--${feature}`);
  popupFeature.forEach((itemLi)=>{
    const modifier=itemLi.classList[1];
    if(!modifiers.includes(modifier)){
     itemLi.remove();
    }
  });
  }else{popupFeature.remove();}

clonElement.querySelector('.popup__description').textContent=newAdds[i].offer.description;

 const offferPhotos=newAdds[i].offer.photos;
 const image=clonElement.querySelector('.popup__photo');
 for(let i=0;i<offferPhotos.length;i++){
  if(i<1){
    image.src=offferPhotos[i];
  }
  else{
    const newImage=image.cloneNode(false);
    newImage.src =offferPhotos[i];
}

clonElement.querySelector('.popup__avatar').src=newAdds[i].author.avatar;

ListFragment.appendChild(clonElement);
}}};
console.log(ListFragment)
//const mapCanvas=document.querySelector('#map-canvas');
//mapCanvas.appendChild(ListFragment);
export{createPopup};

