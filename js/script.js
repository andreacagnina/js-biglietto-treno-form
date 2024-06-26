let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let km = document.getElementById('km').value;
    console.log(km)
    let age = document.getElementById('age').value;
    console.log(age)
    let price = 0.21 * km
    console.log(price)
})
