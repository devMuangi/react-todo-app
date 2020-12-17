import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class AddTodo extends Component {
  state = {
      title:''
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title:''});
  }
  onChange = (e) => this.setState({ [e.target.name]:e.target.value });

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input
            type='text'
            name='title'
            style={{flex:'10', padding:'5px'}}
            placeholder='Add a Todo ...'
            value={this.state.title}
            onChange={this.onChange}
            />
            <input 
            type='submit' 
            value='Submit'
            className='btn'
            style={{flex: '1'}}
            />
        </form>
    )
  }
}

//proptypes validation for properties a component should have

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default AddTodo;
