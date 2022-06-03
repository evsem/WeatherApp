const wrapper = document.querySelector(".wrapper"),
  helloWindow = wrapper.querySelector(".helloWindow"),
  inputCity = wrapper.querySelector(".inputCity"),
  weatherWindow = wrapper.querySelector(".weatherWindow"),
  nameCity = wrapper.querySelector(".nameCity"),
  // countryOfCity = wrapper.querySelector('.countryOfCity'),
  temperatureCity = wrapper.querySelector(".temperatureCity")

let api

inputCity.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && inputCity.value !== "") {
    helloWindow.classList.remove("on")
    weatherWindow.classList.add("on")
    requestApi(inputCity.value)
  }
})

function requestApi(city) {
  api = `http://api.weatherapi.com/v1/current.json?key=423d4c20d104417b97e94919222004&q=${city}`
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result))
}

function weatherDetails(info) {
  let country = info.location.country
  let name = info.location.name
  let temperature = info.current.temp_c

  nameCity.innerHTML = name
  // countryOfCity.innerHTML = country
  temperatureCity.innerHTML = temperature
}
