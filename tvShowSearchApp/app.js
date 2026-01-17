const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
	e.preventDefualt();
	const searchTerm = form.elements.query.value;
	const config = { params: {q: searchTerm} }
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	makeImages(res.data);
	form.elements.query.value = '';
})

const makeImages = (shows) => {
	for(let result of shows) {
		if(result.show.image) {
			const img = document.createElement('IMG');
			img.src = result.show.image.meduium;
			document.body.append(img);			
		}
	}
}