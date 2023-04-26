import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Typography, CssBaseline, AppBar, Box, Toolbar, IconButton } from '@material-ui/core'
import { Mail, InboxIcon, MenuOpen, MenuIcon, ChevronLeft, ChevronRight, SendRounded } from '@material-ui/icons'


const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({

    root: {

        display: 'flex'

    },


    appBar: {

        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },


    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },


    menuButton: {

        marginRight: 36,

    },
    hide: {
        display: 'none'
    },

    drawer: {

        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "noWrap"
    },


    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },



    drawerClose: {

        transition: theme.transitions.create('width', {

            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration,


        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },

    },




    toolbar: {


        marginTop:'70px',
        display: 'flex',
        alignItems: "center",
        padding: theme.spacing(0, 1),
        justifyContent: "flex-end",
        ...theme.mixins.toolbar,


    },



    content: {

        flexGrow: 1,
        padding: theme.spacing(3),
        flexDirection: "colomn"



    }





}))



export default function NewDrawerdata() {

    const clasess = useStyle();

    const theme = useTheme()

    const [open, setOpen] = useState(false)


    const handleDraweropen = () => {

        setOpen(true)
    }


    const handleDrawerclose = () => {

        setOpen(false)
    }


    return (


        <div className={clasess.root}>

            <CssBaseline />

            <AppBar position='fixed' color='secondary' className={clsx(clasess.appBar, { [clasess.appBarShift]: open, })}    >

                <Toolbar>

                    <IconButton color='primary'
                        aria-label='open drawer'
                        onClick={handleDraweropen}
                        edge="start"
                        className={clsx(clasess.menuButton, {
                            [clasess.hide]: open,
                        })}>

                        <MenuOpen />


                    </IconButton>

                    <Typography variant='h6' noWrap>

                        Logo

                    </Typography>

                </Toolbar>

            </AppBar>



            <Drawer className={clsx(clasess.drawer, {

                [clasess.drawerOpen]: open,
                [clasess.drawerClose]: !open

            })}


                variant="permanent"
                anchor='left'
                open={open}
                classes={{
                    paper: clsx({
                        [clasess.drawerOpen]: open,
                        [clasess.drawerClose]: !open,
                    }),
                }} >

                <div className={clasess.toolbar} >

                    <IconButton onClick={handleDrawerclose} >

                        {open ? <ChevronLeft /> : ""}

                    </IconButton>

                </div>

                <Divider />



                <List component="nav">

                    <ListItem button>
                        <ListItemIcon>
                            <SendRounded />
                        </ListItemIcon>
                        <ListItemText primary='Sent Mail' />

                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendRounded />
                        </ListItemIcon>
                        <ListItemText primary='Sent Mail' />

                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <SendRounded />
                        </ListItemIcon>
                        <ListItemText primary='Sent Mail' />

                    </ListItem>


                </List>

            </Drawer>

            <main className={clasess.content}>


                <div className={clasess.toolbar}>


                    {/* <Typography paragraph>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                        commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                        At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.

                    </Typography> */}


{/* 
                    <Typography paragraph>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                        commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                        At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.

                    </Typography>

 */}

                    <Box component="h5" m={1}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                        commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                        At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.

                    </Box>

                    <Box >

                        commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                        At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.

                        <Button />
                    </Box>






                </div>

            </main>





        </div>





    )


}
