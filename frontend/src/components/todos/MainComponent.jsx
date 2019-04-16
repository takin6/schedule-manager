import * as React from 'react';
import { decrementCount, incrementCount } from '../../actions/Todos';
import { Header } from '../Header/MainComponent';
import { Sidebar } from '../Sidebar/MainComponent';
import { TodoCardsComponent } from './TodoCardsComponent';
import { OtherTodoCardsComponent } from './OtherTodoCardsComponent';
import * as Styles from './TodoStyles';

export class MainComponent extends React.Component {
  onIncrementClick() {
    incrementCount(1);
  }
  onDecrementClick() {
    decrementCount(1);
  }

  render() {
    const { todos } = this.props.todos;
    const date = createOrdinalDate();
    const tomorrowDate = createOrdinalDate(1);
    return (
      <div className="clearfix" style={Styles.Block}>
        <Header />
        <div className="clearfix" style={Styles.MainBlock}>
          <Sidebar />
          <div style={Styles.Today}>
            <div>
              <p style={Styles.HeaderTitle}>Today</p>
              <p style={Styles.HeaderSubtitle}>{date}</p>
            </div>
            <TodoCardsComponent todos={todos} />
          </div>
          <div style={Styles.Others}>
            <div>
              <p style={Styles.HeaderTitle}>Tomorrow</p>
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
  var month;
  if (day === 1) {
    month = new Date().getMonth() + 2;
  } else {
    month = new Date().getMonth() + 1;
  }

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

// {todos.map((todo, index) => {
//               return (
//                 <li key={index}>
//                   {todo.title}
//                 </li>
//               );
//             })}