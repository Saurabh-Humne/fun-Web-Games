
## Image Search Engine

A simple web-based application that allows users to search for images using the Unsplash API. The app displays the results in a grid layout and includes a "Show more" button to fetch additional images.


## Features

- Search Images: Enter keywords to search for images using the Unsplash API.
- Responsive Design: Adapts well to different screen sizes.
- Infinite Scrolling: Load more images using the "Show more" button.
- Image Links: Each image links to its page on Unsplash for more details.


## Tech Stack

- HTML: Structure of the application.
- CSS: Styling and layout.
- JavaScript: Logic for interacting with the Unsplash API and rendering images dynamically.


## Requirements
### Prerequisites
- A valid API access key from Unsplash Developers.
- Internet connection to fetch data from the OpenWeather API.
- Modern web browser (Chrome, Firefox, etc.).


## Installation
1. Clone the repository:
> bash
git clone https://github.com/your-username/image-search-engine.git

2. Navigate to the project directory:
> bash
`cd image-search-engine`

3. Open script.js and replace the accessKey variable with your Unsplash API access key:
> javascript
`const accessKey = "YOUR_ACCESS_KEY";`

    
## Usage

1. Open `index.html` in a web browser.
2. Enter a keyword in the search bar and click the "Search" button.
3. Browse the results and click on any image to view it on Unsplash.
4. Click "Show more" to load additional results.


## File Structure
- index.html: The main HTML file for the application.
- style.css: Contains the styles for the application.
- script.js: Contains the logic for fetching images from the Unsplash API and rendering them on the page.


## API Used
This app uses the Unsplash API to fetch the images. You will need to sign up on the Unsplash website and get an API key.

- API Key: In the JavaScript file (script.js), replace const apikey = ""; with your own API key.


## License
This project is open-source and available under the MIT License. See the LICENSE file for more details.


## Credits
- Unsplash API
- All images are sourced from Unsplash.


## Contributing
Feel free to fork the repository and submit pull requests. If you find any bugs or have suggestions for improvements, feel free to open an issue.