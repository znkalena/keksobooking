import { createPopup} from './popup.js';
import { formsAvilable,formaAd } from './user-form.js';


const adressInput=formaAd.querySelector('#address');
const map=L.map('map-canvas')
.on('load', () => {
    console.log('Карта инициализирована')
    formsAvilable();
  })
.setView({
    lat: 35.42,
    lng: 139.36,
  }, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainIcon = L.icon({
    iconUrl:'leaflet/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainMarker = L.marker(
    {
      lat: 35.42,
      lng: 139.36,
    },
    {
      draggable:true,
      icon:mainIcon,
    },
    );
  mainMarker.addTo(map);
  mainMarker.on('moveend',(evt)=>{
  let coordinates=evt.target.getLatLng();
  adressInput.value=coordinates;
  });

   const points=[
    {
    title:'hotel1',
    lat:35.47,
    lng:139.42,},
    {
    title:'hotel2',
    lat:35.51,
    lng:139.54,},
    {
        title:'hotel3',
        lat:35.38,
        lng:139.56,},
];

  points.forEach((point)=>{
   const {lat,lng}=point;
   const icon = L.icon({
    iconUrl:'leaflet/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
const newMarker=L.marker(
    {
    lat,
    lng,
    },
    {
        draggable:true,
        icon,
      },
);
newMarker.addTo(map).bindPopup(createPopup(),
{
    keepInView: true,
  },
);
 });
/*const createCustomPopup = ({lat,lng})=>{

  const balloonTemplate=document.querySelector('#balloon').content.querySelector('.balloon');
  const balloon=balloonTemplate.cloneNode(true);
  const paragrafBallon=balloon.querySelector('.balloon__lat-lng');
  paragrafBallon.textContent=`координаты:${lat},${lng}`;


  for(fragment of fragments){
    paragrafBallon.appendChild(fragment);
  };

}*/
//шаблонные строки `<section class="balloon">
// <h3 class="balloon__title">${title}</h3>
//  <p class="balloon__lat-lng">Координаты: ${lat}, ${lng}</p>
//  </section>`;
/*data.forEach((item) => {
  const marker = L.marker(
    item.location,
    icon: // тут настройки маркера на карте
  );

  marker
    .addTo(layerForMarkers)
    .bindPopup(createPopup(item));
});*/
