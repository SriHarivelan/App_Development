// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Projects', 'Friends', 'Community'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h8"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 1,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 400,
//               letterSpacing: '.1rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//           VShare
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ ml:130,flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//               style={{marginRight:0}}
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//                 Login
//               </Button>
              
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
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
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Projects', 'Logout'];

const theme = createTheme({
  palette: {
      primary: {
          main: "#2D3047",
      },
      secondary:{
          main:"#E7ECEF"
      }
  },
});

function ResponsiveAppBar() {
  const navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div>
             {/* <img src="/logo-no-background.png" width={"200%"}></img> */}
          </div>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VShare
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              // backgroundImage='url(image/hari.jpg)'
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'times  ',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VShare
          </Typography>
          <Box sx={{ ml:100,flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <nav>
            <Link to ="/"><h3
                                style={{marginLeft:"200px" , borderRadius:"7px" , color:"white", textDecoration:"none",paddingTop:'40px'}}
                                key="Projects"
                                color='secondary'
                                variant='contained'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                // onClick={()=>navigate('/pro')}
                            >
                               Home
                            </h3>
                            </Link>
                            </nav>
          <nav>
            <Link to ="/services"><h3
                                style={{marginLeft:"19px" , borderRadius:"7px" , color:"white", textDecoration:"none",paddingTop:'40px'}}
                                key="Projects"
                                color='secondary'
                                variant='contained'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                // onClick={()=>navigate('/pro')}
                            >
                               Domain
                            </h3>
                            </Link>
                            </nav>

                            <nav>
            <Link to ="/frnd"><h3
                                style={{marginLeft:"19px" , borderRadius:"7px" , color:"white", textDecoration:"none",paddingTop:'40px'}}
                                key="Projects"
                                color='secondary'
                                variant='contained'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                // onClick={()=>navigate('/pro')}
                            >
                               Friends
                            </h3>
                            </Link>
                            </nav>

                            <nav>
            <Link to ="/com"><h3
                                style={{marginLeft:"19px" , color:"white", textDecoration:"none",paddingTop:'40px'}}
                                key="Projects"
                                color='secondary'
                                variant='contained'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                // onClick={()=>navigate('/pro')}
                            >
                               Community
                            </h3>
                            </Link>
                            </nav>

                            <nav>
            <Link to ="/signup"><h3
                                style={{marginLeft:"19px" , borderRadius:"7px" , color:"white", textDecoration:"none",paddingTop:'40px'}}
                                key="Projects"
                                color='secondary'
                                variant='contained'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                // onClick={()=>navigate('/pro')}
                            >
                               Signup
                            </h3>
                            </Link>
                            </nav>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/hari.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                {/* <MenuItem key="jh" onClick={handleCloseUserMenu}>
                  <Typography textAlign="Profile">huhuhyh</Typography>
                </MenuItem> */}

                <MenuItem key="jh" onClick={handleCloseUserMenu}>
                  <Link to="user"><Typography textAlign="center">Profile</Typography></Link>
                </MenuItem>

                <MenuItem key="jh" onClick={handleCloseUserMenu}>
                <Link to="proj"><Typography textAlign="center">Projects</Typography></Link>
                </MenuItem>

                <MenuItem key="jh" onClick={handleCloseUserMenu}>
                <Link to="login"><Typography textAlign="center">Logout</Typography></Link>
                </MenuItem>
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;

// import React from 'react';
// import './HomePage.css';
// import { Link } from 'react-router-dom'; 
// // import 'table.jpg';
// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <nav className="navbar">
//         <ul className="navbar-list">
//         <nav>
//         <Link to="/log" style={{textDecoration: 'none'}}>
//          <li className="navbar-item">Login</li>
//         </Link>
//         </nav>
//         <nav>
//         <Link to="/Sign" style={{textDecoration: 'none'}}>
//          <li className="navbar-item">Friends</li>
//         </Link>
//         </nav>
//         {/* <li className="navbar-item">SignUp</li> */}
//           {/* <li className="navbar-item">Home</li> */}
//           <li className="navbar-item">Community</li>
//           {/* <li className="navbar-item">Contact</li> */}
//       {/* <div className="search-container">
//         <input type="text" placeholder="Search" className="search-input" />
//         <button className="search-button">Search</button>
//       </div> */}
//         </ul>
//       </nav>
//       </div>
//   );
//     }
//     export default HomePage
