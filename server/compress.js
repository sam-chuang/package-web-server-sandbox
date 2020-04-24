import { router, server } from "./http.js"
import { join, resolve } from "path"
import archiver from "archiver"

const root = process.cwd()
const Packages = "packages"

router.on("GET", `/${Packages}/:folder`, async (request, response, params) => {
  let folder = params.folder
  let filename = `${folder}.tar`
  setContentDispositionHeader(filename, response)

  let path = resolve(root, `./${Packages}/${folder}`)
  archive(path, response)
})


router.on("GET", `/${Packages}/@:scope/:folder`, (request, response, params) => {
  let scope = params.scope
  let folder = params.folder
  let filename = `${folder}.tar`
  setContentDispositionHeader(filename, response)

  let path = resolve(root, `./${Packages}/@${scope}/${folder}`)
  archive(path, response)
})

const setContentDispositionHeader = (filename, response) =>response.setHeader("Content-Disposition", `attachment; filename=${filename}`)

const archive = (path, response) => {
  let archive = archiver('tar', {
  })
  archive.pipe(response)

  archive.directory(path, 'package')
  archive.finalize()
}