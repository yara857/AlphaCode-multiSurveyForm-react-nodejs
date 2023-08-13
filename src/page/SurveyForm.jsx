import React from 'react'
import './surveyForm.css'
import { useState } from 'react'
// import {makeRequest} from '../axios.js'
import axios from 'axios'
const SurveyForm = () => {
    const refresh = () => window.location.reload(true)
    const [formData, setFormData] = useState({
        email: "",
        Name: "",
        phonenumber: "",
        age:"",
        gender:"",
        weight:"",
        q1:"",
        q2:"",
        q3:""
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: [event.target.value]
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8081/form" , formData)
            .then(res => {
                console.log('Form submitted successfully!', res);
                // Do something with the response if needed
            })
            .catch(err => {
                console.log('Error submitting form:', err);
                // Handle the error if needed
            });
    };

    function Next1() {
        const form1 = document.getElementById("form1")
        const form2 = document.getElementById("form2")
        const progress = document.getElementById("progress")
        form1.style.left = "-450px"
        form2.style.left = "40px"
        progress.style.width = "240px"
    }
    function Back1() {
        const form1 = document.getElementById("form1")
        const form2 = document.getElementById("form2")
        const progress = document.getElementById("progress")
        form1.style.left = "40px"
        form2.style.left = "450px"
        progress.style.width = "120px"
    }
    function Next2() {
        const form2 = document.getElementById("form2")
        const form3 = document.getElementById("form3")
        const progress = document.getElementById("progress")
        form2.style.left = "-450px"
        form3.style.left = "40px"
        progress.style.width = "360px"
    }
    function Back2() {
        const form2 = document.getElementById("form2")
        const form3 = document.getElementById("form3")
        const progress = document.getElementById("progress")
        form2.style.left = "40px"
        form3.style.left = "450px"
        progress.style.width = "240px"
    }
    return (


         <div className="container">
            <form method="POST" onSubmit={handleSubmit} id="form1">
                <h3>Plante Gym Survey Form</h3>
                <input type="text" id="email" placeholder="Email" name='email' onChange={handleChange} required />
                <input type="text" placeholder="Name" id="name" name='Name' onChange={handleChange} required />
                <input type="text" placeholder="Phone Number" name='phonenumber' onChange={handleChange} required />
                <div class="btn-box">
                <button type="button" id="next1" 
                onClick={()=> {Next1()}}>Next</button> 
    
                </div>
            </form>
        <form method="POST" onSubmit={handleSubmit} id="form2">
            <h3>Plante Gym Survey Form</h3>
            <input type="text" placeholder="Age" name='age' onChange={handleChange} required/>
            <input type="text" placeholder="Gender" name='gender' onChange={handleChange} required/>
            <input type="text" placeholder="Weight" name='weight' onChange={handleChange} required/>

            <div class="btn-box">
                <button type="button" id="back1" onClick={()=>{Back1()}}>Back</button>
                <button type="button" id="next2" onClick={()=>{Next2()}}>Next</button>   
            </div>
        </form>
        <form method="POST" onSubmit={handleSubmit} id="form3">
            <h3>Plante Gym Survey Form</h3>
            <input type="text" placeholder="What time do you prefer to attend the gym?" name='q1' onChange={handleChange} required/>
            <input type="text" placeholder="How often do you go to the gym?"name='q2' onChange={handleChange} required/>
            <input type="text" placeholder="What is your top reason for joining us today?"name='q3'  onChange={handleChange} required/>
            <div class="btn-box">
                <button type="button" id="back2" onClick={()=>{Back2()}}>Back</button>
                <button type="submit" onClick={refresh}>Submit</button>   
            </div>
        </form> 
            <div class="step-row">
                <div id="progress"></div>
                <div class="step-col"><small>Step 1</small></div>
                <div class="step-col"><small>Step 2</small></div>
                <div class="step-col"><small>Step 3</small></div>
            </div>
        </div>
    //    <div className="container">
    //     <form action="" method='post' onSubmit={handleSubmit}>
    //         <input type="text" placeholder='name' name='Name' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='email' name='email' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='phonenumber' name='phonenumber' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='age' name='age' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='gender' name='gender' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='weight' name='weight' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='q1' name='q1' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='q2' name='q2' onChange={handleChange} /> <br />
    //         <input type="text" placeholder='q3' name='q3' onChange={handleChange} /> <br />
    //         <button type='submit'>submit</button>
    //     </form>
    //    </div>

    )
    }

export default SurveyForm