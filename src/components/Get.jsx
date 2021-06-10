import React, { Component } from "react";

export class Get extends Component {
  state = {
    data: "",
    loaded: false,
  };

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.saaspect.com/user/roles"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>This is get</h1>
      </div>
    );
  }
}

export default Get;
