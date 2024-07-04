import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox

export function renderGallery(images) {
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = images
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <a class="gallery-link" href="${largeImageURL}">
    <img src="${webformatURL}" class="gallery-image" alt="${tags}" loading="lazy"/>
        <div class="inform">
          <p><b>Likes</b>: ${likes}</p>
          <p><b>Views</b>: ${views}</p>
          <p><b>Comments</b>: ${comments}</p>
          <p><b>Downloads</b>: ${downloads}</p>
        </div>
  </a>
  `).join('');

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

