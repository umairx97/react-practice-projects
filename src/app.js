import React from "react";
// import ListContacts from './ListContact';
import {connect} from 'react-redux'; 


class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        {/* <Route /> */}
        hello
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    Todo: state.Todo.text
  }
}

export default connect(mapStateToProps, null)(App); 

