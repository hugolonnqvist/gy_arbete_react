import "./CalendarBox.css";

function CalendarBox(props) {
  return (
    <button className="calendarBox">
      <p className="calendarDay">{props.day}</p>
      <p className="calendarDate">{props.date}</p>
    </button>
  );
}

export default CalendarBox;
