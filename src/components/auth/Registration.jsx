import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { rolesAction } from "../../store/actions/rolesAction";
import { signUpAction } from "../../store/actions/authActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" color="inherit">
        Saaspect by Jay Kaku
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

function Registration(props) {
  const { roles } = props;
  //console.log(roles);

  const classes = useStyles();

  const [details, setdetails] = useState({
    email: null,
    name: null,
    password: null,
    number: null,
    role: null,
  });

  const handleChange = (e) => {
    setdetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);

    props.signUp(details);
  };

  useEffect(() => {
    // waiting for props be true(mapping dispatch to props) to access fetchRoles()
    if (props) {
      props.fetchRoles();
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} Validate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={details.name}
                onChange={handleChange}
                // onChange={(e) => setdetails(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Role
                </InputLabel>
                <Select
                  native
                  required
                  fullWidth
                  id="role"
                  value={details.role}
                  onChange={handleChange}
                  // onChange={(e) => setdetails(e.target.value)}
                  label="Age"
                  inputProps={{
                    id: "role",
                  }}
                >
                  {/* <option aria-label="None" value="" /> */}
                  <option aria-label="None" value="" />
                  {roles.data &&
                    roles.data.map((role) => {
                      return <option value={role}>{role}</option>;
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="number"
                label="Number"
                name="number"
                autoComplete="number"
                value={details.number}
                onChange={handleChange}
                //onChange={(e) => setdetails(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={details.email}
                onChange={handleChange}
                //onChange={(e) => setdetails(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept all the terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/authentication" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    roles: state.roles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoles: () => dispatch(rolesAction()),
    signUp: (details) => dispatch(signUpAction(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
