import React from 'react'; // eslint-disable-line no-unused-vars

const DDay = (props) => {
  const currentDate = new Date();
  const targetDate = new Date(props.year, props.month - 1, props.day); // The month value is 0-based, so we subtract 1 to convert it to the correct value
  const timeDifference = targetDate - currentDate;
  const daysUntilDDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className="dday">
      {daysUntilDDay >= 0 ? (
        <p>
          <b>동진</b> <em>&#9829;</em> <b>찬민</b> 의 결혼식이
          <b>&#32;{daysUntilDDay + 1}일&#32;</b>
          남았습니다.
        </p>
      ) : (
        <p>
          <b>동진</b> <em>&#9829;</em> <b>찬민</b>은 부부가 되었습니다.
        </p>
      )}
    </div>
  );
};

export default DDay;
