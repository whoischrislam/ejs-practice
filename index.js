import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const directoryPath = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

function parseDay(number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (number === 0 || number === 6) {
        return "weekend";
    } else {
        return "weekday";
    }
}

function activityToDo(day) {
    if (day === "weekday") {
        return "work hard";
    } else {
        return "have fun";
    }
}

app.get('/', (req, res) => {
    const today = new Date().getDay();
    console.log(directoryPath);
    res.render("index.ejs", 
    { 
        day: parseDay(today),
        activity: activityToDo(parseDay(today))
    });
});

app.post('/check', (req, res) => {});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});