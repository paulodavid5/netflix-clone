const api = "api_key=9c01bc51e3095c9d889d05989bec36d1";
const base_url = "https://api.themoviedb.org/3";
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
const img_url = "https://image.tmdb.org/t/p/original/";

const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        //every refresh change movie
        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
        var banner = document.getElementById("banner");
        var banner__title = document.getElementById("banner__title");
        var banner__description = document.getElementById("banner__description");
        banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
        banner__title.innerText = setMovie.name;
        banner__description.innerText = truncate(setMovie.overview, 150);
    })

//movies rows

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge1";
            var s = movie.name.replace(/\s+/g, "");
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//trending


fetch(requests.fetchPopular)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        row.classList.add("popularrow");
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Trending Now";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//top rated


fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Top Rated";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Action";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//horror

fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Horror";
        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);
        data.results.forEach(movie => {
            const poster = document.createElement("img");
            poster.className = "row__poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });