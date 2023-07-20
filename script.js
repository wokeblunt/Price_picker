var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ETH");
var usdt = document.getElementById("USDT");

// var settings = {
//     "async" : true,
//     "scrossDomain" : true,
//     "url" : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false",
//     "method" : "GET",
//     "headers" : {}
// }

// $.ajax(settings).done(function (response){
//     btc.innerHTML = response[0].current_price;
//     eth.innerHTML = response[1].current_price;
//     usdt.innerHTML = response[2].current_price;   
// })

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => {
        btc.innerHTML = data[0].current_price;
        eth.innerHTML = data[1].current_price;
        usdt.innerHTML = data[2].current_price;
    });

// .catch(error => console.log(error));