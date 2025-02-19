// Create we server with Express
// Create a route to get all comments
// Create a route to add a comment
// Create a route to delete a comment
// Create a route to update a comment

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const comments = [
    {
        id: 1,
        comment: 'Hello world'
    },
    {
        id: 2,
        comment: 'Hello again'
    }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push({ id: comments.length + 1, comment });
    res.json(comments);
});

app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments.splice(index, 1);
    }
    res.json(comments);
});

app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
        comments[index].comment = req.body.comment;
    }
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});