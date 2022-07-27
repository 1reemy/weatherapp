const display = document.querySelector('.weather')
const update = document.querySelector('.update')
const entry = document.querySelector('.entry')
const city = document.createElement('h2')
const userInput = document.createElement('input')
const enter = document.createElement('button')
const val = document.createElement('button')

const temp = document.createElement('h3')
const spot = document.createElement('h3')
const country = document.createElement('h3')
const atmosphere = document.createElement('h3')

city.textContent = 'Enter City:'
enter.textContent = 'Get Weather'
val.textContent = 'C/F'

entry.appendChild(city)
entry.appendChild(userInput)
entry.appendChild(enter)
entry.appendChild(val)

update.appendChild(spot)
update.appendChild(country)
update.appendChild(atmosphere)
update.appendChild(temp)

display.appendChild(entry)
display.appendChild(update)

enter.addEventListener('click', async () => {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&APPID=223dcddf31b80c7e08b47db79fb5d67e')
  const forecast = await response.json()
  const report = forecast.main.temp
  const area = forecast.name
  const place = forecast.sys.country
  const sky = forecast.weather[0].description
  console.log(report)
  const degrees = (report - 273.15).toFixed(2) + ' ' + 'C'
  const fahren = (((report - 273.15) * 9 / 5) + 32).toFixed(2) + ' ' + 'F'
  temp.textContent = degrees
  spot.textContent = area
  country.textContent = place
  atmosphere.textContent = sky
  val.addEventListener('click', () => {
    if (temp.textContent === degrees) {
      temp.textContent = fahren
    } else if (temp.textContent === fahren) {
      temp.textContent = degrees
    }
  })
}
)
