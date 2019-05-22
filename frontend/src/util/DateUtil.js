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

