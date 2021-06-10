import axios from "axios";

export const rolesAction = () => {
  return (dispatch) => {
    // const rsp = await axios.get("https://api.saaspect.com/user/roles");
    // if (rsp.status !== 200) return dispatch({ type: "FETCH_ROLES_ERR" });
    // const data = rsp.json();
    console.log("roles action");

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.saaspect.com/user/roles"
      )
      .then((res) => {
        if (res.status !== 200) throw new Error();
        console.log(res);
        const data = res.data;
        dispatch({ type: "FETCH_ROLES_SUCCESS", data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ROLES_ERR", err });
      });
  };
};
