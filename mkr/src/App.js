import React, { Component } from 'react';
import Testing from './Components';
import NewTesting from './Components/NewTesting';



class App extends Component {
  state = {
    input: '',
    data: [
      { name: 'john', age: 21, color: 'green' },
      { name: 'Mirnada', age: 22, color: 'green' },
      { name: 'benedict', age: 23, color: 'green' },
    ]
  }

  changeHandler = (e) => {
    this.setState({ input: e.target.value })
    console.log(this.state.input)
  }



  addItemHandler = () => {
    const { data, input } = this.state
    console.log(data)

    this.setState({
      data: [...data, { color: 'green', name: input, age: Math.floor(Math.random() * 80) }],
      input: ''
    })
  }
  //only for testing purpose there's a flaw to this implementation
  toggleDoneHandler = (nameId) => {
    let data = this.state.data.map(item => {
      if (item.name === nameId) {
        return {
          ...item,
          color: item.color === 'green' ? 'red' : 'green'
        };
      } else {
        return item;
      }
    })

    this.setState({ data })
  }

  deleteTodoHandler = (id) => {
    let newItem = [...this.state.data];
    newItem = this.state.data.filter((item) => item.color !== 'red');
    this.setState({ data: newItem })
  }







  render() {
    const { data } = this.state
    let items = data.map((item, i) => (
      <li key={i}
        onClick={() => this.toggleDoneHandler(item.name)}
        style={{ color: `${item.color}` }}
      >

        <h2>Hi my name is {item.name} i am {item.age}</h2>
      </li>
    ));
    return (
      <div className="App">
        <h2>Testing</h2>
        <input type="text"
          value={this.state.input}
          onChange={this.changeHandler}
        />
        <button
          onClick={this.addItemHandler}
        >
          addTodoList
        </button>
        <button
          onClick={this.deleteTodoHandler}
        >Delete item</button>

        <ul>
          <li>List goes here</li>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;