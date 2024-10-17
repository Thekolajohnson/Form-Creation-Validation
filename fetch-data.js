// Define the async function to fetch user data
async function fetchUserData() {
    // API URL to fetch user data from
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON format
        const users = await response.json();
        
        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through each user and create a <li> for their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list of users to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors during the fetch operation
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData once the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
