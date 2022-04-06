const lodash = require('lodash')


const months = ["January" , "February" , "March" , "April" , "May" ,"June" , "July" , "August" ,"September" , "October" , "November" , "December"]
const subArray = lodash.chunk(months, 3);

const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const lastNumbers = lodash.tail(oddNumbers)

module.exports.lastNumbers=lastNumbers;
module.exports.subArray=subArray;