

const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ff24fd47483e4941944876fe192adba4"
const apiContainer = document.querySelector('.API-container');
const loader = document.querySelector('.lds-roller');

async function getGames(){

    try{
        const response = await fetch(apiUrl);
        const jsonResults = await response.json();
        const games = jsonResults.results;

        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            loader.style.display='none';
            apiContainer.innerHTML += `<div class=games><h2>${game.name}</h2>   <p> <span>Rating: </span>${game.rating} <span>Tags:</span> ${game.tags.length}</p></div>`
            if (i === 7){
                break;
            }
        } 
    } catch (error){
        loader.style.display='none';
        apiContainer.innerHTML = `We're sorry, the error "${error.name}"" occurred. <br>
        <button>Report error</button>`;
    }
}

getGames();