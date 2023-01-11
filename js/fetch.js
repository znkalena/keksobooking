const numberAdds=4;
const url='https://23.javascript.pages.academy/keksobooking/data';

const createFetch=()=>{
return fetch(url,{method:'Get',credentials: 'same-origin',})
.then((response)=>{
  if(response.ok){
return response.json()}
throw new Error(`${response.status} ${response.statusText}`)
  })
.then((newAdds)=>{console.log(newAdds.slice(0,numberAdds));})
.catch((err)=>{console.log(err);})
};


export{createFetch}
