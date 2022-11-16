//ip+location data
const ipInfo = document.querySelector('.ip-info-subtitle--ip');
const locationInfo = document.querySelector('.ip-info-subtitle--location');
const timezoneInfo = document.querySelector('.ip-info-subtitle--timezone');
const ispInfo = document.querySelector('.ip-info-subtitle--isp');
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_pON5sgYH2XQPeeL62Ev8JWAcbdnjs&ipAddress`

const getSomeData = function (z) {
    fetch(z)
        .then(response => response.json())
        .then(data =>
        (ispInfo.innerHTML = data.isp,
            locationInfo.innerHTML = data.location.region,
            timezoneInfo.innerHTML = data.location.timezone,
            ipInfo.innerHTML = data.ip,
            console.log(data.location),
            marker.setLatLng([data.location.lat, data.location.lng]).update().addTo(map),
            map.setView([data.location.lat, data.location.lng], 10)))
}

getSomeData(url)

//data update from input
const input = document.querySelector('.ip-tracker__input');
const inputBtn = document.querySelector('.ip-tracker__button');

inputBtn.addEventListener('click', function (x) {
    const url2 = `https://geo.ipify.org/api/v2/country,city?apiKey=at_pON5sgYH2XQPeeL62Ev8JWAcbdnjs&ipAddress=${input.value}`
    getSomeData(url2)
})

//map
const map = L.map('map').setView([0, 0], 2)
const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
const iconCustom = L.icon({
    iconUrl:    './images/icon-location.svg',
    iconSize:   [30, 44],
    iconAnchor: [22, 34],
    shadowSize:  [30, 44]
})
let marker = new L.Marker([17.385044, 78.486671],{icon:iconCustom}).bindPopup('What you are looking for is here. <br>I hope....')
.openPopup();





