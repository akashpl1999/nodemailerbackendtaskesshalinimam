import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios'

import SocialButton from "./SocialButton";


import { useNavigate } from 'react-router-dom';







function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const useStyles = makeStyles((theme) => ({


  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {


  const classes = useStyles();


  const [fname, setfname] = useState("")

  const [lname, setlname] = useState("")

  const [email, setemail] = useState("")

  const [password, setpassword] = useState("")

  const [fnameerr, setfnameerr] = useState("")
  const [lnameerr, setlnameerr] = useState("")
  const [emailerr, setemailerr] = useState("")
  const [passerr, setpasserr] = useState("")



  const navigate = useNavigate()


  const data = { name: 'John Doe', email: 'john@example.com' };

  const queryString = Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  console.log(queryString);







  const handlesumbit = (e) => {

    e.preventDefault()

    let vaildationerr = false


    if (!fname) {

      setfnameerr("first name required")
      vaildationerr = true

    } else {

      setfnameerr("")

    }

    if (!lname) {
      setlnameerr("last name required")

      vaildationerr = true

    } else {
      setlnameerr("")
    }


    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setemailerr("email name required")
      vaildationerr = true

    } else if (!emailregex.test(email)) {

      setemailerr("email should match")
      vaildationerr = true

    } else {
      setemailerr("")
    }

    const passwordgex = /^[a-zA-Z\d@!#$%&*_+]{8,}$/

    if (!password) {
      setpasserr("password required")

      vaildationerr = true

    } else if (!passwordgex.test(password)) {

      setpasserr("password should match")

      vaildationerr = true

    } else {

      setpasserr("")
    }


    if (!vaildationerr) {

      const data = { fname, lname, email, password }

      axios.post('http://localhost:7000/register', data)

        .then(res => {
          console.log(res.data)

          if (res.data.err == 0) {

            localStorage.setItem("reg", JSON.stringify(res.data.data))

            navigate('/login')
          } else {
            alert("err")
          }

        })


    }

  }


  const handleSocialLogin = (user) => {
    console.log(user); 
  }

  const handleSocialLoginFailure = (err) => {
    console.error(err);
    alert("Sorry wrong user")
};




  return (


    <Container component="main" maxWidth="xs">


      <SocialButton className='btn btn-danger' style={{ height: 60, width: 300, marginTop: '20px', marginRight: '20px' }}
         provider="google"
        appId="662929276038-13j2pr9kqqof9l2m0h6tkkb3hq9htcss.apps.googleusercontent.com"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        >
         Login with Google

      </SocialButton>


      <SocialButton className='btn btn-primary' style={{ height: 60, width: 300, marginTop: '20px' }}
        provider="facebook"
        appId="193207383354542"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
         Login with Facebook
      </SocialButton>
      <CssBaseline />


      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

          <LockOutlinedIcon />

        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                helperText={fnameerr}

                error={fnameerr && true}

                onChange={(e) => setfname(e.target.value)}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"

                label="Last Name"

                helperText={lnameerr}

                error={lnameerr && true}

                name="lastName"
                onChange={(e) => setlname(e.target.value)}

                autoComplete="lname"
              />


            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                helperText={emailerr}

                error={emailerr && true}
                name="email"

                onChange={(e) => setemail(e.target.value)}
                autoComplete="email"
              />

            </Grid>
            <Grid item xs={12}>

              <TextField
                variant="outlined"
                required
                fullWidth
                helperText={passerr}
                error={passerr && true}
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
                autoComplete="current-password"
              />

            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            onClick={handlesumbit}
          >
            Sign Up
          </Button>


          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

