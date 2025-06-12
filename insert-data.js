const dbConnect = require('./mongodb-connection');

const main = async () => {
    let db = await dbConnect();
    const data = await db.insertMany([
        {
            name: 'max 1',
            brand: 'vivo',
            price: 270,
            category: 'mobile'
        },
        {
            name: 'max 2',
            brand: 'vivo',
            price: 280,
            category: 'mobile'
        },
        {
            name: 'max 3',
            brand: 'vivo',
            price: 300,
            category: 'mobile'
        }
    ]);
    console.log(data.acknowledged)
}
main();