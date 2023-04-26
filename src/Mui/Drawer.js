import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles,useTheme } from '@material-ui/core/styles'
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Typography, CssBaseline, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Mail,InboxIcon , MenuOpen,MenuIcon, ChevronLeft, ChevronRight,SendRounded} from '@material-ui/icons'

 
const drawerWidth = 240;

const useStyle = makeStyles((theme)=>({

    root:{

        display:'flex'

    },
    
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },

    drawer:{
        width:drawerWidth,
        flexShrink:0,
    },

    drawerHeader:{

        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        padding: theme.spacing(0, 1),
        marginTop:'60px',

        ...theme.mixins.toolbar,

        justifyContent:"flex-end",  
    },

    drawerPaper:{
        width:drawerWidth,
    },
   


     content:{
        flexGrow:1,
        
        padding:'10px',
        transition:theme.transitions.create('margin', {


            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen,


        }),
        marginLeft:-drawerWidth,
     },

     contentShift:{
        transition:theme.transitions.create('margin', {

            easing:theme.transitions.easing.easeout,
            duration:theme.transitions.duration.enteringScreen,


        }),
        marginLeft:0,
     }

    
}))



export default function Drawerdata(){

    const clasess=useStyle();

    const theme=useTheme()

    const [open, setOpen] = useState(false)


    const handleDraweropen=()=>{

        setOpen(true)
    }


    const handleDrawerclose=()=>{

        setOpen(false)
    }


    return(


        <div className={clasess.root}>

           <CssBaseline/>

           <AppBar position='fixed' color='transparent' className={clsx(clasess.appBar,{
            [clasess.appBarShift]:open, })}
           >
             
               <Toolbar>

                  <IconButton color='primary'
                     aria-label='open drawer'
                     onClick={handleDraweropen}
                     edge="start"
                  >
                   
                     <MenuOpen/>
                  
                  
                  </IconButton>

                  <Typography variant='h6'noWrap>

                     Logo
                    
                  </Typography>
            
               </Toolbar>

           </AppBar>

         
            <Drawer className={clasess.drawer} 

                variant="persistent"
                anchor='left'
                open={open} 

                classes={{paper:clasess.drawerPaper}}
                
                >

                 <div className={clasess.drawerHeader} >

                <IconButton className={clasess.icon}>

                    {  open ? <ChevronLeft onClick={handleDrawerclose}/> : ""}
               
                </IconButton>

                 </div>

                    <Divider/>
          
             

                    <List component="nav">

                         <ListItem button>
                            <ListItemIcon>
                                <SendRounded />    
                            </ListItemIcon>
                            <ListItemText primary='Sent Mail'/>

                         </ListItem>
                         <ListItem button>
                            <ListItemIcon>
                                <SendRounded />    
                            </ListItemIcon>
                            <ListItemText primary='Sent Mail'/>
                            
                         </ListItem>

                         <ListItem button>
                            <ListItemIcon>
                                <SendRounded />    
                            </ListItemIcon>
                            <ListItemText primary='Sent Mail'/>
                            
                         </ListItem>
                   
                   
                    </List>

                    </Drawer>

                    <main className={ clsx(clasess.content, {[clasess.contentShift]: open  ,} )}>
                        
                        
                        <div className={clasess.drawerHeader}>


                            <Typography paragraph>
                                
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus 
                            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                            Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis 
                            commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                             Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                              At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                                
                           </Typography>



                                <Typography paragraph>
                                
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus 
                                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                                Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis 
                                commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                 Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                                  At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                                    
                                    </Typography>
    
    
    
                                    <Typography paragraph>
                                
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus 
                                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                                Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis 
                                commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                 Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                                  At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                                    
                                    </Typography>
    
    

    

                        </div>

                    </main>


             


                </div>

            

           
        
    )


}
