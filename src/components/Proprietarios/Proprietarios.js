import './Proprietarios.css';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';

class Proprietarios extends React.Component {

  handleSubmit(e){
    
  }

  render(){
    return (
      <SearchBar onSubmit={(e) => this.handleSubmit(e)}/>
    );
  }
}

export default Proprietarios;
