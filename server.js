const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000

app.get('/api/todo', (req, res) => {
  const todos = [
      { id: 1, name: 'Make Breakfast', completed: false },
      { id: 2, name: 'Clean House', completed: true },
      { id: 3, name: 'Eat Lunch', completed: true },
  ];

  res.json(todos);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
