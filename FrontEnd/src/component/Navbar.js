import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

import isAuth, { userType } from '../lib/isAuth';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  navbarColor: {
    backgroundColor: '#034f84',
  },
  LinkColor: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  // let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    // history.push(location);
  };

  return (
    <AppBar position="fixed" className={classes.navbarColor}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Portal
        </Typography>
        {isAuth() ? (
          userType() === 'recruiter' ? (
            <div>
              <Button color="inherit" onClick={() => handleClick('/home')}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick('/addjob')}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick('/myjob')}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick('/employees')}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick('/profile')}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick('/logout')}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => handleClick('/home')}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick('/applications')}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick('/profile')}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick('/logout')}>
                Logout
              </Button>
            </div>
          )
        ) : (
          <div>
            <Button color="inherit" onClick={() => handleClick('/login')}>
              {/* Login */}
              <Link to="/login" className={classes.LinkColor}>
                Login
              </Link>
            </Button>
            <Button color="inherit" onClick={() => handleClick('/signup')}>
              {/* Signup */}
              <Link to="/signup" className={classes.LinkColor}>
                Signup
              </Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
