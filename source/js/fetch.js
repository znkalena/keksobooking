
import { showError } from "./message-error.js";
import { showSuccess } from './message-succes.js';

const url='https://23.javascript.pages.academy/keksobooking';

export const getFetch=(sucсess)=>{
    fetch(`${url}/data`,
  {method:'Get',
  credentials: 'same-origin',
  }
  )
.then((response)=>{
  if(response.ok){
  return response.json();
}
throw new Error(`${response.status} ${response.statusText}`)
  })
.then((dataAdds)=>{
  sucсess(dataAdds);
})
.catch((Error)=>{
  console.log(Error);})
};

export const postFetch =(formData) => {
  fetch(url,{
    method:'POST',
    body:formData,
  }
  )
  .then(()=>{
    showSuccess('форма отправлена');
  })
  .catch(()=>{
    showError('error');
  })
}
