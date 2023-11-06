'use strict';

void function () {    

    document.addEventListener('DOMContentLoaded', () => {
        const formDataList = document.getElementById('formDataList');
        const data = JSON.parse(localStorage.getItem('formData'));

        for (const key in data) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${data[key]}`;
            formDataList.appendChild(listItem);
        }
    });
    
}();