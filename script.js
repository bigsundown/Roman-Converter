const input = document.getElementById('number')
const button = document.getElementById('convert-btn')
const result = document.getElementById('output');

const convert = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
]

button.addEventListener('click', () => {
    if (input.value === ''){
        result.innerText = 'Please enter a valid number'
    } else if (input.value <= 0) {
        result.innerText = 'Please enter a number greater than or equal to 1'
    } else if (input.value >= 4000) {
        result.innerText = 'Please enter a number less than or equal to 3999'
    } else {
        let result = ''
        for (const [roman, number] of convert) {
            while (input.value >= number ) {
                result += roman;
                input.value -= number;
            } 
        } output.innerText = result
    }
})

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        button.click()
    }
})