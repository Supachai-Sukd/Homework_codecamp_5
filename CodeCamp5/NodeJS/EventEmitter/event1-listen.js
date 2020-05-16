const Em1 = require('./event1-emit')
//สร้าง Instance
const em1 = new Em1()


em1.emit1()
em1.on('one sec', (e) => {
    console.log(e)
})

