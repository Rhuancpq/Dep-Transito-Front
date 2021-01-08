import './SearchBar.css';
import React from 'react'

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
      <form onSubmit={(e) => this.props.onSubmit(e)}>
        <label>
          <input type='text'
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
