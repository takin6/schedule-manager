import React from 'react';
import * as Styles from './TodoCardStyles';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextInput from './TextInput';

export default class TodoCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  decideCardStyle(index) {
    if (index % 2 == 0) {
      return Styles.LeftCard;
    } else {
      return Styles.RightCard;
    }
  }

  dueTime(stringified_day) {
    let time = stringified_day.split(" ")[1];
    if (time === "00:00") {
      return "undetermined";
    } else {
      let date = new Date(stringified_day);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  }

  deleteTodo(todoId) {
    if (window.confirm("Are you sure you want to delete this card?")) {
      console.log("delete!", todoId);
      this.props.deleteTodo(todoId);
    }
  }

  render() {
    let itemClass = classNames({
      'demo-card-square': true,
      'mdl-card': true,
      'mdl-shadow--2dp': true,
      'todo': true,
      'editing': this.props.todo.editing
    });

    return (
      <div className={itemClass} key={this.props.index} style={this.decideCardStyle(this.props.index)}>
        <div className="view-todo-title">
          <label 
            className="mdl-card__title mdl-card--expand"
            htmlFor="todo"
            ref={this.textInput}
            onDoubleClick={() => this.props.editTodoTitle(this.props.todo.id)}>
            <h2 className="mdl-card__title-text" style={{margin: "24px 0"}}>{this.props.todo.title}</h2>
          </label>
        </div>
        <TextInput 
          todo={this.props.todo}
          cancelEditing={this.props.cancelEditTodoTitle}
          doneEditing={this.props.doneEditTodoTitle} />
        <div className="mdl-card__supporting-text">
          {this.dueTime(this.props.todo.formatted_due_day)}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Complete
          </button>
          <button 
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.deleteTodo.bind(this, this.props.todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}