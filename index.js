(function(){arguments[0](
    require('fs')
)})

(function(fs){

    var indexer = function(dir, config){

        config = config || {};

        if (config.only) {
            return indexer.only(dir, config);
        }

        return indexer.normal(dir, config);
    };

    indexer.normal = function(dir, config){

        config.unless = config.unless || [];

        if (typeof config.unless === 'string') {
            config.unless = [config.unless];
        }

        config.unless = config.unless.concat(['.DS_Store', 'index.js']);

        var result = {};

        var del_suffix_reg = /\..+$/;

        fs.readdirSync(dir)

        // 过滤系统文件和index文件
        .filter(item => config.unless.indexOf(item) < 0)

        // 去除文件后缀名
        .map(item => item.replace(del_suffix_reg, ''))

        .forEach(item => result[item] = require(dir + '/' + item));

        return result;
    };

    indexer.only = function(dir, config){

        var result = {};

        var del_suffix_reg = /\..+$/;

        config.only

        .forEach(item => {

            var key = item.replace(del_suffix_reg, '');

            result[key] = require(dir + '/' + item)
        });

        return result;
    };

    module.exports = indexer;
});