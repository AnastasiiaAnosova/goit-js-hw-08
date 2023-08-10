import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

SimpleLightbox;

const galleryElement = document.querySelector('.gallery');
const galleryItemsElement = galleryItems.map((image) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img 
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
    />
    </a>
    </li>`;
}).join('');

galleryElement.innerHTML = galleryItemsElement;

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});
