import React, { Component} from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import './components/NavBar.js';
import QuotesCard from './components/QuotesCard';

let sampleQuotes = 
  {
    quote:"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  };

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      quotes : sampleQuotes
    }
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quotes: data[0],
        });
    });
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <button className="btn-quotes" type="button" onClick={this.getQuotes}>Get Quotes</button>
        <QuotesCard quotes={this.state.quotes}/>
      </div>
    );
  }
  
  }

export default App

