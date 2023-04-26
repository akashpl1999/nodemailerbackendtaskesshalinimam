// import React, { useState } from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles, alpha, Menu } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';

// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';


// const useStyles = makeStyles((theme) => ({



//   toolbar: {

//     backgroundColor: 'lightgray',
//     display: 'flex',
//     justifyContent: 'space-between',
//     height: 54

//   },
//   Typography: {
//     display: "flex",
//     flexDirection: "row"

//   },

//   menuButton: {

//     marginRight: theme.spacing(2),
//   },

//   title: {
//     margin: '10px',
//     color: 'black'
//   },

//   search: {
//     padding: '10px',
//     position: 'relative',

//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,

//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },

//   searchIcon: {

//     padding: theme.spacing(0, 3),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',


//   },


//   inputRoot: {
//     color: 'black',
//     paddingLeft: '10px'


//   },
//   inputInput: {
//     padding: "4px",
//     marginTop: '10px',
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },


//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },

//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },



// }))

// const Mui = () => {

//   const classes = useStyles();

//   const [menumode, setmenumode] = useState(null)

//   const [mobilemode, setmobilemode] = useState(null)

//   const ismenuopen = Boolean(menumode)


//   const ismobileopen = Boolean(mobilemode)



//   const handlemenu = (e) => {
//     setmenumode(e.currentTarget)
//   }

//   const handlemobile = (e) => {
//     setmobilemode(e.currentTarget)
//   }


//   const handlemenuclose = (e) => {

//     setmenumode(null)

//   }


//   const handlemobileclose = (e) => {

//     setmobilemode(null)

//   }


//   const menuid = "menuid"
//   const rendermenu = (
//     <Menu
//       anchorEl={menumode}
//       id={menuid}
//       keepMounted
//       open={ismenuopen}
//       onClose={handlemenuclose}
//     >

//       <MenuItem onclick={handlemenuclose} >Profile</MenuItem>
//       <MenuItem onclick={handlemenuclose} >My account</MenuItem>



//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobilemode}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={ismobileopen}
//       onClose={handlemobileclose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handlemenu}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );



//   return (

//     <div>


//       <AppBar position="static"  >

//         <Toolbar className={classes.toolbar}>

//           <Typography className={classes.Typography}>

//             <IconButton>

//               <MenuIcon />

//             </IconButton>
//             <Typography variant="h6" className={classes.title}>

//               Logo
//             </Typography>

//             <div className={classes.search}>

//               <div className={classes.searchIcon}>

//                 <SearchIcon />

//               </div>


//               <InputBase

//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput,
//                 }}
//                 inputProps={{ 'aria-label': 'search' }}
//               />

//             </div>



//           </Typography>



//           <Typography style={{ flexDirection: 'row', display: 'flex' }} variant="h6" className={classes.title}>


//             <Typography variant="h6" className={classes.title}>

//               News


//             </Typography>


//             <Typography variant="h6" className={classes.title}>


//               News

//             </Typography>


//             <Typography variant="h6" className={classes.title}>
//               News
//             </Typography>





//           </Typography>




//           <div className={classes.sectionDesktop}>

//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuid}
//               aria-haspopup="true"
//               onClick={handlemenu}
//               color="inherit"
//             >


//               <AccountCircle />


//             </IconButton>

//          </div> 




//           <div className={classes.sectionMobile}>


//             <IconButton
//               edge="end"
//               aria-label="account of current user"

//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handlemobile}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>




//           </div>











//         </Toolbar>
//       </AppBar>
//       {rendermenu}
//       {renderMobileMenu}





//       <div>




//       </div>

//     </div>
//   )
// }

// export default Mui



import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardActions, CardContent, TextField, FormControlLabel, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { LockRounded } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import { useContext } from 'react';

import Datacontext from './Datacontex';



const useStyles = makeStyles((theme) => ({

    card: {

        width: '450px',
        backgroundColor: "white",
        borderRadius: "20px"

    },

    cardcontent: {
        margin: '5px'

    },

    TextField: {
        margin: "4px"
    },
  
    avatar: {

        backgroundColor: theme.palette.secondary.main,
        marginTop:'15px',
        color: "white"
    },
    Typography:{
        textAlign:'center'
    }


}))
export default function SimpleContainer() {

    const classes = useStyles();

    const {data}=useContext(Datacontext)
  
  
    
    
    console.log(data)
   
   
    return (
        <React.Fragment>
          
            <CssBaseline />

            <Container maxWidth="md">

                <Typography component="div" style={{ backgroundColor: 'inherit', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

                    <Card className={classes.card}>


                        <Avatar className={classes.avatar}>
                            <LockRounded />
                        </Avatar>

                        <Typography className={classes.Typography} component="h1" variant="h5">
                            Sign in kkk
                        </Typography>



                        <CardContent className={classes.cardcontent} >


                            <TextField className={classes.TextField} fullWidth variant='outlined' label="email*" />


                            <TextField className={classes.TextField} fullWidth variant='outlined' label="Name*" />

                            <FormControlLabel style={{ marginLeft: '7px' }}
                                control={<Checkbox name="checkedA" />}
                                label="Reameber me" />


                            <Grid container spacing={3}>
                                <Grid item xs={5}>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>

                                </Grid>
                                <Grid item xs={7}>
                                    <Link href='#' variant="bady2">
                                        {"Don't have an account? Sign Up"}

                                    </Link>
                                </Grid>
                            </Grid>

                        </CardContent>

                        <CardActions>

                            <Button fullWidth variant='outlined' color="secondary" style={{ backgroundColor: "darkblue", color: "white", margin: '20px' }}>Submit</Button>
                                  <p>{data}</p>
                        </CardActions>

                    </Card>

                </Typography>


            </Container>


            <footer>
                <Typography style={{ color: 'black', textAlign: 'center', padding:'10px', backgroundColor:'lightgrey' }}>
                    footer @2023
                </Typography>
            </footer>
        </React.Fragment>
    );
}
