const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router()

routes.post('/devs', async (request, response) => {
  const {github_username, techs} = request.body
  const resp = await axios.get(`https://api.github.com/users/${github_username}`)

  const {name = login, avatar_url, bio} = resp.data
  
  const techsArray = techs.split(',').map(tech => tech.trim())

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray
  })
  
  console.log(name, avatar_url, bio)

  return response.json({dev})
})

module.exports = routes
