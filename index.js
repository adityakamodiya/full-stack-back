import express from 'express'
import cors from 'cors'
let students = [
    {
        id: 1,
        name: 'aditya',
        age: 20,
        number: 9680845215
    }
]
const app = express()
const port = 8081;
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))
app.get('/', (req, res) => {
    res.json(students)
})
app.post('/new', (req, res) => {
    let newstudent = req.body
    // newstudent.id +=1 
    students.push(newstudent)
    res.json(students)
})
app.delete('/new/id', (req, res) => {
   
    res.send(students[0])
})
app.listen(port, () => console.log('server started at port' + port))