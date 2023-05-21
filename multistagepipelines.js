db.practice.aggregate([
    {$match: {"_id" : ObjectId("6406ad63fc13ae5a40000064")}},
  {
    $facet: {
      "friendsCount": [
        { $project: { friendsCount: { $size: "$friends" } } }
      ],
      "interestsCount": [
        { $project: { interestsCount: { $size: "$interests" } } }
      ],
      "skillsCount": [
        { $project: { skillsCount: { $size: "$skills" } } }
      ]
    }
  }
])