import Input from "../../components/Input";
import "./price.css";
export default function Price({ handleRadioChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleRadioChange}
            type="radio"
            value={""}
            name="test"
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleRadioChange={handleRadioChange}
          value={"50"}
          title="0-50"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={"100"}
          title="50-100"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={"150"}
          title="100-150"
          name="test"
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={"200"}
          title="over 150"
          name="test"
        />
      </div>
    </div>
  );
}
