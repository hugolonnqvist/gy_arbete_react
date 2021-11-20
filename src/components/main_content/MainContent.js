import "./MainContent.css";
import Patients from "./PatientColumn/Patients";
import Calendar from "./PatientColumn/calendar/Calendar";

function MainContent() {
  return (
    <main className="mainContainer">
      <div className="generalInfo">
        <div className="firstRow">
          <div className="patientsActivity"></div>
          <div className="stats"></div>
        </div>
        <div className="secondRow"></div>
        <div className="thirdRow">
          <div className="covidInfo"></div>
          <div className="genderDistribution"></div>
          <div className="ageDistribution"></div>
        </div>
      </div>
      <div className="leftColumn">
        <Patients className="patientsInfo"></Patients>
        <Calendar className="calender"></Calendar>
      </div>
    </main>
  );
}

export default MainContent;
