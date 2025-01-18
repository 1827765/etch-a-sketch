const mainBody = document.querySelector('#container');
const btn = document.createElement('button')
btn.textContent = `Add Room!!!`;
const btn2 = document.createElement('button')
mainBody.appendChild(btn)
mainBody.appendChild(btn2)
btn2.textContent = `Reset`
const grid = document.createElement('div')
const newDiv = document.createElement('div');
mainBody.appendChild(grid);

btn.addEventListener('click', () => {

    let userInput = prompt("enter size please NOTE max '100'", '64');
    if (+userInput <= 100) {
        let i = 0
        while (i < (+userInput * +userInput)) {
            newDiv.createElement('div')
            newDiv.classList.add(`gridBox`);
            grid.appendChild(newDiv);
            i++;
            newDiv.textContent = `.`

        };
    } else alert(`Invalid Size`);

})

btn2.addEventListener('click', newDiv.remove())



