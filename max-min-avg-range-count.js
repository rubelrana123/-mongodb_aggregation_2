db.practice.aggregate([
    {$match: {age : {$gt: 18}}},
    {$match: {gender : "Male"}},
    { $group: { 
        // _id: "$salary",
        _id: null,
        count : {$sum : "$salary"}, // all result sum
        maxSalary : {$max :  "$salary"},
        minSalary : {$min :  "$salary"},
        avgSalary : {$avg :  "$salary"},
        // persons: { $sum: 1 }
        } },
        {
        $project: {count : 1, maxSalary : 1,
        minSalary : 1,
        salaryRange : {$subtract: [ "$maxSalary", "$minSalary" ]}
        }
       }
    // { $project: { _id: 0, salary: "$_id", persons: 1, gender : 1} }, 
    // { $sort: {_id : -1} },
    // {$limit: 4}
]);