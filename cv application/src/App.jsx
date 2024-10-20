import Header from "./components/header/Header";
import CvTemplate from "./components/CvTemplate/CvTemplate";
import YourCv from "./components/Cv/YourCv";

function App() {
  return (
    <div className="container">
      <Header />
      <CvTemplate />
      <YourCv />
    </div>
  );
}

export default App;
