import { router, server } from "./http.js"

router.get("/ok", (request, response) => {
  response.statusCode = 200
  response.end()
})
