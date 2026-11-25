
fetch('/api/incidents/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Could not load incident');
        }

        return response.json();
    })
    .then(incident => {

        document.getElementById('incident-title').textContent =
            incident.title;

        document.getElementById('incident-date').textContent =
            'Incident Date: ' + incident.date;

        document.getElementById('incident-status').textContent =
            incident.status;

        document.getElementById('event-count').textContent =
            incident.events.length;

        const highEvents = incident.events.filter(event =>
            event.severity === 'High'
        );

        document.getElementById('high-count').textContent =
            highEvents.length;

        const timeline = document.getElementById('timeline');

        incident.events.forEach(event => {

            const box = document.createElement('div');
            box.className = 'timeline-event';

            const time = document.createElement('span');
            time.className = 'event-time';
            time.textContent = event.time;

            const title = document.createElement('h6');

            // Choose an icon for each event
            const icon = document.createElement('i');
            icon.className = 'material-icons event-icon';

            if (event.id === 1) {
                icon.textContent = 'warning';
            } else if (event.id === 2) {
                icon.textContent = 'login';
            } else if (event.id === 3) {
                icon.textContent = 'admin_panel_settings';
            } else if (event.id === 4) {
                icon.textContent = 'file_upload';
            } else {
                icon.textContent = 'lock';
            }

            const eventName = document.createElement('span');
            eventName.textContent = event.name;

            title.append(icon, eventName);

            const severity = document.createElement('span');
            severity.className =
                'severity ' + event.severity.toLowerCase();

            severity.textContent = event.severity;

            box.append(time, title, severity);

            // Show details when an event is selected
            box.addEventListener('click', () => {

                document.querySelectorAll('.timeline-event')
                    .forEach(item => item.classList.remove('selected'));

                box.classList.add('selected');

                document.getElementById('detail-title').textContent =
                    event.name;

                document.getElementById('detail-time').textContent =
                    'Time: ' + event.time;

                document.getElementById('detail-description').textContent =
                    event.description;

                const detailSeverity =
                    document.getElementById('detail-severity');

                detailSeverity.replaceChildren();

                const badge = document.createElement('span');
                badge.className =
                    'severity ' + event.severity.toLowerCase();

                badge.textContent = event.severity + ' Severity';

                detailSeverity.appendChild(badge);
            });

            timeline.appendChild(box);
        });
    })
    .catch(error => {
        console.error(error);

        document.getElementById('incident-title').textContent =
            'Unable to load incident';

        document.getElementById('timeline').textContent =
            'Please check whether the Express server is running.';
    });
