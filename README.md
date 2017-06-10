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
```

## use npm

```javascript
    npm install node-indexer
```
