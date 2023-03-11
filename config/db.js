import mongoose from 'mongoose'
const  MONGO_URL = 'mongodb+srv://raviranjancs21:mongodb0@cluster0.snxcu0n.mongodb.net/community';
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL)
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white)
    } catch(error){
        console.log(`Eroor in MongoDB ${error}1`.bgRed.white)
    }
}
export default connectDB;