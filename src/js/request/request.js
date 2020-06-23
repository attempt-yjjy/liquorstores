let instance = require('./base.js')

exports.get = function(url){
    return instance.get(url)
}

exports.post = function(url,data){
    return instance.post(url,data,{
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
}
