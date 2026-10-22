use("GoogleDB")

////Create Operation 1.Insert 2.insertOne 3.insertMany

// db.employee.insert(
//     {
//         empId: 102,
//         Name: "Suresh",
//         salary: "500000",
//         department: "Hr",
//         contact: 982345788,
//         age:25
//     }
// )

// db.employee.insertOne(
//     {
//         empId: 103,
//         Name: "Ritu",
//         salary: 600000,
//         department: "IT",
//         contact: 924374650,
//         age: 20
//     }
// )

// db.employee.insertMany(
//     [
//         {
//         empId: 104,
//         Name: "Reena",
//         salary: 750000,
//         department: "Finance",
//         contact: 924374687,
//         age: 25
//     },
//     {
//         empId: 105,
//         Name: "Rohit",
//         salary: 800000,
//         department: "IT",
//         contact: 924377905,
//         age: 30
//     }

//     ]
// )

/////read operation 1. find() 2. findOne() 

// db.employee.find()
// db.employee.findOne()
//db.employee.find({department: "IT"})
//db.employee.findOne({department: "IT"})

////update operation 1.updateOne() 2.updateMany()

// db.employee.updateOne(
//     {_id: ObjectId('6ad9c082e01e713b3645f4e0')},
//     {
//         $set:{
//             age:30,
//             salary: 800000
//         }
//     }
// )

// db.employee.updateMany(
//     {department: "IT"},
//     {
//         $set:{
//             salary: 950000
//         }
//     }
// )

////delete operation 1.deleteOne() 2.deleteMany()

// db.employee.deleteOne({_id: ObjectId('6ad9c082e01e713b3645f4e0')})

// db.employee.find(
//     {
//         age:{
//             $gte:25
//         }
//     }
// )

// db.employee.find(
//     {
//         department:{
//             $eq: "IT"
//         }
//     }
// )

////AND
// db.employee.find(
//     {department:"IT",age:{$gte:25}}
// )

///OR
// db.employee.find(
//     {
//         $or:[
//             {department:"IT"},
//             {age:{$gt:25}}
//         ]
//     }
//  )