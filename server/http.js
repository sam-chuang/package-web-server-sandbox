import http from "0http"
import engine from "find-my-way"

export const { router, server } = http({
  router: engine()
})

export default {
  router,
  server,
}
