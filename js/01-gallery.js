import { galleryItems } from './gallery-items.js';

// Change code below this line

function galleryMaker(items) {
    return items.map(({ preview, original, description }) => {
	return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	    <img
	    class="gallery__image"
	    src="${preview}"
	    data-source="${original}"
	    alt="${description}"
	/>
	</a>
	</div>`	
    }).join("") 	
}

const galleryEl = galleryMaker(galleryItems)

const gallery = document.querySelector("div.gallery")

gallery.insertAdjacentHTML('afterbegin', galleryEl)

gallery.addEventListener("click", onImgClick)

function onImgClick(event) {

    event.preventDefault()
	
    createLightbox(event.target.dataset.source) 	
}

let instance = null

function createLightbox(image) {
    instance = basicLightbox.create(`
    <img src = "${image}" width="800" height="600">
    `,{
	onShow: () => {
	    window.addEventListener('keydown', e => onPressEsc(e));
	},
	onClose: () => {
	    window.removeEventListener('keydown', e => onPressEsc(e));
	},
    })    

    instance.show()
}

function onPressEsc(event) {
	
    if(event.code === 'Escape'){
	instance.close()
    }
}

