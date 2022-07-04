const API_KEY = "a4ad561941ec88e94ca7e0048a03f164";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      const temperature = document.querySelector("#weather span:first-of-type");
      const weathersign = document.querySelector("#weather img");
      const city = document.querySelector("#weather span:last-of-type");
      const img_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weathersign.classList.remove("hidden");
      weathersign.src = img_url;
      city.innerHTML = `${data.name}-si`;
      temperature.innerHTML = `${Math.round(data.main.temp)}ºC`;
    })
  );
}
function onGeoError() {
  console.log("error");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
