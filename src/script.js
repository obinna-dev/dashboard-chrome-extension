

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.querySelector(".image-attribution").innerHTML = `<strong>📸 :</strong> ${data.user.name}`
        console.log(data.urls.regular)

    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://wallpaperaccess.com/full/2972662.png)`
        document.querySelector(".image-attribution").innerHTML = `Oops! Something went wrong 😭`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
        document.getElementById("crypto-info-container").innerHTML = `
        <div class="crypto-name-and-logo-container">   
        <img src="${data.image.small}" class="crypto-logo" id="${data.name}" alt="${data.name}"/>
        <p>${data.name}</p>
        </div>
        <div class="crypto-performance">
            <p><span class="fa fa-chevron-right" aria-hidden="true">&nbsp;</span> ₦ ${data.market_data.current_price.ngn}</p>
            <p><span class="fa fa-arrow-up" aria-hidden="true">&nbsp;</span> ₦ ${data.market_data.high_24h.ngn}</p>
            <p><span class="fa fa-arrow-down" aria-hidden="true">&nbsp;</span> ₦ ${data.market_data.low_24h.ngn}</p>
        </div>
        `
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

const date = new Date()
console.log(date.toLocaleTimeString("en-us", {timeStyle: "short"}))


