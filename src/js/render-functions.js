
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader")
const gallery = document.querySelector(".gallery")
let lightBoxGallery = new SimpleLightbox('.gallery li a', { captionsData: 'alt', captionscaptionDelay: 250 });

function galeryMarkup() {

}

export function createGallery(images) {
    gallery.innerHTML = images.map(image => {
        return `<li class="gallery-item">
        <a href=${image.largeImageURL}> <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
          <ul class="image-stats-list">
            <li>
              <h3>Likes</h3>
              <p>${image.likes}</p>
            </li>
            <li>
              <h3>Views</h3>
              <p>${image.views}</p>
            </li>
            <li>
              <h3>Comments</h3>
              <p>${image.comments}</p>
            </li>
            <li>
              <h3>Downloads</h3>
              <p>${image.downloads}</p>
            </li>
          </ul>

        </a>
      </li>`
    }).join("")

    lightBoxGallery.refresh()
}

export function clearGallery() {
    gallery.innerHTML = ""
}

export function showLoader() {
    loader.style.display = 'inline-block'
}
export function hideLoader() {
    loader.style.display = 'none'
}