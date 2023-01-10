const url='https://23.javascript.pages.academy/keksobooking/data';
const createFetch=(onSuccess,onError)=>{
return fetch(url,{method:'Get',credentials: 'same-origin',})
.then((response)=>{
  if(response.ok){
return response.json()}
throw new Error(`${response.status} ${response.statusText}`)
  })
.then((json)=>{onSuccess(json);})
.catch((err)=>{onError(err);})
};
export{createFetch}
