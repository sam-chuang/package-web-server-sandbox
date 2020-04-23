import { router, server } from "./http.js"
import { join, resolve } from "path"

router.use("/:dir", (request, response) => {
  let path = resolve(process.cwd(), `/packages/:dir`)
  response.end(`package: ${path}`)
})
