const deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    const endpoint = `/items/${id}`;

    fetch(endpoint, {method: 'DELETE'})
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            window.location.href = data.redirect;
        })
        .catch((err) => console.log(err));
});