
var pokemonRepository = (function () {

    var pokemonList = [];

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100000000000000';

    function loadList() {
		showLoadingMessage();

        return fetch(apiUrl).then(function (promiseResponse){
            return promiseResponse.json();
        }).then(function (json){
            json.results.forEach(function (item) {

                var pokemon = {
                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    detailsUrl: item.url,
                    types: '',
                    height: ''
                };
                
                add(pokemon);

				})
			hideLoadingMessage();
        }).catch(function (){
		   //Error 
		   hideLoadingMessage();
        })
    }

    function loadDetails(pokemon) {
		showLoadingMessage();
		
		return fetch(pokemon.detailsUrl).then(function (response){
            return response.json();
        }).then(function (json){
            pokemon.imageUrl = json.sprites.front_default;
            pokemon.height = json.height;
        }).catch(function (){
		   //Error 
		   hideLoadingMessage();
        })
	}
	
	function showLoadingMessage(){
		let pokemonImage = document.querySelector('.pokemon-sprite');
		pokemonImage.style.display = "none";//hides previous pokemon sprite
        //pokemonImage.src = ``;
		
		let infoContainerObj =  document.querySelector('.pokemon-info-container');
		infoContainerObj.style.overflow = `hidden`;//sets overflow to hidden so scrollbar won't be shown during animation

		let loadingObject = document.querySelector('.loading-message');
		loadingObject.style.display = "block";//displays loading animation
	}

	function hideLoadingMessage(){
		let loadingObject = document.querySelector('.loading-message');
		loadingObject.style.display = "none";//Hides loading animation
		let infoContainerObj =  document.querySelector('.pokemon-info-container');
		infoContainerObj.style.overflow = `auto`;//sets overflow to auto so scrollbar will be shown if needed
	}

    function getAll() {
        return pokemonList;
    }

    function add(item) {

        if (typeof (item) === 'object' && item.hasOwnProperty('name') && item.hasOwnProperty('height') && item.hasOwnProperty('types')) {
            pokemonList.push(item);
            console.log(`${item.name} added to the repository`);
        } else {
            console.log(`this is not a pokemon`);
        }

    }

    function filterByName(searchValue){

        return pokemonList.filter(item => item.name===searchValue);
    }

    function filterByMinimumHeight(searchValue){

        return pokemonList.filter(item => item.height>searchValue);
    }


    function addListItem(pokemon) {

        let pokemonBlock = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
    
        listItem.appendChild(button);
        pokemonBlock.appendChild(listItem);

        addEventListener(button, pokemon);

    }

    function addEventListener(button, pokemon) {
        button.addEventListener('click', function (event) {

            console.log(`Clicked on ${button.innerText}`);
            showDetails(pokemon);
          });

    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
			hideLoadingMessage();

			let pokemonImage = document.querySelector('.pokemon-sprite');
            pokemonImage.src = `${pokemon.imageUrl}`;//displays new pokemon sprite
			pokemonImage.style.display = "block";
			console.log(`<Mandatory Console Log> Pokemon Height: ${pokemon.height}`)
		})
    }



    return {
        addListItem: addListItem,
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        filterByName: filterByName,
        filterByMinimumHeight: filterByMinimumHeight
    }


})();

pokemonRepository.loadList().then(function() {
    console.log("Obtained data");

    var PokemonList = pokemonRepository.getAll()
    
    console.log("Got All");

    PokemonList.forEach(pokemon => {
        console.log("Obtained pokemonList");
        pokemonRepository.addListItem(pokemon);
        
	});
	
});


/* let searchResult = pokemonRepository.filterByName('Blaziken');
searchResult.forEach(pokemon => {

    //document.write(`Found ${pokemon.name} by name and this is his types: ${pokemon.types.join(", ")}<br>`);
}); */


/* searchResult = pokemonRepository.filterByMinimumHeight(0.6);
searchResult.forEach(pokemon => {
    //document.write(`Found ${pokemon.name} by minumum height and this is his height: ${pokemon.height}<br>`);
}); */
