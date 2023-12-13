const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Sample tasks
const tasks = ['Learn Node.js', 'Build a to-do list'];
