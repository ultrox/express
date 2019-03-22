import express from 'express'

async function getPosts(req, res) {
  return res.send('fi')
}

function setupPostRoutes(router) {
  router.get('/', getPosts)
  router.get('/marko', (req, res) => {
    res.send('marko')
  })
}

function setupRoutes(app) {
  const postRouter = express.Router()
  setupPostRoutes(postRouter)
  app.use('/api/posts', postRouter)
}

export default setupRoutes
