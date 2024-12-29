# Form Validation Project

This project demonstrates a simple form validation implementation using HTML, CSS, and JavaScript. It validates user inputs for name, phone number, email, and message before submission.

## Features

- **Real-time Validation**: Each field provides instant feedback as the user types.
- **Error Handling**: Displays descriptive error messages for invalid input.
- **Success Indicators**: Shows a checkmark icon for valid inputs.
- **Form Reset**: Clears the form after successful submission.
- **Responsive Design**: Ensures usability across different screen sizes.

## Files

1. **`index.html`**  
   The main HTML file containing the form structure.  
   - Includes fields for name, phone number, email, and message.
   - Integrates with the JavaScript for validation logic.

2. **`style.css`**  
   The CSS file that styles the form and error messages.  
   - Provides a clean and modern design with a responsive layout.
   - Highlights invalid fields and displays error messages in red.

3. **`script.js`**  
   The JavaScript file that handles form validation.  
   - Validates each field for proper input format.
   - Displays error messages or success icons based on user input.
   - Prevents form submission if validation fails.

## Installation

1. Clone this repository or download the ZIP file.
2. Place all files (`index.html`, `style.css`, `script.js`) in the same directory.
3. Open `index.html` in any modern web browser to view and test the form.

## Validation Rules

### Full Name
- Required.
- Must include first and last name separated by a space.
- Example: `John Doe`.

### Phone Number
- Required.
- Must be exactly 10 digits.
- Example: `1234567890`.

### Email
- Required.
- Must follow the format: `example@domain.com`.

### Message
- Required.
- Must be at least 30 characters and no more than 100 characters.

## How to Use

1. Open the form in your browser.
2. Fill in each field following the rules outlined above.
3. Errors will be displayed in red if the input is invalid.
4. Upon successful validation, the form displays a success message and clears the input fields.

## Credits

- Design inspired by modern web form styles.

## License

This project is open-source and free to use under the MIT License.
