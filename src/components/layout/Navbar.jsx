import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  decor: {
    textDecoration: "none",
  },
}));

const style = {
  color: "white",
  textDecoration: "none",
};

function Navbar() {
  // const {auth,profile} = props;

  const classes = useStyles();

  const profile = useSelector((state) => state.auth.profile);

  console.log("profile", profile);

  const links = profile ? (
    <SignedInLinks role={profile.role} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <div>
      <div boxShadow={5} className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={style}>
                Saaspect by Jay Kaku
              </Link>
            </Typography>
            {/* <Typography variant="h7" className={classes.title}>
              Welcome user/admin
            </Typography>
            <SignedOutLinks /> */}
            {links}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     auth: state.auth,
//     profile: state.profile,
//   };
// };

export default Navbar;
