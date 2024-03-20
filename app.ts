// Add event listeners and functionality here

// Dummy data for posts
const posts = [
    { id: 1, content: "This is my first post!" },
    { id: 2, content: "Just another day on social media." },
    { id: 3, content: "Feeling excited about this project!" }
];

// Function to display posts
function displayPosts() {
    const postSection = document.getElementById('posts');
    postSection.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<p>${post.content}</p>`;
        postSection.appendChild(postElement);
    });
}

// Function to handle post submission
function submitPost() {
    const postContent = document.getElementById('post-content').value;
    const newPost = { id: posts.length + 1, content: postContent };
    posts.push(newPost);
    displayPosts();
    // You can send the new post data to the server here for storage
}

// Event listeners
document.getElementById('submit-post').addEventListener('click', submitPost);

// Initial display of posts
displayPosts();
