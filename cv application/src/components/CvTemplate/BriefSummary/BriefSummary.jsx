import "./briefSummary.css";

const BriefSummary = () => {
  return <form className="brief-summary">
    <legend>
      <h2 className="sub-heading">Brief Summary</h2>
    </legend>
    <textarea placeholder="Brief summary about yourself"></textarea>
  </form>;
};

export default BriefSummary;
