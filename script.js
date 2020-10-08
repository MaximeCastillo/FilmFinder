// APIKEY définie dans apiKey.js

const searchedMovie = "Iron Man"

const URL = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchedMovie}`

const myFunction = () =>
{
    console.log("Texte de myFunction");
}

const searchMovie = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    saveData(data);
}

const saveData = (data) => {
    data.Search.forEach(e => {
        title = e.Tile;
        year = e.year;
        poster = e.Poster;
    });
}
