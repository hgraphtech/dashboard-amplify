import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify'
import { render } from 'react-dom';


const query = `
  query {
    listCommodityTables {
      items {
        id commodity price om sm
      }
    }
  }
`


class App extends Component {
  state = { commoditiestable: [] }
  async componentDidMount() {
    const data = await API.graphql(graphqlOperation(query));
    console.log(data)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>
          {this.state.commoditiestable}
        </p>
      </div>
    );
  }

}

export default App;
