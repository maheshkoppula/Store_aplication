import React, { useState } from 'react';
import axios from 'axios';
const Home = () => {

    const [msg,setMsg]=useState('')

    const submit=async(e)=>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/",{
                msg
            })
        }
        catch(e){
            console.log(e)
        }
    }
    



    return (
        <div className='cont'>
            <form action='POST'>
            <textarea name='text' onChange={(e)=>{setMsg(e.target.value)}} placeholder="enter data" cols="30" rows="10"></textarea>
            <input type='submit' onClick={submit} value="Submit"/>
            </form>
            
        </div>
    );
}

export default Home;
