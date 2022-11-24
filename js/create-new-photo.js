import{returnNumber} from './util.js';
import{messages,names,descriptions, numberForId} from './data.js';

const countPhotos=25;
let i =0;
let j=0;

const getRandomArrayElement=(elements)=>{
    return elements[returnNumber(0,elements.length-1)]
    };

const createNewComment=()=>{
  return {
    id:returnNumber(1,200),
    avatar:`img/avatars/user0${returnNumber(0,8)}.png`,
    message:getRandomArrayElement(messages),
    name:getRandomArrayElement(names),
  }
};
const createNewPhoto =()=>{
  return {
    id:numberForId[i++],
    url:`photos/${numberForId[j++]}.jpg`,
    description:getRandomArrayElement(descriptions),
    likes:returnNumber(15,200),
    comments:createNewComment(),
  }
};
const keksoPhotos= new Array(countPhotos).fill(null).map(()=>createNewPhoto());

console.log(keksoPhotos);
