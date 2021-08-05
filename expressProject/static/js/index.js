let id = '';
let endpoint = '';
let instances;

const itemOptions = document.getElementById('itemOptions');
const editForm = document.getElementById('editForm');

document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.modal');
    instances = M.Modal.init(elems);
});

itemOptions.addEventListener('click', (event) => {
    event.preventDefault();
    
    const optionSelected = event.target.textContent;
    id = event.target.getAttribute('data-id');
    endpoint = `/items/${id}`;

    if (optionSelected === 'edit') {
        const name = event.target.getAttribute('data-name');
        const price = event.target.getAttribute('data-price');

        editForm.name.value = name;
        editForm.price.value = price;

    } else if (optionSelected === 'delete') {
        fetch(endpoint, {method: 'DELETE'})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                window.location.reload();
            })
            .catch((err) => console.log(err));
    } else {
        fetch(endpoint, {method: 'GET'})
            .then((data) => {
                window.location.href = endpoint;
            })
            .catch((err) => console.log(err));
    }
});

editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(editForm);

    // console.log('data: ', data.entries());
    // for(let pair of data.entries()) {
    //     console.log(pair[0], pair[1]);
    // }

    // console.log('endpoint: ', endpoint);

    let response = await fetch(endpoint, {
        method: 'PUT',
        body: new URLSearchParams(data),
        headers: new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
    });

    let result = await response.json();

    // Reset form
    editForm.reset();

    // Close modal
    instances[0].close();

    // Reload page
    window.location.reload();
});