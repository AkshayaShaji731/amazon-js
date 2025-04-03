import { formatCurrency } from "../script/utils/money.js";

console.log("test suite:formatCurrency");

console.log("covert cents to doller");
 
if(formatCurrency(2098)==='20.98'){
    console.log('passed');
}
else{
    console.log("failed");
}

console.log("it works with 0");

if(formatCurrency(0)==='0.00'){
    console.log('passed');
}
else{
    console.log("failed");
}

console.log("it rounds up to the nearest cent");

if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}
else{
    console.log("failed");
}