import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\nMongoDB connected DBHOST: ${connectionInstance.connection.host} `);
        
    }catch(error){
        console.log("error connecting database", error);
        process.exit(1)

    }
}

export default connectDB;