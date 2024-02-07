import "./App.css";
import ChildSection from "./ChildSection";
import Hobbies from "./Hobbies";
import RadioPlay from "./RadioPlay";
import CityDropdown from "./cityDropdown";
import Pagination from "./Pagination";

const sections = ["Section 1", "Section 2", "Section 3"];
const App = () => (
  <>
    {/* <Hobbies />; */}
    {/* <CityDropdown /> */}
    {/* <RadioPlay/> */}
    {/* {sections.map((section, index) => (
      <ChildSection key={index} title={section} />
    ))} */}
    <Pagination />
  </>
);

export default App;
