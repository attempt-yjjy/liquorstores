let instances = require('./base.js')
let instance = instances.instance
let localinstance = instances.localinstance

exports.get = function(url){
    return instance.get(url)
}

exports.post = function(url,data){
    return instance.post(url,data,{
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: [
            data => {
              let params = ''
              for (var index in data) {
                params += index + '=' + JSON.stringify(data[index]) + '&'
              }
              return params
            }
          ]
    })
}

exports.localget = function(url){
    return localinstance.get(url)
}

exports.localpost = function(url,data){
    return localinstance.post(url,data,{
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: [
            data => {
              let params = ''
              for (var index in data) {
                params += index + '=' + JSON.stringify(data[index]) + '&'
              }
              return params
            }
          ]
    })
}