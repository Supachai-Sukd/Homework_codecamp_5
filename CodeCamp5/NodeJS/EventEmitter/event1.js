const EventEmitter = require('events')
const em1 = new EventEmitter()

setInterval( () => em1.emit('one sec',{id:1, txt:'One Second'}),1000)
setInterval( () => em1.emit('two sec'),2000)


//on เป็นตัวจับ event
em1.on('one sec', (e) => {
    console.log(e)
    
})

// em1.on('two sec', () => {
//     console.log('Event 2 second เกิดขึ้นแล้ว')
    
// })