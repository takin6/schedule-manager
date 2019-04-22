import * as Styles from './OtherTodoCardsComponentStyles';
import * as React from 'react';

export class OtherTodoCardsComponent extends React.Component {

  // decideCardStyle(index) {
  //   if (index % 2 == 0) {
  //     return Styles.LeftCard;
  //   } else {
  //     return Styles.RightCard;
  //   }
  // }

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
      <div style={Styles.Block}>
        <ul style={Styles.ContentBlock}>
          <li className="clearfix" style={Styles.Card}>
            <div style={Styles.CardHeader}></div>
            <div style={Styles.CardDuetime}>17:00 pm</div>
            <div style={Styles.Title}>Write Paper</div>
          </li>
        </ul>
      </div>
    );
  }
}