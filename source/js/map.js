import {formsAvilable} from './user-form.js';
import {createPopup} from './createpopup.js';
import { mountAdd } from './mount-adds.js';
import { getData } from './fetch.js';
import { getSimilarList } from './rank-data.js';

const formFilter =document.querySelector('.map__filters');

const RENDER_DELAY = 500;

const map =L.map('map-canvas')
.on('load', () => {
  formsAvilable();
})
  .setView({
    lat: 35.6895,
    lng: 139.692,
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
      lat: 35.679549,
      lng: 139.711748,
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

  const markers =[];
  const getMarkers =(listAdds) =>{
    removeMarkers(markers);
    listAdds.forEach((point) =>{
      const icon = L.icon({
        iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

    const marker=L.marker(
      {
        lat:point.location.lat,
        lng:point.location.lng,
      },
      {
        draggable: true,
      },
      {
        icon,
      }
    );
    marker
    .addTo(map)
    .bindPopup(mountAdd(point),
    {
      keepInView: true,
    }
    );
    markers.push(marker);
    return markers;
  });
  };

  const removeMarkers =(markers) =>{
    markers.forEach(marker =>marker.remove());
  }

  const setFilterClick =(cb) =>{
    formFilter.addEventListener('change',() =>{
      getData(
      (dataAdds)=>{
        const listAdds=getSimilarList(dataAdds);
        cb(listAdds);
    })
  });
  }
  setFilterClick(_.debounce((listAdds) =>getMarkers(listAdds),RENDER_DELAY))

/* getData(
    (dataAdds)=>{
      const listAdds=dataAdds.slice(0,10);
    getMarkers(listAdds);
    }
  );*/


