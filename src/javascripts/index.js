// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import { movies } from './movies.js'
import "bootstrap"

let featuredMovie = document.querySelector('.featured')
for(let m of movies){
    let movieThumbnail = document.getElementById('m' + m.id)
    movieThumbnail.innerHTML = `
        <img src="${m.poster}">
    `
    movieThumbnail.onclick = function(){
        selectMovie(m)
    }
}

function selectMovie(m){
    featuredMovie.innerHTML = `
    <img src="${m.poster}" style="float: left;">
    <h1>${m.title}</h1>
    <p>${m.plot}</p>
    <p><strong>YEAR</strong>: ${m.year}</p>
    <p><strong>RATED</strong>: ${m.rated}</p>
    <p><strong>GENRE</strong>: ${m.genre}</p>
    <p><strong>RATING</strong>: ${m.rating}</p>
    <p><strong>VOTES</strong>: ${m.votes}</p>
    <p><strong>IMBDID</strong>: ${m.imdbID}</p>
    `
}

function searchMovies(event){
    if(event){
        event.preventDefault()
    }

    let input = document.querySelector('[type="search"]').value || ""
    for(let m of movies){
        let movieThumbnail = document.getElementById('m' + m.id)
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            //movieThumbnail.classList.add('hidden')
            movieThumbnail.style.display = 'none'
        }
        else{
            //movieThumbnail.classList.remove('hidden')
            movieThumbnail.style.display = 'block'
        }
    }
}

document.querySelector('button').onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.forms[0].addEventListener('submit', searchMovies, false) 
