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

  decideAvatarStyle() {
    const colorLists = ["red", "green", "blue", "lightblue", "lightgreen", "purple", "black", "gray", "brown", "orange"];

    let index = Math.floor(Math.random()*(9-0));
    return colorLists[index];
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
    return (
      <div className="clearfix" style={Styles.TodoCardsBlock}>
        { this.props.todos.map((todo, index) => {
          return (
            <div className="demo-card-square mdl-card mdl-shadow--2dp" key={index} style={this.decideCardStyle(index)}>
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">{todo.title}</h2>
              </div>
              <div className="mdl-card__supporting-text">
                {this.dueTime(todo.formatted_due_day)}
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  Complete
                </button>
                <button 
                  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  onClick={this.deleteTodo.bind(this, todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

