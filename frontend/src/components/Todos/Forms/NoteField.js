import React, { Component } from 'react';
// import classNames from 'classnames';
import { Textfield } from 'react-mdl';

export default class NoteField extends Component{
  constructor(props) {
    super(props);
    this.todoTitleField = React.createRef();
  }

  onChange(e){
    this.props.onChange(e.target.value);
  }

  render (){
    return (
      <Textfield
        onChange={this.onChange.bind(this)}
        label="Add Explanation of this Todo..."
        rows={8}
        style={{width: '500px'}}
      />
    );
  }
}