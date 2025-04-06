const redis = require('redis');
const client = redis.createClient();

main();

async function main() {

    await client.on('error', err => console.log('Redis client error', err));
    await client.connect();

    await demo1();

    await client.disconnect();

};

async function demo1() {
    
    let result;

    client.SET("company", "cubix");

    result = await client.GET("company");

    console.log(result);

}