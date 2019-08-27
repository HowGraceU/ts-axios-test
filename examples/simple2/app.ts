import axios from '../../src/index'

axios({
	method: 'post',
	url: '/base/post',
	data: 'asd'
})

axios({
	method: 'post',
	url: '/base/buffer',
	data: ['asd']
})

axios({
	method: 'post',
	url: '/base/post',
	headers: {
		'content-type': 'application/json;charset=utf-8'
	},
	data: {
		a: 1,
		b: 2
	}
})

axios({
	method: 'post',
	url: '/base/post',
	data: {
		a: 1,
		b: 2
	}
})

axios({
	method: 'post',
	url: '/base/post',
	responseType: 'json',
	data: {
		a: 3,
		b: 4
	}
}).then((res) => {
	console.log(res)
})

const arr = new Int32Array([21, 31])

axios({
	method: 'post',
	url: '/base/buffer',
	data: arr
})
