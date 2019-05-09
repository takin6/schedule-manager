import React, { Component } from 'react';
import classNames from 'classnames';

export default class TextField extends Component{
  constructor(props) {
    super(props);
    this.todoTitleField = React.createRef();
  }

  onChange(e){
    this.props.onChange(e.target.value);
  }

  render (){
    let itemClass = classNames({
      'mdl-textfield': true,
      'mdl-js-textfield': true,
      'mdl-textfield--floating-label': true,
      'is-upgraded': this.props.value === '' ? true : false,
      'is-focused': this.props.value === '' ? false : true,
    });

    return (
      <div className={itemClass}>
        <input 
          className="mdl-textfield__input"
          type="text" 
          id="first"
          value={this.props.value}
          ref={this.todoTitleField}
          onChange={this.onChange.bind(this)}
        ></input>
        <label className="mdl-textfield__label" htmlFor="sample3">Title</label>
      </div>
    );
  }
}