
const express = require('express');
const app = express();

const PORT = 3000;

// Serve the frontend files
app.use(express.static('Public'));

// Vulnerability information
const vulnerabilities = [
    {
        id: 1,
        name: 'SQL Injection',
        severity: 'High',
        description: 'Attackers may manipulate database queries.',
        image: '/images/SQL.png'
    },
    {
        id: 2,
        name: 'Cross-Site Scripting (XSS)',
        severity: 'Medium',
        description: 'Malicious scripts may run inside a user browser.',
        image: '/images/XSS.png'
    },
    {
        id: 3,
        name: 'Weak Password Policy',
        severity: 'Medium',
        description: 'Weak passwords can make accounts easier to compromise.',
        image: '/images/Weak Password.png'
    },
    {
        id: 4,
        name: 'Exposed Sensitive Files',
        severity: 'High',
        description: 'Private configuration files may become publicly accessible.',
        image: '/images/Digital Security.png'
    }
];

// GET API to send vulnerability data
app.get('/api/vulnerabilities', (req, res) => {
    res.json(vulnerabilities);
});

// Get a vulnerability by its ID
app.get('/api/vulnerabilities/:id', (req, res) => {
    const id = Number(req.params.id);

    const vulnerability = vulnerabilities.find(item => item.id === id);

    if (vulnerability) {
        res.json(vulnerability);
    } else {
        res.status(404).json({
            message: 'Vulnerability not found'
        });
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
  