const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const productos = [
	{	
		id: 1,
		name: 'Coke',
		price: 250,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	},{
		id: 2,
		name: 'Pizza',
		price: 350,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	},{
		id: 3,
		name: 'Sprite',
		price: 10,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	},{
		id: 4,
		name: 'Fanta',
		price: 1,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	},{
		id: 5,
		name: 'Papas',
		price: 100,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	},{
		id: 6,
		name: 'Milanesa',
		price: 150,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	},{
		id: 7,
		name: 'Torta',
		price: 349,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum a ligula quis posuere. Donec tortor neque, feugiat ac lobortis in, mollis eu urna. In pulvinar, elit in gravida iaculis, tortor ipsum hendrerit massa, eu malesuada velit diam eget odio. Donec dictum convallis odio, malesuada rutrum nisi pretium nec. Pellentesque sed rutrum risus, eu elementum justo. Vestibulum vitae turpis quis nisl commodo aliquet in vitae erat.',
		image: 'http://via.placeholder.com/350x450'
	}
	

	];


app.use(express.static(path.join(__dirname, 'dist')));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/api/productos', (req, res) => {
	return res.send(productos);

});

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
	console.log('Node Server Listening on... ' + port);
});