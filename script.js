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

const searchPreciseMovie = async (movieID) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieID}`);
    const data = await response.json();
    console.log("Je suis dans la fonction searchPreciseMovie");
    return data;
}

const displayData = (data) => {
    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = "";
    data.forEach(e => {
        const preciseData = searchPreciseMovie(e.imdbID);
        console.log("Coucou", preciseData.Released);
        moviesDiv.innerHTML += 
        `<div class="card text-center" style="width: 18rem;">
            <img src=${e.Poster} class="card-img-top" alt="Movie's poster here">
            <div class="card-body">
                <h5 class="card-title">${e.Title}</h5>
                <p class="card-text">${preciseData.Released}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Read More
                </button>
                  
                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">${e.Title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
};

document.getElementById('submitBtn').addEventListener("click", search);
