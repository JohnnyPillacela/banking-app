import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { add_accounts, add_transactions } from "../actions";
import { Card } from "react-bootstrap";

import ListAccountItem from "./ListAccountItem";

const accountsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/accounts";
const transactionsAPI =
  "https://my-json-server.typicode.com/bnissen24/project2DB/transactions";
class ListAccounts extends React.Component {
  state = {
    accounts: []
  }
  constructor(props) {
    super(props);
    this.getAccounts();
  } 
  componentDidMount() {
    this.setState({accounts: this.props.accounts});
  }  
  
  async getAccounts() {
    try {
      console.log("Inside of getAccounts");
      const response = await axios.get(accountsAPI);
      console.log(this.props);
      this.props.add_accounts(response.data);
      this.setState({});
    } catch (error) {
      throw error;
    } 
  }

  async getTransactions() {
    try {
      console.log("Inside of getAccounts");
      const response = await axios.get(transactionsAPI);
      this.props.add_transactions(response.data);
      // this.setState({});
    } catch (error) {
      throw error;
    }
  }

  renderList() {
    console.log("Inside renderlist");
    console.log(this.props);

    const accountsList = this.props.accounts;
    // const accountsList = this.state.accountsList;

    return accountsList.map((account) => {
      return (
        <Card style={{ width: "18rem" }} key={account._id}>
          <Card.Body>
            <Card.Title>{account.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <b>Balance:</b> {account.balance}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      );
    });
  }

  render() {
    console.log("Inside Render");
    console.log(this.props);
    //let accountsList = this.renderList();
    return (
      <div>
        <h3>Accounts List</h3>
        {this.props.accounts.map((account) => {
          return (<ListAccountItem account={account} key={account._id}/>);
        })}
      </div> 
    );  
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.bank.accounts,
    transactions: state.bank.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_accounts: (accounts) => dispatch(add_accounts(accounts)),
    add_transactions: (transactions) =>
      dispatch(add_transactions(transactions)),
  }; 

}; 
export default connect(mapStateToProps, mapDispatchToProps)(ListAccounts);
 