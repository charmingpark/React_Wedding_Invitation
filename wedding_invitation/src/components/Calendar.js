import React from 'react'; // eslint-disable-line no-unused-vars

const Calendar = ({ month, year }) => {
  const months = [
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

  // Get the number of days in the month
  const numDaysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the day of the week that the month starts on (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Create an array of the days of the week
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Create an array of arrays representing the rows of the calendar
  const calendarRows = [];
  let currentRow = [];
  for (let i = 1; i <= numDaysInMonth; i++) {
    // If this is the first day of the month and it's not Sunday,
    // add blank cells for the preceding days of the week
    if (i === 1 && firstDayOfMonth !== 0) {
      for (let j = 0; j < firstDayOfMonth; j++) {
        currentRow.push('');
      }
    }

    // Add the day to the current row
    currentRow.push(i);

    // If it's Saturday or the last day of the month, add the current row to the calendar and start a new one
    if (currentRow.length === 7 || i === numDaysInMonth) {
      calendarRows.push(currentRow);
      currentRow = [];
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="7">{months[month]}</th>
        </tr>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday}>{weekday}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendarRows.map((row, i) => (
          <tr key={i}>
            {row.map((day, j) => (
              <td key={`${i}-${j}`}>{day}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
