db.practice.aggregate([
    {$match: {age : {$gt: 8}}},
    { $group: { _id: "$salary", persons: { $sum: 1 } } },
    { $project: { _id: 0, salary: "$_id", persons: 1 , age : 1} }, 
    { $sort: {_id : 1} },
    {$limit: 4}
]);
    //  age : "$age",
    //  gender : "$gender"
