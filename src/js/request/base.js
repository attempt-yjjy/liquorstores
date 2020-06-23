let axios = require('axios')

let instance = axios.create({
    // baseURL: "https://www.yjxyjx.club"
    baseURL:"http://www.yjxyjx.club:8011",
    timout:2000
})

let localinstance = axios.create({
    baseURL:'http://localhost:8011',
    timout:2000
})

exports.instance = instance

exports.localinstance = localinstance
