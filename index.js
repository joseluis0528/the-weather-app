function fetchData(city) {
    const apiKey = 'c364d9671c097b51f7d4c53a27ed9951';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then(responce => responce.json())
    .then(data => console.log(data))
}