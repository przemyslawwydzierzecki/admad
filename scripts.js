
async function fetchMovie() {
    
    try {

        const getTitle = document.getElementById("getTitle").value;
        const getType = document.getElementById("getType").value;

        if(getTitle === "") {
            document.getElementById("warning").classList.remove("hidden");
            return;
        }

        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=cbbca44e&t=${getTitle}&=${getType}`;

        const response = await fetch(url);

        const data = await response.json();

        let title =  document.getElementById("title");
        let year = document.getElementById("year");
        let released = document.getElementById("released");
        let runtime = document.getElementById("runtime");
        let actors = document.getElementById("actors");
        let actorsAll = document.getElementById("actorsAll");
        let awards = document.getElementById("awards");
        let awardsAll = document.getElementById("awardsAll");
        let country = document.getElementById("country");
        let director = document.getElementById("director");
        let genre = document.getElementById("genre");
        let language = document.getElementById("language");
        let metascore = document.getElementById("metascore");
        let plot = document.getElementById("plot");
        let plotAll = document.getElementById("plotAll");
        let poster = document.getElementById("poster");
        let production = document.getElementById("production");
        let ratings = document.getElementById("ratings");
        let type = document.getElementById("type");
        let writer = document.getElementById("writer");

        if(!response.ok) {
            throw new Error("Movie not found!");
        }

        title.innerHTML = data.Title;
        year.innerHTML = data.Year;
        released.innerHTML = data.Released;
        runtime.innerHTML = data.Runtime;
        actors.innerHTML = data.Actors;
        actorsAll.innerHTML = data.Actors;
        awards.innerHTML = data.Awards;
        awardsAll.innerHTML = data.Awards;
        country.innerHTML = data.Country;
        director.innerHTML = data.Director;
        genre.innerHTML = data.Genre;
        language.innerHTML = data.Language;
        metascore.innerHTML = data.Metascore;
        plot.innerHTML = data.Plot;
        plotAll.innerHTML = data.Plot;
        poster.innerHTML = '<img src="' + data.Poster + '" alt="">';
        production.innerHTML = data.Production;

        
        let ratingsDataLength = data.Ratings.length;
        
        for (let i = 0; i < ratingsDataLength; i++) {
            let br = document.createElement("br");
            JSON.stringify(ratings.append(data.Ratings[i].Source + ': ' + data.Ratings[i].Value));
            ratings.append(br);
        }

        
        type.innerHTML = data.Type;
        writer.innerHTML = data.Writer;

        document.getElementById("showRatings").classList.remove("hidden");
        document.getElementById("warning").classList.add("hidden");

    }

    catch(error) {
        console.error(error);
    }
}