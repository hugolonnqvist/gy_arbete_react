import "./Page.css";

function Page(props) {
  return (
    <div className="page">
      <div className="pageBox">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Page;
