import React from 'react';
import * as Styles from './TodoCardStyles';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextInput from './TextInput';
import * as DateUtil from '../../../util/DateUtil';
import { Icon, IconButton, Menu } from 'react-mdl';

export default class TodoCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.state = { dueTime: null };
    // this.onClickComplete = this.onClickComplete.bind(this);
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

  deleteTodo(todoId) {
    if (window.confirm("Are you sure you want to delete this card?")) {
      this.props.deleteTodo(todoId);
    }
  }

  completeTodo(todoId) {
    if (window.confirm("Did you complete this task?")) {
      this.props.completeTodo(todoId);
    }
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  setRange() {
    const range = (i, j) => [...Array(j).keys()].slice(i, j);

    var currentHour = new Date().getHours();
    return range(currentHour + 1, 24);
  }

  onChangeTodoDuetime(e) {
    this.setState({dueTime: e.target.value});
  }

  rescheduleUncompletedTodo() {
    let todayDate = new Date();
    if (this.state.dueTime !== "") {
      let formattedDate = this.state.dueTime === 'undefined' ? `${todayDate.getMonth()+1} ${todayDate.getDate()} 23:59` : `${todayDate.getMonth()+1} ${todayDate.getDate()} ${this.state.dueTime}`;
      return this.props.rescheduleTodo(this.props.todo.id, formattedDate);
    }
    return this.state;
  }

  adjustString(string) {
    if (string.length > 24) {
      return string.substring(0, 24) + "…";
    }

    return string;
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
      <li className={itemClass} key={this.props.index} style={this.decideCardStyle(this.props.index)}>
        <div className="view-todo-title">
          <p htmlFor="todo" ref={this.textInput} onClick={() => this.props.editTodoTitle(this.props.todo.id)}>
            <span className="mdl-card__title-text" style={{margin: "35px 24px 0 24px", fontSize: 20, cursor: "pointer"}}>{this.adjustString(this.props.todo.title)}</span>
          </p>
        </div>
        <TextInput 
          todo={this.props.todo}
          cancelEditing={this.props.cancelEditTodoTitle}
          doneEditing={this.props.doneEditTodoTitle} 
        />

        <div style={{padding: "0 0 0 25px"}}>

          <div className="edit-todo-dueday">
            <button 
              className="mdl-button mdl-js-button mdl-js-ripple-effect"
              id={`edit-due-${this.props.todo.id}`}
              style={{padding: 0, color: '#808080', marginBottom: 10 }}
              onClick={this.toggleList.bind(this)}
            >
              <Icon name="access_alarm" />
              <span style={{marginLeft: 10}}>{DateUtil.dueTime(this.props.todo.formatted_due_day)}</span>
            </button>

            <div className="edit-due">
              <Menu target={`edit-due-${this.props.todo.id}`} style={{display: "flex", position: 'absolute', zIndex: 999, padding: 0, width: 160}} valign="top" ripple>
                <select 
                  className="mdl-textfield__input"
                  id="todoUpdateDueTime"
                  value={this.props.value}
                  ref={this.todoDueDayField}
                  onChange={this.onChangeTodoDuetime.bind(this)}
                >
                  <option />
                  <option key={0} value="undefined">指定なし</option>
                  {this.setRange().map(t => (
                    <option key={`todoUpdateDueDayFrom${t}`} value={`${t}:00`}>
                      {t}:00
                    </option>
                  ))}
                </select>
                <IconButton name="check" onClick={this.rescheduleUncompletedTodo.bind(this)} style={{align: "right"}} />
              </Menu>
            </div>
          </div>
        </div>

        <div className="mdl-card__actions mdl-card--border">
          <button 
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.completeTodo.bind(this, this.props.todo.id)}
          >
            Complete
          </button>
          <button 
            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.deleteTodo.bind(this, this.props.todo.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}