const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');

const PORT = process.env.PORT || 8000
require('./config/db')


// const User = require('./models/Users')
// const Post = require('./models/Posts')

const userController = require('./controllers/users')
const postController = require('./controllers/posts')

// app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())

app.use('/auth', userController)
app.use('/posts', postController)

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'world' })
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});