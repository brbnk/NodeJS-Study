// Same as: "import * from './currency'"
const currency = require('./currency')

console.log(`50 Canadian dollars equals this amount of US Dollars: ${currency.canadianToUS(50)}`)
console.log(`30 US dollars equals this amount of Canadian Dollars: ${currency.USToCanadian(30)}`)