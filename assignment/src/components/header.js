import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed', // Fixed position to keep it at the top
      width: '100%', // Full width
      zIndex: 1000, // Set a high z-index to make sure it's above other content
    }}
  >
    <AppBar
      position="static"
      sx={{
        transition: 'all 0.3s ease-in-out',
        width: '50%',
        borderRadius:'5%',
        height: '10vh',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
                fontFamily: 'fantasy',
                fontSize: '2rem',
                color: 'white',
                textAlign: 'center', // Centering the text horizontally
                marginTop: '20px',
                 // Adjust vertical spacing as needed
              }}
          >
            User Management Dashboard
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header