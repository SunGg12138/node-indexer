var indexer = require('../../index');
module.exports = indexer(__dirname, {
	only: ['a.js', 'd.js'] 
});