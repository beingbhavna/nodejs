const dbConnect = require('./mongodb-connection');

const main = async () => {
    let db = await dbConnect();
    let data = db.deleteOne({
        name: 'm 20'
    });
    console.log(await data);
}
main();