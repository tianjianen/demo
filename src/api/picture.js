const URL = 'https://picsum.photos/400/800/?image='

export function getPicture() {

	let data = {
		image: parseInt(Math.random()*1000 +20)
	}

	return `${URL}${data.image}`

}