const mc = require('./myClass')
const mu = require('./myUtil')

const customer = new mc.human('Andy',mu.getRandom(20, 50))
customer.info()

const employee = new mc.human('Bobby', 25)
employee.info()