
const express = require('express');
const app = express();

const PORT = 3000;

// Serve the website files
app.use(express.static('Public'));

// Sample security incident
const incidents = [
    {
        id: 1,
        title: 'Suspicious Account Activity',
        date: '2026-11-18',
        status: 'Under Review',
        events: [
            {
                id: 1,
                time: '09:10',
                name: 'Unusual Login Attempt',
                severity: 'Medium',
                description: 'Several failed login attempts were detected from an unknown IP address.'
            },
            {
                id: 2,
                time: '09:18',
                name: 'Successful Login',
                severity: 'Medium',
                description: 'The account was accessed successfully from a new device.'
            },
            {
                id: 3,
                time: '09:27',
                name: 'Permission Change',
                severity: 'High',
                description: 'The account permissions were changed shortly after login.'
            },
            {
                id: 4,
                time: '09:39',
                name: 'Unusual File Transfer',
                severity: 'High',
                description: 'A large amount of data was transferred to an unfamiliar destination.'
            },
            {
                id: 5,
                time: '09:52',
                name: 'Account Disabled',
                severity: 'Low',
                description: 'The security team disabled the account to prevent further activity.'
            }
        ]
    }
];

// Return all incidents
app.get('/api/incidents', (req, res) => {
    res.json(incidents);
});

// Return a single incident
app.get('/api/incidents/:id', (req, res) => {
    const id = Number(req.params.id);

    const incident = incidents.find(item => item.id === id);

    if (incident) {
        res.json(incident);
    } else {
        res.status(404).json({
            message: 'Incident not found'
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`IncidentLens running at http://localhost:${PORT}`);
});
