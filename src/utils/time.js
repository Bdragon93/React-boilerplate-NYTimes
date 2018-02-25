export const getMonthName = datetime => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return monthNames[datetime.getMonth()];
};

export const dateTimeToDateRender = (datetime) => {
  return `${getMonthName(datetime)} ${datetime.getDate()}`
}
