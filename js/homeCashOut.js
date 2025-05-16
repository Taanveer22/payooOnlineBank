
console.log("home cash out js connected");

// s-1
document
    .getElementById("btn-cash-out-form")
    .addEventListener("click", function (event) {
        event.preventDefault()
        console.log('btn cash out form clicked');

        // s-2
        const amountInput = document.getElementById('cash-out-amount-input').value;
        console.log(amountInput);

        const pinInput = document.getElementById('cash-out-pin-input').value;
        console.log(pinInput);

        // s-3
        if (pinInput === '1122') {
            console.log('you have succesfully withdrawn your cash');

            // s-4
            const availableBalance = document.getElementById('available-balance').innerText;
            console.log(availableBalance);

            // s-5
            const parseAvailableBalance = parseFloat(availableBalance);
            console.log(parseAvailableBalance);

            const parseAmountInput = parseFloat(amountInput);
            console.log(parseAmountInput);

            // s-6
            const updateBalance = parseAvailableBalance - parseAmountInput;
            console.log(updateBalance);

            // s-7
            document.getElementById('available-balance').innerText = updateBalance;
            
        } else {
            console.log('wrong input . please try again later');
        }
    });
