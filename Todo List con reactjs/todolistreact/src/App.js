import React, { Component } from 'react';
import './App.css';

import TodoBox from './components/TodoBox'
import quehacer from './components/quehacer'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {quehacer}

    this.live=this.live.bind(this);
    this.write=this.write.bind(this)
  }



  

  write(hacer) {
  
    this.setState ({      
   
      quehacer: this.state.quehacer.concat(this.state.hacer)
      
    })
  }

  live(e) {
    this.setState({
      hacer: e.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoBox 
        list={this.state.quehacer} 
        live={this.live} 
        write={this.write}
        />
      </div>
    );
  }
}

export default App;
