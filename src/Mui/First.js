import React,{useState, createContext} from 'react'
import { useDispatch,useSelecter } from 'react-redux'
import { FormGroup, FormControlLabel, Button, Checkbox, Divider, Box, Container } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import Datacontext from './Datacontex';

import { useContext } from 'react';

 import {adddata} from './Redux/Action'


const First = () => {
  

    const [arr,setarr]=useState([])
     
    const dispatch=useDispatch()

    const navigate=useNavigate()
   
    const { setData } = useContext(Datacontext);


   

    const handlecheckbox=(event)=>{

        const checkdata=event.target.name
          console.log(event.target)

        if(arr.includes(checkdata)){

     
            setarr(arr.filter((elm)=>elm != checkdata))


        } else{
            
          
            setarr([...arr, checkdata])
            
            
        }

    }

    const handlesubmit=()=>{
   

        console.log(arr)

       // dispatch(adddata(arr))  //redux ways

        setData(arr)   
        
        //usecontex 

        navigate('/demo')
        

        

          
    }
  





  return (

    <div>


          
       <Container maxWidth="md">
               
               <Box style={{padding:'10px', backgroundColor:'lightblue', margin:'10px'}}>

                   <FormGroup row>

                       <FormControlLabel
                           control={<Checkbox name="one" onChange={handlecheckbox} />}
                           label="1"
                       />

                       <FormControlLabel
                           control={<Checkbox name="two"  onChange={handlecheckbox}/>}
                           label="2"
                         />

                       <FormControlLabel
                           control={<Checkbox name="three" onChange={handlecheckbox} />}
                           label="3"
                       />

                       <FormControlLabel
                           control={<Checkbox name="four" onChange={handlecheckbox} />}
                           label="4"
                       />
                       <FormControlLabel
                           control={<Checkbox name="five" onChange={handlecheckbox} />}
                           label="5"
                       />
                       <FormControlLabel
                           control={<Checkbox name="six" onChange={handlecheckbox} />}
                           label="6"
                       />
                       <FormControlLabel
                           control={<Checkbox name="seven" onChange={handlecheckbox}/>}
                           label="7"
                       />
                       <FormControlLabel
                           control={<Checkbox name="eight" onChange={handlecheckbox} />}
                           label="8"
                       />


                       <FormControlLabel
                           control={<Checkbox name="nine" onChange={handlecheckbox} />}
                           label="9"
                       />


                   </FormGroup>

                   <Button variant='outlined' color='primary' onClick={handlesubmit}> submit </Button>

                
               </Box>


               <Divider/>
             
           </Container>


        
    </div>
  )
}

export default First