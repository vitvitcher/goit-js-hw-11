import axios from "axios";



const pixUrl = "https://pixabay.com/api/"
const pixKey = "52768941-bbaed3abbd2034f32756ad176"
const pixImgType = "photo"
const pixOrientation = "horizontal"
const pixSafeSrch = "true"

export function getImagesByQuery(query, pageNumber) {

    return axios.get(pixUrl, {
        params: {
            key: pixKey,
            q: query,
            image_type: pixImgType,
            orientation: pixOrientation,
            safesearch: pixSafeSrch,
            per_page: 21,
            page: pageNumber
        }
    }).then(value => {
        return Promise.resolve(value.data.hits)
    })
}

