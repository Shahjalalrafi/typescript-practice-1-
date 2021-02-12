// var country = 'i love bangladesh and bangladesi people'
// console.log(country)

let playerName
playerName = 'mashrafee'

console.log(playerName)

let fruits = ['apple', 'mango']
fruits.push('orange')

console.log(fruits)

let person = {
    name: 'shahjalal rafi',
    age: 21,
    isMaried: false
}

person.name = 'shahaziz rakib'
// console.log(person)

type stringOrNumber = string | never
type userType = {name: string; age :number}

const userDetails = (id:stringOrNumber, user: userType) => {
    console.log(`user id is ${id} and user name is ${user.name} and his age is ${user.age}`)
}