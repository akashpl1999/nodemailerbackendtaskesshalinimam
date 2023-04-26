import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container, FormGroup, Box, Divider } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {adddata} from'./Redux/Action'
import { useDispatch, useSelector } from 'react-redux';
import { format ,compareAsc} from 'date-fns';
import First from './First'
import Two from './Two'



const useStyles = makeStyles((theme) => ({

    root: {

         display: "flex",
         width: '100%',
         height: '100vh'

    },


    stepcontainer: {

        backgroundColor: "white",
        width:'20%'

    },


    displaycontainer: {


        backgroundColor: "pink",

        margin: "20px",

        width:'70%'

    },

    box: {

        margin: '10px',
        backgroundColor: "lightblue",
        padding: '10px'
    }



}));

function getSteps() {

    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}



// function First() {

//     const [arr,setarr]=useState([])
//     const dispatch=useDispatch()
   

//     const handlecheckbox=(event)=>{

//         const checkdata=event.target.name
//           console.log(event.target)

//         //  setarr([...arr, checkdata])
        
            
//         if(arr.includes(checkdata)){

     
//             setarr(arr.filter((elm)=>elm != checkdata))


//         } else{
            
          
//             setarr([...arr, checkdata])
            
            
//         }

//     }

//     const handlesubmit=()=>{
//       //  localStorage.setItem('arr', JSON.stringify(arr))

//         dispatch(adddata(arr))
          
//     }
//    // console.log(arr)



//     return (


//         <div>
             
//              <Container maxWidth="md">
               
//                <Box style={{padding:'10px', backgroundColor:'lightblue', margin:'10px'}}>

//                    <FormGroup row>

//                        <FormControlLabel
//                            control={<Checkbox name="one" onChange={handlecheckbox} />}
//                            label="1"
//                        />

//                        <FormControlLabel
//                            control={<Checkbox name="two"  onChange={handlecheckbox}/>}
//                            label="2"
//                          />

//                        <FormControlLabel
//                            control={<Checkbox name="three" onChange={handlecheckbox} />}
//                            label="3"
//                        />

//                        <FormControlLabel
//                            control={<Checkbox name="four" onChange={handlecheckbox} />}
//                            label="4"
//                        />
//                        <FormControlLabel
//                            control={<Checkbox name="five" onChange={handlecheckbox} />}
//                            label="5"
//                        />
//                        <FormControlLabel
//                            control={<Checkbox name="six" onChange={handlecheckbox} />}
//                            label="6"
//                        />
//                        <FormControlLabel
//                            control={<Checkbox name="seven" onChange={handlecheckbox}/>}
//                            label="7"
//                        />
//                        <FormControlLabel
//                            control={<Checkbox name="eight" onChange={handlecheckbox} />}
//                            label="8"
//                        />


//                        <FormControlLabel
//                            control={<Checkbox name="nine" onChange={handlecheckbox} />}
//                            label="9"
//                        />


//                    </FormGroup>
//                    <Button variant='outlined' color='primary' onClick={handlesubmit}>submit</Button>

                 

//                </Box>
//                <Divider/>
             
//            </Container>

//         </div>
//     )
// }




// function Two(){

  
   
//     function getSteps() {

         
//      let data=JSON.parse(localStorage.getItem('arr'))


//         return data

//       }
      


//       const udata=useSelector((data)=>data.todo).data

//       console.log(udata)

//       const [activeSteptwo, setActiveSteptwo] = React.useState(0);

//       const steps = udata
    


//   const handleNexttwo = (index) => {
   
   
//          setActiveSteptwo(index);

//   };



//     return (
//         <>

//        <Stepper nonLinear activeStep={activeSteptwo} >
       
       
//         {steps.map((label, index) => (
      
//           <Step key={label}>
//             <StepLabel onClick={() => handleNexttwo(index)}>{label}</StepLabel>
//           </Step>


//         ))}


//       </Stepper>

        
        
        
//         </>
//     )
// }







function getStepContent(step) {

    
    switch (step) {
        case 0:
            return <First/>
            
            case 1:
           
            return  <Two/>

             case 2:
          
             return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
            
          default:
            return 'Unknown step';
    }
}




export default function VerticalLinearStepper() {


    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const [data,setdata]=useState(0)
    
    const steps = getSteps();

    const handleNext = (index) => {
        setActiveStep(index);
        setdata(index)
    };



    const currentdate=new Date()
    

    // const dates = [
    //     new Date(1995, 6, 2), //ymd
    //     new Date(1987, 1, 11),
    //     new Date(1989, 6, 10),
    //   ]
    //   dates.sort(compareAsc)
    //   {format(currentdate,'dd-MM-yyyy')}

    //   console.log(dates)
      


    return (


        <div className={classes.root}>


    
            <div className={classes.stepcontainer}>

                <Stepper nonLinear activeStep={activeStep} orientation="vertical" className={classes.Stepper}>

                    {steps.map((label, index) => (


                        <Step key={label}>

                            <StepLabel className={classes.Stepper} onClick={() => handleNext(index)}> {label} </StepLabel>

                        </Step>


                    ))}

                </Stepper>



            </div>



            <Typography variant='body1' className={classes.displaycontainer}>
                  {getStepContent(data)}
            </Typography>




        </div>


    );
}
