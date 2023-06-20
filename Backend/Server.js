const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password:"",

    database: "copysignup"
})

app.post('/signup', (req, res) => {

    const sql ="INSERT INTO logincopy (`name`, `email`, `phoneNumber`, `password`) VALUES (?)";
    
    const values=[
    req.body.name,
    req.body.email,
    req.body.phoneNumber,
    req.body.password
    
    ]    
    db.query(sql, [values], (err, data) =>{
    
    if (err) {
    
    return res.json("Error");
    
    }
    
    return res.json(data);
    
    
    })
})    
//achivemnets
app.post('/saveAchievements', (req, res) => {
  const achievements = req.body.points;


  // SQL query
  const query = "INSERT INTO AchievementsTable (`achievement`) VALUES ?";

  const achievementsData = achievements.map(achievement => [achievement]); 

  db.query(query, [achievementsData], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    } else {
      res.status(200).send('Achievements saved successfully');
    }
  });
});
//summary details
app.post('/saveSummary', (req, res) => {
    const summary = req.body.summary;
  
    // SQL query
    const query ="INSERT INTO `sum` (summary) VALUES (?)";
  
    db.query(query, summary, (err, result) => {
      if (err) {
        console.log(err.message);
        res.status(500).send('Server error');
      } else {
        res.status(200).send('Summary saved successfully');
      }
    });
  });
  //other details
app.post('/saveother', (req, res) => {
    const other = req.body.other;
  
    // SQL query
    const query ="INSERT INTO othertb (`other`) VALUES (?)";
  
    db.query(query, other, (err, result) => {
      if (err) {
        console.log(err.message);
        res.status(500).send('Server error');
      } else {
        res.status(200).send('Summary saved successfully');
      }
    });
  });
  //education storage
app.post('/education', (req, res) => {

    const sql ="INSERT INTO education (`title`, `college`, `startDate`, `endDate`) VALUES (?)";
    
    const eduvalues=[
    req.body.title,
    req.body.college,
    req.body.startDate,
    req.body.endDate,
   
    
    ]    
    db.query(sql, [eduvalues], (err, data) =>{
    
    if (err) {
    
    return res.json("Error");
    
    }
    
    return res.json(data);
    
    
    })
})    

//basicinfo storage
app.post('/basic', (req, res) => {

    const sql ="INSERT INTO basicinfo (`name`, `title`, `linkedin`, `github`, `phone`, `email`) VALUES (?)";
    
    const values=[
    req.body.name,
    req.body.title,
    req.body.linkedin,
    req.body.github,
    req.body.phone,
    req.body.email
    
    ]    
    db.query(sql, [values], (err, data) =>{
    
    if (err) {
    
    return res.json("Error");
    
    }
    
    return res.json(data);
    
    
    })
})    
// Define endpoint for saving work experience details
app.post('/saveworkexp', (req, res) => {
  const workExperience = req.body;
 
  const query = "INSERT INTO workexp (`title`, `companyName`, `certificationLink`, `location`, `startDate`, `endDate`, `points`) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const workExperienceData = [
    workExperience.title, 
    workExperience.companyName, 
    workExperience.certificationLink, 
    workExperience.location, 
    workExperience.startDate, 
    workExperience.endDate, 
    JSON.stringify(workExperience.points), 
   
  ];

  db.query(query, workExperienceData, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    } else {
      res.status(200).send('Work experience details saved successfully');
    }
  });
});


// Define endpoint for saving project details
app.post('/saveproject', (req, res) => {
  const project = req.body;
 

  // SQL query
  const query = "INSERT INTO projects (`title`, `overview`, `link`, `github`, `points`) VALUES (?, ?, ?, ?, ?)";

  const projectData = [
    project.title, 
    project.overview, 
    project.link, 
    project.github, 
    JSON.stringify(project.points), 
   
  ];

  db.query(query, projectData, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    } else {
      res.status(200).send('Project details saved successfully');
    }
  });
});

//API for login
app.post('/login', (req, res) => {

    const sql ="SELECT * FROM logincopy WHERE `email`=? AND  `password`=?";
    db.query(sql, [req.body.email,req.body.password], (err, data) =>{
    
    if (err) {
    
    return res.json("Error");
    
    }
    if(data.length>0){
        return res.json("Success");
    }else{
        return res.json("Fail");
    }
   
    
    
    })
})    

    app.listen(8081, ()=>{
         console.log("listening");
    })