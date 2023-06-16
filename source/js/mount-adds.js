const template = document.querySelector('#card')
.content
.querySelector('.popup');

export const mountAdd = (point) =>{
  const cardAdd =template.cloneNode(true);
  cardAdd.children[0].src =point.author.avatar;
  cardAdd.children[1].textContent =point.offer.title;
  cardAdd.children[2].textContent =`lat:${point.location.lat} lng:${point.location.lng}`;

  const priceNumber =point.offer.price;
  cardAdd.children[3].textContent =`${priceNumber} ₽/ночь`;
  if(point.offer.type==='palace'){
    cardAdd.children[4].textContent = 'Дворец';
  }else if(point.offer.type==='flat'){
    cardAdd.children[4].textContent = 'Квартира';
  }else if(point.offer.type==='bungalow'){
    cardAdd.children[4].textContent = 'Бунгало';
  }else if(point.offer.type==='house'){
    cardAdd.children[4].textContent = 'Дом';
  }
  cardAdd.children[5].textContent =`${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  cardAdd.children[6].textContent =`Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;

  const featuresArray =point.offer.features;
    if(featuresArray){
    let ul =cardAdd.children[7];
    ul.innerHTML ='';
    featuresArray.forEach((feature) =>{
      let li =document.createElement('li');
      li.className=`popup__feature popup__feature--${feature}`;
      ul.append(li);
    });
  }else{
    let ul =cardAdd.children[7];
    ul.innerHTML ='';
  }

  cardAdd.children[8].textContent = point.offer.description;

  const photosAdresses =point.offer.photos;
  if(photosAdresses){
    cardAdd.children[9].innerHTML = '';
    photosAdresses.forEach((photoAdress) =>{
      const imgAdd=document.createElement('img');
      imgAdd.classList.add('popup__photo');
      imgAdd.style.width ='45px';
      imgAdd.style.height='40px';
      imgAdd.alt ="Фотография жилья";
      imgAdd.src =photoAdress;
      cardAdd.children[9].append(imgAdd);
    });
  }else{
    cardAdd.children[9].innerHTML = '';
  }
  return cardAdd;
};







