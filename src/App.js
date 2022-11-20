import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
    monsters:[ ],
    searchField:''

   }

  }
 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((users)=>this.setState(()=>{
      return {monsters:users}
    }));
  
}
    
  onSearchChange = (event)=>{
    const searchField=event.target.value.toLowerCase()
   
     this.setState(()=>{
       return   { searchField}
     })
   }
  
  render() {

    const filteredMonsters=this.state.monsters.filter((monster)=>{
          
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

  return (
    
    <div className="App">
      <div className='app-title'>
        <h1>Monster-Pokedesk</h1>
      </div>
      <SearchBox  
      className="search-monster" 
      placeholder="search-box"
       onChangeHandler={ this.onSearchChange }
       />
       
     <CardList monsters={filteredMonsters}/>

      
    </div>
    
  );
}
}

export default App;
