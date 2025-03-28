import React, { useState } from 'react';
import { 
  Dashboard as DashboardIcon,
  Folder as ProjectsIcon,
  CalendarToday as CalendarIcon,
  Email as EmailIcon,
  Contacts as ContactIcon,
  Chat as ChatIcon,
  Folder as FileManagerIcon,
  Person as NameIcon,
  ExitToApp as LogoutIcon,
  KeyboardArrowDown as ArrowDownIcon,
  KeyboardArrowUp as ArrowUpIcon,
  Menu as MenuIcon, // Import Menu icon for the slider button
  ChevronLeft as ChevronLeftIcon, // Optional: Icon for closing

} from '@mui/icons-material';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Collapse, 
  Divider,
  styled,
  IconButton, // Import IconButton for the button
  Box, // Import Box for layout
} from '@mui/material';

const drawerWidth =240;
const drawerCollapsedWidth = 60;

const DrawerHeader = styled('div') (({theme}) => ({
    display: 'flex',
    alignItem: 'center',
        Padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar, 
        justifyContent: 'flex-end'  // align slider button to the right
}));




const SideDrawer = () => {
    const [openProjects, setOpenProjects] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(true)


    const handleProjectsClick = () => {
        setOpenProjects(!openProjects);
    };
  const toggleDrawer = () =>{
    setDrawerOpen(!drawerOpen);
  };

    return (
        <Drawer 
        sx = {{
            width: drawerOpen ? drawerWidth: drawerCollapsedWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            '& .MuiDrawer-paper': {
                width: drawerOpen?  drawerWidth : drawerCollapsedWidth,
                overflowX: 'hidden',
                transition: (theme) => theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                backgroundColor: '#2c3e50',
                boxSizing: 'border-box',
                color: 'white',
            },
        }}
        variant="permanent"
        anchor="left"
        >
            <DrawerHeader>
                <IconButton onClick={toggleDrawer}>
                    {drawerOpen ? <ChevronLeftIcon style={{color: "white"}}/> : <MenuIcon style={{color: "white"}}/>}
                </IconButton>
            </DrawerHeader>

            <Divider/>


            <List>
                {/* {Dashboard} */}
                <ListItem  >
                    <ListItemIcon>
                        <DashboardIcon style = {{color: "white"}} />
                        
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>

                {/* {projects with sections} */}

                <ListItem   onClick = {handleProjectsClick}>
                    <ListItemIcon>
                        <ProjectsIcon style = {{color: "white"}} />

                    </ListItemIcon>
                    <ListItemText primary="Projects"/>
                    {openProjects ? <ArrowUpIcon style={{color: "white"}}/> : <ArrowDownIcon style={{color: "white"}}/>}
                </ListItem>
                <Collapse in={openProjects} timeout="auto" unmountOnExit>
                <List component = "div" disablePadding>

                    <ListItem  sx={{pl: 4}}>
                        <ListItemText primary= "UI/UX" />
                    </ListItem>

                    <ListItem sx={{pl: 4}}>
                        <ListItemText primary = "Python" />
                    </ListItem>

                    <ListItem  sx={{pl: 4}}>
                        <ListItemText primary = "Java"/>
                    </ListItem>
                </List>
                </Collapse>

                {/* {calander} */}
                <ListItem >
                    <ListItemIcon>
                        <CalendarIcon style={{color: "white"}} />

                    </ListItemIcon>
                    <ListItemText primary="Calendar"/>
                </ListItem>

                {/* {email} */}
                <ListItem  >
                    <ListItemIcon>
                        <EmailIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary="Email" />
                </ListItem>

                {/* {contact}  */}

                <ListItem  >
                    <ListItemIcon>
                        <ContactIcon style={{color: "white"}} />
                   </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>


                {/* {chat} */}
                <ListItem  >
                    <ListItemIcon>
                        <ChatIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary= "Chat"/>
                </ListItem>

                {/* {file manager} */}

                <ListItem >
                    <ListItemIcon>
                        <FileManagerIcon style={{color: "white"}} />    
                    </ListItemIcon>
                    <ListItemText primary = "File Manager"/>
                </ListItem>
            </List>

            <Divider />


            {/* {logout section} */}

 <List style={{marginTop: 'auto'}}>
        <ListItem  >
            <ListItemIcon>
                <LogoutIcon style={{color: "white"}} />

            </ListItemIcon>
            <ListItemText primary = "Logout" />
        </ListItem>
 </List>
  </Drawer>


    )
}
export default SideDrawer;
