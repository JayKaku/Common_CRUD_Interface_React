import axios from "axios";

export const signUpAction = (details) => {
  return (dispatch, getState) => {
    console.log(details);

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.saaspect.com/user/register",
        details
      )
      .then((res) => {
        if (res.status !== 200) throw new Error();
        console.log("signup success", res);
        const data = res.data;
        dispatch({ type: "SIGNOUT_SUCCESS", data });
        loginAction({ email: details.email, password: details.password });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const loginAction = (details) => {
  return (dispatch) => {
    console.log("loginAction", details);

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://api.saaspect.com/user/login",
        details
      )
      .then((res) => {
        if (res.status !== 200) throw new Error();
        console.log("login success", res);
        const data = res.data;
        //history.push("/role");
        dispatch({ type: "LOGIN_SUCCESS", data });
      })
      .catch((err) => {
        console.log("res error", err);
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  };
};
