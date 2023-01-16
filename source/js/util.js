const returnNumber = (min , max) => {
  if(min<0 || max<0){
    return -1;
  }
  if (max<min){
    [min,max]=[max,min];
  }
    return Math.floor(min+Math.random()*(max-min+1));
};




export{returnNumber};
