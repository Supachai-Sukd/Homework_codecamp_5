const EventEmitter = require('events')

//Em1 เป็นคลาสลูกของ EventEmitter
class Em1 extends EventEmitter{
    emit1() {
        setInterval( () => this.emit('one sec',1111111),1000)
    }
    emit2() {
        setInterval( () => this.emit('two sec',2222222),2000)
    }
}

module.exports = Em1