// // --- SELECTORS -----------

// // let hOneTag = document.getElementById('h-one-tag'); // 1.

// // # for selecting / taking refrence from ids
// // let hOneTag = document.querySelector('#h-one-tag') // 2

// let hOneTag = document.querySelector('h1[id="h-one-tag"]'); // 3
// hOneTag.style.color = 'red'
// console.log(hOneTag);

// // let hTwoTag = document.querySelector('.h2-class-tag');
// let hTwoTag = document.querySelector('h2[class="h2-class-tag"]');
// console.log(hTwoTag);
// hTwoTag.style.color = 'blue'

// let username = document.querySelector('input[name="username"]');
// // username.addEventListener('change', (e) => {
// //     console.log(e.target.value);
// // })

// // username.addEventListener('input', (e) => {
// //     console.log(e.target.value);
// // })

// let button = document.querySelector('button[type="button"]');
// button.addEventListener('click', () => {
//     console.log(username.value);
// })


// const numOne = document.querySelector('#number-one')
// const numtwo = document.querySelector('#number-two')
// const operation = document.querySelector('#select-operation')
const button = document.querySelector('#get-result-button')
const showResults = document.querySelector('#show-results');

// 1 way
// button.addEventListener('click', () => {
//     const numOne = document.querySelector('#number-one').value;
//     const numtwo = document.querySelector('#number-two').value;
//     const operation = document.querySelector('#select-operation').value;

//     // let result = `${numOne.value} ${operation.value} ${numtwo.value}`;
//     let result = `${numOne} ${operation} ${numtwo}`;
//     let answer = eval(result)

//     showResults.innerText = `Result of ${result} = ${answer}`
// })


// 2 way
// button.addEventListener('click', function () {
//     const numOne = document.querySelector('#number-one').value;
//     const numtwo = document.querySelector('#number-two').value;
//     const operation = document.querySelector('#select-operation').value;

//     // let result = `${numOne.value} ${operation.value} ${numtwo.value}`;
//     let result = `${numOne} ${operation} ${numtwo}`;
//     let answer = eval(result)

//     showResults.innerText = `Result of ${result} = ${answer}`
// })


// 3
// function handleOperation() {
//     const numOne = document.querySelector('#number-one').value;
//     const numtwo = document.querySelector('#number-two').value;
//     const operation = document.querySelector('#select-operation').value;

//     // let result = `${numOne.value} ${operation.value} ${numtwo.value}`;
//     let result = `${numOne} ${operation} ${numtwo}`;
//     let answer = eval(result)

//     showResults.innerText = `Result of ${result} = ${answer}`
// }

const handleOperation = () => {
    const numOne = document.querySelector('#number-one').value;
    const numtwo = document.querySelector('#number-two').value;
    const operation = document.querySelector('#select-operation').value;

    // let result = `${numOne.value} ${operation.value} ${numtwo.value}`;
    let result = `${numOne} ${operation} ${numtwo}`;
    let answer = eval(result)

    showResults.innerText = `Result of ${result} = ${answer}`
}