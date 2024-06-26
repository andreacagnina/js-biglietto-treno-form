let btn = document.getElementById('btn');
btn.addEventListener('click', function () {

    let name = document.getElementById('name').value;
    console.log(name)


    let km = document.getElementById('km').value;


    let age = document.getElementById('age').value;


    let price = 0.21 * km;


    if (age == 1) {
        let discount = price * 0.2;
        price -= discount;
        document.getElementById('deal').innerText = `Offerta Young`;


    }
    else if (age == 3) {
        let discount = price * 0.4;
        price -= discount;
        document.getElementById('deal').innerText = `Offerta Senior`;

    }

    else {
        document.getElementById('deal').innerText = `Offerta Standard`;

    }

    document.getElementById('name_passenger').innerHTML = name;
    document.getElementById('message').innerHTML = price.toFixed(2) + ' ' + '&euro;';
    document.getElementById('vagon').innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById('cp').innerHTML = Math.floor(Math.random() * 100000) + 1;


})
