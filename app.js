const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', (event) => {
        count += 1;
        const placeName = event.target.parentNode.childNodes[1].innerText;
        // console.log(placeName);
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        // console.log(price);
        const selectedContainer = document.getElementById("selected-place-container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = placeName;
        const p2 = document.createElement("p");
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);

        totalCost("total-cost", parseInt(price));
        grandTotalCost("grand-total", parseInt(price));
        setInnerText('cart-count', count);
    })
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    console.log(sum);
    setInnerText(id, sum);
}

function grandTotalCost(id, value) {
    const grandTotal = document.getElementById(id).innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    const sumTwo = convertedGrandTotal + parseInt(value);
    console.log(sumTwo);
    setInnerText(id, sumTwo);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    // console.log(id, value);
}