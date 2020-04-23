import { server } from "./http.js"
import "./compress.js"
import "./ok.js"

const DefaultPort = 3000
const Port = process.env.PORT || DefaultPort

server.listen(Port, () => {
  console.log(`listen on ${Port}`)
})
