import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
      return {
          // background:'#f4f4f4',
          // background:'#333',
          background:'#333',
          // color: 'rgb(206, 92, 92)',
          color: '#eee',
          padding:'10px',
          margin:'4px',
          borderBottom:'1px #ccc dotted',
          textDecoration:this.props.todo.completed ? 'line-through' : 'none'
      }
  }
  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {title}
                <button
                onClick={this.props.delTodo.bind(this, id)} 
                style={btnStyle}>x</button>
                </p>
        </div>
    )
  }
}
//proptypes validation for properties a component should have

TodoItem.propTypes = {
      todo: PropTypes.object.isRequired,
      markComplete: PropTypes.func.isRequired,
      delTodo: PropTypes.func.isRequired,
    }
  

//styling for delete button
const btnStyle = {
  background: '#ff0000',
  color: 'rgb(206, 92, 92)',
  border:'none',
  paddding:'5px 10px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}

export default TodoItem;


