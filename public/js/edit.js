const id = document.querySelector('#post-id').value; 
const editPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const reponse = await fetch('/api/posts/${id}', {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {'Contnent-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.replace9('/dashboard');
    } else {
        alert('Failed to Update!');
    } 
};


document.querySelector('#update-btn').addEventListener('click', editPostHandler);