import React from 'react'
import { AppBar, CssBaseline,Box, IconButton, ListItem, Drawer, List,ListItemIcon, ListItemText, Menu, Toolbar,Divider, Typography, makeStyles } from '@material-ui/core'
import { Mail, MenuBook } from '@material-ui/icons'


const drawerwidth= 240

const useStyles=makeStyles((theme)=>({

    root:{

        display:'flex'
    }, 

    appBar:{

        width:`calc(100% - ${drawerwidth}px)`,
        marginLeft:drawerwidth-100
    },

    drawer:{

        width:drawerwidth,
        flexShrink:0,
    },
  
  
    drawerPaper:{
        width:drawerwidth

    },
    
    
    toolbar:{
        ...theme.mixins.toolbar,
        margin:'40px',
       },


    toolbar1:{
        ...theme.mixins.toolbar,
       },


      content:{
        display:'flex',
        flexDirection:'column',
        padding:theme.spacing(3)
      },

      box:{
        display:'flex',
        flexDirection:'row'
      }


}))


function Fixed() {


    const classes=useStyles()



  return (


    <div className={classes.root}>
     
     
     
        <CssBaseline/>
           
        <AppBar position='fixed' className={classes.appBar}>
           
           
            <Toolbar>
          
            {/* <div className={classes.icon}>
            <IconButton>
                <MenuBook/>
            </IconButton>
            </div> */}


                <Typography variant='h6' noWrap>
                     home logo
                </Typography>

            </Toolbar>

         </AppBar>

    
    
         <Drawer
         className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
  
         >


           <div className={classes.toolbar1}/>
         
         
           <Divider/>

            <List component="nav">

                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    
                    </ListItemIcon>
                 </ListItem>

                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>

                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>

                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
         

                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
                 <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>
  <ListItem button>
                    <ListItemIcon>
                        <Mail/>
                        <ListItemText primary="mail"/>
                    </ListItemIcon>
                 </ListItem>

         
            </List>

         </Drawer>

         <div className={classes.content}>
          
            <div className={classes.toolbar}>
            <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>



        <Typography className={classes.box} >

<Box>
Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
 imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
 arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
 

</Box>

<Box>
Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
 imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
 arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
 

</Box>

</Typography>


       
            </div>
         </div>



    
         



    </div>


  )
}

export default Fixed