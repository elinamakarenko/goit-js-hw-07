import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
galleryAdd(galleryItems);
function galleryAdd (galleryArray) {
    const markup = galleryArray.map(image=> 
        `<div class="gallery__item">
  <a class="gallery__link" 
  href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`).join('');
gallery.insertAdjacentHTML('beforeend', markup);
}
gallery.addEventListener('click', onImgClick);
    const instance = basicLightbox.create(`
    <img class ="modal-img" src="">`, 
{
    onShow: (instance) => {
       window.addEventListener('keydown', onEskClick);
    },
  },
  {
    onclose: (instance) => {
       window.removeEventListener('keydown', onEskClick);
    }
}
    );
function onImgClick(event){
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
           return;
         }
         instance.element().querySelector('.modal-img').src = 
         event.target.dataset.source;
         console.log(instance.element().querySelector('.modal-img').src);
         instance.show();
}
function onEskClick(event){
  if (event.key === 'Escape') {
           instance.close();
           return;
         }
}