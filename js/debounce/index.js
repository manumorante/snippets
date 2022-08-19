import { debounce } from './debounce.js'

const greeting = (name) => alert(`Greetings, ${name}!`)

const debounceGreeting = debounce(greeting, 400)

document.querySelector('button').addEventListener('click', () => {
  debounceGreeting('Manu')
})
