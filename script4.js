// Fetch data from the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        // Call function to update the DOM with the fetched information
        updateDOM(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to update the DOM with fetched information
function updateDOM(data) {
    // Get a reference to the element where you want to display the data
    const container = document.getElementById('data-container');

    // Loop through the fetched data and create HTML elements to display it
    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        container.appendChild(postElement);
    });
}
