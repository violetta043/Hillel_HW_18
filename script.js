document.getElementById('city').addEventListener('change', function(){
    const selectedCity = this.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`

    fetch(url)
    .then(data => data.json())
    .then(post => {
        const weatherImg = post.weather[0].icon;
        document.querySelector('img').setAttribute('src', `http://openweathermap.org/img/w/${weatherImg}.png`);
        document.querySelector('.temp').textContent = `Temperature: ${post.main.temp}`;
        document.querySelector('.pressure').textContent = `Pressure: ${post.main.pressure}`;
        document.querySelector('.humidity').textContent = `Humidity: ${post.main.humidity}`;
    })
})

