import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './sidebar.css';
export default function Sidebar({handleRadioChange}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1>LOGO</h1>
        </div>
        <Category handleRadioChange={handleRadioChange} />
        <Price handleRadioChange={handleRadioChange} />
        <Colors handleRadioChange={handleRadioChange} />
    </section>
    </>

  
  )
}
