let products = [];


fetch("./db.json")

    .then(res => res.json())
    .then(data => {
        products = data.products;
        display(products);
    });


function display(list) {

    let html = "";

    list.forEach(p => {
        html += `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString()}</td>
            </tr>
        `;
    });

    document.getElementById("tableBody").innerHTML = html;
}


function searchByName() {

    let key = document.getElementById("searchInput").value.toLowerCase();

    let result = products.filter(p =>
        p.name.toLowerCase().includes(key)
    );

    display(result);
}


function sortNameAsc() {
    let list = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
    display(list);
}


function sortNameDesc() {
    let list = [...products].sort((a, b) =>
        b.name.localeCompare(a.name)
    );
    display(list);
}


function sortPriceAsc() {
    let list = [...products].sort((a, b) =>
        a.price - b.price
    );
    display(list);
}


function sortPriceDesc() {
    let list = [...products].sort((a, b) =>
        b.price - a.price
    );
    display(list);
}
