import React, { Component } from 'react';

// Creating a context 
const MyContext = React.createContext();

// Creating a provider Component
class MyProvider extends Component{
  state = {
    name: "Truck",
    cool: true
  }

  render(){
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


const Factory = (props) => (
  <div className='factory'>
    <Car />
  </div>
)

class Car extends Component {
  render() {
    return (
      <div className='car'>
        <MyContext.Consumer>
          {(context) => (
            <p>{context.state.name}</p>
          )}  
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {  
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>
            I'm the contextApi exemple
          </p>
          <Factory />
        </div>
      </MyProvider>
    );
  }
}

export default App;
