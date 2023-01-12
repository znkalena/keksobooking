const fileChooser=document.querySelector('.ad-form__field input[type=file]');
const previewImg=document.querySelector('#avatar__img');
console.log(fileChooser);
const fileTypes=['jpg','gif','ipeg','png']

fileChooser.addEventListener('change',()=>{
  console.log('click')
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
});
