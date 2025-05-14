console.log("login js connected");

// step-1 : add eventListener to the login button
// step-2 : apply preventDefault() method inside eventListener
// step-3 : get the input field mobile number and pin number
// step-4 : validate user mobile and pin number
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    console.log("login button clicked");
    event.preventDefault();

    const mobileNum = document.getElementById("mobile-num").value;
    console.log(mobileNum);

    const pinNum = document.getElementById("pin-num").value;
    console.log(pinNum);

    if (mobileNum === "01761248294" && pinNum === "1122") {
      console.log("you have sucessfully logged in");
      window.location.href = "../html/home.html";
    } else {
      console.log("wrong input");
    }
  });
