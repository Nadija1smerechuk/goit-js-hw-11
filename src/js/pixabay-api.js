import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = "44717269-26bd411e987b6b0139d6ec9c5";
export function getPicturesByQuery(query) {
    
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(res => {
        
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
        })
        .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        });
}