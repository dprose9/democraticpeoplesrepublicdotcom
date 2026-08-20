const form = document.getElementById('costform');

form.addEventListener('submit', function (event) {
	
	event.preventDefault();
	
	const formData = new FormData(form);
	
	const name = formData.get('name');
	console.log('Name:', name);
	
	const formProps = Object.fromEntries(formData);
	console.log('All Data:', formProps);
	
	const jsonString = JSON.stringify(formProps);
	console.log('JSON:', jsonString);
});