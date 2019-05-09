import React, { Component } from 'react';
import classNames from 'classnames';

export default class SelectField extends Component{
  constructor(props) {
    super(props);
    this.todoDueDayField = React.createRef();
  }

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
    console.log(this.props.value);
    let itemClass = classNames({
      'mdl-textfield': true,
      'mdl-js-textfield': true,
      'mdl-textfield--floating-label': true,
      'is-upgraded': this.props.value === '' ? true : false,
      'is-focused': this.props.value === '' ? false : true,
      'is-dirty': this.props.value === '' ? false : true,
    });

    return (
      <div className={itemClass}>
        <select 
          className="mdl-textfield__input"
          id="todoDueTime"
          name="todoDueTime"
          value={this.props.value}
          ref={this.todoDueDayField}
          onChange={this.onChange.bind(this)} 
        >
          <option />
          <option key={0} value="undefined">指定なし</option>
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