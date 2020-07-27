const router = require("@koa/router")()
const { save } = require("../data/gardenData.repo")
const { gardenDataValidator } = require("../dataValidation/dataVal")
const { createGardenData } = require("../controller/gardenDataController")

router.post("/gardenData", gardenDataValidator, save, createGardenData)

module.exports = router