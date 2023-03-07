// function constructor

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " is walking!"
    }
}

const Daniel = new Person("Daniel")
const João = new Person("João")    
console.log(Daniel.walk())
console.log(João.walk())
