import { showError } from "./message-error.js";
import { showSuccess } from './message-succes.js';


const url='https://23.javascript.pages.academy/keksobooking';

export const getData=(sucсess)=>{
    fetch(`${url}/data`,
  {
    method:'Get',
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
.catch(()=>{
  console.log('Error');})
};


export const sendData = (body) => {
    fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  })
    .then((response) => {
      console.log(response.status);
      if (response.ok) {
        showSuccess('good');
        body.delete = 'true';
      } else {
        showError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};








