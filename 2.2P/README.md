# SIT725 – Task 2.2P: Express Web Server

## Project Overview

For SIT725 Task 2.2P, I created a simple web server using Node.js and Express.js to understand how server-side applications handle HTTP requests.

The project started with a basic HTML webpage served through Express. I then developed a calculator API that performs addition, subtraction, multiplication, and division. Each operation has its own GET endpoint and returns the calculated result in JSON format.

## Technologies Used

- Node.js
- Express.js
- HTML
- JavaScript
- Git and GitHub

## Project Structure

```text
2.2P/
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

1. Clone or download the GitHub repository.
2. Open the `2.2P` folder in a terminal.
3. Install the required dependencies:

   `npm install`

4. Start the Express server:

   `node server.js`

5. Visit `http://localhost:3000` to view the HTML webpage.

## Testing the Calculator APIs

The application includes four GET endpoints to perform basic mathematical operations.

| Operation | API Endpoint | Expected Result |
|---|---|---|
| Addition | `/add?num1=15&num2=25` | 40 |
| Subtraction | `/subtract?num1=25&num2=15` | 10 |
| Multiplication | `/multiply?num1=10&num2=5` | 50 |
| Division | `/divide?num1=20&num2=4` | 5 |

To test an operation, enter the endpoint after `http://localhost:3000` in the browser.

### Example: Addition

Request:

`http://localhost:3000/add?num1=15&num2=25`

Response:

```json
{
  "firstNumber": 15,
  "secondNumber": 25,
  "sum": 40
}
```

### How the API Works

The server receives the two numbers through URL query parameters. JavaScript's `Number()` function converts the values into numbers before performing the selected calculation.

Express then sends the result back to the browser as a JSON response.

For division, I also added a condition to check whether the second number is zero. If it is, the server returns an error message instead of calculating the result.

## Conclusion

This task helped me understand how Node.js and Express.js work together to create a basic web server. I practised serving an HTML webpage, creating multiple GET endpoints, handling query parameters, and returning JSON responses. Extending the addition API into a basic calculator also helped me become more familiar with server-side programming.
