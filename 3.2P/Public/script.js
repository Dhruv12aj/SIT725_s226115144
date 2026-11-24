
fetch('/api/vulnerabilities')
    .then(response => {
        if (!response.ok) {
            throw new Error('Unable to fetch data');
        }

        return response.json();
    })
    .then(data => {
        const list = document.getElementById('vulnerability-list');

        data.forEach(item => {

            const column = document.createElement('div');
            column.className = 'col s12 m6';

            const card = document.createElement('div');
            card.className = 'card vulnerability-card';

            // Card image
            const imageBox = document.createElement('div');
            imageBox.className = 'card-image';

            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.name;

            imageBox.appendChild(image);

            // Card information
            const content = document.createElement('div');
            content.className = 'card-content';

            const title = document.createElement('span');
            title.className = 'card-title';
            title.textContent = item.name;

            const description = document.createElement('p');
            description.textContent = item.description;

            // Severity label
            const severity = document.createElement('span');
            severity.className =
                'severity ' + item.severity.toLowerCase();

            severity.textContent = item.severity + ' Severity';

            content.appendChild(title);
            content.appendChild(description);
            content.appendChild(severity);

            card.appendChild(imageBox);
            card.appendChild(content);

            column.appendChild(card);
            list.appendChild(column);
        });
    })
    .catch(error => {
        console.error(error);

        document.getElementById('vulnerability-list').textContent =
            'Unable to load vulnerability information.';
    });
  