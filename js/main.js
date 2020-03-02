const exchangeRate = 23208;
let amount = 0;

const currency = prompt("VND or USD");
if (currency === "VND") {
    amount = prompt("How much?")
    if (isNaN(amount) === true) {
        alert("Please type a number!")
        checkType();
    }else {
        if (amount < 0) {
            alert("Please not type a negative number!")
        }else {
            vndToUsd();
        }
    }
}
else if (currency === "USD") {
    amount = prompt("How much?");
    usdToVnd(); 
}


function vndToUsd() {
    result = amount / exchangeRate;
    console.log(result);
}

function usdToVnd() {
    result = amount * exchangeRate;
    console.log(result);
}


function checkType () {
    let number = parseInt(prompt('refill the number'))
    if (number) {
        console.log('this is a number')
    }
    else {
        alert('this input require a number')
        checkType()
    }
}