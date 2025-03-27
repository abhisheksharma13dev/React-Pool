// // const { Padding } = require("@mui/icons-material");
// // const { useState } = require("react");
// import { useState } from "react";
// // import { Padding } from "@mui/icons-material";
// import { Collapse, Divider, Drawer, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import { Anchor } from "@mui/icons-material";


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
  KeyboardArrowUp as ArrowUpIcon
} from '@mui/icons-material';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Collapse, 
  Divider,
  styled 
} from '@mui/material';

const drawerWidth =240;

const DrawerHeader = styled('div') (({theme}) => ({
    display: 'flex',
    alignItem: 'center',
        Padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar, 
        justifyContent: 'flex-start'
}));


const SideDrawer = () => {
    const [openProjects, setOpenProjects] = useState(false)


    const handleProjectsClick = () => {
        setOpenProjects(!openProjects);
    };

    return (
        <Drawer
        sx = {{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxShadow: 'border-box',
                backgroundColor: '#2c3e50',
                color: 'white',
            },
        }}
        variant="permanent"
        anchor="left"
        >
            <DrawerHeader>
                <ListItem>
                    <ListItemIcon>
                        <NameIcon style= {{color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Name"/>
                </ListItem>
            </DrawerHeader>

            <Divider/>


            <List>
                {/* {Dashboard} */}
                <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon style = {{color: "white"}} />
                        
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>

                {/* {projects with sections} */}

                <ListItem button onClick = {handleProjectsClick}>
                    <ListItemIcon>
                        <ProjectsIcon style = {{color: "white"}} />

                    </ListItemIcon>
                    <ListItemText primary="Projects"/>
                    {openProjects ? <ArrowUpIcon style={{color: "white"}}/> : <ArrowDownIcon style={{color: "white"}}/>}
                </ListItem>
                <Collapse in={openProjects} timeout="auto" unmountOnExit>
                <List component = "div" disablePadding>

                    <ListItem button sx={{pl: 4}}>
                        <ListItemText primary= "UI/UX" />
                    </ListItem>

                    <ListItem button sx={{pl: 4}}>
                        <ListItemText primary = "Python" />
                    </ListItem>

                    <ListItem button sx={{pl: 4}}>
                        <ListItemText primary = "Java"/>
                    </ListItem>
                </List>
                </Collapse>

                {/* {calander} */}
                <ListItem button >
                    <ListItemIcon>
                        <CalendarIcon style={{color: "white"}} />

                    </ListItemIcon>
                    <ListItemText primary="Calendar"/>
                </ListItem>

                {/* {email} */}
                <ListItem button >
                    <ListItemIcon>
                        <EmailIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary="Email" />
                </ListItem>

                {/* {contact}  */}

                <ListItem button >
                    <ListItemIcon>
                        <ContactIcon style={{color: "white"}} />
                   </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>


                {/* {chat} */}
                <ListItem button >
                    <ListItemIcon>
                        <ChatIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary= "Chat"/>
                </ListItem>

                {/* {file manager} */}

                <ListItem button>
                    <ListItemIcon>
                        <FileManagerIcon style={{color: "white"}} />
                    </ListItemIcon>
                    <ListItemText primary = "File Manager"/>
                </ListItem>
            </List>

            <Divider />


            {/* {logout section} */}

 <List style={{marginTop: 'auto'}}>
        <ListItem button >
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