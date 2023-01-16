
const url='https://23.javascript.pages.academy/keksobooking/data';

const getNewAdds=(callBac)=>{
 fetch(url,{method:'Get',credentials: 'same-origin',})
.then((response)=>{
  if(response.ok){
return response.json()}
throw new Error(`${response.status} ${response.statusText}`)
  })
.then((newAdds)=>{callBac(newAdds);})
.catch((err)=>{console.log(err);})
};


export{getNewAdds}
