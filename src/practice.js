import React, { Component } from "react";

const key = "abc";
const user = {
  [key]: "Robin"
};

console.log(key);
console.log(user);

class Practice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>hello</div>;
  }
}

export default Practice;
