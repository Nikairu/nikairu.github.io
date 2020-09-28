
let pokemonRepository = (function () {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100000000000000';

    function loadList() {
		showLoadingMessage();

        return $.ajax(apiUrl, { dataType: 'json' }).then(function (json){
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
		
		return $.ajax(pokemon.detailsUrl, { dataType: 'json' }).then(function (json){
            pokemon.imageUrl = json.sprites.front_default;
            pokemon.height = json.height;
        }).catch(function (){
		   //Error 
		   hideLoadingMessage();
        })
	}
	
	function showLoadingMessage(){
		$('.pokemon-info-container').css('overflow','hidden');
		$('.loading-message').css('display','block');
	}

	function hideLoadingMessage(){
		$('.loading-message').css('display','none');

		$('.pokemon-info-container').css('overflow','auto');
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
		
		let newElement = $(`<li><button class="pokemon-button">${pokemon.name}</button></li>`);
		$('.pokemon-list').append(newElement);
    
        addEventListener(newElement, pokemon);

    }

    function addEventListener(button, pokemon) {
        button.click( function (event) {

            console.log(`Clicked on ${button.text()}`);
            showDetails(pokemon);
          });

    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
			hideLoadingMessage();

			showModal(pokemon);

			console.log(`<Mandatory Console Log> Pokemon Height: ${pokemon.height}`)
		})
    }

	let modalContainer = $('.modal-container');
 	function showModal(pokemon) {

		$('.modal-container').html(`
		<div class='modal'>
			<button class='modal-close'>Close</button> 
			<h1 class='modal-title'>${pokemon.name}</h1>
			<p class='modal-content'>Height: ${pokemon.height}</p>
			<div class='modal-image-container'>
				<img class='modal-image' src='${pokemon.imageUrl}'></img>
			</div>
		</div>`);

		$('.modal-close').click(hideModal);

		$('.modal-container').addClass('is-visible');

 	}

  	let dialogPromiseReject; // This can be set later, by showDialog

  	function hideModal() {
		$('.modal-container').removeClass('is-visible');

    	if (dialogPromiseReject) {
     	 	dialogPromiseReject();
      		dialogPromiseReject = null;
    	}
	 }
	 
	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && $('.modal-container').hasClass('is-visible')) {
		  hideModal();  
		}
	});

	$('.modal-container').click((e) => {
		// Since this is also triggered when clicking INSIDE the modal
		// We only want to close if the user clicks directly on the overlay
		if (e.target === $('.modal-container')[ 0 ]) {
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