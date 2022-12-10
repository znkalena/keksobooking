import{returnNumber} from './util.js';
import{descriptions,type,time,features,title,photos,} from './data.js';

const countAd =10;
const minRoom=1;
const maxRoom=6;
const minGest=1;
const maxGest=20;
const minX=35;
const minY=139;
const minNumberForX=65;
const minNumberForY=70;
const maxNumberForX=70;
const maxNumberForY=80;

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
const createNewAd =()=>{
  let longitude=createObjectLocationY();
  let latitude=createObjectLocationX();
  return {
    author:{
      avatar:`img/avatars/user0${returnNumber(0,8)}.png`
    },
    offer:
    { title:getRandomArrayElement(title),
      address:`${latitude},${longitude}`,
      price:returnNumber(20,500)+'$/ночь',
      type:getRandomArrayElement(type),
      rooms:returnNumber(minRoom,maxRoom),
      guests:returnNumber(minGest,maxGest),
      checkin:getRandomArrayElement(time),
      checkout:getRandomArrayElement(time),
      features:getRandomArrayElement(features).split(','),
      description:getRandomArrayElement(descriptions),
      photos:getRandomArrayElement(photos).split(','),
      },
    location:
    {x:latitude,
     y:longitude,
    },
  }
};
const keksoBook= new Array(countAd).fill(null).map(()=>createNewAd());

console.log(keksoBook);
export{keksoBook};
