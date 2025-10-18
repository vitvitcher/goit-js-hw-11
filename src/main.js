import { getImagesByQuery } from './js/pixabay-api'
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector(".form")
const prevButton = searchForm.querySelector(".page-scroll-button-prev")
const nextButton = searchForm.querySelector(".page-scroll-button-next")
const pageText = searchForm.querySelector(".page-number")
let currentPageNumber = 1
let savedInput = ""

function clearPageFields() {
    prevButton.style.display = 'none'
    nextButton.style.display = 'none'
    pageText.textContent = ""
}

function makeQuery(formattedInput, pageNumber) {
    clearGallery()
    showLoader()
    getImagesByQuery(formattedInput, pageNumber).then(searchResults => {
        hideLoader()
        if (searchResults.length === 0) {
            iziToast.error({
                color: "",
                title: "Oops!",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topCenter"
            });
            clearPageFields()
            return
        }
        createGallery(searchResults)
        pageText.textContent = `Page ${pageNumber}`

    }).catch(error => {
        iziToast.error({
            color: "",
            title: "Oops!There seems to be an error!",
            message: `${error}`,
            position: "topCenter"
        });
        hideLoader()
        clearPageFields()
    })
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.target
    const searchInput = form.elements["search-text"].value.trim()

    if (searchInput === "") {
        window.alert("The search field cannot be empty!")
        return
    }

    const formattedInput = searchInput.split(" ").join("+")

    form.reset()

    //console.log(formattedInput)
    makeQuery(formattedInput, 1)
    savedInput = formattedInput
    currentPageNumber = 1
    prevButton.style.display = 'inline-block'
    nextButton.style.display = 'inline-block'
})

prevButton.addEventListener("click", event => {
    if (currentPageNumber <= 1) { return }
    makeQuery(savedInput, currentPageNumber - 1)
    currentPageNumber -= 1
})
nextButton.addEventListener("click", event => {
    makeQuery(savedInput, currentPageNumber + 1)
    currentPageNumber += 1
})