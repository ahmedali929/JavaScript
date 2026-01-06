const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 1000; i++) {
	const newImg = document.createElement('img');
	newImg.src = `${baseURL}${i}.png`;
	container.appendChild(newImg)	
}