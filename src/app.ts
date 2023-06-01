import express, { Application, Request, Response ,urlencoded } from 'express'

import cors from 'cors'

const app: Application = express()
app.use([express.json(), cors(), urlencoded({ extended: true })])

app.get('/', (req:Request, res: Response) => {
  res.send('Hello server..')
})
app.get('/', (req:Request, res: Response) => {
    res.send('Hello server..')
  })
  
export default app
