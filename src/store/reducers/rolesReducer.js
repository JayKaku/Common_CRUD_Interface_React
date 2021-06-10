const initState = {
  roles: null,
};

const rolesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ROLES_ERR":
      console.log("roles fetch error", action.err);
      //   return state;
      return {
        ...state,
        error: action.err,
      };
    case "FETCH_ROLES_SUCCESS":
      console.log("roles fetch success", action.data);
      //   return state;
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default rolesReducer;
