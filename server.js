const express = require('express')
const app = express();
const path = require("path")
const PORT = 8001;

// app.get(`/`, (req, res) => {
//     res.send("Testing Back End Server");
// })

// Serving front end
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})