console.log(`connected index.html to cf.js`);

function calculateBill(billAmount, tipRate) {
    console.log(`running calculateBill`);
    console.log(`Global Bill Var is ${userTotal}`);
    console.log(`Global Tip Var is ${tipAmount}`);

    // let billTotal = 0;
    // const tax = 1.13 / userTotal;
    // console.log(`tax is ${tax}`);
    tipRate = ((billAmount * tipRate) / (100));
    let billTotal = tipRate + billAmount;
    console.log(` The billAmount ${billAmount}`)
    console.log(`The tipRate is ${tipRate}`);
    console.log(`CalculateBill returning billTotal ${billTotal}`);
    return billTotal;
}

let userTotal = 40 //prompt(`Enter your bill: `);
let tipAmount = 20 //prompt(`Tip %: `);

totalBill = calculateBill(userTotal, tipAmount);
alert(`Your total bill is ${totalBill}`);
    




