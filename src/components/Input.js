export default function Input({handleRadioChange , value , title , name , color , className}) {
  return (
    <label className="sidebar-label-container">
    <input className={className} onChange={handleRadioChange} value={value} name={name} type="radio"  />
    <span className="checkmark" style={{
      backgroundColor:color
    }}></span>{title}
  </label>
  )
}
