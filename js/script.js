'use strict';

void function () {    

    const form = document.querySelector('#form');
    const inputs = form.querySelectorAll('input, textarea, select');
    const dataKey = 'formData';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {};

        inputs.forEach(({ name, value }) => data[name] = value);
        localStorage.setItem(dataKey, JSON.stringify(data));

        window.open('pages/result.html', '_blank');
    })

    const loadedHandler = () => {
        if (!localStorage.getItem(dataKey)) {
            alert('No data');
            return;
        };
        const data = JSON.parse(localStorage.getItem(dataKey));
        inputs.forEach(input => input.value = data[input.name]);
        document.removeEventListener('DOMContentLoaded', loadedHandler);
    }

    document.addEventListener('DOMContentLoaded', loadedHandler);
    
}();