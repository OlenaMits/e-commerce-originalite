import * as React from 'react';
import { useState, useRef } from 'react';
import { AppBar, Link  }from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ButtonItem, ContentWrapper, Logo } from './StyledNewHeader';

import ManMenu from './components/ManMenu';
import WomanMenu from './components/WomenMenu';
import Accessory from './components/Accessory';
import MainMenu from './components/MainMenu';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const rootEl = useRef(null);

  const [mensCategory, setMenCategory] = useState(false);
  const [womenCategory, setWomenCategory] = useState(false);
  const [accessoryCategory, setAccessoryCategory] = useState(false);

  const [dataMenu, setDataMenu] = useState(null);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" ref={rootEl} p="0">
      <Container maxWidth="lg" >
        <ContentWrapper>
        <Toolbar disableGutters>
          <Logo to="/">Originalité</Logo>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
   <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleOpenNavMenu}
    color="inherit"
  >
    <MenuIcon />
  </IconButton>
  <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{
      display: { xs: 'block', md: 'none' },
    }}
  >
    <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign="center">Man</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign="center">Woman</Typography>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign="center">Accessory</Typography>
      </MenuItem>
    {/* {pages.map((page) => (
      <MenuItem key={page} onClick={handleCloseNavMenu}>
        <Typography textAlign="center">{page}</Typography>
      </MenuItem>
    ))} */}
  </Menu>
</Box>
        </Toolbar>
        </ContentWrapper>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;





// <Toolbar disableGutters>
// <Typography
//   variant="h6"
//   noWrap
//   component="a"
//   href="#app-bar-with-responsive-menu"
//   sx={{
//     mr: 2,
//     display: { xs: 'none', md: 'flex' },
//     fontFamily: 'monospace',
//     fontWeight: 700,
//     letterSpacing: '.3rem',
//     color: 'inherit',
//     textDecoration: 'none',
//   }}
// >
// </Typography>

// <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//   <IconButton
//     size="large"
//     aria-label="account of current user"
//     aria-controls="menu-appbar"
//     aria-haspopup="true"
//     onClick={handleOpenNavMenu}
//     color="inherit"
//   >
//     <MenuIcon />
//   </IconButton>
//   <Menu
//     id="menu-appbar"
//     anchorEl={anchorElNav}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'left',
//     }}
//     keepMounted
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'left',
//     }}
//     open={Boolean(anchorElNav)}
//     onClose={handleCloseNavMenu}
//     sx={{
//       display: { xs: 'block', md: 'none' },
//     }}
//   >
//     {/* {pages.map((page) => (
//       <MenuItem key={page} onClick={handleCloseNavMenu}>
//         <Typography textAlign="center">{page}</Typography>
//       </MenuItem>
//     ))} */}
//     <Link to="#">
//     <ButtonItem
//       data-menu="menuMen"
//       aria-expanded={mensCategory !== 0}
//       aria-controls="example-panel"
//       onClick={(e) => {
//         setMenCategory(!mensCategory);
//         setDataMenu(e.target.dataset.menu);
//       }}
//     >
//       MAN
//     </ButtonItem>
//   </Link>
//   <Link to="#">
//     <ButtonItem
//       data-menu="menuWomen"
//       aria-expanded={womenCategory !== 0}
//       aria-controls="example-panel"
//       onClick={(e) => {
//         setWomenCategory(!womenCategory);
//         setDataMenu(e.target.dataset.menu);
//       }}
//     >
//       WOMAN
//     </ButtonItem>
//   </Link>
//   <Link to="#">
//     <ButtonItem
//       data-menu="menuAccessory"
//       aria-expanded={accessoryCategory !== 0}
//       aria-controls="example-panel"
//       onClick={(e) => {
//         setAccessoryCategory(!accessoryCategory);
//         setDataMenu(e.target.dataset.menu);
//       }}
//     >
//       ACCESSORY
//     </ButtonItem>
//   </Link>
//   <ManMenu
// active={mensCategory && dataMenu === 'menuMen' ? 'auto' : 0}
// closeCategories={() => setMenCategory(false)}
// />
// <WomanMenu
// active={womenCategory && dataMenu === 'menuWomen' ? 'auto' : 0}
// closeCategories={() => setWomenCategory(false)}
// />
// <Accessory
// active={accessoryCategory && dataMenu === 'menuAccessory' ? 'auto' : 0}
// closeCategories={() => setAccessoryCategory(false)}
// />
//   </Menu>
// </Box>
// <Typography
//   variant="h5"
//   noWrap
//   component="a"
//   href="#app-bar-with-responsive-menu"
//   sx={{
//     mr: 2,
//     display: { xs: 'flex', md: 'none' },
//     flexGrow: 1,
//     fontFamily: 'Sofia',
//     fontWeight: 400,
//     letterSpacing: '.3rem',
//     color: 'inherit',
//     textDecoration: 'none',
//   }}
// >
//   Originalité
//   {/* <Logo to="/">Originalité</Logo> */}
// </Typography>
// {/* <div>
//       <Logo to="/">Originalité</Logo>
//   </div> */}
// <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//   {pages.map((page) => (
//     <Button
//       key={page}
//       onClick={handleCloseNavMenu}
//       sx={{ my: 2, color: 'white', display: 'block' }}
//     >
//       {page}
//     </Button>
//   ))}
// </Box>

// <Box sx={{ flexGrow: 0 }}>
//   <Tooltip title="Open settings">
//     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//     </IconButton>
//   </Tooltip>
//   <Menu
//     sx={{ mt: '45px' }}
//     id="menu-appbar"
//     anchorEl={anchorElUser}
//     anchorOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     keepMounted
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     open={Boolean(anchorElUser)}
//     onClose={handleCloseUserMenu}
//   >
//     {settings.map((setting) => (
//       <MenuItem key={setting} onClick={handleCloseUserMenu}>
//         <Typography textAlign="center">{setting}</Typography>
//       </MenuItem>
//     ))}
//   </Menu>
// </Box>
// </Toolbar>