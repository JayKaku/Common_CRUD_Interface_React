import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import { connect } from "react-redux";
import { loginAction, logOut } from "../../store/actions/authActions";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector, useDispatch } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" color="inherit">
        Saapect by Jay Kaku
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function SignInSide(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const state = useSelector((state) => state);

  console.log("redux state ", state);

  const { data } = auth;

  const [msg, setmsg] = useState("null");
  const [open, setOpen] = useState(false);
  const [redirect, setredirect] = useState(false);

  const [details, setdetails] = useState({ email: null, password: null });
  const handleChange = (e) => {
    setdetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginAction(details));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const ErrAlert = (msg) => {
    setOpen(true);
  };

  useEffect(() => {
    if (data) {
      const { msg } = data;

      setmsg(msg);
      function Auth(props) {
        // const { data } = props.auth;

        if (data["x-auth-token"] && data["x-auth-token"].length === 219) {
          //props.history.push(`/${data.user.role}`);

          //return <Redirect to={`/${data.user.role}`} />;
          setredirect(true);
        }
      }

      msg === "true" ? Auth(props) : ErrAlert(msg);
    }
  }, [data]);

  useEffect(() => {
    return function cleanup() {
      //data["x-auth-token"]
      if (!auth.authError) {
        console.log(!auth.authError, auth.authError);
        console.log("cleanup function triggered");
        dispatch(logOut());
      }
    };
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {redirect ? <Redirect to={`/${data.user.role}`} /> : null}
        <div className={classes.paper}>
          <Snackbar
            className={classes.alert}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              {msg}
            </Alert>
          </Snackbar>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={details.email}
              onChange={handleChange}
              //onChange={(e) => setdetails(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={details.password}
              onChange={handleChange}
              //onChange={(e) => setdetails(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/registration" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     auth: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginAction: (details) => dispatch(loginAction(details)),
//     logOut: () => dispatch(logOut()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignInSide);
export default SignInSide;
