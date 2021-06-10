import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function UpdateDetails(props) {
  const { data } = props.auth;

  useEffect(() => {
    console.log(props);

    if (!data["x-auth-token"]) return <Redirect to="/authentication" />;
  }, []);

  return (
    <div>
      <h1>Udate Deatils Page</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginAction: (details) => dispatch(loginAction(details)),
//   };
// };

export default connect(mapStateToProps)(UpdateDetails);
