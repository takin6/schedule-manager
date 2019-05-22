import * as React from 'react';
import { TodoCardsComponent } from './TodoCardsComponent';
import CreateFormComponent from '../forms/CreateFormComponent';
import * as Styles from '../TodoStyles';
import * as DateUtil from '../../../util/DateUtil';
import OverdueTasksContainer from '../../../containers/Todos/OverdueTasksContainer';

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
    const date = DateUtil.createOrdinalDate();
    return (
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
        <OverdueTasksContainer />
        <TodoCardsComponent 
          todos={this.props.uncompletedTodos} 
          deleteTodo={this.props.deleteTodo}
          editTodoTitle={this.props.editTodoTitle}
          cancelEditTodoTitle={this.props.cancelEditTodoTitle}
          doneEditTodoTitle={this.props.doneEditTodoTitle}
          completeTodo={this.props.completeTodo}
        />
      </div>
    );
  }
}
