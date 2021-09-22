var express = require("express");
var router = express.Router();
var recipeController = require("./controller/recipeController")

// GET home page
router.get("/", function (req, res) {
    recipeController.getAllRecipes({}, function (err, foundRecipe) {
        if (err) {
            res
                .status(500)
                .json({
                    message: "Something went wrong",
                    error: err.message
                })
        } else {
            res.json({
                message: "Sucess",
                foundRecipe: foundRecipe
            })
        }
    })
})

router.post("/create-recipe", function (req, res) {
    recipeController.createRecipe(req.body, function (err, savedRecipe) {
        if (err) {
            res.status(500).json({
                message: "Something went wrong",
                error: err.message
            })
        } else {
            res.json({
                message: "Sucess",
                savedRecipe
            })
        }
    })
})

router.delete("/delete-recipe-by-id/:id", function (req, res) {
    recipeController.deleteRecipe(req.params.id, function (err, deletedRecipe) {
        if (err) {
            res.status(500).json({
                message: "something went wrong",
                error: err.message,
            })
        } else {
            res.json({
                message: "sucess",
                deletedRecipe
            })
        }
    })
})

router.put("/update-recipe-by-id/:id", function (req, res) {

    recipeController.updateRecipeById(req.params.id, req.body, function (err, updatedRecipe) {
        if (err) {
            res.status(500)
                .json({
                    message: "Something went wrong",
                    error: err.message
                })
        } else {
            res.json({
                message: "success",
                updatedRecipe
            })
        }
    })
})





module.exports = router;