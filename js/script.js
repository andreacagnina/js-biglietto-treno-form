let btn = document.getElementById('btn');
btn.addEventListener('click', function () {

    let km = document.getElementById('km').value;
    console.log(km)

    let age = document.getElementById('age').value;
    console.log(age)

    let price = 0.21 * km;
    console.log(price)

    if (age == 1) {
        let discount = price * 0.2;
        price -= discount;
        console.log(price);

    }
    else if (age == 3) {
        let discount = price * 0.4;
        price -= discount;
        console.log(price);
    }

    document.getElementById('message').innerHTML = price.toFixed(2) + ' ' + '&euro;';
})
