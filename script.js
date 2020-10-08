// APIKEY définie dans apiKey.js

//const searchedMovie = "Iron Man"


const search = (e) => {
    e.preventDefault();
    const searchedMovie = document.getElementById("searchInput").value;
    searchMovie(searchedMovie);
}

const searchMovie = async (searchedMovie) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchedMovie}`);
    const data = await response.json();
    displayData(data.Search);
}

const displayData = (data) => {
    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = "";
    data.forEach(e => {
        moviesDiv.innerHTML += 
        `<div class="card text-center" style="width: 18rem;">
            <img src=${e.Poster} class="card-img-top" alt="Movie's poster here">
            <div class="card-body">
                <h5 class="card-title">${e.Title}</h5>
                <p class="card-text">${e.Year}</p>
                <a id="${e.imdbID}" href="#" class="btn btn-primary">Read More</a>
            </div>
        </div>`;
        console.log(e.imdbID);
        addModal(e);
        document.getElementById(`${e.imdbID}`).addEventListener("click", displayMore);
    });
};

const addModal = (e) => {
    console.log("Fonction ajout modal");
    console.log("e :", e);
}

const displayMore = (e) => {
    //e.preventDefault();
    console.log("Fonction displayMore");
}

document.getElementById('submitBtn').addEventListener("click", search);


//http://www.omdbapi.com/?apikey=ceec6004&i=tt0112818
