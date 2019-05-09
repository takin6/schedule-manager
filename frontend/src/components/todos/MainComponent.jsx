import * as React from 'react';
import { Header } from '../Header/MainComponent';
import { Sidebar } from '../Sidebar/MainComponent';
import { TodoCardsComponent } from './TodoCardsComponent';
import { OtherTodoCardsComponent } from './OtherTodoCardsComponent';
import CreateFormComponent from './forms/CreateFormComponent';
import * as Styles from './TodoStyles';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.submitData = this.submitData.bind(this);
  }

  submitData(values) {
    let formattedDate = new Date();

    if (values.todoDueDay === "undefined") {
      formattedDate.setHours(23, 59, 59, 0);
    } else {
      let hour = values.todoDueDay.split(":")[0];
      formattedDate.setHours(hour, 0, 0, 0);
    }

    let monthAndDate = [formattedDate.getFullYear(), formattedDate.getMonth() + 1,  formattedDate.getDate()].join("/");
    let hourAndMinutes = [formattedDate.getHours(), formattedDate.getMinutes()].join(":");

    return this.props.createTodo(values.todoTitle, monthAndDate + " " + hourAndMinutes);
  }

  render() {
    const todos = this.props.todos;
    const date = createOrdinalDate();
    const tomorrowDate = createOrdinalDate(1);
    return (
      <div className="clearfix" style={Styles.Block}>
        <Header />
        <div className="clearfix" style={Styles.MainBlock}>
          <Sidebar />
          <div style={Styles.Today}>
            <div style={{display: "flex"}}>
              <div>
                <p style={Styles.HeaderTitle}>Today</p>
                <p style={Styles.HeaderSubtitle}>{date}</p>
              </div>
            </div>
            <CreateFormComponent
              onSubmit={this.submitData}
            />
            <TodoCardsComponent 
              todos={todos} 
              deleteTodo={this.props.deleteTodo}
              editTodoTitle={this.props.editTodoTitle}
              cancelEditTodoTitle={this.props.cancelEditTodoTitle}
              doneEditTodoTitle={this.props.doneEditTodoTitle}
            />
          </div>
          <div style={Styles.Others}>
            <div>
              <p style={Styles.HeaderTitle}>Tomorrow</p>
              <p style={Styles.HeaderSubtitle}>{tomorrowDate}</p>
            </div>
            <OtherTodoCardsComponent todos={todos} />
            <div>
              <p style={Styles.HeaderTitle}>Day after Tomorrow</p>
              <p style={Styles.HeaderSubtitle}>{tomorrowDate}</p>
            </div>
            <OtherTodoCardsComponent todos={todos} />
          </div>
        </div>
      </div>
    );
  }
}

function createOrdinalDate(leapDay = 0) {
  const months = ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var day = new Date().getDate() + leapDay;
  var month = new Date().getMonth() + 1;

  var formattedDate = createCardinalDay(day);

  return formattedDate + " " + months[month-1];
}

function createCardinalDay(day) {
  let j = day % 10;
  let k = day % 100;
  if (j == 1 && k != 11) {
    return day + "st";
  }
  if (j == 2 && k != 12) {
    return day + "nd";
  }
  if (j == 3 && k != 13) {
    return day + "rd";
  }
  return day + "th";
}

