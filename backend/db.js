const mongoose = require('mongoose')
const mongoURI = 'mongodb://Jat1nSood:Iamjatin24@ac-8zphnrg-shard-00-00.zij1f8n.mongodb.net:27017,ac-8zphnrg-shard-00-01.zij1f8n.mongodb.net:27017,ac-8zphnrg-shard-00-02.zij1f8n.mongodb.net:27017/?ssl=true&replicaSet=atlas-10e607-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async() =>{

      await mongoose.connect(mongoURI, {useNewUrlParser: true}, async(err, result) => {

        if(err) console.log("...",err)
        else{
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err, data){
                if(err) console.log(err)

                else {
                    global.food_items = data;
                    console.log(global.food_items)
                }
            })
        }

    });

}



module.exports = mongoDB;