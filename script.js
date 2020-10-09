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

const displayData = async (moviesList) => {
    const moviesDiv = document.getElementById('movies');
    moviesDiv.innerHTML = "";
    for (const movie of moviesList) {
        const preciseResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movie.imdbID}`);
        const preciseMovie = await preciseResponse.json();
        moviesDiv.innerHTML += 
        `<div class="card text-center" style="width: 18rem;">
            <img src=${movie.Poster} class="card-img-top" alt="Movie's poster here">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${preciseMovie.Released}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Read More
                </button>
                  
                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">${movie.Title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            ${preciseMovie.Plot}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    };
};

document.getElementById('submitBtn').addEventListener("click", search);
