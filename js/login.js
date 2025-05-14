console.log('login js connected');

// step-1 : add eventListener to the login button
// step-2 : apply preventDefault() method inside eventListener
// step-3 : get the input field mobile number
document.getElementById('btn-login').addEventListener('click', function(event){
    console.log('login button clicked');
    event.preventDefault();

    const mobileNum = document.getElementById('mobile-num').value;
    console.log(mobileNum);

})