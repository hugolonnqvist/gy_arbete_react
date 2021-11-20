import "./Appointments.css";
import CalendarBox from "./CalendarBox";
import AppointmentBox from "./AppointmentBox";

function Appointments(props) {
  return (
    <div className={props.className}>
      <p className="appointmentTitle">Calendar</p>
      <div className="contFlexRow">
        <CalendarBox day="Mon" date="20"></CalendarBox>
        <CalendarBox day="Tue" date="21"></CalendarBox>
        <CalendarBox day="Wed" date="22"></CalendarBox>
        <CalendarBox day="Thu" date="23"></CalendarBox>
        <CalendarBox day="Fri" date="24"></CalendarBox>
        <CalendarBox day="Sat" date="25"></CalendarBox>
      </div>
      <p className="appointmentTitle">Previous Appointments</p>
      <div className="contFlexRow">
        <AppointmentBox name="Joe"></AppointmentBox>
        <AppointmentBox name="Nick"></AppointmentBox>
        <AppointmentBox name="Rick"></AppointmentBox>
        <AppointmentBox name="Morty"></AppointmentBox>
      </div>
    </div>
  );
}

export default Appointments;
