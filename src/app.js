import React from "react";
// import ListContacts from './ListContact';
import { connect } from "react-redux";
import store from "./basic";
import { bindActionCreator } from "redux";

function UpdateTodo() {
  return {
    type: "ADD_TODO"
  };
}

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.updateTodo();
  }

  componentWillReceiveProps(nextProps) {
    console.log("Componentwillrecieveprops", nextProps);
  }

  render() {
    return (
      <div>
        {/* <Route /> */}
        hello
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Todo: state.Todo.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTodo: data => dispatch(UpdateTodo(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
