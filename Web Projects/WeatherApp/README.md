
## Weather App

This is a simple weather app that allows users to search for the current weather in any city. The app fetches data from the OpenWeather API and displays the temperature, humidity, and wind speed for the selected city.


## Features

- Search for the weather by city name.
- Displays current temperature in Celsius (°C).
- Shows humidity percentage.
- Displays wind speed in km/h.
- Responsive design to fit various screen sizes.


## How to Run

1. Open the project folder in your preferred code editor.

2. Open the index.html file in your browser.

Note: Make sure you have an internet connection to fetch weather data from the OpenWeather API.
## Files in the Project

- index.html: The main HTML file containing the structure and   content of the app.

- style.css: The CSS file that styles the weather app, including   layout and responsiveness.

- app.js: The JavaScript file that handles the logic of fetching  weather data from the OpenWeather API and displaying it on the page.


## API Used

This app uses the OpenWeather API to fetch current weather data. You will need to sign up on the OpenWeather website and get an API key.

- API Key: In the JavaScript file (app.js), replace const apikey = "2abc0ca0738f5ec624f36073198dc1a5"; with your own API key.
## How It Works

1. The user enters a city name in the search bar and clicks the search button.
2. The app sends a request to the OpenWeather API with the city name and the API key.
3. The app receives the weather data and updates the display with the current temperature, humidity, and wind speed.
4. If the city is found, the weather data is shown; if not, an error message can be displayed (though error handling is not yet implemented in this version).
## Requirements

- Internet connection to fetch data from the OpenWeather API.
- Modern web browser (Chrome, Firefox, etc.).
## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeather API
## License
This project is open-source and available under the MIT License. See the LICENSE file for more details.
## Credits
- Weather icons and other images used in the app are available from Freepik.
- Fonts used: Poppins.
## Contributing
Feel free to fork the repository and submit pull requests. If you find any bugs or have suggestions for improvements, feel free to open an issue.
