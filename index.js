
// define food proto
const food = {
    init: function(type) {
        this.type = type
    },
    eat: function() {
        console.log('you ate the ' + this.type)
    }
}
console.log(food)
// Object.create makes a new object and assigns food as its prototype
const waffle = Object.create(food)

// creates object with food.type = 'waffle' and food.eat = 'you ate the waffle'
waffle.init('waffle')
// prints 'you ate the waffle'
waffle.eat()
// this will continue to print 'you ate the waffle' because the waffle.type has already been defined.
// if you were to comment out the waffle.init('waffle') statement, this second waffle.eat() call would return 'dwdqdadawdawddawdad'
food.type = 'dwdqdadawdawddawdad'
waffle.eat()

// *** new instances of a prototype will revert back to the prototype default if a property is not defined explicitly for that object

// check to see if something is a prototype of something else
console.log('prototype check')
console.log(food.isPrototypeOf(waffle)) //true
console.log(food.isPrototypeOf('hello')) //false
console.log(food.isPrototypeOf(123)) //false