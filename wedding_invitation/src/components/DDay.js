import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars

function DDay(props) {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the time remaining until the event
      const currentTime = new Date().getTime();
      const eventTime = new Date(props.eventDate).getTime();
      const timeRemaining = eventTime - currentTime;

      // Calculate the days, hours, minutes, and seconds remaining
      setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-day-countdown">
      <div className="days">{days} days</div>
      <div className="hours">{hours} hours</div>
      <div className="minutes">{minutes} minutes</div>
      <div className="seconds">{seconds} seconds</div>
    </div>
  );
}

export default DDay;
