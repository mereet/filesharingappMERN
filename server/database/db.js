import mongoose from 'mongoose';

const DBConnection= async()=>{
    const MONGODB_URI=`mongodb://kumari:kumari@ac-saqc8n2-shard-00-00.mqgwvuj.mongodb.net:27017,ac-saqc8n2-shard-00-01.mqgwvuj.mongodb.net:27017,ac-saqc8n2-shard-00-02.mqgwvuj.mongodb.net:27017/?ssl=true&replicaSet=atlas-13zb3v-shard-0&authSource=admin&retryWrites=true&w=majority`;
 try{
    await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
console.log('conneted');
} catch(error){
        ('error while connecting',error.message);
    }
}
export default DBConnection;