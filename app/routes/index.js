var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");
/* GET users listing. */
router.get("/", indexController.home);
router.get("/products", indexController.getProducts);
router.get("/products/:id", indexController.getProduct);
router.post("/products", indexController.add);
router.put("/products/:id", indexController.update);
router.delete("/products/:id", indexController.remove);
module.exports = router;