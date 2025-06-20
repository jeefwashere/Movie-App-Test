const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc8acb41310d175d536d3b46b2c3a9ca&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=cc8acb41310d175d536d3b46b2c3a9ca&query=';

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(APILINK);
function returnMovies(APILINK) {
    fetch(APILINK)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');
                
                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                div_card.appendChild(image);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);
                main.appendChild(div_row);
            })
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {

        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});