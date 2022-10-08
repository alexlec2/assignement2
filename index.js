import express from 'express';
import path from "path";
const app = express();
const port = 1010;
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/index.html")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}/`);
});