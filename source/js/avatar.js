const fileChooser=document.querySelector('.ad-form__field input[type=file]');
const previewImg=document.querySelector('#avatar__img');
const resetBtn =document.querySelector('.ad-form__reset');
const imagesChooser =document.querySelector('.ad-form__upload input[type=file]');
const wrapperImages =document.querySelector('.ad-form__photo');
const fileTypes=['jpg','gif','ipeg','png']

fileChooser.addEventListener('change',(evt)=>{
  evt.preventDefault();
  const file=fileChooser.files[0];

  const fileName=file.name.toLowerCase();
  const matches=fileTypes.some((it)=>{
    return fileName.endsWith(it);
  })
  if(matches){
    const reader=new FileReader();
    reader.addEventListener('load',()=>{
      previewImg.src=reader.result;
    });
    reader.readAsDataURL(file);
  }
  resetBtn.addEventListener('click',() =>{
    previewImg.src ='';
  })
});

imagesChooser.addEventListener('change',(evt)=>{
  evt.preventDefault();
  const file=imagesChooser.files[0];
  const fileName=file.name.toLowerCase();
  const matches=fileTypes.some((it)=>{
    return fileName.endsWith(it);
  })
  if(matches){
    const reader=new FileReader();
    reader.addEventListener('load',()=>{
      const picture =document.createElement('img');
      picture.style.width ='100px';
      picture.style.height='100px';
      picture.src=reader.result;
      wrapperImages.appendChild(picture);

      resetBtn.addEventListener('click',() =>{
        picture.src ='';
      })
});
    reader.readAsDataURL(file);
  }

});
