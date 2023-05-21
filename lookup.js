//additional data 
db.additionalData.updateOne({_id : ObjectId("646a7c91f0dc864dce393795"}, {$set: {userid :  new ObjectId( "6406ad63fc13ae5a40000064")}})
db.additionalData.insertOne({
    userEmail : "dladley0@washingtonpost.com",
    hairColor : "red",
    "eyeColor" : "Blue",
    "teethNumber" : 32
    
})
//aggregate
db.practice.aggregate([
    { $match: {_id :ObjectId("6406ad63fc13ae5a40000064")} },
   { $lookup: {
           from: "additionalData",
           localField: "_id",
           foreignField: "userid",
           as: "additionalData"
         }
    }
    ])