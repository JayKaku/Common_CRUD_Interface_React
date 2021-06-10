const initState = {
  authError: null,
  authStatus: null,
  data: null,
  profile: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      // to set profile if user is returned in the res
      if (action.data.user) {
        return {
          ...state,
          authError: "none",
          data: action.data,
          profile: action.data.user,
        };
      }
      // to set authError if "Invalid Credentials"
      if (action.data.msg !== "true") {
        return {
          ...state,
          data: action.data,
          authError: action.data.msg,
        };
      }
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        ...state,
        authError: null,
        authStatus: null,
        data: null,
        profile: null,
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authStatus: action.data,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authStatus: null,
        authError: action.err,
      };

    default:
      return state;
  }
};

export default authReducer;
