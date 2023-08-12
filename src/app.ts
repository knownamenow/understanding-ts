const userName = 'Max'
let age = 30

age = 29

// function add(a: number, b: number) {
//   let result = a + b
//   return result
// }

const add = (a: number, b: number = 1) => a + b

console.log(add(5, 2))

const printOutput: (a: string | number) => void = output => console.log(output)

const button = document.querySelector('button')

if (button) {
  button.addEventListener('click', console.log)
}

printOutput(add(5))
