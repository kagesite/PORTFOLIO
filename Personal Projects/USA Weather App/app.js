const apiKey = "92d2afca94ac46fdabd440e79cae34e5"
const searchInput = document.getElementById('search');

const cityElement = document.getElementById('city');
const tempElemenet = document.getElementById("temp");

const searchBtn = document.getElementById("searchBtn");

const appMessage = document.getElementById("appMessage");

const windSpeedElement = document.getElementById("windSpeed")
const windDirectionElement = document.getElementById("windDirection")

function weatherData() {
    if (searchInput.value === '') {
        appMessage.style.display = 'block'
        appMessage.style.color = '#E32227'
        appMessage.textContent = 'Please enter a city!'
        return;
    }
    
    fetch(`https://api.weatherbit.io/v2.0/current?city=${searchInput.value}&key=${apiKey}&include=minutely&units=I`)
        .then(response => response.json())
        .then((data) => {
            appMessage.style.display = 'none'
            
            const displayElement = document.getElementById("display");
            
            const city = data.data[0].city_name;
            const state = data.data[0].state_code;
            const country = data.data[0].country_code;

            const windSpeed = data.data[0].wind_spd
            const windDirection = data.data[0].wind_cdir_full

            

            if (country !== "US") {
                appMessage.style.display = 'block';
                appMessage.style.color = '#E32227'
                appMessage.textContent = "Please enter a city in the USA"
                // searchInput.value = ""
                return;
            } else {
                displayElement.style.display = 'flex'

                cityElement.innerText = `${city}, ${state}`;
                tempElemenet.innerHTML = `${data.data[0].temp}<span class="degree-symbol">°F</span>`

                windSpeedElement.innerText = `${windSpeed} MPH`;
                windDirectionElement.innerText = `${windDirection.toUpperCase()}`;
                
                
                console.log(data);
                searchInput.value = '';
            }
        }) ;
        
}

searchBtn.addEventListener('click', weatherData);