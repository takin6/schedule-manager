import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.itemInput = React.createRef();
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleOnBlur = this._handleOnBlur.bind(this);
    this._handleOnChange = this._handleOnChange.bind(this);
    this.state = {value: this.props.todo.title};
    // this.focusTextInput = this.focusTextInput.bind(this);
  }

  // focusItemInput() {
  //   // Explicitly focus the text input using the raw DOM API
  //   // Note: we're accessing "current" to get the DOM node
  //   this.itemInput.current.focus();
  // }

  _handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.todo.id, e.target.value);
      case 'Escape':
        return this.props.cancelEditing(this.props.itemId);
    }
  }

  _handleOnBlur() {
    return this.props.cancelEditing(this.props.todo.id);
  }

  _handleOnChange(e) {
    e.preventDefault();
    console.log(this.props);
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <input className="edit"
        autoFocus={true}
        value={this.state.value}
        onChange={this._handleOnChange}
        type="text"
        ref={this.itemInput}
        onKeyDown={this._handleKeyDown}
        onBlur={this._handleOnBlur}
      />
    );
  }
}
