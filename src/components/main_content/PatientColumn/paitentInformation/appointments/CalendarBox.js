import "./CalendarBox.css";

function CalendarBox(props) {
  return (
    <div className="calendarBox">
      <p className="calendarDay">{props.day}</p>
      <p className="calendarDate">{props.date}</p>
    </div>
  );
}

export default CalendarBox;
