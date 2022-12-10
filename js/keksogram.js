import{returnNumber} from './util.js';

const messages=['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
 ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
 ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?',
];
const names=[
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Helena',
];
const descriptions =[
  'фото1',
  'фото2',
  'фото3',
  'фото4',
];
const numberForId=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25',];
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
