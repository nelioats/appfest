import mongoose from "mongoose"

export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://nelioats:G7ZPagyIs2v7wcGC@cluster0.djmlzkv.mongodb.net/app-fest');
        console.log('Connect database success');
        
    } catch (error) {
        console.log("🚀 file: database.ts:5 ~ connect ~ error", error)
    }
}