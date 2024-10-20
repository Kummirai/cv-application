import "./briefSummary.css";

const BriefSummary = () => {
  return (
    <div className="brief-summary">
      <form>
        <legend>
          <h2 className="sub-heading">Brief Summary</h2>
        </legend>
        <textarea placeholder="Brief summary about yourself"></textarea>
        <input type="Submit" value="Sumbit" className="btn"/>
      </form>
    </div>
  );
};

export default BriefSummary;
