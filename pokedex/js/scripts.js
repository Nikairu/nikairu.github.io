
let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100000000000000';

    function loadList() {
		showLoadingMessage();

        return fetch(apiUrl).then(function (promiseResponse){
            return promiseResponse.json();
        }).then(function (json){
            json.results.forEach(function (item) {

                let pokemon = {
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
		//pokemonImage.style.display = "none";//hides previous pokemon sprite
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

			showModal(pokemon);

			//let pokemonImage = document.querySelector('.pokemon-sprite');
            //pokemonImage.src = `${pokemon.imageUrl}`;//displays new pokemon sprite
			//pokemonImage.style.display = "block";
			console.log(`<Mandatory Console Log> Pokemon Height: ${pokemon.height}`)
		})
    }

	let modalContainer = document.querySelector('.modal-container');
 	function showModal(pokemon) {
		modalContainer.innerHTML = '';
		let modal = document.createElement('div');
		modal.classList.add('modal');

		let closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		let titleElement = document.createElement('h1');
		titleElement.classList.add(`modal-title`);
		titleElement.innerText = pokemon.name;

		let contentElement = document.createElement('p');
		contentElement.classList.add(`modal-content`);
		contentElement.innerText = `Height: ${pokemon.height}`;

		let imageContainer = document.createElement('div');
		imageContainer.classList.add(`modal-image-container`);

		let imageElement = document.createElement('img');
		imageElement.classList.add(`modal-image`);
		imageElement.src = `${pokemon.imageUrl}`;

		modal.appendChild(closeButtonElement);
		modal.appendChild(titleElement);
		modal.appendChild(contentElement);
		imageContainer.appendChild(imageElement);
		modal.appendChild(imageContainer);
		modalContainer.appendChild(modal);


		modalContainer.classList.add('is-visible');
 	}

  	let dialogPromiseReject; // This can be set later, by showDialog

  	function hideModal() {
    	let modalContainer = document.querySelector('.modal-container');
    	modalContainer.classList.remove('is-visible');

    	if (dialogPromiseReject) {
     	 	dialogPromiseReject();
      	dialogPromiseReject = null;
    	}
	 }
	 
	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
		  hideModal();  
		}
	  });

	modalContainer.addEventListener('click', (e) => {
		// Since this is also triggered when clicking INSIDE the modal
		// We only want to close if the user clicks directly on the overlay
		let target = e.target;
		if (target === modalContainer) {
		  hideModal();
		}
	});



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

    let PokemonList = pokemonRepository.getAll()
    
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