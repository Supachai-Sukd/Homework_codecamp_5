class human {
    constructor(name, age=30) {
        this.name = name
        this.age = age
    }
    info() {console.log(this.name, this.age)}
    
}

module.exports.human = human

