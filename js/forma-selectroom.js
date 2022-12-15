const selectRooms=document.querySelector('#room_number');
const optionsRooms=selectRooms.querySelectorAll('option');
const selectCapacity=document.querySelector('#capacity');
const optionsCapacity=selectCapacity.querySelectorAll('option');


selectRooms.addEventListener('change',function(){
    for(let i=0;i<=3;i++){
    optionsCapacity[i].disabled=false;}
  if(optionsRooms[0].selected){
    optionsCapacity[0].disabled=true;
    optionsCapacity[1].disabled=true;
    optionsCapacity[3].disabled=true;
}
else if(optionsRooms[1].selected){
    optionsCapacity[0].disabled=true;
    optionsCapacity[3].disabled=true;
}
else if(optionsRooms[2].selected){
    optionsCapacity[3].disabled=true;
}else if(optionsRooms[3].selected){
    optionsCapacity[1].disabled=true;
    optionsCapacity[2].disabled=true;
    optionsCapacity[0].disabled=true;
}
});

