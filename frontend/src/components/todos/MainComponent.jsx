import * as React from 'react';
import { Header } from '../Header/MainComponent';
import { Sidebar } from '../Sidebar/MainComponent';
// import { OtherTodoCardsComponent } from './OtherTodoCardsComponent';
import TodayContainer from '../../containers/Todos/TodayContainer';
import CompletedTasksContainer from '../../containers/Todos/CompletedTasksContainer';
import ProgressChartContainer from '../../containers/Todos/ProgressChartContainer';
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
    // const todos = this.props.completedTodos;
    // const tomorrowDate = createOrdinalDate(1);
    return (
      <div className="clearfix" style={Styles.Block}>
        <Header />
        <div className="clearfix" style={Styles.MainBlock}>
          <Sidebar />
          <TodayContainer />
          <div style={Styles.Others}>
            <ProgressChartContainer />
            <CompletedTasksContainer />
            {/* 
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
            */}
          </div>
        </div>
      </div>
    );
  }
}

