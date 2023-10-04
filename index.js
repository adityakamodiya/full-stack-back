import express from "express"
import cors from "cors"

let students = [
    {
        id: 1,
        name: 'aditya',
        age: 20,
        phone: 2929292929
    }
]

const app = express();
const port = 8081;
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.post("/add", (req, res) => {
    
    let name=req.body.name
    let age=req.body.age
    let phone=req.body.phone
    let id=students.length+1
    students.push({id,name,age,phone})
    res.json(students)
    })
app.get('/', (req, res) => {
    // if (students.length > 0) {
        res.json(students)
    // }
    // else {
    //     res.send('no data found')
    // }
})

app.delete('/delete/:id',(req,res)=>{
    let x = Number(req.url.split('/delete/')[1])
    console.log(x)
    // res.send(x[1])
    students = students.filter((item,ind)=>{
          console.log(ind)                   
        return ind !== x
    })
    res.json(students)
})





app.get('/edit/:index',(req,res)=>{
         let x = req.body
         console.log(x)
         res.json(students)
})
app.listen(port, () => console.log("Server started"))