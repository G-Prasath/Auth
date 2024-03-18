import express from "express";
import cors from 'cors';
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/router.js";


const app = express()


/** Middleware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8080;

/** */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Requestt...")
})

/** */
app.use('/api', router)


/** Server start only when have valid connection*/

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server Connected in http://localhost:${port}`);
        })
    }catch(error){
        console.log('Can not connect Server');
    }
}).catch(error => {
    console.log('Database connection Invalide ...!');
})









console.log("Hello");