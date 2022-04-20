

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=experimental")
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

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
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
    })
    .catch(err => {
        // console.log(err)
    })

function getTime() {
    const time = new Date()
    document.getElementById("time").textContent = time.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error ("Oops! Something went wrong. 🫢 Please try again.")
            } return res.json()
        })
        .then(data => {
            console.log(data)
            document.getElementById("weather-info-container").innerHTML = `
            <div class="weather-icon-container"> 
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon" class="weather-icon" id="weather-icon"/>
                <p>${Math.round(data.main.temp)}°</p>
            </div>
            <p><strong>${data.name}</strong></p>
            `
        })
        .catch(err => {console.log("Error! Please try again.")})
})