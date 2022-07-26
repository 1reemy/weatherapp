const display = document.querySelector('.weather')
const city = document.createElement('h2')
const userInput = document.createElement('input')
const enter = document.createElement('button')
const temp = document.createElement('div')
const val = document.createElement('button')
city.textContent = 'Enter City:'
enter.textContent = 'Get Weather'
val.textContent = 'C/F'

display.appendChild(city)
display.appendChild(userInput)
display.appendChild(enter)
display.appendChild(val)
display.appendChild(temp)

enter.addEventListener('click', async () => {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&APPID=223dcddf31b80c7e08b47db79fb5d67e')
  const forecast = await response.json()
  const report = forecast.main.temp
  console.log(report)
  const degrees = (report - 273.15).toFixed(2) + ' ' + 'C'
  const fahren = (((report - 273.15) * 9 / 5) + 32).toFixed(2) + ' ' + 'F'
  temp.textContent = degrees
  val.addEventListener('click', () => {
    if (temp.textContent === degrees) {
      temp.textContent = fahren
    } else if (temp.textContent === fahren) {
      temp.textContent = degrees
    }
  })
}
)
