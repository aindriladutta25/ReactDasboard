import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Bloodtype } from '@mui/icons-material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const drawerWidth = 240;

export default function SideBarRight() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      <Typography sx={{ minWidth: 100,p:2}}  fontWeight="bold" >Notification</Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PestControlOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="You have a buge that needs..." secondary="Just now" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PermIdentityOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="New user registered" secondary="59 minutes ago" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PestControlOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="You have a buge that needs..." secondary="12 hours ago" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Andi Lane subscribed to you" secondary="Today, 11.59 AM" />
      </ListItem>
    </List>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Typography sx={{ minWidth: 100,p:2}}  fontWeight="bold" >Activities</Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar>

          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="You have a buge that needs..." secondary="Just now" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Released a new version" secondary="59 minutes ago" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Submitted a bug" secondary="12 hours ago" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Modified A data in Page X " secondary="Today, 11.59 AM" />
      </ListItem>
     
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Deleted A page in Project X" secondary="Feb 2, 2023" />
      </ListItem>
    </List>
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Typography sx={{ minWidth: 100,p:2}}  fontWeight="bold" >Contacts</Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Netali Craig" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Drew Cano" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Orlando Diggs" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Andi Lane" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Kate Morison" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Koray. Okumas" />
      </ListItem>
  </List> 
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
       
      </Box>
    </Box>
  );
}