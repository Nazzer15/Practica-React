import mongoose from 'mongoose';
import config from './config'


(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            /*user: config.MONGO_USER,
            pass: config.MONGO_PASSWORD*/
        });
        console.log("Database is connected to:", db.connection.name);
    } catch (error) {
        console.log('Error to connect', error);
    }
})()