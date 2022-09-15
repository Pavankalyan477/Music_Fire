const connect = require("./configs/db");
const app = require("./index");


app.listen(4242, async () => {
    await connect();


    console.log("Listening on port 4242");
})