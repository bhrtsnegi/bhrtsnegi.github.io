let ClockTime = () => {
  let time = new Date();
  let currentDate = time.getDate();
  let currentTime = time.getDate();

  return (
    <p>This is the current time: {currentDate} - {currentTime}</p>
  );
}

export default ClockTime;