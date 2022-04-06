function printDate(){
    let date=new Date();  
    let day=date.getDate();  
    let month=date.getMonth()+1;  
    let year=date.getFullYear();  
    return ("<br>Date is: "+day+"/"+month+"/"+year); 
}

function printMonth(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const d = new Date();
        return ("The current month is " + monthNames[d.getMonth()]);
}

function getBatchInfo(){
    const batchName = "Uranium"
    const week = "W3"
    const day = "D1"
    const topic = "the topic for today is Nodejs module system"
    return ( "'" + batchName + "," + week + day + ", " + topic + "'" )
}

module.exports.getBatchInfo=getBatchInfo();
module.exports.printMonth=printMonth();
module.exports.printDate=printDate();