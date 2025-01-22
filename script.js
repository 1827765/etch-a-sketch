const mainBody = document.querySelector('#container');
const btn = document.createElement('button');
btn.textContent = `Add Room!!!`;
const btn2 = document.createElement('button');
btn2.textContent = `Reset`;

mainBody.appendChild(btn);
mainBody.appendChild(btn2);

const grid = document.createElement('div');
grid.style.display = 'grid';
mainBody.appendChild(grid);

btn.addEventListener('click', () => {
    let userInput = prompt("Enter size (max '100')", '64');

    if (!userInput || isNaN(userInput) || +userInput > 100 || +userInput <= 0) {
        alert(`Invalid Size`);
        return;
    }

    grid.innerHTML = '';
    const size = +userInput;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`gridBox`);
        newDiv.style.border = '1px solid lightgray';
        newDiv.style.width = '0.5rem';
        newDiv.style.height = '0.5rem';

        newDiv.onmouseover = () => {
            newDiv.style.backgroundColor = 'black';
        };

        grid.appendChild(newDiv);
    }
});

btn2.addEventListener('click', () => {
    grid.innerHTML = '';
});
