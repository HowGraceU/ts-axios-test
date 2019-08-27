import axios from '../../src/index'

axios({
	method: 'get',
	url: '/simple/get',
	params: {
		a: 1,
		b: 2
	}
})

axios({
	method: 'get',
	url: '/base/get',
	params: {
		foo: ['bar', 'baz']
	},
	cb: data => {
		console.log('/base/get?foo[]=bar&foo[]=baz', '/base/get?foo[]=bar&foo[]=baz' === data);
	}
})

axios({
	method: 'get',
	url: '/base/get',
	params: {
		foo: {
			bar: 'baz'
		}
	},
	cb: data => {
		console.log('/base/get?foo=%7B%22bar%22:%22baz%22%7D', '/base/get?foo=%7B%22bar%22:%22baz%22%7D' === data);
	}
})

const date = new Date()

axios({
	method: 'get',
	url: '/base/get',
	params: {
		date
	},
	cb: data => {
		console.log('/base/get?date=2019-04-01T05:55:39.030Z', '/base/get?date=2019-04-01T05:55:39.030Z' === data);
	}
})

axios({
	method: 'get',
	url: '/base/get',
	params: {
		foo: '@:$, '
	},
	cb: data => {
		console.log('/base/get?foo=@:$+', '/base/get?foo=@:$,+' === data);
	}
})

axios({
	method: 'get',
	url: '/base/get',
	params: {
		foo: 'bar',
		baz: null
	},
	cb: data => {
		console.log('/base/get?foo=bar', '/base/get?foo=bar' === data);
	}
})

axios({
	method: 'get',
	url: '/base/get#hash',
	params: {
		foo: 'bar'
	},
	cb: data => {
		console.log('/base/get?foo=bar', '/base/get?foo=bar' === data);
	}
})

axios({
	method: 'get',
	url: '/base/get?foo=bar',
	params: {
		bar: 'baz'
	},
	cb: data => {
		console.log('/base/get?foo=bar&bar=baz', '/base/get?foo=bar&bar=baz' === data);
	}
})