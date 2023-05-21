db.practice.aggregate([
    { $match : { gender : 'Male' } },
 { $addFields : 
        { salary:
          {$toInt:  { $floor:
              { $multiply: [ { $rand: {} }, 100 ] }
           }}
        }
 },
//   {$project: {salary : 1}},
//   {$out : "salary_with_practice"}
 {$merge : "practice"}
      
   ])