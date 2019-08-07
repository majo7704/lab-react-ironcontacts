import React, { Component } from 'react';
import UniqueId from 'react-html-id' //adding unique keys to each contact
import contactsFull from './contacts.json' //json 
import Contact from './Contacts.js'
import './App.css';


class App extends Component {
  constructor() {
    super()
    UniqueId.enableUniqueIds(this)
    this.state = {//state is an object
      contacts: contactsFull.slice(0, 10),

      // searchedContact: contacts,
      value: '' //state of input field
    };
  }
  
  remove = (index) => {
    let contactCopy = [...this.state.contacts]; //copy of original array
    contactCopy.splice(index, 1)
    this.setState({contacts:contactCopy})
  }
  reset = (index) => {
    this.setState({ contacts: contactsFull.slice(0,10), value: '' })
  }
  addRandom = (index) => {
    let contactCopy = [...this.state.contacts];
    let random = contactsFull[Math.floor(Math.random() * contactsFull.length)]
    this.setState({ contacts: contactCopy.concat([random])})
  }
  search = (event) => {
    let searchTerm = event.target.value.toUpperCase();
    let searchedContact = this.state.contacts.filter((contact) => (
      contact.name.indexOf(searchTerm) >= 0
    ))
    this.setState({ contacts: searchedContact, value: event.target.value })
  }
  
  render() {
    let contactComponents = this.state.contacts.map((item, index) => (
      <Contact
        name={item.name}
        pictureUrl={item.pictureUrl}
        popularity={item.popularity}
        remove={this.remove}
        addRandom={this.addRandom}
        //changeEvent={this.changeUserName.bind(this, item.id)}
        index={index}
        key={this.nextUniqueId()}
        reset={this.reset}
      />
    ))
    return (
      <div className="App">
        <input onChange={this.search} placeholder="search" type="text" value={this.state.value}/>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.addRandom}>Random</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
          <tbody>{contactComponents}</tbody>
      </table>
      </div>
    );
  }
}

export default App;
