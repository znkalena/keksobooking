import {createNewAdds } from './create-randomarray.js';
import {formsAvilable} from './user-form.js';
import {createPopup} from './createpopup.js';
import { mountAdd } from './mount-adds.js';


const listAdds = createNewAdds();
console.log(listAdds);

const map =L.map('map-canvas')
.on('load', () => {
  formsAvilable();
})
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 59.96831,
      lng: 30.31748,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  const adressInput =document.querySelector('#address');

  let adress = mainPinMarker.on('moveend', (evt) => {
    adressInput.value = evt.target.getLatLng();
    return adressInput.value;
  });

  mainPinMarker.addTo(map)
  .bindPopup(createPopup(adress));


  listAdds.forEach((point) =>{
    const icon = L.icon({
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

  const marker=L.marker(
    {
      lat:point.location.x,
      lng:point.location.y,
    },
    {
      icon,
    }
  );

  marker
  .addTo(map)
  .bindPopup(mountAdd(point));
});



  //mainPinMarker.remove();
