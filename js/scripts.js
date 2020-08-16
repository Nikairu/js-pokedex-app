var pokemonList = [];

pokemonList[0] = {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']
};
pokemonList[1] = {
    name: 'Blastoise',
    height: 1.6,
    types: ['water']
};
pokemonList[2] = {
    name: 'Blaziken',
    height: 1.9,
    types: ['fire', 'fighting']
};


for ( let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height<1){  
        document.write(pokemonList[i].name+" (height: "+pokemonList[i].height+")<br>")
    }
    else{
        document.write(pokemonList[i].name+" (height: "+pokemonList[i].height+") - Wow that's big!<br>")
    }
}


console.log(pokemonList);