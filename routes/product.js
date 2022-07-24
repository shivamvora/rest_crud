const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/", productController.product_create);
router.get("/", productController.product_all);
router.get("/:productId", productController.product_single);
router.put("/:productid", productController.product_update);
router.delete("/:productid", productController.product_delete);

module.exports = router;
