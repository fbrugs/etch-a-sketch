let gridSize = 0;

const canvas = document.querySelector(".canvas");
const opacityCheckbox = document.querySelector(".opacity");
const rgbCheckbox = document.querySelector(".rgb");

function randomRGB() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR},${randomG},${randomB})`
}

function createGrid(size) {

    if (size > 80) {
        size = 80;
    }

    if (size < 10) {
        size = 10
    }

    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("col");
        column.id = i + 1;

        for (let y = 0; y < size; y++) {
            const row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        }

        canvas.appendChild(column);
    }
}

const confirmButton = document.querySelector(".confirm-button");

confirmButton.addEventListener("click", (e) => {
    const deleteColumns = document.querySelectorAll(".col");
    deleteColumns.forEach((item) => {
        item.remove();
    })
    gridSize = document.querySelector("input").value;
    createGrid(gridSize);
});


canvas.addEventListener("mouseover", (e) => {
    const child = e.target.closest(".row");

    if (!child) return;

    if (rgbCheckbox.checked) {
        child.style.backgroundColor = randomRGB();
        child.style.opacity = 1;
    }

    if (opacityCheckbox.checked) {
        child.style.backgroundColor = 'black'
        child.style.opacity = Math.min(Number(child.style.opacity) + 0.1, 1)
    }

    if (!opacityCheckbox.checked && !rgbCheckbox.checked) {
        if (Number(child.style.opacity) <= 1) {
            child.style.opacity = 1;
        }
        child.style.backgroundColor = 'black'
    }

    console.log(rgbCheckbox.checked)
})

opacityCheckbox.addEventListener("click", (e) => {
    if (opacityCheckbox.checked) {
        rgbCheckbox.checked = false;
    }
})

rgbCheckbox.addEventListener("click", (e) => {
    if (rgbCheckbox.checked) {
        opacityCheckbox.checked = false
    }
})