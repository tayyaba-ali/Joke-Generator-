const btn = document.getElementById('btn');
// console.log(btn);
let render = document.getElementById('joke');

btn.addEventListener('click', () => {
	// Make a request for a user with a given ID


	try {
		render.innerText = 'updating';
		btn.disabled = true;
		btn.innerText = 'Loading';

		axios
			.get('https://api.chucknorris.io/jokes/random')
			.then(async function (response) {
				let result = await response.data.value;
				btn.disabled = false;
				btn.innerText = 'Tell Me a Joke';

				render.innerText = await result;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				console.log();
			});
		
	} catch (error) {
		console.log(error);
	}



	
});
