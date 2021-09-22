

const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ff24fd47483e4941944876fe192adba4"
const apiContainer = document.querySelector('.API-container');

async function getGames(){
    
    const response = await fetch(apiUrl);
    const jsonResults = await response.json();
    const games = jsonResults.results;

    console.log(games);

    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        apiContainer.innerHTML += `<h2>${game.name}</h2>  <p> Rating : ${game.rating} Tags: ${game.tags.length}</p>`
        if (i === 7){
            break;
        }
        
    }

}

getGames();