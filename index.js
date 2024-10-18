// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1

// Create an array of random colors
const colors = ['red', 'blue', 'green', 'yellow', 'purple']
const randomColor = colors[Math.floor(Math.random() * colors.length)]

// Generate a random string
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randomString = ''
for (let i = 0; i < 10; i++) {
  randomString += characters.charAt(
    Math.floor(Math.random() * characters.length)
  )
}

console.log(`Random number: ${randomNumber}`)
console.log(`Random color: ${randomColor}`)
console.log(`Random string: ${randomString}`)
