import "./cvHeader.css";
import PropTypes from "prop-types";

const CvHeader = ({ name, surname, title }) => {
  return (
    <div className="cv-header">
      <h1>
        {name} {surname}
      </h1>
      <h2>{title}</h2>
    </div>
  );
};
CvHeader.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CvHeader;
