const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

// Addition
app.get('/add', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    res.json({
        firstNumber: num1,
        secondNumber: num2,
        sum: num1 + num2
    });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    res.json({
        firstNumber: num1,
        secondNumber: num2,
        difference: num1 - num2
    });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    res.json({
        firstNumber: num1,
        secondNumber: num2,
        product: num1 * num2
    });
});

// Division
app.get('/divide', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (num2 === 0) {
        return res.status(400).json({
            error: 'Cannot divide by zero'
        });
    }

    res.json({
        firstNumber: num1,
        secondNumber: num2,
        quotient: num1 / num2
    });
});