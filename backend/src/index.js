import dotenv from 'dotenv'
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";


// database connection directly from index.js
// ;( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error", (error) => {
//         console.log("error: ", error)
//         throw error
//     })
//     app.listen(process.env.PORT, () => {
//         console.log(`app is listening on ${process.env.PORT}`)
//     })
//     }catch(error) {
//         console.error("Error while connecting database", error)
//         throw err

//     }
// })()

dotenv.config({
    path:'./env'
})

connectDB()