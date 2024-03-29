export function GetDataNow() {
  const now = new Date();

  var dd = now.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = now.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = now.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return mm + '/' + dd + '/' + yy;
}
