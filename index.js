(function(){arguments[0](
    require('fs')
)})

(function(fs){

    var indexer = function(dir){

        var result = {};

        var del_suffix_reg = /\..+$/;

        fs.readdirSync(dir)

        // 过滤系统文件和index文件
        .filter(item => {
            return item !== '.DS_Store' && item !== 'index.js'
        })

        // 去除文件后缀名
        .map(item => item.replace(del_suffix_reg, ''))

        .forEach(item => result[item] = require(dir + '/' + item));

        return result;
    };

    module.exports = indexer;
});