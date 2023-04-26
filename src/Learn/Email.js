import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Email = () => {


    const [email, setEmail]=useState("")




    const handlesubmit=()=>{

         console.log(email)


        axios.post('http://localhost:7000/email', {email})

        .then(res=>{

            console.log(res.data)
            alert(res.data)

        })
    
    }
  return (

   
    <div style={{margin:"10px", padding:'10px'}}>
          
        <TextField  variant='outlined' label="email" onChange={(e)=>setEmail(e.target.value)} />

        <Button variant='outlined' onClick={handlesubmit} color="secondary" style={{backgroundColor:"red", color:"white", margin:'10px'}}>submit</Button>

    </div>


  )
}

export default Email