console.log("home add money js connected");
/**
 * step-1 : add eventListener to the add money button and use preventDefault() function
 * to stop page reload after form submit
 * step-2 : get the amount and pin number input from homepage input field
 * step-3 : verify the pin number to add money in the account
 * step-4 : get the available balance from initial stage
 * step-5 : convert available balance and amount input into number data type
 * step-6 : add amount input with available balance for updateBalance
 * step-7 : update the balance in the ui
 */

// s-1
document
  .getElementById("btn-add-money-form")
  .addEventListener("click", function (event) {
    console.log("add money form button clicked");
    event.preventDefault();

    // s-2
    const amountInput = document.getElementById("add-money-amount-input").value;
    console.log(amountInput);

    const pinInput = document.getElementById("add-money-pin-input").value;
    console.log(pinInput);

    // s-3
    if (pinInput === "1122") {
      console.log("you have added money sucessfully into your account");

      // s-4
      const availableBalance =
        document.getElementById("available-balance").innerText;
      console.log(availableBalance);

      // s-5
      const parseAvailableBalance = parseFloat(availableBalance);
      console.log(parseAvailableBalance);

      const parseAmountInput = parseFloat(amountInput);
      console.log(parseAmountInput);

      //   s-6
      const updateBalance = parseAmountInput + parseAvailableBalance;
      console.log(updateBalance);

      //   s-7
      document.getElementById("available-balance").innerText = updateBalance;
    } else {
      console.log("wrong input! try again later");
    }
  });
