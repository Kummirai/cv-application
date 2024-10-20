import BriefSummary from "./BriefSummary/BriefSummary";
import "./cvTemplate.css";
import NameSection from "./NameSection/NameSection";

const CvTemplate = () => {
  return (
    <div className="cvTemplate">
      <NameSection />
      <BriefSummary />
    </div>
  );
};

export default CvTemplate;
