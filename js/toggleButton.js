console.log('toggle button connected');

document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    console.log('btn show cash out clicked');
    // form cash out show
    document.getElementById('form-cash-out').classList.remove('hidden');
    // form add money hide
    document.getElementById('form-add-money').classList.add('hidden');
})

document.getElementById('btn-show-add-money').addEventListener('click', function () {
    console.log('btn show add money clicked');
    // form add money show
    document.getElementById('form-add-money').classList.remove('hidden');
    // form cash out hide
    document.getElementById('form-cash-out').classList.add('hidden');
})