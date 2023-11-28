let price= prompt("enter the price of item");
console.log(price);
let off= prompt("enter the offed price");
console.log(off);
let Discount= off/100-price;
console.log(`Total Discount = ${Discount}`);


let amount = price- Discount;
console.log(`The amount to be paid = ${amount} `);
