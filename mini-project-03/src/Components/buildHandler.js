export let total = 0;
export const buildList = [];

export function addPartToList(type, name, price, img) {
    // Remove existing part of the same type
    const index = buildList.findIndex(part => part.type === type);
    if (index !== -1) {
        buildList.splice(index, 1);
    }
    // Add new part
    buildList.push({type, name, price, img});
    updateBuild();
}

export function updateBuild() {
    const buildLabel = document.getElementById('build');
    const totalLabel = document.getElementById('total');
    total = 0;
    // Clear previous content
    buildLabel.innerHTML = "";

    // Define part types
    const partTypes = ['cpu', 'gpu', 'ram', 'case', 'motherboard', 'psu', 'storage', 'cooler'];
    const selectedParts = {};

    // added other parts. 
    const displayNames = {
        motherboard: 'Board',
        psu: 'PSU',
        storage: 'Storage',
        cooler: 'Cooler'
    };

    // Group parts by type
    buildList.forEach(part => {
        selectedParts[part.type] = part;
        total += parseFloat(part.price);
    });

    // Display each type
    partTypes.forEach(type => {
        const displayName = displayNames[type] || type.toUpperCase();
        const part = selectedParts[type];
        if (part) {
            buildLabel.innerHTML += `<p style="display: flex; justify-content: space-between; align-items: center;">${displayName}: ${part.name} - $${part.price} <button style="background-color: red; color: white; border: none; padding: 2px 5px;" onclick="window.removePart('${type}')">Clear</button></p>`;
        } else {
            buildLabel.innerHTML += `<p>${displayName}: Select a ${displayName}</p>`;
        }
    });

    // Display total
    totalLabel.innerHTML = `<p style="font-size: 32px;"><b>Total:</b> $${total.toFixed(2)}</p>`;
}

// clear list and set storage to empty list.
export function clearBuild() {
    // Define part types
    const partTypes = ['cpu', 'gpu', 'ram', 'case', 'motherboard', 'psu', 'storage', 'cooler'];
    const selectedParts = {};
    // Group parts by type
    buildList.forEach(part => {
        selectedParts[part.type] = part;
    });
    // Check if all types are filled
    const allFilled = partTypes.every(type => selectedParts[type]);

    if (allFilled) {
        buildList.length = 0;
        updateBuild();
        alert("Thank you for building with retro pc picker.");
    } else {
        alert("Incomplete build");
    }
}

export function removePart(type) {
    const index = buildList.findIndex(part => part.type === type);
    if (index !== -1) {
        buildList.splice(index, 1);
        updateBuild();
    }
}

// Make removePart global for onclick
window.removePart = removePart;

// Load page
window.addEventListener('DOMContentLoaded', updateBuild);