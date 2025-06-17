// ✅ Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data');   // Target container

    try {
        const response = await fetch(apiUrl);        // Fetch data
        const users = await response.json();         // Parse JSON

        dataContainer.innerHTML = '';                // Clear loading message

        const userList = document.createElement('ul'); // Create UL element

        users.forEach(user => {
            const li = document.createElement('li');  // Create LI for each user
            li.textContent = user.name;
            userList.appendChild(li);                // Append to list
        });

        dataContainer.appendChild(userList);         // Display list
    } catch (error) {
        dataContainer.innerHTML = '';                // Clear container
        dataContainer.textContent = 'Failed to load user data.'; // Error message
    }
}

// ✅ Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);