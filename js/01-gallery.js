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
	
	window.addEventListener("keydown", onPressEsc)    	
}

function createLightbox(image) {
	const instance = basicLightbox.create(`
	<img src = "${image}" width="800" height="600">
	`,)    

	instance.show()
}

function onPressEsc(event) {
	console.log(event);
	
	const lightbox = document.querySelector(".basicLightbox")
	if(event.code === 'Escape' && lightbox){
		lightbox.classList.remove("basicLightbox--visible")
		onModalClosed()
	}
	
	function onModalClosed() {
		window.removeEventListener("keydown", onPressEsc)	
	}
}

//  const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()
