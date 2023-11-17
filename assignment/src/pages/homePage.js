import React,{useState} from 'react'
import '../css/homePage.css';
import Header from '../components/header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
function HomePage() {

    const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo,setPhoneNo]=useState('');
  const [creationDate,setCreationDate]=useState('');
  const [emailError, setEmailError] = useState('');
  const [userNameEroor, setUsernameError] = useState('');
  const [passwordError,setPasswordError]=useState('');
  const [phoneNoError,setPhoneNoError]=useState('');
  const handleCreateUser = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNumber = /^\d{10}$/;

    if (!userEmail || !emailRegex.test(userEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if(username==='')
    {
        setUsernameError("Please Enter User Name");
        return;
    }

    if(password==='')
    {
        setPasswordError("Password Should be Empty");
        return;
    }

    if (!phoneNo || !isNumber.test(phoneNo)) {
        setPhoneNoError('Please enter a valid 10-digit phone number.');
        return;
      }
    // Perform validation checks here before creating the user
    if (!username || !userEmail || !password) {
      // Show an error message or handle validation accordingly
      console.log('Please fill in all required fields');
      return;
    }

    const currentDate=new Date();
    console.log(currentDate);
    setCreationDate(currentDate.toDateString())

    // Proceed with creating the user if validation passes
    console.log('User created:', { username, userEmail, password,phoneNo,creationDate });

    // Additional logic to create the user
    // ...

    // Close the dialog
    handleClose();
  };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    
    <div id='homePage'>
    <Header></Header>
   
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // Change to 'row' for inline buttons
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
     <div >
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ margin: '10px' }} // Adjust margin as needed
      >
        User Detail
      </Button>
      <Button
        variant="contained"
        color="secondary" onClick={handleClickOpen}
        sx={{ margin: '10px' }} // Adjust margin as needed
      >
         
       Account Creation
      
      </Button>
      </div>
    </Box>
    <React.Fragment>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2,textAlign:'center' }} id="customized-dialog-title">
          Account Creation
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
      <Typography gutterBottom>
        All Field Is Required.
      </Typography>
      {/* Form Section */}
      <form>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={Boolean(userNameEroor)}
          helperText={userNameEroor}
          required
          // Add any other TextField properties you need (e.g., value, onChange)
        />
        <TextField
          label="User Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          
          error={Boolean(emailError)}
          helperText={emailError}
          required
         
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          error={Boolean(passwordError)}
          helperText={passwordError}
         
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNo}
          onChange={(e)=>setPhoneNo(e.target.value)}
          error={Boolean(phoneNoError)}
          helperText={phoneNoError}
         
        />
      </form>
    </DialogContent>
        <DialogActions sx={{justifyContent:'center'}}>
        <Button autoFocus onClick={handleCreateUser} sx={{ backgroundColor: 'green', color: 'white' }}>
          Create User
        </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
   
    </div>
  )
}

export default HomePage