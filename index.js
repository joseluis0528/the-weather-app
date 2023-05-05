document.addEventListener('DOMContentLoaded', () => {
handleClick()
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
        handleSearchInput()
    })
}

function handleSearchInput() {
    const searchInput = document.querySelector('#search');
    fetchData(searchInput.value);
    searchInput.value = ''
}

function renderData(data) {
    const {name} = data;
    document.querySelector('#city').textContent = `${name}`;
}