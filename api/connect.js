import mysql from 'mysql'

export const db = mysql.createConnection({
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