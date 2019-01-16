export function formatDateTimeToInputValue (dateTime) {
  let yyyy = dateTime.getFullYear();
  let mm;
  if (dateTime.getMonth() + 1 > 9) {
    mm = dateTime.getMonth() + 1
  } else {
    let mmCount = dateTime.getMonth() + 1;
    mm = '0' + mmCount;
  } 
  let dd = (dateTime.getDate() > 9) ? 
            dateTime.getDate() :
            ('0' + dateTime.getDate());
  let hh = (dateTime.getHours() > 9) ? 
            dateTime.getHours() : 
            ('0' + dateTime.getHours());
  let min = (dateTime.getMinutes() > 9) ? 
            dateTime.getMinutes() : 
            ('0' + dateTime.getMinutes());

  return yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min
};

export function formatDateTimeForSearch (inputDateTime) {
  return '' + inputDateTime + ':00Z'
}