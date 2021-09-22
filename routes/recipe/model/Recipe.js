const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeType: {
        type: String,
    },
    recipeDate: {
        type: Number,
    },
    recipePrice: {
        type: Number,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("recipe", recipeSchema)