const lodash = require('lodash')


const months = ["January" , "February" , "March" , "April" , "May" ,"June" , "July" , "August" ,"September" , "October" , "November" , "December"]
const subArray = lodash.chunk(months, 3);

const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const lastNumbers = lodash.tail(oddNumbers)

// const duplicateNumber = [5,9,5,8,7]
// function union(array){
//     return array.filter((value,index) => array.indexOf(value) === index)
// }

const a = [5,6,9]
const b = [1,2,5,9]
const c = [2,3,4,5]
const d = [10,12,5,9]
const e = [2,15,7,5]
const duplicateNumber = lodash.union(a,b,c,d,e)

const pairs =[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
const newPairs = lodash.fromPairs(pairs);



module.exports.newPairs = newPairs;
module.exports.union=duplicateNumber;
module.exports.lastNumbers=lastNumbers;
module.exports.subArray=subArray;