import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectTODB = async () => {
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log('MogoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'shared_prompt',
            userNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log('mongoDB Connected');
    } catch (error) {
        console.log(error);
    }
    
}