import React, { Component } from 'react';

export default class SelectField extends Component{
  onChange(e){
    e.preventDefault();
    this.props.onChange(e.target.value);
  }

  setRange() {
    const range = (i, j) => [...Array(j).keys()].slice(i, j);

    var currentHour = new Date().getHours();
    return range(currentHour + 1, 24);
  }

  render (){
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <select 
          className="mdl-textfield__input"
          id="todoDueTime"
          name="todoDueTime"
          onChange={this.onChange.bind(this)} 
        >
          <option />
          <option>指定なし</option>
          {this.setRange().map(t => (
            <option key={`dateFrom${t}`} value={`${t}:00`}>
              {t}:00
            </option>
          ))}
        </select>
        <label className="mdl-textfield__label" htmlFor="todoDueTime">Set Timer</label>
      </div>
    );
  }
}