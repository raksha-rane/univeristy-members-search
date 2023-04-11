import "dotenv/config"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import urls from "./routes/"
import connect from "./helpers/connectDB"

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

connect()

app.get("/health", (req, res)=> {
    res.json({
        status: "OK"
    })
})

app.use("/", urls)

app.listen(4000, () => {
    console.log("I am running on http://localhost:4000")
})