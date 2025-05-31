import people from "./data.js";

let ctx = document.getElementById("container");

ctx.className = "m-20 grid grid-cols-2 gap-4 text-center";

people.forEach((index, i) => {
    const card = document.createElement("div");

    card.className = `${i == 2 ? "col-span-2" : "col-span-1"}`; 

    card.innerHTML = `
        <div class="h-28 place-content-center rounded-2xl border">
            <h1>${index.name}</h1>
            <p>${index.state == true ? "yes" : "no"} | $ ${index.price.toFixed(2)}</p>
        </div> 
    `;

    ctx.appendChild(card);
});