import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import KeyboardArrowRightOutLinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { GoDotFill } from "react-icons/go";
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        anchor="left"
      >

      <Toolbar>
          <Box sx={{ display: 'flex',justifyContent: "space-between",  alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              </IconButton>
            </Tooltip>
            <Typography sx={{ minWidth: 100 }}>ByeWind</Typography>
          </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
   </Toolbar>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}} color={colors.primary[200]}>
        <Typography sx={{ minWidth: 100, p:2}}>Favorites</Typography>
        <Typography sx={{ minWidth: 100, p:2}}>Recently</Typography>
      </Box>
      <List>
       <ListItem>
            <GoDotFill />
            <ListItemText>Overview</ListItemText>
            </ListItem>
            <ListItem>
              <GoDotFill />
              <ListItemText>Projects</ListItemText>
        </ListItem>
     </List>
        <List>
        <Typography sx={{ minWidth: 100, p:2}}>Dashboards</Typography>
        <Link to="/order_list">
          <ListItem>
            <ListItemIcon>
              < KeyboardArrowRightOutLinedIcon/> 
              <DonutSmallOutlinedIcon/>
            </ListItemIcon>
          <ListItemText>Default</ListItemText>
          
          </ListItem>
          </Link>
          <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <LocalMallOutlinedIcon/>
            </ListItemIcon>
            <ListItemText>eCommerce</ListItemText>
          </ListItem>
          <ListItem>
            
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <FolderOpenTwoToneIcon/>
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <ImportContactsTwoToneIcon/>
            </ListItemIcon>
            <ListItemText>Online Courses</ListItemText>
          </ListItem>
        </List>
       
        <List>
        <Typography sx={{ minWidth: 100, p:2}}>Pages</Typography>
         <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <AccountBoxOutlinedIcon/>
            </ListItemIcon>
            <ListItemText>User Profile</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <BadgeOutlinedIcon/>
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <GroupsOutlinedIcon/>
            </ListItemIcon>
            <ListItemText>Corporate</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <LibraryBooksOutlinedIcon/>
            </ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
            < KeyboardArrowRightOutLinedIcon/>
            <ForumOutlinedIcon/>
            </ListItemIcon>
            <ListItemText>Social</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}