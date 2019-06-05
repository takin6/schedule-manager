import React, { Component } from 'react';
// import classNames from 'classnames';
// import { Textfield } from 'react-mdl';

export default class TitleField extends Component{
  constructor(props) {
    super(props);
    this.todoTitleField = React.createRef();
  }

  onChange(e){
    this.props.onChange(e.target.value);
  }

  render (){
    return (
      <div style={{display: "inline-block", verticalAlign: "top"}}>
        <input 
          className="add-todo-form-field"
          type="text" 
          id="first"
          placeholder="add title..."
          value={this.props.value}
          ref={this.todoTitleField}
          onChange={this.onChange.bind(this)}
          required
        ></input>
      </div>
    );
  }
}

// <label htmlFor="sample3">Title</label>