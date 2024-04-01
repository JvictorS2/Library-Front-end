//map - transformador de elementos de um array
/* const input = ['a', 'd', 'c']
const output = input.map(item => `<h2>${item}<h2>`)
output.forEach(item => console.log(item)); */


/* const input = [1, 2, 3, 4, 5];
const output = input.map(item => Math.pow(item, 2));
console.log(output) */

/* const input = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
]; */

/* const output = input.map(user => user.firstName);
console.log(output); */

/* const output = input.filter(item => item.role === 'Full Stack Resident');
console.log(output) */

/* const output = input
    .reduce((acumulador, item) => acumulador + item.firstName + ' ' + item.lastName + ";", '')
    .split(';')

console.log(output)  */

/* const output = input
    .map(funcionario => funcionario.firstName + ' ' + funcionario.lastName);
    
console.log(output)  */

/* const input = [1, -4, 12, 0, -3, -29, -150];
const output = input 
    .filter(item => item > 0) 
    .reduce((acumulador, item) => acumulador + item, 0 )
    
console.log(output)  */


/* const nome = 'George Raymond Richard Martin';
const output = nome
    .split(' ')
    .map(palavra => palavra[0])
    .join('')

console.log(output) */

/* const nome = [
    {name:'jhon', age: 12},
    {name:'Mark', age: 11},
    {name:'Elizzabeth', age: 19},
    {name:'Rachel', age: 18},
    {name:'Nick', age: 15}
]

const ages = nome.map(item => item.age);
console.log(`Mais novo: ${Math.min(...ages)}`)
console.log(`Mais velho: ${Math.max(...ages)}`)
console.log(`Diferença de idade: ${Math.max(...ages) - Math.min(...ages)}`);
console.log(...ages) */

const input = new Array(6)
    .fill()
    .map((item, index) => index + 1)
    .reduce((acumulador, valor) => acumulador * valor);

console.log(input)