const dbConnect = require('./mongodb-connection');

const main = async () => {
    let db = await dbConnect();
    let data = db.updateOne(
        {
            name: 'm 30'
        },
        {
            $set: { name: 'm 30 pro' }
        });
    if ((await data).acknowledged) {
        console.log("Data updated succeffully");
    }
}
main();