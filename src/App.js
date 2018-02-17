import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    coffees: []
  }

  async componentDidMount() {
    const coffees = await fetch('http://www.mocky.io/v2/5a88237130000080007f93e0')
      .then((response) => response.json())
    this.setState({ coffees })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React</h1>
        </header>
        <CoffeeTable coffees={this.state.coffees} />
      </div>
    );
  }
}

const CoffeeTable = ({ coffees }) => {
  return (
    <table style={StyleSheet.table}>
      <tbody>
        <tr style={StyleSheet.th}>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {coffees.map((coffee, i ) => {
          return (
            <tr key={i}>
            <td>{coffee.name}</td>
            <td>{coffee.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const StyleSheet = {
  table: {
    fontFamily: 'arial',
    borderCollapse: 'collapse',
    width: '100%'
  },
  th: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    textAlign: 'left',
    padding: 8
  }
}

export default App;
