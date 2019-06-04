import * as React from 'react';
import {IconButton, Menu, MenuItem } from 'react-mdl';

// import classNames from 'classnames';

export class EditOverdueTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOpen: false };
  }


  rescheduleTodo(id, dueDay) {
    let formattedDate;
    if (dueDay.includes(":")) {
      let todayDate = new Date();
      formattedDate =  `${todayDate.getMonth()+1} ${todayDate.getDate()} ${dueDay}`;
    } else if (dueDay === "today") {
      let todayDate = new Date();
      formattedDate = `${todayDate.getMonth()+1} ${todayDate.getDate()} 23:59`;
    } else if (dueDay === "tomorrow") {
      let tomorrowDate = new Date();
      tomorrowDate.setDate(tomorrowDate.getDate()+1);
      formattedDate =  `${tomorrowDate.getMonth()+1} ${tomorrowDate.getDate()} 23:59`;
    } else if (dueDay === "nextWeek") {
      let nextWeekDate = new Date();
      nextWeekDate.setDate(nextWeekDate.getDate()+1);
      formattedDate = `${nextWeekDate.getMonth()+1} ${nextWeekDate.getDate()} 23:59`;
    }

    if (window.confirm("Reschedule this todo?")) {
      return this.props.rescheduleTodo(id, formattedDate);
    }
  }

  render() {
    return (
      <div className="edit-due">
        <IconButton name="restore" id={`edit-due-${this.props.todoId}`} />

        <Menu
          target={`edit-due-${this.props.todoId}`}
          style={{position: 'absolute', zIndex: 999, width: 160}}
        >
          <MenuItem className="mdl-button mdl-js-button" onClick={this.rescheduleTodo.bind(this, this.props.todoId, "today")}>
            <IconButton name="today"/>
            <span style={{marginLeft: 10}}>Today</span>
          </MenuItem>

          <MenuItem className="mdl-button mdl-js-button" onClick={this.rescheduleTodo.bind(this, this.props.todoId, "tomorrow")}>
            <i className="material-icons">arrow_forward</i><span style={{marginLeft: 10}}>Tomorrow</span>
          </MenuItem>

          <MenuItem className="mdl-button mdl-js-button" onClick={this.rescheduleTodo.bind(this, this.props.todoId, "nextWeek")}>
            <i className="material-icons">next_week</i><span style={{marginLeft: 10}}>Next Week</span>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}