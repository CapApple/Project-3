const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    brand_name: String,
    dosage: [String],
    frequency: String,
});

const Drugs = mongoose.model("Drugs", DrugSchema);
module.exports = Drugs;