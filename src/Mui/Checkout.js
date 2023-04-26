import React from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import { FormControlLabel } from '@material-ui/core'

function getSteps() {

  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}


function Address() {

  return (

    <div style={{ width: '100%', marginLeft: '20px' }}>


      <Typography variant='h5' style={{ fontWeight: "1000" }}>Address product</Typography>


      <Grid container spacing={3} >

        <Grid item xs={6}>

          <TextField variant='standard' label="FirstName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={12}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '10px' }}></TextField>
        </Grid>

        <Grid item xs={12}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '10px' }}></TextField>





        </Grid>


        <Grid item xs={6}>

          <TextField variant='standard' label="FirstName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="FirstName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>



        <FormControlLabel style={{ marginLeft: '7px' }}
          control={<Checkbox name="checkedA" />}
          label="Usethis address for payment details" />



      </Grid>

    </div>
  )
}


function Payment() {
  return (


    <div className='pay' style={{ margin: "15px" }}>

      <Typography variant='h5' style={{ fontWeight: "1000" }}>Address product</Typography>


      <Grid container spacing={3} >


        <Grid item xs={6}>

          <TextField variant='standard' label="FirstName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="FirstName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>

        <Grid item xs={6}>

          <TextField variant='standard' label="LastName" style={{ width: '90%', margin: '8px' }}></TextField>

        </Grid>



        <FormControlLabel style={{ marginLeft: '7px' }}
          control={<Checkbox name="checkedA" />}
          label="Usethis address for payment details" />



      </Grid>


    </div>
  )
}


function Order() {

  return (
    <div style={{ width: "100%" }}>

      <Grid container spacing={2} style={{ marginLeft: '20px' }}>

        <Grid item xs={9} >
         
             <Typography variant='h5'>Product 1</Typography>
        
             <Typography variant='p'>A nice thing </Typography>

        </Grid>

        <Grid item xs={3} >

          <Typography variant='h5'>$9.999 </Typography>

        </Grid>

        <Grid item xs={9} >

          <Typography variant='h5'>Product 1</Typography>
          
          <Typography variant='p'>A nice thing </Typography>

        </Grid>

        <Grid item xs={3}>

          <Typography variant='h5'>$9.999 </Typography>

        </Grid>

        <Grid item xs={9}>

          <Typography variant='h5'>Product 1</Typography>
       
          <Typography variant='p'>A nice thing </Typography>

        </Grid>

        <Grid item xs={3}>

          <Typography variant='h5'>$9.999 </Typography>

        </Grid>

        <Grid item xs={9}>

          <Typography variant='h5'>Product 1</Typography>
         
          <Typography variant='p'>A nice thing </Typography>

        </Grid>

        <Grid item xs={3}>

          <Typography variant='h5'>$9.999 </Typography>

        </Grid>


        <Grid item xs={9}>

          <Typography variant='p'>Shiping </Typography>

        </Grid>

        <Grid item xs={3}>

          <Typography variant='h5'>Free </Typography>

        </Grid>

        <Grid item xs={9}>

          <Typography variant='p'>Total </Typography>

        </Grid>

        <Grid item xs={6}>

          <Typography variant='h5'>$1011 </Typography>

        </Grid>


        <Grid item xs={7}>

          <Typography variant='p'>shooping address </Typography>


       <Typography variant='h5'>shooping address </Typography>
       <Typography variant='h5'>shooping address </Typography>


        </Grid>
  
         <Grid item xs={4} >

            <Typography variant='p'  >payment deteles </Typography>
            
            <Grid container  spacing={2}>
        


        <Grid item xs={6}>

         
          <Typography variant='p'> Cardtype </Typography>


        </Grid>

        <Grid item xs={6}>
      


          <Typography variant='p'> visa </Typography>


        </Grid>

        <Grid item xs={6}>


          <Typography variant='p'> cardnumber </Typography>


        </Grid>

     
        <Grid item xs={6}>

          <Typography variant='p'> xxxxxxxxxx2345 </Typography>


        </Grid>
       
       
        <Grid item xs={6}>

          <Typography variant='p'>  carddate </Typography>

        </Grid>

       
        <Grid item xs={6}>

          <Typography variant='p'> 88/65  </Typography>

        </Grid>



      </Grid>

            
            </Grid>





    </Grid>
     



      


    </div>



  )

}


function Default(){
  return(
    <>
  
     <h1> Thank you for your order.</h1>
    <p>Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped  </p>
    </>
  )
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return <Address />
    case 1:
      return <Payment />
    case 2:
      return <Order />
    default:
      return <Default/>
  }
}


const useStyles = makeStyles((theme) => ({

  root: {


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh"

  },

  Paper: {

    width: '50%',
    maxWidth: '800px',
    backgroundColor: 'white',
    position: 'relative',
    top: "40px"
  },

  contant: {

    backgroundColor: 'inherit',

    color: 'inherit'

  },


  address: {
    width: "100%"
  },

  button: {

    display: "flex",
    justifyContent: "flex-end",
    margin: '10px'


  }










}))



const Checkout = () => {
  const classes = useStyles();


  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  return (


    <div className={classes.root}>


      <Paper className={classes.Paper}>

        <Typography variant='h3' style={{ textAlign: 'center', fontWeight: "1000" }}>Checkout</Typography>

        <Stepper alternativeLabel activeStep={activeStep}>

          {steps.map((label) => (
            <Step key={label}>    
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}

        </Stepper>

        <div className={classes.contant}>

          <Typography >{getStepContent(activeStep)}</Typography>

        </div>



        <div>



          {activeStep === steps.length ? (
          
           
            <div>

              <Typography>Complited</Typography>



            </div>



          ) : (

            <div>

              <div className={classes.button}>

                {
                  activeStep > 0 &&

                   <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                   </Button>

                }
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >

                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}


                </Button>


              </div>
            </div>
          )}

        </div>



      </Paper>








    </div>



  )
}

export default Checkout







{/* <div
className={clsx(classes.root, {
  [classes.active]: active,
})}
> */}  // uesd to add dyanmic css to the div it add one css if active is true and add different if it is false
