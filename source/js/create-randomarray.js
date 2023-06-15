import{returnNumber} from './util.js';
import{DESCRIPTIONS,TYPES,TIMES,FEATURES,TITLES,PHOTOS,COUNT_ADDS} from './data.js';

const minRoom=1;
const maxRoom=6;
const minGest=1;
const maxGest=20;
const minX=59;
const minY=30;
const minNumberForX=90;
const minNumberForY=30;
const maxNumberForX=100;
const maxNumberForY=40;

const getRandomArrayElement=(elements)=>{
    return elements[returnNumber(0,elements.length-1)]
    };


const createObjectLocationX=()=>{
    let x=minX+'.'+returnNumber(minNumberForX,maxNumberForX);
    return x;
};
const createObjectLocationY=()=>{
    let y=minY+'.'+returnNumber(minNumberForY,maxNumberForY);
    return y;

};
export const createNewAdd =()=>{
  let longitude=createObjectLocationY();
  let latitude=createObjectLocationX();
  return {
    author:{
      avatar:`img/avatars/user0${returnNumber(0,8)}.png`
    },
    offer:
    { title:getRandomArrayElement(TITLES),
      address:`${latitude},${longitude}`,
      price:returnNumber(20,500)+'$/ночь',
      type:getRandomArrayElement(TYPES),
      rooms:returnNumber(minRoom,maxRoom),
      guests:returnNumber(minGest,maxGest),
      checkin:getRandomArrayElement(TIMES),
      checkout:getRandomArrayElement(TIMES),
      features:getRandomArrayElement(FEATURES),
      description:getRandomArrayElement(DESCRIPTIONS),
      photos:getRandomArrayElement(PHOTOS),
      },
    location:
    {x:latitude,
      y:longitude,
    },
  }
};
export const createNewAdds =() => new Array(COUNT_ADDS).fill(null).map(()=>createNewAdd());



