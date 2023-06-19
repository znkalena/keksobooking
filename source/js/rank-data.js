import { COUNT_ADDS } from "./data.js";


  const formFilters=document.querySelector('.map__filters');
  const selectHousingType=formFilters.querySelector('#housing-type');
  const selectHousingPprice=formFilters.querySelector('#housing-price');
  const selectHousingGuests=formFilters.querySelector('#housing-guests');
  const selectHousingRooms =formFilters.querySelector('#housing-rooms');

  const fieldsetMapFeatures=document.querySelector('.map__features');
  const inputFilterWifi=fieldsetMapFeatures.querySelector('#filter-wifi');
  const inputFilterDishwasher=fieldsetMapFeatures.querySelector('#filter-dishwasher');
  const inputfFlterParking=fieldsetMapFeatures.querySelector('#filter-parking');
  const inputFilterWasher=fieldsetMapFeatures.querySelector('#filter-washer');
  const inputFilterElevator=fieldsetMapFeatures.querySelector('#filter-elevator');
  const inputFilterConditioner=fieldsetMapFeatures.querySelector('#filter-conditioner');

const getAddRank=(point) =>{
  let rank=0;
    if(String(point.offer.type)=== selectHousingType.value){
        rank +=2;
    }
    if(point.offer.price == selectHousingPprice.value){
      rank +=2;
    }
    if(point.offer.guests==selectHousingGuests.value){
      rank +=2;
    }
    if(point.offer.rooms==selectHousingRooms.value){
      rank +=2;
    }
    if(point.offer.features){
      if(point.offer.features.includes('wifi') && inputFilterWifi.checked){
        rank +=1;
      }
      if(point.offer.features.includes('dishwasher') && inputFilterDishwasher.checked){
        rank +=1;
      }
      if(point.offer.features.includes('parking') && inputfFlterParking.checked){
        rank +=1;
      }
      if(point.offer.features.includes('washer') && inputFilterWasher.checked){
        rank +=1;
      }
      if(point.offer.features.includes('elevator') && inputFilterElevator.checked){
        rank +=1;
      }
      if(point.offer.features.includes('conditioner') && inputFilterConditioner.checked){
        rank +=1;
      }
    }
      return rank;
  };

const compareAdds=(addA,addB)=>{
  const rankA=getAddRank(addA);
  const rankB=getAddRank(addB);
  return rankB-rankA;
}

export const getSimilarList =(data) =>{
    const similarList= data.slice().sort(compareAdds).slice(0,COUNT_ADDS);
    console.log(similarList);
    return similarList;
  };
