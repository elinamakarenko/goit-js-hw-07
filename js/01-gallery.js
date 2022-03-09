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
gallery.addEventListener('click', event=>
{
    event.preventDefault();
    const currentElement = event.target;
    const currentValue = currentElement.dataset.source;
    if (!currentValue) return;
   modalShow(currentValue);
})

function modalShow(currentValue) {
    const instance = basicLightbox.create(`
    <img src="${currentValue}" width="100%" height="100%">
`, 
{
    onShow: (instance) => {
       window.addEventListener('keydown', event=>{
        if (event.code === 'Escape') {
            instance.close();
          }
       })
    },
    onclose: (instance) => {
       window.removeEventListener('keydown', event=>{
        if (event.code === 'Escape') {
            instance.close();
          }
       })
    }
}
    );
instance.show()
}