var indexer = require('../../index');
module.exports = indexer(__dirname, {
    unless: ['a.js', 'd.js']
});