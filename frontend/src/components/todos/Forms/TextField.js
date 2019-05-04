import React, { Component } from 'react';

export default class TextField extends Component{
  // props.buttons [{text: "Btn Text", value: "BtnValue"}]

  onChange(e){
    this.props.onChange(e.target.value);
  }

  render (){
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input 
          className="mdl-textfield__input"
          type="text" 
          id="first"
          onChange={this.onChange.bind(this)}
        ></input>
        <label className="mdl-textfield__label" htmlFor="sample3">Title</label>
      </div>
    );
  }
}