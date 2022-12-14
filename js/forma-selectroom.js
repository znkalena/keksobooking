const selectRooms=document.querySelector('#room_number');
const optionsRooms=selectRooms.querySelectorAll('option');
const selectCapacity=document.querySelector('#capacity');
const optionsCapacity=selectCapacity.querySelectorAll('option');


selectRooms.addEventListener('change',function(){
  if(optionsRooms[0].selected && !(optionsCapacity[0].selected)){
    console.log('выберете 1 комнату');
    selectRooms.setCustomValidity('выберете 1 комнату');
}
else if(optionsRooms[1].selected && (optionsCapacity[2].selected||optionsCapacity[3].selected)){
    selectRooms.setCustomValidity('выберете две или одну комнату');
}
else if(optionsRooms[2].selected&& optionsCapacity[3].selected){
   selectRooms.setCustomValidity('это не для гостей,выберете 3 или 2 или 1комнату');
}else if(optionsRooms[3].selected &&!(optionsCapacity[3].selected)){
selectRooms.setCustomValidity('слишком много комнат');
}
else{selectRooms.setCustomValidity('');}
});
selectCapacity.addEventListener('change',function(){
    if(optionsRooms[0].selected && !(optionsCapacity[0].selected)){
      console.log('выберете 1 комнату');
      selectRooms.setCustomValidity('выберете 1 комнату');
  }
  else if(optionsRooms[1].selected && (optionsCapacity[2].selected||optionsCapacity[3].selected)){
      selectRooms.setCustomValidity('выберете две или одну комнату');
  }
  else if(optionsRooms[2].selected&& optionsCapacity[3].selected){
     selectRooms.setCustomValidity('это не для гостей,выберете 3 или 2 или 1комнату');
  }else if(optionsRooms[3].selected &&!(optionsCapacity[3].selected)){
  selectRooms.setCustomValidity('слишком много комнат');
  }
  else{selectRooms.setCustomValidity('');}
  });
