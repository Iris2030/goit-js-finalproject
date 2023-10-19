import { galleryItems } from './gallery-items.js';

// Change code below this line

function galleryMaker(items) {
	return items.map(({ preview, original, description }) => {
		return `<li class="gallery__item">
		<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
		</a>
		</li>
		`	
	}).join("")
}

galleryMaker(galleryItems);

const galleryEl = galleryMaker(galleryItems)

const gallery = document.querySelector("ul.gallery")

gallery.insertAdjacentHTML('afterbegin', galleryEl)

gallery.addEventListener("click", onImgClick)

function onImgClick(event) {
	event.preventDefault()
}

new SimpleLightbox('.gallery a',{captions: true,captionPosition : "bottom",captionDelay: 250,captionType : "attr", captionsData : "alt"}) 

