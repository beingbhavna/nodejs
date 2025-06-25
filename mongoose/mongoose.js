const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/e-com");
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveDataInDb = async () => {
    const productModel = new mongoose.model('products', productSchema);
    let data = new productModel({ name: "Shoes", price: 1000, brand: "Roadster", category: "Shirts" });
    let result = await data.save();
    console.log(result);
}
// saveDataInDb();


const updateDataInDb = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        {
            name: "max 1"
        },
        {
            $set: { price: 500 }
        }
    )
    console.log(data);
}
// updateDataInDb();

const deleteDataIndb = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({ brand: "Allen Solly" });
    console.log(data);
}
// deleteDataIndb();

const findDataInDb = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find();
    console.log(data);
}
findDataInDb();