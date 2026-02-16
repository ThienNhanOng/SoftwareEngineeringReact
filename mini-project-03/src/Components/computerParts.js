export const cpus = [
    {
        name: "Intel Core i5-12600K", price: 100, img: "src/assets/cpu.jpeg"
    },
    {
        name: "Intel Core i7-12700K", price: 200, img: "src/assets/cpu.jpeg"
    },
    {
        name: "AMD Ryzen 5 5600X", price: 300, img: "src/assets/cpu.jpeg"
    },
    {
        name: "AMD Ryzen 7 5800X", price: 400, img: "src/assets/cpu.jpeg"
    }
];

export const gpus = [
    {
        name: "NVIDIA GeForce RTX 4090", price: 500, img: "src/assets/gpu.jpeg"
    },
    {
        name: "AMD Radeon RX 7900 XTX", price: 600, img: "src/assets/gpu.jpeg"
    },
    {
        name: "NVIDIA GeForce RTX 4070 Ti", price: 700, img: "src/assets/gpu.jpeg"
    },
    {
        name: "AMD Radeon RX 7800 XT", price: 800, img: "src/assets/gpu.jpeg"
    }
];

export const rams = [
    {
        name: "Corsair Vengeance", price: 100.50, img: "src/assets/ram.jpeg"
    },
    {
        name: "G.Skill Trident Z", price: 200.50, img: "src/assets/ram.jpeg"
    },
    {
        name: "Kingston FURY Beast", price: 300.99, img: "src/assets/ram.jpeg"
    },
    {
        name: "Crucial Ballistix", price: 400.99, img: "src/assets/ram.jpeg"
    }
];

export const cases = [
    {
        name: "Fractal Design Define 7", price: 150, img: "src/assets/nzxt.jpeg"
    },
    {
        name: "Corsair 4000D Airflow", price: 100, img: "src/assets/nzxt.jpeg"
    },
    {
        name: "Lian Li PC-O11 Dynamic", price: 200, img: "src/assets/nzxt.jpeg"
    },
    {
        name: "Fractal Design Meshify C", price: 120, img: "src/assets/nzxt.jpeg"
    }
];

const generateCard = (name, price, img) => {
    // create a div to store a card in
    const cardContainer = document.createElement("div");

    // set the card containers class to be card (for formatting)
    cardContainer.classList.add("card");

    // set up the image
    const cpuImg = document.createElement("img");
    cpuImg.src = img;
    cpuImg.alt = "";
    cpuImg.style = "width:300px; height:auto";

    // create the name header
    const cpuNameHeader = document.createElement("h3");
    cpuNameHeader.classList.add("primary-font");
    cpuNameHeader.style = "font-size:1.5rem";
    cpuNameHeader.textContent = name;

    // create the price caption
    const cpuPrice = document.createElement("h3");
    cpuPrice.classList.add("primary-font");
    cpuPrice.style = "font-size:1rem";
    cpuPrice.textContent = "$" + price.toFixed(2);

    // create button
    const addToBuildButton = document.createElement("button");
    addToBuildButton.textContent = "ADD TO BUILD";

    // add cpu to list on clicked
    addToBuildButton.addEventListener("click", () => {
        addPartToList(name, price, img);
    });

    // append components to card
    cardContainer.appendChild(cpuImg);
    cardContainer.appendChild(cpuNameHeader);
    cardContainer.appendChild(cpuPrice);
    cardContainer.appendChild(addToBuildButton);

    // append card to the card section
    cardSection.appendChild(cardContainer);
}

const showCPUs = () => {
    // clear previous cards
    cardSection.innerHTML = "";
    // add all cards to the section on the document
    cpus.forEach(element => {
        generateCard(element.name, element.price, element.img);
    });
}

window.showCPUs = showCPUs;