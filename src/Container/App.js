import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response =>Response.json())
    .then(user => this.setState({robots:user}))
    
  }
  onsearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
    
    
  }
  render(){
    const filterRobot= this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.robots.length ===0){
      <h1>Loading Please Wait</h1>
    }
    return (
      <div className='tc'>
        <h1 className='f1'>ROBO HASH</h1>
        <SearchBox searchChange={this.onsearchChange}/>
        <Scroll>
        <CardList robots={filterRobot}/>

        </Scroll>
      </div>
    )

  }
  
}

export default App;