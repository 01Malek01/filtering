import './recommended.css';
export default function Recommended({handleButtonsChange,value,title}) {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <button onClick={handleButtonsChange} value={''} className='btns'>All Products</button>
        <button onClick={handleButtonsChange} value={'Nike'} className='btns'>Nike</button>
        <button onClick={handleButtonsChange} value={'Adidas'} className='btns'>Adidas</button>
        <button onClick={handleButtonsChange} value={'Puma'} className='btns'>Puma</button>
        <button onClick={handleButtonsChange} value={'Vans'} className='btns'>Vans</button>
      </div>
    </div>
    
    </>

  )
}
