import express from 'express'
import pkginfo from '@ma.vu/pkginfo'
import fetch from 'node-fetch'

// controlers
async function getPkgInfo(req, res) {
  const options = [
    'homepage',
    'repository',
    'latest',
    'name',
    'description',
    'version',
    'author',
    'license',
    'devDependencies',
    'dependencies',
  ]
  const name = req.params.name

  if (name) {
    const result = await pkginfo(name, options)
    return res.json(result)
  }
  return res.status(404).send()
}

// routes
function setupPackageRoutes(router) {
  router.get('/', (req, res) => res.send('Hello World!'))
  router.get('/info/:name', getPkgInfo)
}

function setupRoutes(app) {
  const pkgRouter = express.Router()
  setupPackageRoutes(pkgRouter)
  app.use('/package', pkgRouter)
}

export default setupRoutes
