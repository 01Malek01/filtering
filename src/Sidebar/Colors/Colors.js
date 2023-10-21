import Input from "../../components/Input";
import "./colors.css";
export default function Colors({ handleRadioChange }) {
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
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleRadioChange={handleRadioChange}
          value={"black"}
          title="Black"
          name="test"
          color={'black'}
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={"green"}
          title="Green"
          name="test"
          color={'green'}
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={"red"}
          title="Red"
          name="test"
          color={'red'}
        />
        <Input
          handleRadioChange={handleRadioChange}
          value={"blue"}
          title="Blue"
          name="test"
          color={'blue'}
        />
      </div>
    </div>
  );
}
