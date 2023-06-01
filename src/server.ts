import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/university');
        console.log('database conntectd.');
        
        app.listen(config.port, () => console.log(`server is running on port ${config.port}`))
    } catch(err) {
        console.log(err);
    }
}
bootstrap()