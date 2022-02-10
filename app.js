const app = require('./config/server')
const PORT = 3001

app.listen(PORT, () => {
    console.log('Server On!')
})