import express, { Request, Response } from 'express'
import cors from 'cors';
import morgan from 'morgan'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

//Add custom middleware here
// i.e auth, rate limiting, ...etc.

app.post('/register', () => {
    
});

app.all('/', (req: Request, res: Response) => {
    // add routing logic

    // pass request on to destination
    if (req.method == ' GET') {
        res.end();
        return;
    }
    return res.end();
})

app.listen(PORT,'0.0.0.0', () => console.log(`Server started on port: ${PORT}`));