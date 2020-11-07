const { authJwt } = require("../middlewares");

module.exports = app => {
    const productController = require("../controllers/product.controller.js");

    const router = require("express").Router();

    // Create a new Product
    router.post("/", [authJwt.verifyToken],
        productController.create);

    // Retrieve all Products
    router.get("/", [authJwt.verifyToken],
        productController.findAll);

    // Retrieve all published Products
    router.get("/active", [authJwt.verifyToken],
        productController.findAllActive);

    // Retrieve a single Product with id
    router.get("/:id", [authJwt.verifyToken],
        productController.findOne);

    // Update a Product with id
    router.put("/:id", [authJwt.verifyToken],
        productController.update);

    // Delete a Product with id
    router.delete("/:id", productController.delete);
    [authJwt.verifyToken],

        // Delete all Products
        router.delete("/", [authJwt.verifyToken],
            productController.deleteAll);

    app.use("/api/products", router);
};
