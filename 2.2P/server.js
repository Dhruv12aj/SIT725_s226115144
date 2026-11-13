const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 

app.get('/add', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const sum = num1 + num2;

    res.json({
        firstNumber: num1,
        secondNumber: num2,
        sum: sum
    });
});