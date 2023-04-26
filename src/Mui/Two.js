import React from 'react'


import { Step,Stepper,StepLabel } from '@material-ui/core'

import { useContext } from 'react';

import Datacontext from './Datacontex';

function Two(){

  
   
    // function getSteps() {

    //     return ['vgvhb', 'hvhvhb', 'gfgvgvbghh']

    //   }
      
     
      const {data}=useContext(Datacontext)

      console.log(data)

      const [activeSteptwo, setActiveSteptwo] = React.useState(0);

      const steps = data
    


     const handleNexttwo = (index) => {
  
         setActiveSteptwo(index);

  };



    return (
        <>

     
          <Stepper nonLinear activeStep={activeSteptwo} >

        {steps.map((label, index) => (

          <Step key={label}>
            <StepLabel onClick={() => handleNexttwo(index)}>{label}</StepLabel>
          </Step>
        ))}
        </Stepper>

        
        
        
        </>
    )
}


export default Two