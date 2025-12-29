const addBtn = document.getElementById('add-btn');
const itemsContainer = document.getElementById('items-container');
const searchInput = document.getElementById('search');

let items = [];

function renderItems(filter = "") {
    itemsContainer.innerHTML = '';
    items
        .filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'item-card';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>Price: $${item.price}</p>
                <button onclick="deleteItem(${index})">Delete</button>
            `;
            itemsContainer.appendChild(div);
        });
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems(searchInput.value);
}

addBtn.addEventListener('click', () => {
    const title = document.getElementById('item-title').value;
    const price = document.getElementById('item-price').value;
    const image = document.getElementById('item-image').value;
    if(title && price && image){
        items.push({title, price, image});
        renderItems(searchInput.value);
        document.getElementById('item-title').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-image').value = '';
    } else {
        alert("Please fill all fields!");
    }
});

searchInput.addEventListener('input', () => {
    renderItems(searchInput.value);
});

// Initial render
renderItems();