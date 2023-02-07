export default fetch(
	'https://run.mocky.io/v3/943567c0-467d-4935-aa2a-ca46e107544d'
)
	.then((res) => res.json())
	.then(({ books }) => {
		return books
	})
