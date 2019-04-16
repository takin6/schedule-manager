import * as Styles from './TodoCardStyles';
import * as React from 'react';

export class TodoCardsComponent extends React.Component {

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

  render() {
    return (
      <div className="clearfix" style={Styles.TodoCardsBlock}>
        { this.props.todos.map((todo, index) => {
          return (
            <div key={index} style={this.decideCardStyle(index)}>
              <div style={Styles.CardContents}>
                <div>
                  <span style={Styles.Icon}>i</span>
                </div>
                <div style={Styles.MainBody}>
                  <div style={Styles.DueTimeBlock}>
                    <span style={Styles.DueTime}>{this.dueTime(todo.formatted_due_day)}</span>
                  </div>
                  <div>
                    <span style={Styles.Title}>{todo.title}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
