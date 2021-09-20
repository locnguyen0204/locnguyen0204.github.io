import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);

  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Math.floor(Math.random() * 10000)
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  render() {
    return (
      <div className="Task">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Nhập Ghi Chú" value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type="submit">Thêm</button>
          </form>
        </header>
        <ListItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
