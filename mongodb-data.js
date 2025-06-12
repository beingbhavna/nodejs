
const dbConnect = require('./mongodb-connection');
dbConnect().then((resp) => {
    resp.find().toArray().then((res) => {
        console.log(res)
    });
})
dbConnect();

// const main = async () => {
//     let db = await dbConnect();
//     console.log(await db.find().toArray());
// }

// main();