const API_LINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2c4dc132cc0bfa3c34fd700f236cbcd';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

const main = document.getElementById('main');

getMovies(API_LINK);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
    movies.forEach(movie => {
        // console.log(movie.title);
        // console.log(movie.vote_average);
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie');
        movieItem.innerHTML = `
            <img src="${IMAGE_PATH + movie.poster_path }" alt="">
            <div class="details">
                <h2>${movie.title}</h2>
                <span>${movie.vote_average}</span>
            </div>
        `;
        main.appendChild(movieItem);
    });
    
}