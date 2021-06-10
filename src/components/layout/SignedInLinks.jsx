import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { logOut } from "../../store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";

const style = {
  color: "white",
  textDecoration: "none",
};
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

const SignedInLinks = (props) => {
  const classes = useStyles();
  const { role } = props;

  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Typography variant="h7" className={classes.title}>
        Welcome {role}
      </Typography>
      <NavLink to="/authentication">
        <Button style={style} onClick={onLogOut}>
          Logout
        </Button>
      </NavLink>
    </div>
  );
};

export default SignedInLinks;
