import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "auto",
  },
  title: {
    flexGrow: 1,
  },
  navbarColor: {
    backgroundColor: "#034f84",
  },
  LinkColor: {
    textDecoration: "none",
    color: "white",
  },
}));

const RecruiterNavbar = (props) => {
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

        <div>
          <Button color="inherit" onClick={() => handleClick("/home")}>
            <Link to="/home" className={classes.LinkColor}>
              Home
            </Link>
          </Button>
          <Button color="inherit" onClick={() => handleClick("/addjob")}>
            <Link to="/addjob" className={classes.LinkColor}>
              Add Jobs
            </Link>
          </Button>
          <Button color="inherit" onClick={() => handleClick("/myjob")}>
            <Link to="/myjob" className={classes.LinkColor}>
              My Jobs
            </Link>
          </Button>
          <Button color="inherit" onClick={() => handleClick("/profile")}>
            <Link to="/viewprofile" className={classes.LinkColor}>
              Profile
            </Link>
          </Button>
          <Button color="inherit" onClick={() => handleClick("/logout")}>
            <Link to="/logout" className={classes.LinkColor}>
              Logout
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default RecruiterNavbar;
