let axios = require('axios')

let instance = axios.create({
    // baseURL: "https://www.yjxyjx.club"
    baseURL:"http://www.yjxyjx.club",
    timout:2000
})

module.exports = instance
