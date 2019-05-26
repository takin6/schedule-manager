// 22nd Marという形で書き出す
export function createOrdinalDate(leapDay = 0) {
  const months = ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var day = new Date().getDate() + leapDay;
  var month = new Date().getMonth() + 1;

  var formattedDate = createCardinalDay(day);

  return formattedDate + " " + months[month-1];
}

export function createCardinalDay(day) {
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


// hh:mm pm/amの形にする, 
export function dueTime(stringified_day) {
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
