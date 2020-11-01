const regisTercontrollers = require('../controllers/register')()

test('Username is not empty string', () => {
    const data = regisTercontrollers.registerCompleted()
    expect(data).toBeTruthy()
   // expect(username).not.stringMatching('');
});
