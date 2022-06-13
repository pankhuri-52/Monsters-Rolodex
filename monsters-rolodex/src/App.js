import  {Component}  from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super(); //calls the constructor of class component

  this.state = {
    name: {firstName: 'Pankhuri', lastName: 'Trikha'},
    company: 'DataGrokr'
  }
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, My name is {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.company}.
        </p>
        <button onClick = { () => {
            this.setState( () => {
            return {
                name : {firstName: 'Andrei', lastName: 'Neaogie'}
                //the object that we need to shallow merging in state
              }
            }, () => {
                console.log(this.state) 
                //callback function says that run me after you render everything.
                //this callback function is gonna run after all state changes have been applied
            } );
        }}>Change Name</button>
      </header>
    </div>
  );
 }
}

export default App;
