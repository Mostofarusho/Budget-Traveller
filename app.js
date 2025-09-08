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
        event.target.parentNode.parentNode.style.backgroundColor = "gray";
        li.appendChild(p);
        li.appendChild(p2);

        const budget = document.getElementById("budget").innerText;
        const convertedBudget = parseInt(budget);
        if (convertedBudget - parseInt(price) < 0) {
            alert("Low Budget Please Earn More");
            return;
        }
        document.getElementById("budget").innerText = convertedBudget - parseInt(price);



        selectedContainer.appendChild(li);

        totalCost("total-cost", parseInt(price));
        grandTotalCost("others");
        setInnerText('cart-count', count);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    // console.log(id, value);
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    console.log(sum);
    setInnerText(id, sum);
}

function grandTotalCost(category) {
    console.log(category);
    const grandTotalCost = document.getElementById("total-cost").innerText;
    const convertedGrandTotalCost = parseInt(grandTotalCost);
    if (category == "bus") {
        setInnerText("grand-total", convertedGrandTotalCost + 100);
    } else if (category == "train") {
        setInnerText("grand-total", convertedGrandTotalCost - 200);
    } else if (category == "flight") {
        setInnerText("grand-total", convertedGrandTotalCost + 500);
    } else {
        setInnerText("grand-total", convertedGrandTotalCost);
    }

    // console.log(sumTwo);
    // setInnerText(id, sumTwo);
}