# SIT725 – Task 2.2P: Express Web Server

## Project Overview

This is a simple web server I created using Node.js and Express.js for SIT725 Task 2.2P.

The project includes a basic HTML webpage and a GET API that accepts two numbers, adds them on the server, and returns the result in JSON format.

## Technologies Used

- Node.js
- Express.js
- HTML
- JavaScript
- Git and GitHub

## Project Structure

```text
SIT725-2.2P/
├── public/
│   └── index.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

The `node_modules` folder is excluded from GitHub using `.gitignore`.

## How to Run the Project

1. Download or clone the GitHub repository.
2. Open the project folder in a terminal.
3. Install dependencies:

   `npm install`

4. Start the server:

   `node server.js`

5. Open `http://localhost:3000` in a browser to view the webpage.

## Testing the Addition API

The application provides a GET endpoint at `/add`.

Example URL:

`http://localhost:3000/add?num1=15&num2=25`

Example response:

```json
{
  "firstNumber": 15,
  "secondNumber": 25,
  "sum": 40
}
```

The server reads the two values from the URL, converts them into numbers, calculates their sum, and sends the result as JSON.

## Conclusion

Through this task, I practised setting up an Express web server, serving an HTML webpage from a public folder, and handling GET requests. This helped me understand how a basic REST API works in Node.js.
