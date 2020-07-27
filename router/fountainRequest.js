const router = require("@koa/router")()
const fountainRequestController = require("../controller/fountainRequestController")
const { fountainRequestValidator } = require("../dataValidation/dataVal")
const { get, save } = require("../data/fountainRequest.repo.js")
const jwtVerfier = require("../helper/jwtverifier")

router.use(["/gardenData", "/fountainRequest"], jwtVerfier)

router.post("/fountainRequest", fountainRequestValidator, save, fountainRequestController.createFountainRequest)
router.get("/fountainRequest", get, fountainRequestController.getFountainRequest)

module.exports = router
