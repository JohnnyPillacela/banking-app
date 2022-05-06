import React from "react";
import axios from "axios";

export default class ListAccounts extends React.Component {

  getData() {
    axios
      .get("https://my-json-server.typicode.com/bnissen24/project2DB/accounts")
      .then((response) => {
        this.setState({
          tasks: response.data,
          sorted_tasks: this.sortTasks(response.data),
        });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }
  render() {
    return <div></div>;
  }
}
