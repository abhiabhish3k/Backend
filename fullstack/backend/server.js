import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send("Server is ready");

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)

})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: "A joke",
            content: "This is fucking joke 1",
        },

        {
            id:2,
            title: "joke 2",
            content: "This is fucking joke 2",
        },

        {
            id:3,
            title: "joke 3",
            content: "This is fucking joke 3",
        },

        {
            id:4,
            title: "joke 4",
            content: "This is fucking joke 4",
        }
    ]
    res.send(jokes);
})