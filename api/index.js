import express from "express";
import cors from 'cors'
import mysql from 'mysql' 

const app = express()
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Yara2002*",
    database: "survey",
})

db.connect(error => {
    if (error) {
      console.error('Error connecting to the database:', error);
    } else {
      console.log('Connected to the database');
    }
  });

app.post('/form' , (req, res) => {
    const q = "INSERT INTO surveyform (`email`,`Name`,`phonenumber` , `age` , `gender` , `weight` , `q1`, `q2`, `q3`) VALUES (?)";
    const values = [ 
        req.body.email,
        req.body.Name,
        req.body.phonenumber,
        req.body.age,
        req.body.gender,
        req.body.wieght,
        req.body.q1,
        req.body.q2,
        req.body.q3
    ]

    db.query(q,[values],(err,data)=>{
        if (err) return res.json(err);
      return res.json(data);
    })

})


app.listen(8081,()=>{
    console.log("Server is running on port 8081")
})