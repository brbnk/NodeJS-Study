// Acts like a private variable
const canadianDollar = 0.91

function roundTwo(amount) { 
    return Math.round(amount * 100) / 100;
} 

// Only these variables can be acessed by the application
exports.canadianToUS = canadian => roundTwo(canadian * canadianDollar)
exports.USToCanadian = us => roundTwo(us / canadianDollar)