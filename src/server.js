import "dotenv/config"
import express from "express"

const app = express()

app.use(express.json())

app.listen(process.env.LOCAL_PORT , (error) => {
    if (error) {
        throw error
    }

    console.log(`server run on port ${process.env.LOCAL_PORT}`);
})