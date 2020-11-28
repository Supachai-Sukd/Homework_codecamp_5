const persons = [
  { name: "John", age: 10 },
  { name: "Jane", age: 15 },
  { name: "Jim", age: 17 }
]

// let isKid = true
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   if (person.age > 15) {
//     isKid = false
//     break
//   }
// }

//Every มันจะเช็คตามเงื่อนไขว่าตรงไหม ต้องตรงทุกอันไม่งั้นมันจะปัดเป็น false ทันที
//Some มันจะเช็ค ขอแค่มีตัวไหนตรงมันจะ return true มาให้ทันที
const isKid = persons.every(person => person.age <= 15)
const isKidSome = persons.some(person => person.age <= 9)

console.log('isKid :', isKid);
console.log('isKidSome :', isKidSome);


// let jane
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   if (person.name === "Jane") {
//     jane = person
//     break
//   }
// }

const jane = persons.find( person => person.name === 'Jane')
const janeIndex = persons.findIndex( person => person.name === 'Jane')

console.log('Jane :', jane);
console.log('JaneIndex :', janeIndex);


// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   if (person.age > 15) continue
//   console.log(`Name ${person.name} age ${person.age}`);
// }

// persons.forEach((person) => console.log(`Name ${person.name} age ${person.age}`))



//const kids = []

// for (let i = 0; i < persons.length; i++) {
//     const person = persons[i]
//     if (person.age <= 15) {
//         kids.push(person.age)
// }
// }

// const kids = persons.filter( x =>  x.age <= 15)
 

// console.log(`Kids : `, kids)

// const olderPersons = []
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   olderPersons.push({
//     ...person,
//     age: person.age * 2
//   })
// }

//const olderPersons = persons.map( person => ({ ...person, age: person.age * 2} ) )

//console.log("Older person :", olderPersons);

// const totalAge = persons.reduce(( age, person ) =>  age + person.age, 0 )

// console.log("Age :", totalAge);