# node-indexer

I have a problem like that, everytime i want to require a folder's all javascript files and must write like this at index.js.

```javascript
    var a = require('./a');
	var b = require('./b');
	var c = require('./c');
	var d = require('./d');
	var e = require('./e');
	var f = require('./f');
	var g = require('./g');
	
	module.exports = { a, b, c, d, e, f, g };
```

And, now, i don't need it.

```javascript
	var indexer = require('node-indexer');
	module.exports = indexer(__dirname);

	// Equal to: module.exports = { a, b, c, d, e, f, g }
```

## use npm

```javascript
    npm install node-indexer
```

## Other

Don't use some files ！

```javascript
	var indexer = require('node-indexer');
	module.exports = indexer(__dirname, {
		unless: [ 'a.js', 'd.js' ]
	});

	// Equal to: module.exports = { c, d, e, f, g }
```

Only use some files !

```javascript
	var indexer = require('node-indexer');
	module.exports = indexer(__dirname, {
		only: [ 'a.js', 'd.js' ]
	});

	// Equal to: module.exports = { a, d }
```

Only use file type !

```javascript
	var indexer = require('node-indexer');
	module.exports = indexer.file(__dirname);
```

Only use folder type !

```javascript
	var indexer = require('node-indexer');
	module.exports = indexer.folder(__dirname);
```

## Examples

Enter ’examples‘ folder and run

```javascript
	node result.js
```