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
