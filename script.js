// Object Literal Notation
// The method we've been using thus far
// Not good for multiple objects with similar keys eg...

const userOne = {
    name:"Kent",
    gender:"M",
    age:32,
    login(){
        console.log("Logged in")
    }
}

// If we wanted to make a second user with Object Literal Notation, we'd have to do this:
// Which is a lot of repetitive code

const userTwo = {
    name:"Ben",
    gender:"M",
    age:33,
    login(){
        console.log("Logged in")
    }
}

// Classes can be used to create object blueprints
// Allowing easier creation of similar objects
// It would seem that class naming convention is to use upper case for the first letter ie class User but not class user
// Properties go inside the constructor, methods go after the constructor
// Do not use arrow functions when creating class methods, otherwise the this keyword will refer to the window object 
// and not the object instance

// Making Methods chainable, just like promises, you can chain methods as long as you return this inside the method

class User {
    constructor(name,gender,age){
        this.name = name
        this.gender = gender
        this.age = age
        this.score = 0
        
    }
    login(){
        console.log(`${this.name} logged in`)
    }
    logout(){
        console.log(`${this.name} logged out`)
    }
    increaseScore(){
        this.score ++
        console.log(`${this.name}'s score is ${this.score}`)
        return this
    }
}

const userThree = new User ("Max","M",10)
const userFour = new User ("Ashleigh","F",27)

console.log(userThree)
console.log(userFour)

userThree.login()
userThree.logout()

// Making Methods chainable, just like promises, you can chain methods as long as you return this inside the method
userThree.increaseScore().increaseScore().increaseScore()


// Subclasses extends the blueprints of one class into another, distinguishing methods can be added to make them different

class Admin extends User {
    deleteUser(userToDelete){
        console.log(`${userToDelete} has been deleted by admin ${this.name}`)
    }
}

const adminOne = new Admin("Kent","M",32)
adminOne.deleteUser("Dirkadirka")