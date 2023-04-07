console.log('running script...')

const random = require('./utils/random');
const circle = require('./utils/circle');


for (let i = 0; i < 10; i++) {
    console.log(random(10, 20));
}

console.log(circle)
circle.area()