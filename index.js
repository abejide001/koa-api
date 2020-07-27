const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const fountainRquestRoute = require("./router/fountainRequest")
const gardenDataRoute = require("./router/gardenData")
const app = new Koa()

app.use(bodyParser())
app.use(fountainRquestRoute.routes())
app.use(gardenDataRoute.routes())

app.listen(5000)