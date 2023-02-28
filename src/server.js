// const express = require("express") OLD IMPORT SYNTAX
import Express from "express" // NEW IMPORT SYNTAX (We can use it only if we add "type": "module", to package.json)

const server = Express()
const port = 3001

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
