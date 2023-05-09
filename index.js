document.addEventListener('DOMContentLoaded', () => {
handleClick();
handleKeydown();
getDate();
})

function fetchData(city, zipcode) {
    const apiKey = 'c364d9671c097b51f7d4c53a27ed9951';
    if(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then(responce => responce.json())
        .then(data => renderData(data))
    } else if(zipcode) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=imperial`)
        .then(responce => responce.json())
        .then(data => renderData(data))
    }
}

function handleClick() {
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', () => {
        handleSearchInput();
    })
}

function handleKeydown() {
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            handleSearchInput();
        }
    })
}

function handleSearchInput() {
    const searchInput = document.querySelector('#search');
    fetchData(searchInput.value);
    searchInput.value = '';
}

function renderData(data) {
    const {name} = data;
    const {temp, temp_min, temp_max, humidity} = data.main;
    const {description, icon} = data.weather[0];
    const {speed} = data.wind;
    
    document.querySelector('#city').textContent = name;
    document.querySelector('#temperature').textContent = Math.round(temp) + '°';
    document.querySelector('#lowest').textContent = 'H: ' + Math.round(temp_min) + '°';
    document.querySelector('#highest').textContent = 'L: ' + Math.round(temp_max) + '°';
    document.querySelector('#description').textContent = description;
    document.querySelector('#icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('#humidity').textContent = 'Humidity: ' + humidity + '%';
    document.querySelector('#wind').textContent = 'Wind: ' + Math.round(speed) + ' mph';
}

function getDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    document.querySelector('#date').textContent = `${day}/${month}/${year}`
}