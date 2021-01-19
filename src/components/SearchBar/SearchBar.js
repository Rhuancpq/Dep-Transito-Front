import './SearchBar.css';
import React from 'react'
import { MdSearch } from 'react-icons/md';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <form onSubmit={(e, v) => this.props.onSubmit(e, this.state.value)}>
        <div className='Input-div'>
          <input type='text'
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          />
          <button>
            <MdSearch style={{fontSize: '45px',
            backgroundColor: '5E6178',
            color: 'E6191E'}}/>
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
