addEventListener('click', function () {
    let km = document.getElementById('km').value;
    console.log(km)
    let age = document.getElementById('age').value;
    console.log(age)
    let price = 0.21 * km;
    console.log(price)

    if (age == 0) {
        let discount = price * 0.2;
        price -= discount;
        console.log(price);

    }
    else if (age == 2) {
        let discount = price * 0.4;
        price -= discount;
        console.log(price);
    }


})
