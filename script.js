let gridSize = 0;

const canvas = document.querySelector(".canvas");
const colors = ['green', 'red', 'blue', 'orange', 'teal', 'brown', 'black', 'yellow'];

function random(arrlength) {
    return Math.floor(Math.random() * arrlength);
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("col");
        column.id = i + 1;

        column.addEventListener("mouseover", (e) => {
            const child = e.target;
            child.style.backgroundColor = 'black';
        })

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